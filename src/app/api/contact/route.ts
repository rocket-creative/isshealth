import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const schema = z.object({
  email: z.string().email().max(200),
  phone: z
    .string()
    .min(7)
    .max(30)
    .regex(/^[\d\s()+\-.]+$/, 'Invalid phone'),
  diagnosis: z.string().max(200).optional().default(''),
  message: z.string().max(2000).optional().default(''),
  captcha: z.number().int(),
  captchaExpected: z.number().int(),
})

export const runtime = 'nodejs'

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

  const { captcha, captchaExpected, email, phone, diagnosis, message } = parsed.data
  if (captcha !== captchaExpected) {
    console.log(JSON.stringify({ ts, endpoint: '/api/contact', ok: false, reason: 'captcha' }))
    return NextResponse.json({ error: 'Incorrect answer to the verification question.' }, { status: 400 })
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
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Diagnosis:</strong> ${escapeHtml(diagnosis || '—')}</p>
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
