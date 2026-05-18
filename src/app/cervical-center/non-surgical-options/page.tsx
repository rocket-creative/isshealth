import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { ConditionLayout } from '@/components/ConditionLayout'

export const metadata: Metadata = buildMetadata({
  title: 'Cervical Non Surgical Options | Conservative Neck Care',
  description:
    'Non surgical cervical spine care including physical therapy, medication, epidural injections, and acupuncture. Most neck symptoms improve without surgery.',
  path: '/cervical-center/non-surgical-options/',
})

export default function CervicalNonSurgicalOptionsPage() {
  return (
    <ConditionLayout
      eyebrow="Cervical Center"
      title="Non Surgical Options"
      intro="The Cervical Center works with the team at Spine Options to provide non operative care for patients. Most patients who present with some form of neck pain, upper extremity weakness or numbness, or lower extremity weakness or numbness within the diagnosis of cervical spine disorders will not need surgery. Most symptoms improve over time with conservative treatment."
      canonicalPath="/cervical-center/non-surgical-options/"
      breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Cervical Center', url: '/cervical-center/' },
        { name: 'Non Surgical Options', url: '/cervical-center/non-surgical-options/' },
      ]}
      related={[
        { label: 'Surgical Options', href: '/cervical-center/surgical-options/' },
        { label: 'Cervical Degeneration', href: '/cervical-center/cervical-degeneration/' },
        { label: 'Cervical Radiculopathy', href: '/cervical-center/cervical-radiculopathy/' },
      ]}
    >
      <h2>Physical therapy</h2>
      <p>
        We develop personalized physical therapy prescriptions based on your specific needs and refer you to experienced local
        providers. These programs improve strength, flexibility, and posture, helping to reduce pain, enhance mobility, and
        promote long term spinal health.
      </p>

      <h2>Epidural injections</h2>
      <p>
        For patients who may benefit from epidural steroid injections, we provide expert evaluations and referrals to trusted
        local physicians who specialize in pain management. These injections can reduce inflammation and nerve related pain caused
        by conditions such as disc herniation or foraminal stenosis, offering relief with minimal downtime.
      </p>

      <h2>Medication</h2>
      <p>
        Most neck pain improves with non steroidal anti inflammatory agents such as Motrin, Aleve, Advil, and Tylenol. Any patient
        with numbness or weakness is a more urgent matter and should undergo an MRI of their cervical spine regardless of pain
        level.
      </p>

      <h2>Acupuncture</h2>
      <p>
        Acupuncture is extremely helpful for patients with persistent muscle spasms without nerve root compression and without
        myelopathy. Constant neck pain can keep the muscles of the neck and shoulders in continued spasm, and acupuncture helps
        in this situation.
      </p>

      <h2>When to consider surgery</h2>
      <p>
        Patients who present with a neurological deficit are candidates for surgery sooner than later. This includes severe
        weakness of the upper extremities from a pinched nerve, or progressive cervical stenosis causing cord compression. Any
        other patients with mild to moderate symptoms are evaluated based on the extent of any deficits, length of symptoms, and
        overall function.
      </p>
    </ConditionLayout>
  )
}
