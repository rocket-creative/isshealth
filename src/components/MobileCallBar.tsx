import Link from 'next/link'
import { Phone } from 'lucide-react'

export function MobileCallBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] xl:hidden border-t border-stone-200 bg-white shadow-[0_-4px_24px_rgba(0,0,0,0.08)] pb-safe-bottom"
      role="region"
      aria-label="Quick contact"
    >
      <div className="max-w-[1280px] mx-auto flex items-stretch">
        <a
          href="tel:+19149483008"
          className="flex-1 flex items-center justify-center gap-2 bg-iss-teal text-white min-h-[52px] text-xs font-bold uppercase tracking-[0.16em] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white focus-visible:outline-none"
        >
          <Phone size={18} aria-hidden="true" />
          Call (914) 948 3008
        </a>
        <Link
          href="/appointments/"
          className="flex-1 flex items-center justify-center gap-2 bg-iss-ink text-white min-h-[52px] text-xs font-bold uppercase tracking-[0.16em] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-iss-coral focus-visible:outline-none"
        >
          Book online
        </Link>
      </div>
    </div>
  )
}
