import type { Metadata } from 'next'
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

      {/* Review note */}
      <section className="bg-iss-alt px-6 lg:px-12 py-8 border-b border-stone-200" aria-label="Document status">
        <DraftCallout type="approve" className="max-w-3xl border-l-4 border-iss-coral bg-white p-5">
          <p className="font-body text-[11px] uppercase tracking-[0.18em] font-bold text-iss-coral">Confirm contacts</p>
          <p className="mt-2 text-iss-body/80 font-light text-sm leading-relaxed">
            The privacy contact email and Privacy Officer below default to info@nybrainspine.com. Confirm or replace these
            with a dedicated privacy address before relying on this page.
          </p>
        </DraftCallout>
      </section>

      {/* Body: who we are through data security */}
      <section className="bg-white px-6 lg:px-12 py-12 md:py-16">
        <div className="max-w-3xl space-y-10">
          <p className="text-iss-body/70 font-light text-sm">
            Effective date: June 4, 2026. Last updated: June 4, 2026.
          </p>

          <div>
            <h2 className="font-heading text-h2">1. Who we are and what this policy covers</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              This Privacy Policy explains how The Institute for Spine Surgery, operated by New York Brain and Spine Surgery,
              P.C. (&ldquo;ISS Health,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), collects and handles
              information through our website at iss.health and any related pages we control (the &ldquo;Site&rdquo;).
            </p>
            <p className="mt-4 text-iss-body font-light leading-relaxed">
              This policy covers information we collect through the Site, such as details you enter into a contact or
              appointment request form, files you download, and technical information your browser shares automatically when
              you visit.
            </p>
            <p className="mt-4 text-iss-body font-light leading-relaxed">
              This policy does <strong className="font-bold">not</strong> cover protected health information that we create
              or maintain as part of caring for you as a patient. That information is governed by the Health Insurance
              Portability and Accountability Act (HIPAA) and is described in our separate Notice of Privacy Practices, which
              you can request from our office. If anything in this policy appears to conflict with our Notice of Privacy
              Practices regarding your protected health information, the Notice of Privacy Practices controls.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">2. Please do not send sensitive health details through the Site</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              Our website forms are intended for general inquiries and appointment requests. Please do not include detailed
              medical history, test results, diagnoses, or other sensitive health information in a web form or email.
              Standard email and general web forms are not secure channels. If we need clinical information from you, our
              office will contact you through a secure method and explain how to share it safely.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">3. Information we collect</h2>
            <h3 className="mt-6 font-heading text-lg font-bold text-iss-ink uppercase tracking-tight">
              Information you provide to us
            </h3>
            <p className="mt-3 text-iss-body font-light leading-relaxed">
              When you fill out a contact form, request an appointment, ask a question, subscribe to updates, or download a
              resource such as our patient guide, we collect the information you choose to give us. This typically includes
              your name, email address, phone number, your reason for reaching out, and any message you write.
            </p>
            <h3 className="mt-6 font-heading text-lg font-bold text-iss-ink uppercase tracking-tight">
              Information collected automatically
            </h3>
            <p className="mt-3 text-iss-body font-light leading-relaxed">
              Like most websites, we and our service providers collect certain technical information when you visit,
              including your IP address, browser type, device type, operating system, the pages you view, the links you
              click, the referring page, and the date and time of your visit. We collect this through cookies and similar
              technologies described in Section 5.
            </p>
            <h3 className="mt-6 font-heading text-lg font-bold text-iss-ink uppercase tracking-tight">
              Information from third parties
            </h3>
            <p className="mt-3 text-iss-body font-light leading-relaxed">
              If you reach us through a directory listing, a referral source, or a social media link, we may receive limited
              information from that source, such as how you found us.
            </p>
            <p className="mt-4 text-iss-body font-light leading-relaxed">
              We do not knowingly collect more information than we need to respond to you and to operate the Site.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">4. How we use information</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">We use the information described above to:</p>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-iss-body font-light leading-relaxed">
              <li>Respond to your questions and appointment requests</li>
              <li>Schedule and confirm appointments and follow up with you</li>
              <li>Send resources or updates you have asked to receive</li>
              <li>Operate, maintain, secure, and improve the Site</li>
              <li>Understand how visitors use the Site so we can make it more useful</li>
              <li>Comply with our legal, regulatory, and professional obligations</li>
              <li>Detect, prevent, and respond to fraud, abuse, and security incidents</li>
            </ul>
            <p className="mt-4 text-iss-body font-light leading-relaxed">
              We do not use the information you provide through the Site to make automated decisions that produce legal or
              similarly significant effects about you.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">5. Cookies, analytics, and tracking technologies</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              Cookies are small files placed on your device. We use them, along with similar technologies, for the purposes
              described below.
            </p>
            <h3 className="mt-6 font-heading text-lg font-bold text-iss-ink uppercase tracking-tight">Essential cookies</h3>
            <p className="mt-3 text-iss-body font-light leading-relaxed">
              These keep the Site working, remember your preferences, and help keep it secure. The Site relies on these to
              function. We also use Google reCAPTCHA to protect our forms from spam and abuse; its use is governed by the
              Google Privacy Policy and Terms of Service.
            </p>
            <h3 className="mt-6 font-heading text-lg font-bold text-iss-ink uppercase tracking-tight">Analytics cookies</h3>
            <p className="mt-3 text-iss-body font-light leading-relaxed">
              These help us understand which pages visitors find helpful and where the Site can be improved. We use privacy
              conscious analytics for this purpose.
            </p>
            <h3 className="mt-6 font-heading text-lg font-bold text-iss-ink uppercase tracking-tight">
              Advertising and conversion measurement
            </h3>
            <p className="mt-3 text-iss-body font-light leading-relaxed">
              We use Google Ads conversion tracking on select pages, including parts of our concussion program, to measure
              whether a visit followed one of our ads. We do not send your name, contact details, or any health or condition
              specific information to advertising or analytics networks. You can manage ad personalization in your{' '}
              <a
                href="https://myadcenter.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-iss-teal font-bold link-underline"
              >
                Google Ad Settings
              </a>
              , and we honor the Global Privacy Control signal as described under Your choices.
            </p>
            <h3 className="mt-6 font-heading text-lg font-bold text-iss-ink uppercase tracking-tight">Your choices</h3>
            <p className="mt-3 text-iss-body font-light leading-relaxed">
              Most browsers let you refuse or delete cookies through their settings. Blocking essential cookies may affect how
              the Site works. We also honor recognized browser based opt out signals, including the Global Privacy Control
              (GPC), as a request to opt out where applicable law gives that signal legal effect.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">6. How we share information</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              We do not sell your personal information, and we do not share it for cross context behavioral advertising.
            </p>
            <p className="mt-4 text-iss-body font-light leading-relaxed">
              We share information only in these limited situations:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-iss-body font-light leading-relaxed">
              <li>
                <strong className="font-bold text-iss-ink">Service providers.</strong> We use trusted vendors that host the
                Site, manage forms and scheduling, send communications, and provide analytics. They may handle your
                information only to perform services for us and are required to protect it. For example, appointment requests
                are delivered to our care team through Paubox, a HIPAA compliant email provider; see the{' '}
                <a
                  href="https://www.paubox.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-iss-teal font-bold link-underline"
                >
                  Paubox Privacy Policy
                </a>
                . Where a vendor handles protected health information on our behalf, we enter into a HIPAA business associate
                agreement with that vendor.
              </li>
              <li>
                <strong className="font-bold text-iss-ink">Legal and safety reasons.</strong> We may disclose information when
                we believe in good faith that it is required by law, legal process, or a government request, or where
                disclosure is needed to protect the rights, safety, or property of our patients, our staff, or the public.
              </li>
              <li>
                <strong className="font-bold text-iss-ink">Business changes.</strong> If our practice is involved in a
                merger, acquisition, or transfer of assets, information may be transferred as part of that transaction,
                subject to this policy.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-h2">7. Links to other sites</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              The Site may link to other websites we do not control, including affiliated practices, partner organizations,
              and resources mentioned in our content. This policy does not apply to those sites. We encourage you to review
              the privacy practices of any site you visit.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">8. How we protect information</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              We maintain administrative, technical, and physical safeguards designed to protect the information we collect,
              consistent with our obligations under HIPAA and the New York SHIELD Act. These include encryption of data in
              transit, access controls, and ongoing monitoring. No method of transmission over the internet is completely
              secure, so we cannot guarantee absolute security, but we work to protect your information and to respond
              promptly if an issue arises.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">9. How long we keep information</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              We keep the information you submit through the Site only as long as needed for the purposes described in this
              policy, to meet our legal, regulatory, and professional record keeping obligations, and to resolve disputes.
              When information is no longer needed, we take reasonable steps to delete it or render it unidentifiable. Medical
              records are retained according to the separate requirements that apply to patient records under applicable law.
            </p>
          </div>
        </div>
      </section>

      {/* Body: rights, children, changes, contact */}
      <section className="bg-iss-alt px-6 lg:px-12 py-12 md:py-16">
        <div className="max-w-3xl space-y-10">
          <div>
            <h2 className="font-heading text-h2">10. Your privacy rights</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              Depending on where you live, you may have some or all of the following rights regarding the personal
              information we hold about you through the Site:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-iss-body font-light leading-relaxed">
              <li>The right to know what personal information we collect and how we use it</li>
              <li>The right to access a copy of your personal information</li>
              <li>The right to correct inaccurate personal information</li>
              <li>The right to delete your personal information</li>
              <li>The right to opt out of any sale or sharing of personal information (we do not sell or share it)</li>
              <li>The right to limit the use of sensitive personal information</li>
              <li>The right not to be treated differently for exercising these rights</li>
            </ul>
            <p className="mt-4 text-iss-body font-light leading-relaxed">
              These rights have limits and exceptions, and some information may be exempt because it is governed by HIPAA or
              other healthcare specific laws rather than general privacy laws.
            </p>
            <h3 className="mt-6 font-heading text-lg font-bold text-iss-ink uppercase tracking-tight">
              How to exercise your rights
            </h3>
            <p className="mt-3 text-iss-body font-light leading-relaxed">
              Contact us using the details in Section 13. We will verify your identity before acting on your request, which
              protects you against someone else asking for your information. You may use an authorized agent where the law
              allows. We will respond within the time required by the law that applies to you.
            </p>
            <h3 className="mt-6 font-heading text-lg font-bold text-iss-ink uppercase tracking-tight">Appeals</h3>
            <p className="mt-3 text-iss-body font-light leading-relaxed">
              If we decline your request and the law in your state gives you a right to appeal, we will explain how to do so
              when we respond.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">11. Children&apos;s privacy</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              The Site is intended for adults and is not directed to children under 16. We do not knowingly collect personal
              information from children through the Site. If you believe a child has provided information through the Site,
              please contact us and we will take appropriate steps to remove it. Information about minor patients in a
              treatment relationship is handled under our Notice of Privacy Practices and applicable law, not this policy.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">12. Changes to this policy</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              We may update this policy as our practices, technology, or the law change. When we make a material change, we
              will post the updated policy here with a new effective date. Your continued use of the Site after an update
              means you are aware of the current policy. We encourage you to review it periodically.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">13. How to contact us</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              If you have questions about this policy or wish to exercise a privacy right, contact us at:
            </p>
            <address className="mt-4 not-italic text-iss-body font-light leading-relaxed">
              <span className="font-bold text-iss-ink">The Institute for Spine Surgery</span>
              <br />
              New York Brain and Spine Surgery, P.C.
              <br />
              244 Westchester Avenue, Suite 209
              <br />
              West Harrison, NY 10604
              <br />
              Phone:{' '}
              <a href="tel:+19149483008" className="text-iss-teal font-bold link-underline">
                (914) 948 3008
              </a>
              <br />
              Email:{' '}
              <a href="mailto:info@nybrainspine.com" className="text-iss-teal font-bold link-underline">
                info@nybrainspine.com
              </a>
            </address>
            <p className="mt-4 text-iss-body font-light leading-relaxed">
              For questions specifically about your protected health information or our HIPAA practices, please refer to our
              Notice of Privacy Practices, available from our office, or contact our Privacy Officer at{' '}
              <a href="mailto:info@nybrainspine.com" className="text-iss-teal font-bold link-underline">
                info@nybrainspine.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
