'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function LeadCaptureSection() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      firstName: String(data.get('firstName') ?? ''),
      email: String(data.get('email') ?? ''),
      source: 'homepage-guide',
      company: String(data.get('company') ?? ''),
    }

    try {
      const res = await fetch('/api/leads/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({ error: 'Submission failed' }))
        throw new Error(body.error || 'Submission failed')
      }

      setState('success')
      form.reset()
    } catch (err) {
      setState('error')
      setErrorMsg(err instanceof Error ? err.message : 'Submission failed')
    }
  }

  return (
    <section className="bg-iss-alt py-14 md:py-20 px-6 lg:px-12" aria-labelledby="lead-capture-heading">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-6">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Free patient guide</p>
          <h2 id="lead-capture-heading" className="mt-4 font-heading text-h2">
            Understanding Your Spine
          </h2>
          <p className="mt-6 text-iss-body font-light leading-relaxed max-w-prose">
            A plain language guide to neck and back health, your treatment options, and knowing when to seek care. Medically
            reviewed by Dr. John M. Abrahams. Enter your name and email and we will send it to you.
          </p>
        </div>

        <div className="lg:col-span-6 bg-white p-8 md:p-10">
          {state === 'success' ? (
            <div role="status" aria-live="polite">
              <p className="font-heading text-2xl font-bold uppercase tracking-tight text-iss-ink">Thank you.</p>
              <p className="mt-4 text-iss-body font-light leading-relaxed">
                We saved your request and will email you the guide shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="absolute left-[-9999px] w-px h-px overflow-hidden" aria-hidden="true">
                <label htmlFor="lead-company">Company</label>
                <input id="lead-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <div>
                <label htmlFor="lead-firstName" className="block text-iss-body text-xs uppercase tracking-[0.18em] font-bold mb-2">
                  First Name <span className="text-iss-coral">*</span>
                </label>
                <input
                  id="lead-firstName"
                  name="firstName"
                  type="text"
                  required
                  aria-required="true"
                  autoComplete="given-name"
                  className="w-full bg-white border border-stone-300 px-4 py-3 font-light focus:outline-none focus-visible:border-iss-teal focus-visible:ring-2 focus-visible:ring-iss-teal"
                />
              </div>
              <div>
                <label htmlFor="lead-email" className="block text-iss-body text-xs uppercase tracking-[0.18em] font-bold mb-2">
                  Email Address <span className="text-iss-coral">*</span>
                </label>
                <input
                  id="lead-email"
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  autoComplete="email"
                  className="w-full bg-white border border-stone-300 px-4 py-3 font-light focus:outline-none focus-visible:border-iss-teal focus-visible:ring-2 focus-visible:ring-iss-teal"
                />
              </div>
              <p className="text-iss-body text-xs font-light">
                We do not share your information.
              </p>
              <button
                type="submit"
                disabled={state === 'submitting'}
                className="btn-arrow inline-flex items-center gap-3 bg-iss-teal hover:bg-iss-teal-dark disabled:opacity-70 disabled:cursor-wait text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors focus-visible:ring-2 focus-visible:ring-iss-teal focus-visible:outline-none min-h-[44px]"
              >
                <span>{state === 'submitting' ? 'Sending' : 'Get the Guide'}</span>
                <span className="arrow">→</span>
              </button>
              {state === 'error' ? (
                <div
                  className="border border-iss-coral bg-iss-coral/5 p-4 text-sm text-iss-coral font-bold"
                  role="alert"
                  aria-live="assertive"
                >
                  {errorMsg || 'Something went wrong. Please try again.'}
                </div>
              ) : null}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
