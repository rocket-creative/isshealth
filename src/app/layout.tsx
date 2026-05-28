import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed, Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'
import { MobileCallBar } from '@/components/MobileCallBar'
import { JsonLd, organizationSchema, websiteSchema } from '@/lib/schema'
import { PAGE_SEO } from '@/content/page-seo'

// ISS.health font pairing:
// - H1 (hero): Montserrat Bold — Gotham substitute (free via Google Fonts)
// - H2/H3: IBM Plex Sans Condensed (free via Google Fonts)
// - Body: IBM Plex Sans (free via Google Fonts)
// - Nav: Open Sans (free via Google Fonts)

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
  variable: '--font-montserrat',
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-ibm-plex',
})

const ibmPlexCondensed = IBM_Plex_Sans_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-ibm-plex-condensed',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-open-sans',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#05668D',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://iss.health'),
  icons: {
    icon: '/favicon.ico',
  },
  title: PAGE_SEO.home.title,
  description: PAGE_SEO.home.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${ibmPlexSans.variable} ${ibmPlexCondensed.variable} ${openSans.variable}`}>
      <body className="bg-stone-200">
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <a
          href="#main"
          className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 focus-visible:bg-white focus-visible:p-4 focus-visible:z-[100] focus-visible:ring-2 focus-visible:ring-iss-teal focus-visible:ring-offset-2"
        >
          Skip to main content
        </a>
        <div className="min-h-dvh bg-stone-200">
          <div className="max-w-[1280px] mx-auto bg-white min-h-dvh shadow-xl">
            <Nav />
            <main id="main">{children}</main>
            <Footer />
          </div>
        </div>
        <BackToTop />
        <MobileCallBar />
      </body>
    </html>
  )
}
