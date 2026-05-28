import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const referralSources = [
  'Google Search',
  'Doctor Referral',
  'Friend or Family',
  'Insurance Directory',
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
  recaptchaToken: z.string().max(2000).optional().default(''),
})

export const runtime = 'nodejs'

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
  let body: unknown
  try {
    body = await req.json()
  } catch {
    console.log(JSON.stringify({ ts, endpoint: '/api/contact', ok: false, reason: 'invalid_json' }))
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    console.log(JSON.stringify({ ts, endpoint: '/api/contact', ok: false, reason: 'validation' }))
    return NextResponse.json({ error: 'Please check the form and try again.' }, { status: 400 })
  }

  const { company, email, phone, diagnosis, message, firstName, lastName, referralSource, recaptchaToken } = parsed.data
  if (company.trim().length > 0) {
    console.log(JSON.stringify({ ts, endpoint: '/api/contact', ok: false, reason: 'honeypot' }))
    return NextResponse.json({ success: true })
  }

  if (process.env.RECAPTCHA_SECRET_KEY) {
    const valid = await verifyRecaptcha(recaptchaToken)
    if (!valid) {
      console.log(JSON.stringify({ ts, endpoint: '/api/contact', ok: false, reason: 'recaptcha' }))
      return NextResponse.json({ error: 'Security verification failed. Please try again.' }, { status: 400 })
    }
  }

  const resendKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL || 'info@nybrainspine.com'
  const from = process.env.CONTACT_FROM_EMAIL || 'appointments@iss.health'

  if (!resendKey) {
    console.log(JSON.stringify({ ts, endpoint: '/api/contact', ok: false, reason: 'missing_key' }))
    return NextResponse.json({ error: 'Email service not configured.' }, { status: 503 })
  }

  try {
    const resend = new Resend(resendKey)
    const subject = 'New appointment request from iss.health'
    const html = `
      <h2 style="font-family:sans-serif">New appointment request</h2>
      <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Diagnosis:</strong> ${escapeHtml(diagnosis || '—')}</p>
      <p><strong>How they heard about us:</strong> ${escapeHtml(referralSource || '—')}</p>
      <p><strong>Message:</strong><br/>${escapeHtml(message || '—').replace(/\n/g, '<br/>')}</p>
      <hr/>
      <p style="color:#666;font-size:12px">Submitted via iss.health at ${ts}</p>
    `
    await resend.emails.send({ from, to, subject, html, reply_to: email })

    console.log(JSON.stringify({ ts, endpoint: '/api/contact', ok: true }))
    return NextResponse.json({ success: true })
  } catch (err) {
    console.log(
      JSON.stringify({
        ts,
        endpoint: '/api/contact',
        ok: false,
        reason: 'send_failed',
        err: err instanceof Error ? err.message : 'unknown',
      }),
    )
    return NextResponse.json({ error: 'Delivery failed. Please call (914) 948 3008.' }, { status: 502 })
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
