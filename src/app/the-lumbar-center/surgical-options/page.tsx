import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { ConditionLayout } from '@/components/ConditionLayout'
import { PostSurgerySection } from '@/components/PostSurgerySection'

export const metadata: Metadata = buildMetadata({
  title: 'Lumbar Surgical Options | Microdiscectomy, Laminectomy, Fusion',
  description:
    'Lumbar surgical options including microdiscectomy, laminectomy, foraminotomy, TLIF, XLIF, and tumor resection. Recovery and decision guidance.',
  path: '/the-lumbar-center/surgical-options/',
})

export default function LumbarSurgicalOptionsPage() {
  return (
    <ConditionLayout
      eyebrow="The Lumbar Center"
      title="Surgical Options"
      intro="Patients are initially evaluated by a physiatrist to ensure all non surgical options, including physical therapy and non narcotic pain management, are exhausted before considering a surgical solution."
      canonicalPath="/the-lumbar-center/surgical-options/"
      breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'The Lumbar Center', url: '/the-lumbar-center/' },
        { name: 'Surgical Options', url: '/the-lumbar-center/surgical-options/' },
      ]}
      related={[
        { label: 'Non Surgical Options', href: '/the-lumbar-center/non-surgical-options/' },
        { label: 'Lumbar Disc Herniation', href: '/common-diagnosis/lumbar-disc-herniation/' },
        { label: 'Lumbar Stenosis', href: '/common-diagnosis/lumbar-stenosis/' },
        { label: 'Lumbar Spondylolisthesis', href: '/common-diagnosis/lumbar-spondylolisthesis/' },
      ]}
    >
      <h2>Lumbar microdiscectomy</h2>
      <p>
        This surgery is performed for patients with lumbar radiculopathy from a disc herniation or foraminal stenosis. Patients
        are put to sleep with general anesthesia and turned prone. The level is localized through x ray and accessed through a
        small incision in the lower back measuring 1.5 inches in length. Using a microscope, a small amount of the lamina is
        removed and the disc space identified. The disc fragment is then removed, leaving the majority of the non herniated disc
        intact. The surgery takes approximately 45 minutes. Patients usually go home the same day.
      </p>

      <h2>Lumbar laminectomy</h2>
      <p>
        This surgery is performed for patients who have lumbar stenosis presenting with neurogenic claudication. MRI shows
        compression of the nerve roots centrally at one or multiple levels. During surgery, the lamina are removed as well as a
        small part of the facet joint to decompress the nerves and thecal sac. The surgery takes approximately 45 minutes.
        Patients usually go home the same day.
      </p>

      <h2>Lumbar foraminotomy</h2>
      <p>
        A lumbar foraminotomy is a surgical procedure designed to relieve nerve compression by enlarging the foramen, the passage
        where spinal nerves exit the spinal column. It is most commonly performed at the L3-4, L4-5, and L5-S1 levels. Most
        surgeons have seen success with this procedure for patients with lumbar foraminal stenosis, which can cause radiating leg
        pain, numbness, or weakness due to nerve compression.
      </p>
      <p>
        This procedure is often recommended when conservative treatments such as physical therapy, medication, or injections have
        failed to provide relief. A lumbar foraminotomy removes bone or tissue pressing on the nerve, allowing for improved
        function and reduced pain without the need for spinal fusion. The surgery takes approximately 60 to 90 minutes. Patients
        usually go home the same day.
      </p>

      <h2>Lumbar laminectomy with interspinous device</h2>
      <p>
        Similar to a lumbar laminectomy, but the spinous process is preserved and the lamina is removed through a laminotomy
        rather than laminectomy. A device is placed between the spinous processes to prevent further movement and reduce the
        likelihood of recurrent stenosis. The surgery takes approximately 45 minutes. Patients usually go home the same day.
      </p>

      <h2>Lumbar fusion and decompression (TLIF)</h2>
      <p>
        Transforaminal lumbar interbody fusion, or TLIF, is a fusion procedure that decompresses the neural elements and
        stabilizes the level. This is the typical procedure for degenerative spondylolisthesis or instability with radicular
        symptoms. Most patients go home within a day or two of surgery.
      </p>

      <h2>Lateral lumbar fusion and decompression (XLIF)</h2>
      <p>
        Also known as XLIF, or extreme lateral interbody fusion, this is an approach to the spine through the lateral flank. It is
        most commonly used at the L2-3, L3-4, and sometimes L4-5 levels. Surgeons have seen success with this procedure for
        adjacent segment disease after a previous fusion. For instance, a patient undergoes a fusion at L4-5 and later develops
        stenosis at L3-4. Rather than extend the fusion, an XLIF can be performed in a short period of time with minimal surgical
        exposure, and the patient goes home the next day. The surgery takes approximately 60 minutes.
      </p>

      <h2>Lumbar tumor resection</h2>
      <p>
        Also known as a minimally invasive lateral approach, this technique removes tumors in the lumbar spine while preserving
        spinal stability. It is most commonly performed at the L2-3, L3-4, and sometimes L4-5 levels. Surgeons have seen success
        with this procedure for tumor removal with minimal disruption to surrounding muscles and structures.
      </p>
      <p>
        In some cases this approach is beneficial for patients with adjacent segment disease after a previous fusion. If a
        patient undergoes a fusion at L4-5 and later develops stenosis or instability at L3-4, a lateral approach allows for
        targeted treatment without extending the fusion. This technique provides a shorter surgical time, minimal exposure, and
        allows the patient to return home the next day. The surgery takes approximately 60 minutes.
      </p>

      <PostSurgerySection kind="lumbar" />
    </ConditionLayout>
  )
}
