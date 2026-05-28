'use client'

import { useRouter } from 'next/navigation'
import Script from 'next/script'
import { useState } from 'react'
import { AppointmentTestimonial } from '@/components/AppointmentTestimonial'
import { DraftCallout } from '@/components/DraftCallout'

type FormState = 'idle' | 'submitting' | 'error'

const REFERRAL_OPTIONS = [
  'Google Search',
  'Doctor Referral',
  'Friend or Family',
  'Other',
] as const

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

type AppointmentFormProps = {
  showTestimonial?: boolean
}

export function AppointmentForm({ showTestimonial = false }: AppointmentFormProps) {
  const router = useRouter()
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const data = new FormData(form)

    // TODO: When NEXT_PUBLIC_RECAPTCHA_SITE_KEY and RECAPTCHA_SECRET_KEY are configured,
    // execute grecaptcha.execute(siteKey, { action: 'appointment' }) and include recaptchaToken in payload.
    let recaptchaToken = ''
    if (recaptchaSiteKey && typeof window !== 'undefined') {
      const grecaptcha = (window as unknown as { grecaptcha?: { execute: (key: string, opts: { action: string }) => Promise<string> } }).grecaptcha
      if (grecaptcha) {
        try {
          recaptchaToken = await grecaptcha.execute(recaptchaSiteKey, { action: 'appointment' })
        } catch {
          setState('error')
          setErrorMsg('Security verification failed. Please try again or call (914) 948 3008.')
          return
        }
      }
    }

    const payload = {
      firstName: String(data.get('firstName') ?? ''),
      lastName: String(data.get('lastName') ?? ''),
      email: String(data.get('email') ?? ''),
      phone: String(data.get('phone') ?? ''),
      diagnosis: String(data.get('diagnosis') ?? ''),
      message: String(data.get('message') ?? ''),
      referralSource: String(data.get('referralSource') ?? ''),
      company: String(data.get('company') ?? ''),
      recaptchaToken,
    }

    try {
      const res = await fetch('/api/contact/', {
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

      router.push('/appointments/confirmed/')
    } catch (err) {
      setState('error')
      setErrorMsg(err instanceof Error ? err.message : 'Submission failed')
    }
  }

  return (
    <>
      {recaptchaSiteKey ? (
        <Script src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`} strategy="afterInteractive" />
      ) : null}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5" noValidate>
        <div className="absolute left-[-9999px] w-px h-px overflow-hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <div>
          <label htmlFor="firstName" className="block text-iss-body text-xs uppercase tracking-[0.18em] font-bold mb-2">
            First Name <span className="text-iss-coral">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            aria-required="true"
            autoComplete="given-name"
            className="w-full bg-white border border-stone-300 px-4 py-3 font-light focus:outline-none focus-visible:border-iss-teal focus-visible:ring-2 focus-visible:ring-iss-teal"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-iss-body text-xs uppercase tracking-[0.18em] font-bold mb-2">
            Last Name <span className="text-iss-coral">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            aria-required="true"
            autoComplete="family-name"
            className="w-full bg-white border border-stone-300 px-4 py-3 font-light focus:outline-none focus-visible:border-iss-teal focus-visible:ring-2 focus-visible:ring-iss-teal"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="email" className="block text-iss-body text-xs uppercase tracking-[0.18em] font-bold mb-2">
            Email Address <span className="text-iss-coral">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-required="true"
            autoComplete="email"
            className="w-full bg-white border border-stone-300 px-4 py-3 font-light focus:outline-none focus-visible:border-iss-teal focus-visible:ring-2 focus-visible:ring-iss-teal"
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
            aria-required="true"
            autoComplete="tel"
            placeholder="(555) 123 4567"
            className="w-full bg-white border border-stone-300 px-4 py-3 font-light focus:outline-none focus-visible:border-iss-teal focus-visible:ring-2 focus-visible:ring-iss-teal"
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
          <label htmlFor="referralSource" className="block text-iss-body text-xs uppercase tracking-[0.18em] font-bold mb-2">
            How did you hear about us?
          </label>
          <select
            id="referralSource"
            name="referralSource"
            defaultValue=""
            className="w-full bg-white border border-stone-300 px-4 py-3 font-light focus:outline-none focus-visible:border-iss-teal focus-visible:ring-2 focus-visible:ring-iss-teal"
          >
            <option value="">Select an option</option>
            {REFERRAL_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
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
        <div className="md:col-span-2">
          <DraftCallout type="approve">
            <p>
              We respond within one business day. A member of our care team will call you to confirm your appointment time.
            </p>
          </DraftCallout>
        </div>
        {showTestimonial && <AppointmentTestimonial />}
        <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2">
          <p className="text-iss-body text-xs font-light max-w-md">
            By submitting, you consent to being contacted by our care team. We do not share your information.
          </p>
          <button
            type="submit"
            disabled={state === 'submitting'}
            className="btn-arrow inline-flex items-center gap-3 bg-iss-teal hover:bg-iss-teal-dark disabled:opacity-70 disabled:cursor-wait text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors focus-visible:ring-2 focus-visible:ring-iss-teal focus-visible:outline-none min-h-[44px]"
          >
            <span>{state === 'submitting' ? 'Sending' : 'Request Appointment'}</span>
            <span className="arrow">→</span>
          </button>
        </div>
        {state === 'error' && (
          <div
            className="md:col-span-2 border border-iss-coral bg-iss-coral/5 p-4 text-sm text-iss-coral font-bold"
            role="alert"
            aria-live="assertive"
          >
            {errorMsg || 'Something went wrong. Please try again or call (914) 948 3008.'}
          </div>
        )}
      </form>
    </>
  )
}
