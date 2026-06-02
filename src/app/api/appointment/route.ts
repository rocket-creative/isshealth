import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { emailService, message } from 'paubox-node'

export const runtime = 'nodejs'

const ENDPOINT = '/api/appointment'

const referralSources = [
  'Google Search',
  'Doctor Referral',
  'Friend or Family',
  'Other',
  '',
] as const

const schema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email().max(200),
  phone: z
    .string()
    .min(7)
    .max(30)
    .regex(/^[\d\s()+\-.]+$/, 'Invalid phone'),
  diagnosis: z.string().max(200).optional().default(''),
  message: z.string().max(2000).optional().default(''),
  referralSource: z.enum(referralSources).optional().default(''),
  company: z.string().max(200).optional().default(''),
  formType: z.enum(['appointment', 'concussion']).optional().default('appointment'),
  recaptchaToken: z.string().max(2000).optional().default(''),
  renderedAt: z.number().int().positive().optional(),
})

const SUBJECTS: Record<'appointment' | 'concussion', string> = {
  appointment: 'New appointment request',
  concussion: 'New concussion program inquiry',
}

const MIN_SUBMIT_MS = 3_000
const MAX_FORM_AGE_MS = 60 * 60 * 1000

const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
// Best effort, in memory rate limiting. On serverless this resets per instance
// and is not shared across instances. It deters bursts without storing PHI.
const rateBuckets = new Map<string, number[]>()

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return req.headers.get('x-real-ip') || 'unknown'
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const hits = (rateBuckets.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  hits.push(now)
  rateBuckets.set(ip, hits)
  return hits.length > RATE_LIMIT_MAX
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY
  if (!secret) return true
  if (!token) return false

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret, response: token }),
  })
  if (!res.ok) return false

  const data = (await res.json()) as { success?: boolean; score?: number; action?: string }
  return Boolean(data.success && (data.score ?? 0) >= 0.5 && data.action === 'appointment')
}

export async function POST(req: NextRequest) {
  const ts = new Date().toISOString()

  const ip = getClientIp(req)
  if (isRateLimited(ip)) {
    console.log(JSON.stringify({ ts, endpoint: ENDPOINT, ok: false, reason: 'rate_limited' }))
    return NextResponse.json({ error: 'Too many requests. Please wait a moment and try again.' }, { status: 429 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    console.log(JSON.stringify({ ts, endpoint: ENDPOINT, ok: false, reason: 'invalid_json' }))
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    console.log(JSON.stringify({ ts, endpoint: ENDPOINT, ok: false, reason: 'validation' }))
    return NextResponse.json({ error: 'Please check the form and try again.' }, { status: 400 })
  }

  const { company, email, phone, diagnosis, message: concern, firstName, lastName, referralSource, formType, recaptchaToken, renderedAt } =
    parsed.data

  if (company.trim().length > 0) {
    console.log(JSON.stringify({ ts, endpoint: ENDPOINT, ok: false, reason: 'honeypot' }))
    return NextResponse.json({ success: true })
  }

  if (renderedAt) {
    const elapsed = Date.now() - renderedAt
    if (elapsed < MIN_SUBMIT_MS || elapsed > MAX_FORM_AGE_MS) {
      console.log(JSON.stringify({ ts, endpoint: ENDPOINT, ok: false, reason: 'timing' }))
      return NextResponse.json({ error: 'Please take a moment to complete the form and try again.' }, { status: 400 })
    }
  }

  if (process.env.RECAPTCHA_SECRET_KEY) {
    const valid = await verifyRecaptcha(recaptchaToken)
    if (!valid) {
      console.log(JSON.stringify({ ts, endpoint: ENDPOINT, ok: false, reason: 'recaptcha' }))
      return NextResponse.json({ error: 'Security verification failed. Please try again.' }, { status: 400 })
    }
  }

  const apiKey = process.env.PAUBOX_API_KEY
  const apiUsername = process.env.PAUBOX_API_USERNAME
  const from = process.env.APPOINTMENT_FROM_EMAIL
  const to = process.env.APPOINTMENT_NOTIFY_TO

  if (!apiKey || !apiUsername || !from || !to) {
    console.log(JSON.stringify({ ts, endpoint: ENDPOINT, ok: false, reason: 'not_configured' }))
    return NextResponse.json({ error: 'Email service not configured.' }, { status: 503 })
  }

  const subject = SUBJECTS[formType]
  const heading = formType === 'concussion' ? 'New concussion program inquiry' : 'New appointment request'

  const fields: Array<[string, string]> = [
    ['First name', firstName],
    ['Last name', lastName],
    ['Email', email],
    ['Phone', phone],
    ['Diagnosis', diagnosis || 'Not provided'],
    ['Concern', concern || 'Not provided'],
    ['Referral source', referralSource || 'Not provided'],
  ]

  const text = `${heading}\n\n${fields.map(([label, value]) => `${label}: ${value}`).join('\n')}\n`
  const html = `
    <h2 style="font-family:sans-serif">${escapeHtml(heading)}</h2>
    ${fields
      .map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value).replace(/\n/g, '<br/>')}</p>`)
      .join('')}
  `

  try {
    // Secure transport is enforced: allowNonTLS is intentionally never set, so
    // Paubox encrypts the message in transit or routes it to its secure portal.
    const service = emailService({ apiUsername, apiKey })
    const msg = message({
      from,
      to: [to],
      subject,
      text_content: text,
      html_content: html,
      reply_to: email,
    })

    const response = await service.sendMessage(msg)

    console.log(JSON.stringify({ ts, endpoint: ENDPOINT, ok: true, sourceTrackingId: response.sourceTrackingId }))
    return NextResponse.json({ success: true })
  } catch (err) {
    console.log(
      JSON.stringify({
        ts,
        endpoint: ENDPOINT,
        ok: false,
        reason: 'send_failed',
        err: err instanceof Error ? err.message : 'unknown',
      }),
    )
    return NextResponse.json(
      { error: 'We could not send your request. Please try again or call our office at (914) 948 3008.' },
      { status: 502 },
    )
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
