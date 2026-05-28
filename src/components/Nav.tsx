'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Menu, X, ChevronDown, Mail, Linkedin, Instagram, Facebook } from 'lucide-react'

type SubLink = { href: string; label: string }

const aboutLinks: SubLink[] = [
  { href: '/providers/', label: 'Providers' },
  { href: '/locations/', label: 'Locations' },
]

const lumbarLinks: SubLink[] = [
  { href: '/the-lumbar-center/', label: 'Overview' },
  { href: '/common-diagnosis/foot-drop/', label: 'Foot Drop' },
  { href: '/common-diagnosis/low-back-pain/', label: 'Low Back Pain' },
  { href: '/common-diagnosis/lumbar-degeneration/', label: 'Lumbar Degeneration' },
  { href: '/common-diagnosis/lumbar-disc-herniation/', label: 'Lumbar Disc Herniation' },
  { href: '/common-diagnosis/lumbar-fracture/', label: 'Lumbar Fracture' },
  { href: '/common-diagnosis/lumbar-radiculopathy/', label: 'Lumbar Radiculopathy' },
  { href: '/common-diagnosis/lumbar-spondylolisthesis/', label: 'Lumbar Spondylolisthesis' },
  { href: '/common-diagnosis/lumbar-stenosis/', label: 'Lumbar Stenosis' },
  { href: '/common-diagnosis/neurogenic-claudication/', label: 'Neurogenic Claudication' },
  { href: '/common-diagnosis/spinal-cord-tumor/', label: 'Spinal Cord Tumor' },
  { href: '/the-lumbar-center/non-surgical-options/', label: 'Non Surgical Options' },
  { href: '/the-lumbar-center/surgical-options/', label: 'Surgical Options' },
]

const cervicalLinks: SubLink[] = [
  { href: '/cervical-center/', label: 'Overview' },
  { href: '/cervical-center/cervical-degeneration/', label: 'Cervical Degeneration' },
  { href: '/cervical-center/cervical-disc-herniation/', label: 'Cervical Disc Herniation' },
  { href: '/cervical-center/cervical-myelopathy/', label: 'Cervical Myelopathy' },
  { href: '/cervical-center/cervical-radiculopathy/', label: 'Cervical Radiculopathy' },
  { href: '/cervical-center/cervical-stenosis/', label: 'Cervical Stenosis' },
  { href: '/cervical-center/non-surgical-options/', label: 'Non Surgical Options' },
  { href: '/cervical-center/surgical-options/', label: 'Surgical Options' },
]

const mainLinks = [
  { href: '/innovations/', label: 'Innovations' },
  { href: '/in-the-news/', label: 'In The News' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => setMounted(true), [])

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (open) setOpen(false)
        if (openDropdown) setOpenDropdown(null)
      }
    },
    [open, openDropdown],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [handleEscape])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const Dropdown = ({ id, label, links }: { id: string; label: string; links: SubLink[] }) => (
    <div className="relative h-full flex items-center">
      <button
        className="flex items-center gap-1 whitespace-nowrap text-iss-ink hover:text-iss-teal font-nav text-xs uppercase tracking-[0.16em] font-bold transition-colors focus-visible:ring-2 focus-visible:ring-iss-teal focus-visible:outline-none"
        onClick={() => setOpenDropdown(openDropdown === id ? null : id)}
        aria-expanded={openDropdown === id}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          size={12}
          className={`transition-transform ${openDropdown === id ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {openDropdown === id && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-stone-200 shadow-xl z-20" role="menu">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block px-5 py-3 border-b border-stone-100 last:border-0 text-iss-body hover:bg-iss-alt hover:text-iss-teal text-sm font-body focus-visible:ring-2 focus-visible:ring-iss-teal focus-visible:outline-none"
              role="menuitem"
              onClick={() => setOpenDropdown(null)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )

  const mobileMenu = (
    <div
      className="fixed inset-0 z-[200] flex flex-col bg-white"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="pt-safe-top px-5 h-20 flex items-center justify-between border-b border-stone-200">
        <Link href="/" className="flex items-center" aria-label="Institute For Spine Surgery home" onClick={() => setOpen(false)}>
          <Image
            src="/images/iss-logo.png"
            alt="Institute For Spine Surgery"
            width={1848}
            height={608}
            sizes="220px"
            className="h-16 w-auto"
            priority
          />
        </Link>
        <button
          className="text-iss-ink p-2 min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-iss-teal focus-visible:outline-none"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} aria-hidden="true" />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto px-5 py-6">
        <MobileGroup title="About Us" links={aboutLinks} onClose={() => setOpen(false)} />
        <MobileGroup title="Lumbar Center" links={lumbarLinks} onClose={() => setOpen(false)} />
        <MobileGroup title="Cervical Center" links={cervicalLinks} onClose={() => setOpen(false)} />
        <ul className="flex flex-col list-none mb-6" role="list">
          {mainLinks.map((l) => (
            <li key={l.href} className="border-b border-stone-200">
              <Link
                href={l.href}
                className="flex items-center min-h-[56px] text-iss-ink hover:text-iss-teal font-nav text-base uppercase tracking-[0.12em] font-bold"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/appointments/"
          className="btn-arrow inline-flex w-full items-center justify-center gap-2 bg-iss-teal text-white px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] min-h-[56px] hover:bg-iss-teal-dark transition-colors"
          onClick={() => setOpen(false)}
        >
          <span>Appointments</span>
          <span className="arrow">→</span>
        </Link>
        <a
          href="tel:+19149483008"
          className="block text-center mt-4 text-iss-teal font-bold text-sm"
          onClick={() => setOpen(false)}
        >
          (914) 948 3008
        </a>
      </nav>
    </div>
  )

  return (
    <>
      <header className="sticky top-0 z-50 bg-white" ref={dropdownRef}>
        {/* Coral utility bar */}
        <div className="bg-iss-coral text-white text-xs">
          <div className="px-6 lg:px-12 py-2 flex items-center justify-end gap-5">
            <a
              href="mailto:info@nybrainspine.com"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail size={14} aria-hidden="true" />
              <span className="hidden sm:inline">info@nybrainspine.com</span>
            </a>
            <span className="hidden md:inline opacity-40">|</span>
            <a href="https://www.linkedin.com/company/institute-for-spine-surgery/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80">
              <Linkedin size={14} aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/instituteforspinesurgery" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80">
              <Instagram size={14} aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/BrainSpineSurgeonsOfNewYork" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80">
              <Facebook size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Main nav */}
        <nav aria-label="Main navigation" className="border-b border-stone-200">
          {/* Mobile row */}
          <div className="xl:hidden px-5 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center" aria-label="Institute For Spine Surgery home">
              <Image
                src="/images/iss-logo.png"
                alt="Institute For Spine Surgery"
                width={1848}
                height={608}
                sizes="220px"
                className="h-16 w-auto"
                priority
              />
            </Link>
            <button
              className="text-iss-ink p-2 min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-iss-teal focus-visible:outline-none"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-label="Open menu"
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>

          {/* Desktop: 2-row layout */}
          <div className="hidden xl:block px-12">
            {/* Row 1 — Logo left | CTA right */}
            <div className="flex items-center justify-between py-5 border-b border-stone-100">
              <Link href="/" className="flex items-center" aria-label="Institute For Spine Surgery home">
                <Image
                  src="/images/iss-logo.png"
                  alt="Institute For Spine Surgery"
                  width={1848}
                  height={608}
                  sizes="300px"
                  className="h-20 w-auto"
                  priority
                />
              </Link>
              <Link
                href="/appointments/"
                className="btn-arrow inline-flex items-center gap-2 bg-iss-teal text-white px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] hover:bg-iss-teal-dark transition-colors"
              >
                <span>Appointments</span>
                <span className="arrow">→</span>
              </Link>
            </div>
            {/* Row 2 — Nav links right-aligned */}
            <div className="flex items-center justify-end gap-8 h-12">
              <Dropdown id="about" label="About Us" links={aboutLinks} />
              <Dropdown id="lumbar" label="Lumbar Center" links={lumbarLinks} />
              <Dropdown id="cervical" label="Cervical Center" links={cervicalLinks} />
              {mainLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="link-underline whitespace-nowrap text-iss-ink hover:text-iss-teal font-nav text-xs uppercase tracking-[0.16em] font-bold transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {mounted && open && createPortal(mobileMenu, document.body)}
    </>
  )
}

function MobileGroup({ title, links, onClose }: { title: string; links: SubLink[]; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="mb-4 border-b border-stone-200">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between min-h-[56px] text-iss-ink font-nav text-base uppercase tracking-[0.12em] font-bold"
        aria-expanded={expanded}
      >
        <span>{title}</span>
        <ChevronDown size={16} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {expanded && (
        <ul className="list-none pl-3 pb-2" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="flex items-center min-h-[44px] text-iss-body hover:text-iss-teal text-sm"
                onClick={onClose}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
