import type { ReactNode } from 'react'
import Link from 'next/link'

const linkClass = 'link-underline font-bold text-iss-teal'

export function LumbarNonSurgicalExcerpt() {
  return (
    <>
      <p>
        We offer comprehensive non surgical treatment plans tailored to each patient&apos;s condition, focused on pain relief,
        mobility improvement, and overall spinal health. While we do not perform these treatments in house, we collaborate with
        trusted local specialists to ensure you receive the highest level of care.
      </p>
      <h3>Physical therapy</h3>
      <p>
        We develop personalized physical therapy prescriptions based on your specific needs and refer you to experienced local
        providers. These programs are designed to improve strength, flexibility, and posture, helping to reduce pain and enhance
        mobility while promoting long term spinal health.
      </p>
      <h3>Epidural injections</h3>
      <p>
        For patients who may benefit from epidural steroid injections, we provide expert evaluations and referrals to trusted
        local physicians who specialize in pain management. These injections can reduce inflammation and nerve related pain
        caused by conditions such as herniated discs and spinal stenosis, offering significant relief with minimal downtime.
      </p>
      <h3>Chiropractic care and acupuncture</h3>
      <p>
        Chiropractic care can help patients with leg pain as a component of their condition. Acupuncture works best in the
        presence of severe muscle spasms. Both are considered alongside physical therapy and medication as part of a
        comprehensive conservative plan.
      </p>
      <p>
        <Link href="/the-lumbar-center/non-surgical-options/" className={linkClass}>
          View all non surgical options →
        </Link>
      </p>
    </>
  )
}

export function CervicalNonSurgicalExcerpt() {
  return (
    <>
      <p>
        The Cervical Center works with the team at Spine Options to provide non operative care for patients. Most patients who
        present with some form of neck pain, upper extremity weakness or numbness, or lower extremity weakness or numbness within
        the diagnosis of cervical spine disorders will not need surgery. Most symptoms improve over time with conservative
        treatment.
      </p>
      <h3>Physical therapy</h3>
      <p>
        We develop personalized physical therapy prescriptions based on your specific needs and refer you to experienced local
        providers. These programs improve strength, flexibility, and posture, helping to reduce pain, enhance mobility, and
        promote long term spinal health.
      </p>
      <h3>Epidural injections</h3>
      <p>
        For patients who may benefit from epidural steroid injections, we provide expert evaluations and referrals to trusted
        local physicians who specialize in pain management. These injections can reduce inflammation and nerve related pain caused
        by conditions such as disc herniation or foraminal stenosis, offering relief with minimal downtime.
      </p>
      <h3>Medication</h3>
      <p>
        Most neck pain improves with non steroidal anti inflammatory agents such as Motrin, Aleve, Advil, and Tylenol. Any patient
        with numbness or weakness is a more urgent matter and should undergo an MRI of their cervical spine regardless of pain
        level.
      </p>
      <p>
        <Link href="/cervical-center/non-surgical-options/" className={linkClass}>
          View all non surgical options →
        </Link>
      </p>
    </>
  )
}

type LumbarProcedure = 'microdiscectomy' | 'laminectomy' | 'foraminotomy' | 'tlif' | 'tumor'

export function LumbarSurgicalExcerpt({ procedures }: { procedures: LumbarProcedure[] }) {
  const blocks: Record<LumbarProcedure, ReactNode> = {
    microdiscectomy: (
      <>
        <h3>Lumbar microdiscectomy</h3>
        <p>
          This surgery is performed for patients with lumbar radiculopathy from a disc herniation or foraminal stenosis. Patients
          are put to sleep with general anesthesia and turned prone. The level is localized through x ray and accessed through a
          small incision in the lower back measuring 1.5 inches in length. Using a microscope, a small amount of the lamina is
          removed and the disc space identified. The disc fragment is then removed, leaving the majority of the non herniated disc
          intact. The surgery takes approximately 45 minutes. Patients usually go home the same day.
        </p>
      </>
    ),
    laminectomy: (
      <>
        <h3>Lumbar laminectomy</h3>
        <p>
          This surgery is performed for patients who have lumbar stenosis presenting with neurogenic claudication. MRI shows
          compression of the nerve roots centrally at one or multiple levels. During surgery, the lamina are removed as well as a
          small part of the facet joint to decompress the nerves and thecal sac. The surgery takes approximately 45 minutes.
          Patients usually go home the same day.
        </p>
      </>
    ),
    foraminotomy: (
      <>
        <h3>Lumbar foraminotomy</h3>
        <p>
          A lumbar foraminotomy is a surgical procedure designed to relieve nerve compression by enlarging the foramen, the passage
          where spinal nerves exit the spinal column. It is most commonly performed at the L3-4, L4-5, and L5-S1 levels. Most
          surgeons have seen success with this procedure for patients with lumbar foraminal stenosis, which can cause radiating leg
          pain, numbness, or weakness due to nerve compression.
        </p>
        <p>
          This procedure is often recommended when conservative treatments such as physical therapy, medication, or injections have
          failed to provide relief. The surgery takes approximately 60 to 90 minutes. Patients usually go home the same day.
        </p>
      </>
    ),
    tlif: (
      <>
        <h3>Lumbar fusion and decompression (TLIF)</h3>
        <p>
          Transforaminal lumbar interbody fusion, or TLIF, is a fusion procedure that decompresses the neural elements and
          stabilizes the level. This is the typical procedure for degenerative spondylolisthesis or instability with radicular
          symptoms. Most patients go home within a day or two of surgery.
        </p>
      </>
    ),
    tumor: (
      <>
        <h3>Lumbar tumor resection</h3>
        <p>
          Also known as a minimally invasive lateral approach, this technique removes tumors in the lumbar spine while preserving
          spinal stability. It is most commonly performed at the L2-3, L3-4, and sometimes L4-5 levels. Surgeons have seen success
          with this procedure for tumor removal with minimal disruption to surrounding muscles and structures.
        </p>
      </>
    ),
  }

  return (
    <>
      <p>
        Patients are initially evaluated by a physiatrist to ensure all non surgical options, including physical therapy and non
        narcotic pain management, are exhausted before considering a surgical solution.
      </p>
      {procedures.map((key) => (
        <div key={key}>{blocks[key]}</div>
      ))}
      <p>
        <Link href="/the-lumbar-center/surgical-options/" className={linkClass}>
          View all surgical options →
        </Link>
      </p>
    </>
  )
}

type CervicalProcedure = 'acdf' | 'acdr' | 'posterior'

export function CervicalSurgicalExcerpt({ procedures }: { procedures: CervicalProcedure[] }) {
  const blocks: Record<CervicalProcedure, ReactNode> = {
    acdf: (
      <>
        <h3>Anterior cervical discectomy and fusion</h3>
        <p>
          Anterior cervical discectomy and fusion, or ACDF, is a surgical procedure used to treat patients with a compressed nerve
          or spinal cord who do not improve with conservative care. If a patient has a compressed spinal cord and exhibits any
          symptoms, they will most likely need to undergo surgery regardless of their response to conservative care, since
          conservative care is unlikely to improve the symptoms.
        </p>
        <p>
          The incision is made in the front of the neck, usually in a horizontal skin fold. The surgeon removes the disc to allow
          access to the spinal cord and spinal nerves. Once the disc is removed, the surgeon frees the compressed nerve or spinal
          cord to provide relief. Since there is no disc remaining, the surgeon replaces it with a spacer and secures the spacer
          with a plating system.
        </p>
      </>
    ),
    acdr: (
      <>
        <h3>Anterior cervical disc replacement</h3>
        <p>
          Anterior cervical disc replacement, or ACDR, is a surgical procedure used to treat patients with a compressed nerve or
          spinal cord who do not improve with conservative care. The surgeon removes the disc and replaces it with a synthetic disc
          device that allows motion. This can be done at one or two levels, but not three levels.
        </p>
      </>
    ),
    posterior: (
      <>
        <h3>Posterior decompression and fusion</h3>
        <p>
          Used for severe, multi level stenosis such as C3-4 to C6-7, where an anterior approach may not be sufficient.
        </p>
      </>
    ),
  }

  return (
    <>
      <p>
        Patients are initially evaluated by a physiatrist to ensure all non surgical options, including physical therapy and non
        narcotic pain management, are exhausted before considering a surgical solution.
      </p>
      {procedures.map((key) => (
        <div key={key}>{blocks[key]}</div>
      ))}
      <p>
        <Link href="/cervical-center/surgical-options/" className={linkClass}>
          View all surgical options →
        </Link>
      </p>
    </>
  )
}
