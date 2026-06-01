import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { PAGE_SEO } from '@/content/page-seo'
import { surgicalOptionsFaqs } from '@/content/clinical-faqs'
import { ConditionLayout } from '@/components/ConditionLayout'
import { PostSurgerySection } from '@/components/PostSurgerySection'

export const metadata: Metadata = buildMetadata({
  title: PAGE_SEO.cervicalSurgical.title,
  description: PAGE_SEO.cervicalSurgical.description,
  path: '/cervical-center/surgical-options/',
})

export default function CervicalSurgicalOptionsPage() {
  return (
    <ConditionLayout
      eyebrow="Cervical Center"
      title="Surgical Options"
      intro="Patients are initially evaluated by a physiatrist to ensure all non surgical options, including physical therapy and non narcotic pain management, are exhausted before considering a surgical solution. Below we review which patients should undergo surgery."
      canonicalPath="/cervical-center/surgical-options/"
      schemaKind="service"
      faqs={surgicalOptionsFaqs('cervical')}
      faqIntro="With the advent of the internet, shared communication, and cell phones, almost everyone can share their story of surgery or medical care with the world. There is a downside, though, where information can be outdated, one sided, misleading, or altogether false. Below we address some of the myths of cervical spine surgery that patients raise in the office when scheduling surgery."
      breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Cervical Center', url: '/cervical-center/' },
        { name: 'Surgical Options', url: '/cervical-center/surgical-options/' },
      ]}
      related={[
        { label: 'Non Surgical Options', href: '/cervical-center/non-surgical-options/' },
        { label: 'Cervical Stenosis', href: '/cervical-center/cervical-stenosis/' },
        { label: 'Cervical Myelopathy', href: '/cervical-center/cervical-myelopathy/' },
        { label: 'Cervical Radiculopathy', href: '/cervical-center/cervical-radiculopathy/' },
      ]}
    >
      <h2>Anterior cervical discectomy and fusion</h2>
      <p>
        Anterior cervical discectomy and fusion, or ACDF, is a surgical procedure used to treat patients with a compressed nerve
        or spinal cord who do not improve with conservative care. If a patient has a compressed spinal cord and exhibits any
        symptoms, they will most likely need to undergo surgery regardless of their response to conservative care, since
        conservative care is unlikely to improve the symptoms.
      </p>
      <p>
        The incision is made in the front of the neck, usually in a horizontal skin fold. After the incision, there is a natural
        plane toward the anterior spine, which makes access easy and is usually why most patients do not have a lot of
        postoperative pain. The surgeon removes the disc to allow access to the spinal cord and spinal nerves. Once the disc is
        removed, the surgeon frees the compressed nerve or spinal cord to provide relief.
      </p>
      <p>
        Since there is no disc remaining, the surgeon replaces it with a spacer and secures the spacer with a plating system. The
        spacer can be cadaver bone, your own bone, PEEK plastic, or titanium cage. Titanium is compatible with MRI, CT, and x ray.
        The spacer is secured with a plate or similar device to add stability to the construct.
      </p>
      <p>
        The procedure is a fusion and will cause the vertebral bodies above and below the disc to grow together in bony union. Some
        patients worry that fusion will cause more damage as they age, but the data remains early. The procedure is similar to
        anterior cervical disc replacement, since both remove pressure from the nerves, but ACDF fuses adjacent segments and does
        not allow motion. ACDF can be done at any number of cervical levels.
      </p>

      <h2>Anterior cervical disc replacement</h2>
      <p>
        Anterior cervical disc replacement, or ACDR, is a surgical procedure used to treat patients with a compressed nerve or
        spinal cord who do not improve with conservative care. The surgeon removes the disc and replaces it with a synthetic disc
        device that allows motion. The surgery is similar to ACDF, since both remove pressure from the nerves, but unlike ACDF,
        ACDR preserves motion. This can be done at one or two levels, but not three levels.
      </p>
      <p>
        Patients may not be a disc replacement candidate if they have excessive neck pain or compression of the spinal cord.
        There are reports that excessive cervical motion after anterior cervical disc replacement can cause worsening of neck
        pain, even after surgery.
      </p>
      <p>
        There is still significant controversy comparing anterior cervical fusion to disc replacement. Current studies support
        minimal difference at five to seven years in patients who undergo a one level fusion versus disc replacement. For two
        level constructs, the data suggests outcomes may be slightly better in the disc replacement group. Disc replacement is not
        approved for three level constructs. Patients presenting with only neck pain, and no arm pain or cord compression, would
        most likely benefit from a cervical fusion rather than disc replacement.
      </p>
      <p>
        The disc replacement procedure is similar to cervical fusion in terms of length of surgery, complications, pain, and
        overall recovery. As with cervical fusion, patients are usually discharged home the same day and are back to most
        activity within a few weeks. Most patients request or consider cervical disc replacement because there is a risk of
        needing further surgery on the cervical spine. After cervical fusion, patients have a nine percent chance of more surgery
        on an adjacent level over their lifetime.
      </p>

      <PostSurgerySection kind="cervical" />
    </ConditionLayout>
  )
}
