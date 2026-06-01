import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, toCanonicalUrl } from '@/lib/metadata'
import { PAGE_SEO } from '@/content/page-seo'
import { JsonLd, webPageSchema, breadcrumbSchema } from '@/lib/schema'
import { Breadcrumbs } from '@/components/concussion/Breadcrumbs'
import { DraftCallout } from '@/components/DraftCallout'

const PATH = '/privacy-policy/'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.privacyPolicy.title,
  description: PAGE_SEO.privacyPolicy.description,
  path: PATH,
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: PAGE_SEO.privacyPolicy.title,
            description: PAGE_SEO.privacyPolicy.description,
            url: toCanonicalUrl(PATH),
          }),
          breadcrumbSchema([
            { name: 'Home', url: toCanonicalUrl('/') },
            { name: 'Privacy Policy', url: toCanonicalUrl(PATH) },
          ]),
        ]}
      />

      <header className="bg-iss-alt px-6 lg:px-12 pt-8 pb-4">
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Privacy Policy', url: PATH },
          ]}
        />
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-iss-teal-dark via-iss-teal to-[#0B8FB8] px-6 lg:px-12 py-16 md:py-24">
        <div className="relative max-w-3xl">
          <p className="font-body text-[11px] md:text-xs uppercase tracking-[0.22em] text-iss-coral font-bold">Legal</p>
          <h1 className="mt-4 font-gotham font-bold text-white uppercase text-display max-w-[22ch]">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-xl text-white/90 text-base md:text-lg font-light leading-relaxed">
            This policy explains what information the Institute For Spine Surgery collects through this website, how we use
            it, and the choices you have. It applies to this website only.
          </p>
        </div>
      </section>

      {/* Review flag */}
      <section className="bg-iss-alt px-6 lg:px-12 py-8 border-b border-stone-200" aria-label="Document status">
        <DraftCallout type="approve" className="max-w-3xl border-l-4 border-iss-coral bg-white p-5">
          <p className="font-body text-[11px] uppercase tracking-[0.18em] font-bold text-iss-coral">Pending review</p>
          <p className="mt-2 text-iss-body/80 font-light text-sm leading-relaxed">
            This privacy policy is a template prepared for the practice. It is not legal advice. The practice and its counsel
            should review the text and replace every bracketed placeholder before publication.
          </p>
        </DraftCallout>
      </section>

      {/* Body: general practices */}
      <section className="bg-white px-6 lg:px-12 py-12 md:py-16">
        <div className="max-w-3xl space-y-10">
          <p className="text-iss-body/70 font-light text-sm">
            Effective date: [CONFIRM: effective date]. Last reviewed: [CONFIRM: review date].
          </p>

          <div>
            <h2 className="font-heading text-h2">Introduction and scope</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              The Institute For Spine Surgery operates this website to share information about our team, our services, and how
              to request care. This policy describes how we handle information collected through the website, such as a
              consultation request or general site usage data. It is separate from our Notice of Privacy Practices, which
              governs protected health information in the context of treatment. See the section on health information below.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">Please do not send sensitive health details online</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              The forms and email on this website are convenient ways to reach us, but they are not secure channels for
              sensitive health information. Please do not include detailed medical history, test results, or other private
              health details in a form or email. If you have a medical emergency, call 911. To discuss your health, call our
              office at{' '}
              <a href="tel:+19149483008" className="text-iss-teal font-bold link-underline">
                (914) 948 3008
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">Information we collect</h2>
            <h3 className="mt-6 font-heading text-lg font-bold text-iss-ink uppercase tracking-tight">
              Information you provide
            </h3>
            <p className="mt-3 text-iss-body font-light leading-relaxed">
              When you submit a consultation request, we collect your name, email address, and phone number, along with any
              details you choose to share, such as a diagnosis, a brief description of your concern, and how you heard about
              us. You decide how much to share.
            </p>
            <h3 className="mt-6 font-heading text-lg font-bold text-iss-ink uppercase tracking-tight">
              Information collected automatically
            </h3>
            <p className="mt-3 text-iss-body font-light leading-relaxed">
              Like most websites, we collect limited technical information automatically, such as your device type, browser,
              approximate location based on your network, the pages you view, and how you arrived at the site. This
              information is collected through cookies and similar technologies described below.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">Cookies and analytics</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              We use cookies and similar technologies to keep the site working and to understand how visitors use our pages.
              You can control cookies through your browser and the choices described in the section on your rights.
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-iss-body font-light leading-relaxed">
              <li>
                Google Analytics, which helps us understand site usage. Learn more in the{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-iss-teal font-bold link-underline"
                >
                  Google Privacy Policy
                </a>
                .
              </li>
              <li>
                Google reCAPTCHA, which helps protect our forms from spam and abuse. Its use is governed by the Google Privacy
                Policy and Terms of Service.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-h2">Advertising</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              We may use advertising and measurement technologies, such as Google Ads conversion tracking, to understand
              whether a visit followed one of our ads. We do not send your name, contact details, or any health or condition
              information to advertising or analytics platforms. You can manage ad personalization in your{' '}
              <a
                href="https://myadcenter.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-iss-teal font-bold link-underline"
              >
                Google Ad Settings
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">How we use information</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-iss-body font-light leading-relaxed">
              <li>To respond to your request and schedule a consultation.</li>
              <li>To operate, maintain, and improve the website and its content.</li>
              <li>To measure the performance of our pages and advertising.</li>
              <li>To protect the website and our forms from spam, fraud, and abuse.</li>
              <li>To meet legal, regulatory, and recordkeeping obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-h2">How we share information</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              We do not sell your personal information. We share information only as needed with service providers that help
              us run the website and respond to you, and when required by law.
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-iss-body font-light leading-relaxed">
              <li>
                Our email delivery provider, which transmits your consultation request to our care team. See the{' '}
                <a
                  href="https://resend.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-iss-teal font-bold link-underline"
                >
                  Resend Privacy Policy
                </a>
                .
              </li>
              <li>Our website hosting and infrastructure providers.</li>
              <li>The analytics and advertising services described above.</li>
              <li>Legal, regulatory, or law enforcement authorities when required, or to protect rights and safety.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-h2">Third party links</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              Our website may link to other sites that we do not operate, such as professional societies or hospital
              partners. We are not responsible for the privacy practices of those sites. Please review their policies before
              sharing information with them.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">Data retention</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              We keep consultation requests for as long as needed to respond to you and to meet our recordkeeping
              obligations, then dispose of them securely. Analytics and advertising data are kept according to the settings
              of those services. [CONFIRM: retention period for website inquiries].
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">Data security</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              We use reasonable administrative, technical, and physical safeguards to protect the information we collect,
              including encryption in transit. These measures are intended to align with applicable data security
              requirements, including the New York SHIELD Act. No website or method of transmission over the internet is
              completely secure, so we cannot guarantee absolute security.
            </p>
          </div>
        </div>
      </section>

      {/* Body: rights, children, NPP, changes, contact */}
      <section className="bg-iss-alt px-6 lg:px-12 py-12 md:py-16">
        <div className="max-w-3xl space-y-10">
          <div>
            <h2 className="font-heading text-h2">Your choices and rights</h2>
            <h3 className="mt-6 font-heading text-lg font-bold text-iss-ink uppercase tracking-tight">
              Cookies and analytics
            </h3>
            <p className="mt-3 text-iss-body font-light leading-relaxed">
              You can manage or refuse cookies through your browser settings. You can also opt out of Google Analytics using
              the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-iss-teal font-bold link-underline"
              >
                Google Analytics opt out browser add on
              </a>
              .
            </p>
            <h3 className="mt-6 font-heading text-lg font-bold text-iss-ink uppercase tracking-tight">
              Global Privacy Control
            </h3>
            <p className="mt-3 text-iss-body font-light leading-relaxed">
              Where required by law, we honor the Global Privacy Control signal sent by your browser as a request to opt out
              of the sale or sharing of personal information.
            </p>
            <h3 className="mt-6 font-heading text-lg font-bold text-iss-ink uppercase tracking-tight">
              State privacy rights
            </h3>
            <p className="mt-3 text-iss-body font-light leading-relaxed">
              Depending on where you live, you may have the right to know what personal information we hold, to request a
              copy, to ask us to correct or delete it, and to opt out of the sale or sharing of personal information. We do
              not sell personal information. California residents have these rights under the California Consumer Privacy Act
              as amended. To make a request, contact us using the details below. We will not treat you differently for
              exercising your rights.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">Children and privacy</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              This website is intended for adults and is not directed to children under 13. We do not knowingly collect
              personal information from children under 13. When care involves a child or teenager, such as our youth and
              pediatric concussion care, a parent or guardian should submit the request and any details on the child behalf.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">Health information</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              Information relating to your care and treatment is handled in accordance with the practice's Notice of Privacy
              Practices, which is separate from this website privacy policy. It describes how we use and disclose protected
              health information and the rights you have over that information as a patient. Read our{' '}
              <Link href="/notice-of-privacy-practices/" className="text-iss-teal font-bold link-underline">
                Notice of Privacy Practices
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">Changes to this policy</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              We may update this policy from time to time. When we do, we will revise the effective date at the top of the
              page. Significant changes will be noted on this page.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">Contact us</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              If you have questions about this policy or wish to exercise your privacy rights, contact us at{' '}
              <a href="mailto:[CONFIRM: privacy contact email]" className="text-iss-teal font-bold link-underline">
                [CONFIRM: privacy contact email]
              </a>
              , by phone at{' '}
              <a href="tel:+19149483008" className="text-iss-teal font-bold link-underline">
                (914) 948 3008
              </a>
              , or by mail at the address below.
            </p>
            <address className="mt-4 not-italic text-iss-body font-light leading-relaxed">
              Institute For Spine Surgery
              <br />
              244 Westchester Avenue, Suite 209
              <br />
              West Harrison, NY 10604
            </address>
          </div>
        </div>
      </section>
    </>
  )
}
