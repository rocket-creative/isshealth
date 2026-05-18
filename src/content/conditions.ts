export type ConditionKind = 'cervical' | 'lumbar'

export type Condition = {
  slug: string
  kind: ConditionKind
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
}

export const cervicalConditions: Record<string, Condition> = {
  'cervical-degeneration': {
    slug: 'cervical-degeneration',
    kind: 'cervical',
    title: 'Cervical Degeneration',
    metaTitle: 'Cervical Degeneration | Causes, Symptoms, and Treatment',
    metaDescription:
      'Cervical degeneration is a progressive arthritis of the cervical spine. Learn symptoms, diagnosis, and treatment options from the Institute For Spine Surgery.',
    intro:
      'A chronic, progressive arthritis of the cervical spine. Over time, the discs wear down and can produce neck pain, radiating pain, and in some cases myelopathy or radiculopathy.',
  },
  'cervical-disc-herniation': {
    slug: 'cervical-disc-herniation',
    kind: 'cervical',
    title: 'Cervical Disc Herniation',
    metaTitle: 'Cervical Disc Herniation | Nerve Compression and Treatment',
    metaDescription:
      'A cervical disc herniation can compress a spinal nerve or the spinal cord. Learn symptom patterns by level and the treatment options available.',
    intro:
      'A cervical disc herniation occurs when a fragment of the cervical disc breaks off and compresses a spinal nerve or the spinal cord, producing pain that may radiate down the arm.',
  },
  'cervical-myelopathy': {
    slug: 'cervical-myelopathy',
    kind: 'cervical',
    title: 'Cervical Myelopathy',
    metaTitle: 'Cervical Myelopathy | Spinal Cord Compression Treatment',
    metaDescription:
      'Cervical myelopathy is a progressive compression of the spinal cord. MRI is the gold standard for diagnosis. Surgery is usually the primary treatment.',
    intro:
      'Cervical myelopathy is a progressive compression of the spinal cord in the neck. It can cause hand weakness, numbness, and difficulty with fine motor skills. Early diagnosis is critical.',
  },
  'cervical-radiculopathy': {
    slug: 'cervical-radiculopathy',
    kind: 'cervical',
    title: 'Cervical Radiculopathy',
    metaTitle: 'Cervical Radiculopathy | Pinched Nerve in the Neck',
    metaDescription:
      'Cervical radiculopathy produces arm pain, numbness, or weakness from a compressed cervical nerve. Learn symptoms by level and treatment options.',
    intro:
      'Cervical radiculopathy can cause arm pain, hand pain, numbness, weakness, or any combination. Compression of a cervical nerve can produce symptoms that radiate down the arm into the hand.',
  },
  'cervical-stenosis': {
    slug: 'cervical-stenosis',
    kind: 'cervical',
    title: 'Cervical Stenosis',
    metaTitle: 'Cervical Stenosis | Narrowing of the Cervical Spinal Canal',
    metaDescription:
      'Cervical stenosis is a narrowing of the cervical spinal canal from progressive degeneration. Symptoms range from neck pain to myelopathy or radiculopathy.',
    intro:
      'Cervical stenosis is a narrowing of the spinal canal caused by progressive cervical degeneration. Symptoms range from none to neck pain, myelopathy, or radiculopathy.',
  },
}

export const lumbarConditions: Record<string, Condition> = {
  'foot-drop': {
    slug: 'foot-drop',
    kind: 'lumbar',
    title: 'Foot Drop',
    metaTitle: 'Foot Drop | L5 Nerve Compression and Treatment',
    metaDescription:
      'Foot drop is commonly caused by L5 nerve compression from a disc herniation, foraminal stenosis, or spondylolisthesis. Learn diagnosis and treatment.',
    intro:
      'Foot drop is a common diagnosis when the L5 nerve is compressed from a disc herniation, foraminal stenosis, or spondylolisthesis. Patients cannot dorsiflex or lift the foot while walking.',
  },
  'low-back-pain': {
    slug: 'low-back-pain',
    kind: 'lumbar',
    title: 'Low Back Pain',
    metaTitle: 'Low Back Pain | Diagnosis and Treatment',
    metaDescription:
      'Low back pain affects over six to twelve million Americans per year. Learn evaluation, non surgical, and surgical treatment options.',
    intro:
      'Low back pain is the most common condition affecting the lumbar spine, producing discomfort in over six to twelve million Americans per year. Pain generators include muscle, joint, and nerve.',
  },
  'lumbar-degeneration': {
    slug: 'lumbar-degeneration',
    kind: 'lumbar',
    title: 'Lumbar Degeneration',
    metaTitle: 'Lumbar Degeneration | Degenerative Disc and Joint Disease',
    metaDescription:
      'Lumbar degeneration, also known as degenerative disc disease, typically affects patients over 40. Learn diagnosis and treatment options.',
    intro:
      'Lumbar degeneration, also known as lumbar arthritis, degenerative disc disease, or degenerative joint disease, usually affects patients after the age of forty. It can cause low back pain, leg pain, or both.',
  },
  'lumbar-disc-herniation': {
    slug: 'lumbar-disc-herniation',
    kind: 'lumbar',
    title: 'Lumbar Disc Herniation',
    metaTitle: 'Lumbar Disc Herniation | Sciatica and Nerve Compression',
    metaDescription:
      'A lumbar disc herniation compresses a nerve or the thecal sac, producing leg pain. Most cases resolve with non surgical care.',
    intro:
      'A lumbar disc herniation occurs when a piece of disc material breaks off and compresses a nerve or the thecal sac. Most symptomatic disc herniations resolve on their own over time.',
  },
  'lumbar-fracture': {
    slug: 'lumbar-fracture',
    kind: 'lumbar',
    title: 'Lumbar Fracture',
    metaTitle: 'Lumbar Fracture | Treatment and Recovery',
    metaDescription:
      'A lumbar fracture is a break in one or more vertebrae of the lower back. Learn causes, diagnosis, and treatment options.',
    intro:
      'A lumbar fracture is a break or crack in one or more of the vertebrae in the lower back. Severity and treatment approach vary widely with the type and extent of the injury.',
  },
  'lumbar-radiculopathy': {
    slug: 'lumbar-radiculopathy',
    kind: 'lumbar',
    title: 'Lumbar Radiculopathy',
    metaTitle: 'Lumbar Radiculopathy | Pinched Nerve Leg Pain',
    metaDescription:
      'Lumbar radiculopathy is usually caused by a lumbar disc herniation or foraminal stenosis. Learn symptoms and treatment options.',
    intro:
      'Lumbar radiculopathy is usually due to a lumbar disc herniation or foraminal stenosis. Pain can radiate down the leg based on which nerve root is compressed.',
  },
  'lumbar-spondylolisthesis': {
    slug: 'lumbar-spondylolisthesis',
    kind: 'lumbar',
    title: 'Lumbar Spondylolisthesis',
    metaTitle: 'Lumbar Spondylolisthesis | Vertebral Slippage Treatment',
    metaDescription:
      'Lumbar spondylolisthesis is when one vertebra shifts relative to another. Learn degenerative and isthmic types and treatment options.',
    intro:
      'Lumbar spondylolisthesis, or bone slip, is when one vertebra is shifted relative to another, most commonly in the lower spine. It can cause back pain, leg pain, or both.',
  },
  'lumbar-stenosis': {
    slug: 'lumbar-stenosis',
    kind: 'lumbar',
    title: 'Lumbar Stenosis',
    metaTitle: 'Lumbar Stenosis | Central Canal Narrowing and Treatment',
    metaDescription:
      'Lumbar stenosis is a narrowing of the spinal canal that can cause neurogenic claudication. Learn non surgical and surgical options.',
    intro:
      'Lumbar stenosis is a narrowing of the spinal canal that most often occurs at L4-5 or L3-4. It is a key cause of neurogenic claudication and typically worsens over time.',
  },
  'neurogenic-claudication': {
    slug: 'neurogenic-claudication',
    kind: 'lumbar',
    title: 'Neurogenic Claudication',
    metaTitle: 'Neurogenic Claudication | Lumbar Stenosis Leg Pain',
    metaDescription:
      'Neurogenic claudication is a symptom of central lumbar stenosis. It produces back and leg pain that improves with sitting or leaning forward.',
    intro:
      'Neurogenic claudication is a symptom caused by central lumbar stenosis. Pain travels down the legs bilaterally when walking and improves with sitting or leaning forward.',
  },
  'spinal-cord-tumor': {
    slug: 'spinal-cord-tumor',
    kind: 'lumbar',
    title: 'Spinal Cord Tumor',
    metaTitle: 'Spinal Cord Tumor | Evaluation and Treatment',
    metaDescription:
      'Spinal cord tumors require a multidisciplinary evaluation. Learn how location, histology, and symptoms drive treatment planning.',
    intro:
      'Spinal cord tumors are usually benign in adults and malignant in children. Treatment requires a multidisciplinary team and careful assessment of location, growth, and symptoms.',
  },
}

export function allCervicalSlugs() {
  return Object.keys(cervicalConditions)
}

export function allLumbarSlugs() {
  return Object.keys(lumbarConditions)
}
