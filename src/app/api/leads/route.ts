import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  firstName: z.string().min(1).max(100),
  email: z.string().email().max(200),
  source: z.string().min(1).max(100).default('homepage-guide'),
  company: z.string().max(200).optional().default(''),
})

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  const ts = new Date().toISOString()
  let body: unknown
  try {
    body = await req.json()
  } catch {
    console.log(JSON.stringify({ ts, endpoint: '/api/leads', ok: false, reason: 'invalid_json' }))
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    console.log(JSON.stringify({ ts, endpoint: '/api/leads', ok: false, reason: 'validation' }))
    return NextResponse.json({ error: 'Please check the form and try again.' }, { status: 400 })
  }

  const { company, firstName, email, source } = parsed.data
  if (company.trim().length > 0) {
    console.log(JSON.stringify({ ts, endpoint: '/api/leads', ok: false, reason: 'honeypot' }))
    return NextResponse.json({ success: true })
  }

  // TODO: Persist to Supabase leads table and send the patient guide (public/ISS-Understanding-Your-Spine-Patient-Guide.pdf) once an email provider is configured.
  console.log(
    JSON.stringify({
      ts,
      endpoint: '/api/leads',
      ok: true,
      source,
      hasFirstName: firstName.length > 0,
      hasEmail: email.length > 0,
    }),
  )

  return NextResponse.json({ success: true })
}
