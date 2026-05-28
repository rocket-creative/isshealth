'use client'

import { useEffect, useRef, useState } from 'react'
import { DraftCallout } from '@/components/DraftCallout'

type Stat = {
  value: number
  suffix?: string
  prefix?: string
  label: string
}

const confirmedStats: Stat[] = [
  { value: 4000, prefix: 'Over ', label: 'Successful surgeries performed' },
  { value: 98, suffix: '%', label: 'Of patients recommend our care' },
]

const pendingStats = [
  {
    draftText: '85% of patients return to normal activity within three months',
    label: 'Of patients return to normal activity within three months',
  },
  {
    draftText: '90% reduction in postoperative complications',
    label: 'Reduction in postoperative complications',
  },
]

function Counter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setDisplay(value)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const duration = 1600
            const startTime = performance.now()
            const tick = (now: number) => {
              const progress = Math.min(1, (now - startTime) / duration)
              const eased = 1 - Math.pow(1 - progress, 3)
              setDisplay(Math.round(value * eased))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [value])

  return (
    <span ref={ref} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsBar() {
  return (
    <section className="bg-iss-alt py-14 md:py-20 px-6 lg:px-12">
      <div className="max-w-3xl">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Our Proven Success</p>
        <h2 className="mt-3 font-heading text-h2 max-w-[28ch]">
          Some of the most effective spine treatments in the region.
        </h2>
        <DraftCallout type="approve" source="StatsBar heading">
          A 95% patient satisfaction rate
        </DraftCallout>
      </div>
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {confirmedStats.map((stat) => (
          <div key={stat.label} className="border-t-2 border-iss-teal pt-5">
            <p className="font-heading font-bold text-iss-teal text-stat leading-none whitespace-nowrap">
              <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
            </p>
            <p className="mt-4 text-iss-body text-sm font-light leading-relaxed max-w-[26ch]">{stat.label}</p>
          </div>
        ))}
        {pendingStats.map((stat) => (
          <div key={stat.label} className="border-t-2 border-amber-500 pt-5">
            <DraftCallout type="approve" source="StatsBar" className="my-0">
              <p className="font-heading font-bold text-amber-900 text-lg leading-snug">{stat.draftText}</p>
            </DraftCallout>
            <p className="mt-4 text-iss-body text-sm font-light leading-relaxed max-w-[26ch]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
