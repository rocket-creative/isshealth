import Link from 'next/link'
import Image from 'next/image'
import { Mail, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-iss-ink text-white">
      <div className="px-6 lg:px-12 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Image
            src="/images/iss-logo.png"
            alt="Institute For Spine Surgery"
            width={1848}
            height={608}
            sizes="220px"
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="sr-only">Institute For Spine Surgery</p>
          <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-sm font-light">
            Leaders in the treatment of disorders of the spine. World renowned doctors dedicated to the highest quality treatment and outcomes for all patients.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="mailto:info@nybrainspine.com" aria-label="Email" className="hover:text-iss-coral transition-colors">
              <Mail size={18} aria-hidden="true" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-iss-coral transition-colors">
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-iss-coral transition-colors">
              <Instagram size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-bold uppercase tracking-[0.18em] text-xs mb-4 text-iss-coral">Main Office</p>
          <address className="not-italic text-white/70 text-sm leading-relaxed font-light">
            <p className="font-bold text-white">New York Brain &amp; Spine Surgery, P.C.</p>
            <p className="mt-2">244 Westchester Avenue, Suite 209</p>
            <p>West Harrison, NY 10604</p>
            <a href="tel:+19149483008" className="mt-3 inline-block link-underline text-iss-coral font-bold">
              (914) 948 3008
            </a>
          </address>
        </div>

        <div>
          <p className="font-bold uppercase tracking-[0.18em] text-xs mb-4 text-iss-coral">Explore</p>
          <ul className="flex flex-col gap-2 text-sm text-white/70 font-light list-none">
            <li>
              <Link href="/providers/" className="link-underline hover:text-white transition-colors">
                Providers
              </Link>
            </li>
            <li>
              <Link href="/locations/" className="link-underline hover:text-white transition-colors">
                Locations
              </Link>
            </li>
            <li>
              <Link href="/cervical-center/" className="link-underline hover:text-white transition-colors">
                Cervical Center
              </Link>
            </li>
            <li>
              <Link href="/the-lumbar-center/" className="link-underline hover:text-white transition-colors">
                Lumbar Center
              </Link>
            </li>
            <li>
              <Link href="/innovations/" className="link-underline hover:text-white transition-colors">
                Innovations
              </Link>
            </li>
            <li>
              <Link href="/in-the-news/" className="link-underline hover:text-white transition-colors">
                In The News
              </Link>
            </li>
            <li>
              <Link href="/appointments/" className="link-underline hover:text-white transition-colors">
                Appointments
              </Link>
            </li>
            <li>
              <Link href="/insurance/" className="link-underline hover:text-white transition-colors">
                Insurance and Billing
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="px-6 lg:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/50 text-xs font-light">
          <p>© {new Date().getFullYear()} The Institute For Spine Surgery. All rights reserved.</p>
          <p>Board certified neurosurgery, West Harrison, NY.</p>
        </div>
      </div>
    </footer>
  )
}
