import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { PAGE_SEO } from '@/content/page-seo'
import { surgicalOptionsFaqs } from '@/content/clinical-faqs'
import { ConditionLayout } from '@/components/ConditionLayout'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.lumbarNonSurgical.title,
  description: PAGE_SEO.lumbarNonSurgical.description,
  path: '/the-lumbar-center/non-surgical-options/',
})

export default function LumbarNonSurgicalOptionsPage() {
  return (
    <ConditionLayout
      eyebrow="The Lumbar Center"
      title="Non Surgical Options"
      intro="We offer comprehensive non surgical treatment plans tailored to each patient's condition, focused on pain relief, mobility improvement, and overall spinal health. While we do not perform these treatments in house, we collaborate with trusted local specialists to ensure you receive the highest level of care."
      canonicalPath="/the-lumbar-center/non-surgical-options/"
      schemaKind="service"
      faqs={surgicalOptionsFaqs('lumbar')}
      breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'The Lumbar Center', url: '/the-lumbar-center/' },
        { name: 'Non Surgical Options', url: '/the-lumbar-center/non-surgical-options/' },
      ]}
      related={[
        { label: 'Surgical Options', href: '/the-lumbar-center/surgical-options/' },
        { label: 'Low Back Pain', href: '/common-diagnosis/low-back-pain/' },
        { label: 'Lumbar Stenosis', href: '/common-diagnosis/lumbar-stenosis/' },
        { label: 'Neurogenic Claudication', href: '/common-diagnosis/neurogenic-claudication/' },
      ]}
    >
      <h2>Physical therapy</h2>
      <p>
        We develop personalized physical therapy prescriptions based on your specific needs and refer you to experienced local
        providers. These programs are designed to improve strength, flexibility, and posture, helping to reduce pain and enhance
        mobility while promoting long term spinal health.
      </p>

      <h2>Epidural injections</h2>
      <p>
        For patients who may benefit from epidural steroid injections, we provide expert evaluations and referrals to trusted
        local physicians who specialize in pain management. These injections can reduce inflammation and nerve related pain
        caused by conditions such as herniated discs and spinal stenosis, offering significant relief with minimal downtime.
      </p>

      <h2>Radiofrequency ablation</h2>
      <p>
        If radiofrequency ablation is a suitable option, we discuss its benefits and connect you with qualified local pain
        specialists for treatment. RFA is a minimally invasive procedure that can provide long lasting pain relief by targeting
        and disrupting pain signals from affected nerves, improving comfort and function without surgery.
      </p>

      <h2>Chiropractic care and acupuncture</h2>
      <p>
        Chiropractic care can help patients with leg pain as a component of their condition. Acupuncture works best in the
        presence of severe muscle spasms. Both are considered alongside physical therapy and medication as part of a
        comprehensive conservative plan.
      </p>

      <h2>When to consider surgery</h2>
      <p>
        Patients who present with any neurological deficit, such as foot drop or progressive leg weakness, are evaluated for
        surgery sooner than later. Patients with persistent and worsening symptoms beyond eight to twelve weeks of conservative
        care may also be candidates.
      </p>
    </ConditionLayout>
  )
}
