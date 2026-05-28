import type { ReactNode } from 'react'
import { buildOverview, ConditionPageSections } from '@/content/condition-page-sections'
import {
  CervicalNonSurgicalExcerpt,
  CervicalSurgicalExcerpt,
} from '@/content/condition-treatment-excerpts'

export const cervicalConditionContent: Record<string, ReactNode> = {
  'cervical-degeneration': (
    <ConditionPageSections
      overview={buildOverview([
        'Cervical degeneration is a chronic, progressive condition caused by arthritis in the cervical spine. Over time, the spinal discs wear down, losing their ability to cushion and support the bones. This can lead to a bone on bone effect between vertebrae, producing pain as the most common symptom. As the discs deteriorate, some patients experience neck pain, shoulder pain, or radiating arm pain. Not everyone with cervical degeneration develops symptoms.',
        'Smoking is a major accelerator and continues to affect outcomes even after surgery. While surgery may relieve symptoms, cervical degeneration can progress with age, potentially causing issues at other levels of the spine over time. Possible complications include foraminal stenosis, narrowing around a nerve root that can lead to arm pain or weakness, and osteophytes with central cervical stenosis that can compress the spinal cord.',
        'Cervical degeneration typically occurs after age forty and may or may not be associated with a cervical disc herniation. Some patients have severe symptoms from a herniated disc without significant degeneration. Imaging with x ray, CT, and MRI is essential to evaluate bone alignment, osteophytes, and soft tissue involvement.',
      ])}
      nonSurgical={
        <>
          <CervicalNonSurgicalExcerpt />
          <p>Most patients start with conservative care including non steroidal anti inflammatory drugs and physical therapy.</p>
        </>
      }
      surgical={<CervicalSurgicalExcerpt procedures={['acdf']} />}
    />
  ),

  'cervical-disc-herniation': (
    <ConditionPageSections
      overview={buildOverview([
        'A cervical disc herniation occurs when a fragment of the cervical disc breaks off and compresses a spinal nerve or the spinal cord. This compression can cause pain that radiates down the arm, depending on which nerve is affected.',
        'When a herniated disc compresses a nerve, it can lead to cervical radiculopathy, causing pain, numbness, or weakness in the arms. Radiculopathy can also result from cervical degeneration and foraminal stenosis, where narrowing pinches the nerve. If the disc herniation is large and centrally located, it can compress the spinal cord, leading to cervical myelopathy.',
        'The C5-6 and C6-7 levels are the most commonly affected. Most patients do not recall a specific injury. Symptoms can develop gradually without a clear cause. Pain is usually on one side, but a large central herniation may cause widespread symptoms. Acute pain may subside over time, sometimes transitioning into a dull, chronic ache.',
      ])}
      nonSurgical={
        <>
          <CervicalNonSurgicalExcerpt />
          <p>
            Most cases of cervical radiculopathy improve with conservative treatment including rest, non steroidal anti inflammatory
            drugs, physical therapy, and pain management. With early symptom recognition and appropriate care, many patients manage
            their condition without surgery.
          </p>
        </>
      }
      surgical={<CervicalSurgicalExcerpt procedures={['acdf', 'acdr']} />}
    />
  ),

  'cervical-myelopathy': (
    <ConditionPageSections
      overview={buildOverview([
        'Cervical myelopathy is a condition caused by compression of the spinal cord within the cervical spine. It develops slowly and progressively, often leading to hand weakness and numbness, difficulty with fine motor skills such as buttoning clothes or holding small objects, and dropping items more frequently.',
        'Patients may not immediately notice their decline in hand function. Often, a spouse or close family member is the first to recognize subtle changes. Over time, muscle atrophy in the hands can develop, making symptoms more apparent. If left untreated, cervical myelopathy can progress to walking difficulties.',
        'Patients may adopt a wide based, slow gait to maintain balance and, in severe cases, may experience frequent falls. Causes include a large central disc herniation that compresses the spinal cord and osteophytes from cervical degeneration leading to spinal cord compression. MRI of the cervical spine without contrast is the best way to diagnose cervical myelopathy.',
      ])}
      nonSurgical={<CervicalNonSurgicalExcerpt />}
      surgical={
        <>
          <CervicalSurgicalExcerpt procedures={['acdf', 'posterior']} />
          <p>
            Unlike other spinal conditions, cervical myelopathy rarely improves with physical therapy or conservative care. In most
            cases surgery is necessary to relieve spinal cord compression, especially when myelomalacia is present.
          </p>
        </>
      }
    />
  ),

  'cervical-radiculopathy': (
    <ConditionPageSections
      overview={buildOverview([
        'Cervical radiculopathy can produce arm symptoms with pain, numbness, or weakness, or hand symptoms with pain, numbness, or weakness, or any combination. Compression of a cervical nerve can cause pain to radiate from the base of the neck into the arm and hand, depending on which levels are affected.',
        'Arm weakness with or without numbness can also be a symptom. A compressed nerve can cause arm weakness all the way to the hand. The arm muscles involved can include the deltoid, biceps, triceps, forearm, or hand. Symptoms from the deltoid or shoulder occur when C5 is compressed. The biceps involves the C5 or C6 nerve roots. The triceps involves the C7 nerve root.',
        'Hand numbness alone can occur with compression of the lower cervical nerves, C6, C7, C8, and T1, in some or most of the hand. Hand weakness can also occur with compression of the lower cervical nerves. If there is bilateral hand numbness, it is most likely because of cervical myelopathy.',
      ])}
      nonSurgical={<CervicalNonSurgicalExcerpt />}
      surgical={<CervicalSurgicalExcerpt procedures={['acdf']} />}
    />
  ),

  'cervical-stenosis': (
    <ConditionPageSections
      overview={buildOverview([
        'Cervical stenosis is a condition caused by progressive cervical degeneration, leading to a narrowing of the spinal canal. As the spinal discs lose height and integrity, they can no longer cushion the cervical bones properly. This stress triggers the formation of osteophytes, or bone spurs, which can grow in different directions.',
        'Osteophytes growing posteriorly toward the back can compress the spinal cord, potentially leading to cervical myelopathy. Some patients with cervical stenosis do not experience symptoms, even with spinal cord compression. When symptomatic, patients may develop neck pain or cervical myelopathy with spinal cord compression symptoms.',
        'When the condition affects nerve roots, it can cause cervical radiculopathy, with pain, numbness, or weakness radiating down the arms. The gold standard for diagnosing cervical stenosis is an MRI of the cervical spine, which allows doctors to assess spinal cord compression and nerve involvement.',
      ])}
      nonSurgical={
        <>
          <CervicalNonSurgicalExcerpt />
          <p>Most patients start with conservative care including non steroidal anti inflammatory drugs and physical therapy.</p>
        </>
      }
      surgical={<CervicalSurgicalExcerpt procedures={['acdf', 'posterior']} />}
    />
  ),
}
