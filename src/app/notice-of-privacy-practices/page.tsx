import type { Metadata } from 'next'
import { buildMetadata, toCanonicalUrl } from '@/lib/metadata'
import { PAGE_SEO } from '@/content/page-seo'
import { JsonLd, webPageSchema, breadcrumbSchema } from '@/lib/schema'
import { Breadcrumbs } from '@/components/concussion/Breadcrumbs'
import { DraftCallout } from '@/components/DraftCallout'

const PATH = '/notice-of-privacy-practices/'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.noticeOfPrivacyPractices.title,
  description: PAGE_SEO.noticeOfPrivacyPractices.description,
  path: PATH,
})

/*
 * BUILD NOTE — PRACTICE SUPPLIED LEGAL TEXT REQUIRED.
 * Do not generate or guess the Notice of Privacy Practices text. The practice and its
 * compliance counsel must supply the counsel approved notice, and the published version
 * must match the printed notice given to patients at intake.
 *
 * A HIPAA covered entity's Notice of Privacy Practices must include:
 *   1. The prescribed HIPAA header in the required wording.
 *   2. How the practice uses and discloses protected health information, including for
 *      treatment, payment, and health care operations.
 *   3. The patient's rights regarding their health information.
 *   4. The practice's legal duties with respect to that information.
 *   5. How a patient can complain to the practice and to the Secretary of Health and
 *      Human Services, with a statement that they will not be retaliated against.
 *   6. A contact for more information and to file a complaint (privacy officer).
 *   7. An effective date and how changes to the notice will be communicated.
 * Provide this list to whoever produces the document so nothing is omitted.
 */
export default function NoticeOfPrivacyPracticesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: PAGE_SEO.noticeOfPrivacyPractices.title,
            description: PAGE_SEO.noticeOfPrivacyPractices.description,
            url: toCanonicalUrl(PATH),
          }),
          breadcrumbSchema([
            { name: 'Home', url: toCanonicalUrl('/') },
            { name: 'Notice of Privacy Practices', url: toCanonicalUrl(PATH) },
          ]),
        ]}
      />

      <header className="bg-iss-alt px-6 lg:px-12 pt-8 pb-4">
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Notice of Privacy Practices', url: PATH },
          ]}
        />
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-iss-teal-dark via-iss-teal to-[#0B8FB8] px-6 lg:px-12 py-16 md:py-24">
        <div className="relative max-w-3xl">
          <p className="font-body text-[11px] md:text-xs uppercase tracking-[0.22em] text-iss-coral font-bold">Legal</p>
          <h1 className="mt-4 font-gotham font-bold text-white uppercase text-display max-w-[22ch]">
            Notice of Privacy Practices
          </h1>
          <p className="mt-6 max-w-xl text-white/90 text-base md:text-lg font-light leading-relaxed">
            This notice describes how medical information about you may be used and disclosed and how you can get access to
            this information. The full notice is provided by the practice. Please review it carefully.
          </p>
        </div>
      </section>

      {/* Review flag */}
      <section className="bg-iss-alt px-6 lg:px-12 py-8 border-b border-stone-200" aria-label="Document status">
        <DraftCallout type="approve" className="max-w-3xl border-l-4 border-iss-coral bg-white p-5">
          <p className="font-body text-[11px] uppercase tracking-[0.18em] font-bold text-iss-coral">Practice supplied</p>
          <p className="mt-2 text-iss-body/80 font-light text-sm leading-relaxed">
            The Notice of Privacy Practices is a legal document the practice must supply through its compliance counsel. The
            published text must match the printed notice given to patients at intake. The placeholders below are not the
            notice and must be replaced before publication.
          </p>
        </DraftCallout>
      </section>

      {/* Placeholder body */}
      <section className="bg-white px-6 lg:px-12 py-12 md:py-16">
        <div className="max-w-3xl space-y-10">
          <div>
            <h2 className="font-heading text-h2">Required notice header</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              [Practice supplied. The prescribed HIPAA header in the required wording goes here. It tells patients that this
              document describes how their medical information may be used and disclosed and how they can get access to it,
              and asks them to review it carefully.]
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">Notice of Privacy Practices</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              [Practice supplied body. This region must contain the counsel approved Notice of Privacy Practices, including
              how the practice uses and discloses protected health information for treatment, payment, and health care
              operations, your rights regarding your health information, the practice's legal duties, and how to file a
              complaint with the practice and with the Secretary of Health and Human Services.]
            </p>
          </div>

          <div>
            <h2 className="font-heading text-h2">Effective date</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">[Practice supplied effective date.]</p>
          </div>

          <div>
            <h2 className="font-heading text-h2">Questions and complaints</h2>
            <p className="mt-5 text-iss-body font-light leading-relaxed">
              [Practice supplied contact for privacy questions and complaints, typically the practice contact and the privacy
              officer.]
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
