'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function AppointmentForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [captcha] = useState(() => ({
    a: Math.floor(Math.random() * 8) + 2,
    b: Math.floor(Math.random() * 8) + 2,
  }))

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      email: String(data.get('email') ?? ''),
      phone: String(data.get('phone') ?? ''),
      diagnosis: String(data.get('diagnosis') ?? ''),
      message: String(data.get('message') ?? ''),
      captcha: Number(data.get('captcha') ?? 0),
      captchaExpected: captcha.a + captcha.b,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({ error: 'Submission failed' }))
        throw new Error(body.error || 'Submission failed')
      }

      if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag
        const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID
        const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL
        if (conversionId && conversionLabel) {
          gtag('event', 'conversion', {
            send_to: `${conversionId}/${conversionLabel}`,
            value: 50.0,
            currency: 'USD',
          })
        }
        gtag('event', 'appointment_request_submitted')
      }

      setState('success')
      form.reset()
    } catch (err) {
      setState('error')
      setErrorMsg(err instanceof Error ? err.message : 'Submission failed')
    }
  }

  if (state === 'success') {
    return (
      <div className="bg-iss-teal text-white p-8 md:p-10">
        <p className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight">Thank you.</p>
        <p className="mt-4 font-light leading-relaxed">
          Your appointment request was received. A member of our team will reach out within one business day. For urgent matters, call{' '}
          <a href="tel:+19149483008" className="underline font-bold">
            (914) 948 3008
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5" noValidate>
      <div className="md:col-span-2">
        <label htmlFor="email" className="block text-iss-body text-xs uppercase tracking-[0.18em] font-bold mb-2">
          Email Address <span className="text-iss-coral">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full bg-white border border-stone-300 px-4 py-3 font-light focus:outline-none focus:border-iss-teal focus:ring-1 focus:ring-iss-teal"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-iss-body text-xs uppercase tracking-[0.18em] font-bold mb-2">
          Phone Number <span className="text-iss-coral">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="(555) 123 4567"
          className="w-full bg-white border border-stone-300 px-4 py-3 font-light focus:outline-none focus:border-iss-teal focus:ring-1 focus:ring-iss-teal"
        />
      </div>
      <div>
        <label htmlFor="diagnosis" className="block text-iss-body text-xs uppercase tracking-[0.18em] font-bold mb-2">
          Diagnosis
        </label>
        <input
          id="diagnosis"
          name="diagnosis"
          type="text"
          className="w-full bg-white border border-stone-300 px-4 py-3 font-light focus:outline-none focus:border-iss-teal focus:ring-1 focus:ring-iss-teal"
        />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="message" className="block text-iss-body text-xs uppercase tracking-[0.18em] font-bold mb-2">
          Brief description of your concern
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full bg-white border border-stone-300 px-4 py-3 font-light focus:outline-none focus:border-iss-teal focus:ring-1 focus:ring-iss-teal"
        />
      </div>
      <div>
        <label htmlFor="captcha" className="block text-iss-body text-xs uppercase tracking-[0.18em] font-bold mb-2">
          What is {captcha.a} + {captcha.b}? <span className="text-iss-coral">*</span>
        </label>
        <input
          id="captcha"
          name="captcha"
          type="number"
          inputMode="numeric"
          required
          className="w-full bg-white border border-stone-300 px-4 py-3 font-light focus:outline-none focus:border-iss-teal focus:ring-1 focus:ring-iss-teal"
        />
      </div>
      <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2">
        <p className="text-iss-body/70 text-xs font-light max-w-md">
          By submitting, you consent to being contacted by our care team. We do not share your information.
        </p>
        <button
          type="submit"
          disabled={state === 'submitting'}
          className="btn-arrow inline-flex items-center gap-3 bg-iss-teal hover:bg-iss-teal-dark disabled:opacity-70 disabled:cursor-wait text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
        >
          <span>{state === 'submitting' ? 'Sending' : 'Request Appointment'}</span>
          <span className="arrow">→</span>
        </button>
      </div>
      {state === 'error' && (
        <div className="md:col-span-2 border border-iss-coral bg-iss-coral/5 p-4 text-sm text-iss-coral font-bold">
          {errorMsg || 'Something went wrong. Please try again or call (914) 948 3008.'}
        </div>
      )}
    </form>
  )
}
