import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, SITE_URL } from '@/lib/metadata'
import { JsonLd, breadcrumbSchema, faqSchema } from '@/lib/schema'
import { Accordion } from '@/components/Accordion'
import { BottomCta } from '@/components/ConditionLayout'
import { cervicalConditions } from '@/content/conditions'

export const metadata: Metadata = buildMetadata({
  title: 'Cervical Center | Neck and Cervical Spine Specialists',
  description:
    'The Cervical Center treats neck pain, cervical stenosis, myelopathy, radiculopathy, and disc herniation with a multidisciplinary neurosurgical team.',
  path: '/cervical-center/',
})

const faqItems = [
  {
    question: 'I have neck pain. Do I need an MRI?',
    answer:
      'Most neck pain improves with non steroidal anti inflammatory agents such as Motrin, Aleve, Advil, and Tylenol. If your pain is persistent for more than a few weeks, you should consult your primary care physician about whether you should see a specialist and obtain imaging studies. Any patient with numbness or weakness is a more urgent matter and should undergo an MRI of the cervical spine regardless of pain level.',
  },
  {
    question: 'Should I try physical therapy?',
    answer:
      'Any patient with persistent and worsening symptoms greater than four to six weeks is a candidate for a cervical spine evaluation. Most patients undergo an MRI to develop a diagnosis with their clinical presentation. If the patient is diagnosed with arthritis or cervical degeneration without any nerve root or spinal cord compression, they are a good candidate for an initial course of physical therapy. Most providers send patients to therapy for six to eight weeks and only continue if they improve after the initial course.',
  },
  {
    question: 'Should I try an epidural injection?',
    answer:
      'An epidural injection will work for a pinched nerve or cervical radiculopathy. Most pain management providers try a selective epidural on the compressed nerve for some form of relief. They will attempt up to three injections. If there is no improvement in the presence of a compressed nerve, they may refer to a surgeon.',
  },
  {
    question: 'Can acupuncture help me?',
    answer:
      'Acupuncture is extremely helpful for someone with persistent muscle spasms without nerve root compression and without myelopathy. Constant neck pain can cause the muscles of the neck and shoulders to remain in spasm. Acupuncture helps in this specific situation.',
  },
  {
    question: 'Who needs surgery after non surgical care?',
    answer:
      'Patients who present with any sort of neurological deficit are candidates for surgery sooner than later. This includes severe weakness of the upper extremities from a pinched nerve or progressive cervical stenosis causing cord compression. Patients with mild to moderate symptoms are evaluated based on the extent of any deficits, length of symptoms, and overall function.',
  },
  {
    question: 'Do I need to wear a collar after cervical spine surgery?',
    answer:
      'Most patients who undergo anterior cervical surgery through a one level, two level, or three level surgery will not be required to wear a collar. Fusion rates are higher now, patient education on postoperative care is better, and fusion technology has improved. A small number of patients involved in a traumatic accident with or without cervical spine surgery may be required to wear a collar for instability, but this is a minority, under five percent.',
  },
  {
    question: 'Are you taking bone from my hip if I have a cervical fusion?',
    answer:
      'The vast majority of spine surgeons do not take bone from your hip. As technology improved and allograft products became more available, the need for hip bone became less important. In this practice, we only use bone harvested from the patient through the same incision.',
  },
  {
    question: 'Do I need to stay in bed after cervical surgery?',
    answer:
      'Mobility is key. Over the past twenty years, surgical recovery has moved from immobility as the standard to mobility as the standard. We tell our patients to follow the 20 Minute Rule of changing position every twenty minutes, as mobility loosens muscles and improves pain.',
  },
  {
    question: 'Will I keep having more surgery after my first one?',
    answer:
      'The risk of needing additional surgery after a first cervical spine surgery is approximately four percent over a lifetime. This means about four patients out of one hundred surgical patients will need additional surgery, most likely on the level above or below the initial surgical level.',
  },
  {
    question: 'Is cervical disc replacement better than cervical fusion?',
    answer:
      'A research study evaluating the ten year outcome of single level cervical disc replacement versus anterior cervical discectomy and fusion in New York was published in the Journal of Neurosurgery — Spine in April 2023. The study included 7,450 patients. The analysis showed no significant differences in revision risk between the two groups. The CDR cohort had a higher incidence of postoperative swallowing difficulty while ACDF patients had a longer average hospital stay. Overall, this supports both procedures in terms of success and outcomes.',
  },
]

export default function CervicalCenterPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Cervical Center', url: `${SITE_URL}/cervical-center/` },
          ]),
          faqSchema(faqItems.map((f) => ({ question: f.question, answer: f.answer }))),
        ]}
      />

      <header className="bg-iss-alt px-6 lg:px-12 pt-10 pb-10 md:pt-14 md:pb-14">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-iss-body/70 mb-6">
          <Link href="/" className="hover:text-iss-teal">Home</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-iss-ink font-bold">Cervical Center</span>
        </nav>
        <p className="font-body text-xs uppercase tracking-[0.22em] text-iss-teal font-bold">About The Cervical Center</p>
        <h1 className="mt-4 font-gotham font-bold text-iss-ink text-h1 uppercase">
          The Cervical Center.
        </h1>
        <p className="mt-5 max-w-prose text-iss-body text-base md:text-lg font-light leading-relaxed">
          The Cervical Spine Center is focused on the care of patients with cervical spine disorders such as pinched nerves, neck
          pain, instability, cancer, trauma, and any other related abnormality that requires treatment. The Cervical Spine Center
          brings a multidisciplinary team of neurosurgeons, orthopedic spine surgeons, and physiatrists to evaluate and treat your
          condition.
        </p>
      </header>

      {/* Conditions grid */}
      <section className="bg-white px-6 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Conditions We Treat</p>
            <h2 className="mt-4 font-heading text-h2">Diagnoses in the cervical spine.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cervical-center/non-surgical-options/"
              className="btn-arrow inline-flex items-center gap-2 border border-iss-teal text-iss-teal hover:bg-iss-teal hover:text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors"
            >
              <span>Non Surgical Options</span>
              <span className="arrow">→</span>
            </Link>
            <Link
              href="/cervical-center/surgical-options/"
              className="btn-arrow inline-flex items-center gap-2 bg-iss-teal hover:bg-iss-teal-dark text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors"
            >
              <span>Surgical Options</span>
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.values(cervicalConditions).map((c) => (
            <Link
              key={c.slug}
              href={`/cervical-center/${c.slug}/`}
              className="group block border border-stone-200 hover:border-iss-teal p-6 transition-colors"
            >
              <p className="font-heading text-xl font-bold text-iss-ink uppercase tracking-tight group-hover:text-iss-teal transition-colors">
                {c.title}
              </p>
              <p className="mt-3 text-iss-body font-light text-sm leading-relaxed line-clamp-3">{c.intro}</p>
              <p className="mt-4 text-iss-teal text-xs font-bold uppercase tracking-[0.18em] inline-flex items-center gap-2">
                Learn more <span>→</span>
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-iss-alt px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Patient Questions</p>
            <h2 className="mt-4 font-heading text-h2">Common questions about the cervical spine.</h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      <BottomCta />
    </>
  )
}
