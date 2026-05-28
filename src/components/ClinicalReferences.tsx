import { Highlight } from '@/components/Highlight'

const references = [
  {
    label: 'National Institute of Neurological Disorders and Stroke — Low Back Pain Fact Sheet',
    href: 'https://www.ninds.nih.gov/health-information/disorders/back-pain',
  },
  {
    label: 'MedlinePlus — Cervical spondylosis',
    href: 'https://medlineplus.gov/ency/article/000436.htm',
  },
  {
    label: 'American Association of Neurological Surgeons — Herniated Disc',
    href: 'https://www.aans.org/en/Patients/Neurosurgical-Conditions-and-Treatments/Herniated-Disc',
  },
]

export function ClinicalReferences() {
  return (
    <section className="not-prose mt-12 border-t border-stone-200 pt-10" aria-labelledby="clinical-references-heading">
      <h2 id="clinical-references-heading" className="font-heading text-2xl font-bold text-iss-ink uppercase tracking-tight">
        <Highlight>Sources and further reading</Highlight>
      </h2>
      <ol className="mt-5 list-decimal space-y-3 pl-5 text-iss-body font-light leading-relaxed">
        {references.map((ref, i) => (
          <li key={ref.href}>
            <a
              href={ref.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-iss-teal link-underline hover:text-iss-teal-dark"
            >
              <Highlight>{ref.label}</Highlight>
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}
