/** Titles target 50–60 chars (keyword first, | ISS last). Descriptions target 150–160 chars. */

export type PageSeo = { title: string; description: string }

export const PAGE_SEO = {
  home: {
    title: 'Spine Surgery Specialists West Harrison NY | ISS',
    description:
      'Board certified spine surgery for cervical and lumbar disorders. Over 4,000 successful procedures. Request a consultation in West Harrison, NY. Call (914) 948 3008 today.',
  },
  providers: {
    title: 'Dr. John Abrahams MD Neurosurgeon Westchester | ISS',
    description:
      'Meet Dr. John M. Abrahams, board certified neurosurgeon in West Harrison, NY. Past President of BSSNY. Schedule a spine consultation online or call (914) 948 3008.',
  },
  meetDrAbrahams: {
    title: 'Meet Dr. Abrahams Spine Surgeon West Harrison | ISS',
    description:
      'Request a consultation with Dr. John M. Abrahams, MD. Board certified neurosurgeon serving Westchester with cervical and lumbar spine expertise. Call (914) 948 3008.',
  },
  locations: {
    title: 'Spine Surgery Office West Harrison NY Location | ISS',
    description:
      'Visit the Institute For Spine Surgery at 244 Westchester Avenue, Suite 209, West Harrison, NY 10604. Directions, hours, and parking. Call (914) 948 3008 to plan your visit.',
  },
  appointments: {
    title: 'Book Spine Surgery Consultation West Harrison | ISS',
    description:
      'Request a secure appointment with our neurosurgical team in West Harrison, NY. We respond within one business day. Prefer to call? Dial (914) 948 3008 Monday through Friday.',
  },
  insurance: {
    title: 'Insurance and Billing Spine Surgery Westchester | ISS',
    description:
      'Insurance and billing information for the Institute For Spine Surgery in West Harrison, NY. Accepted plans, Medicare details, and billing contact. Call (914) 948 3008 with questions.',
  },
  innovations: {
    title: 'Spine Surgery Innovations and Medical Devices | ISS',
    description:
      'Explore medical devices and surgical innovations developed by Dr. John Abrahams, including EndoMedix, Capseus, OnCallX, and neurosurgical robotics research. Learn more today.',
  },
  inTheNews: {
    title: 'Spine Surgery News and Publications | ISS Health',
    description:
      'Read news, publications, and announcements from Dr. John M. Abrahams and the Institute For Spine Surgery team. Stay informed on advances in brain and spine care.',
  },
  cervicalCenter: {
    title: 'Cervical Spine Center Neck Pain Treatment | ISS',
    description:
      'The Cervical Center treats stenosis, disc herniation, myelopathy, and radiculopathy with a multidisciplinary team. Explore conditions and treatment paths. Call (914) 948 3008.',
  },
  lumbarCenter: {
    title: 'Lumbar Spine Center Lower Back Care | ISS Health',
    description:
      'The Lumbar Center treats disc herniation, stenosis, spondylolisthesis, foot drop, and more. Non surgical care first, surgery when needed. Request a consult: (914) 948 3008.',
  },
  cervicalSurgical: {
    title: 'Cervical Spine Surgery ACDF and Disc Replacement | ISS',
    description:
      'Cervical surgical options include ACDF and disc replacement when conservative care is not enough. Learn candidacy, recovery, and what to expect. Call (914) 948 3008 for evaluation.',
  },
  cervicalNonSurgical: {
    title: 'Non Surgical Cervical Spine Treatment Options | ISS',
    description:
      'Conservative cervical care including therapy, injections, and medication for neck pain and nerve symptoms. Most patients improve without surgery. Schedule evaluation: (914) 948 3008.',
  },
  lumbarSurgical: {
    title: 'Lumbar Spine Surgery Microdiscectomy and Fusion | ISS',
    description:
      'Lumbar surgical options include microdiscectomy, laminectomy, foraminotomy, TLIF, and XLIF when indicated. Understand recovery timelines and candidacy. Call (914) 948 3008.',
  },
  lumbarNonSurgical: {
    title: 'Non Surgical Lumbar Spine Treatment Westchester | ISS',
    description:
      'Non surgical lumbar care with physical therapy, epidural injections, radiofrequency ablation, and coordinated pain management. Start conservative treatment: (914) 948 3008.',
  },
  cervicalSpineLanding: {
    title: 'Cervical Spine Surgery West Harrison NY | ISS',
    description:
      'Expert cervical spine surgery for stenosis, disc herniation, myelopathy, and radiculopathy. Board certified neurosurgery with thousands of procedures performed. Call (914) 948 3008.',
  },
  lumbarSpineLanding: {
    title: 'Lumbar Spine Surgery Lower Back Specialists | ISS',
    description:
      'Expert lumbar spine surgery including microdiscectomy, laminectomy, and fusion. Evidence based care in West Harrison, NY. Request a consultation online or call (914) 948 3008.',
  },
} satisfies Record<string, PageSeo>

export const CONDITION_SEO: Record<string, PageSeo> = {
  'cervical-degeneration': {
    title: 'Cervical Degeneration Treatment West Harrison | ISS',
    description:
      'Learn causes, symptoms, and treatment for cervical degeneration. Our team offers imaging, conservative care, and surgery when appropriate. Schedule evaluation: (914) 948 3008.',
  },
  'cervical-disc-herniation': {
    title: 'Cervical Disc Herniation Treatment Options | ISS',
    description:
      'Cervical disc herniation can compress nerves or the spinal cord. Review symptoms by level and treatment paths from conservative care to surgery. Call (914) 948 3008.',
  },
  'cervical-myelopathy': {
    title: 'Cervical Myelopathy Spinal Cord Treatment | ISS',
    description:
      'Cervical myelopathy is progressive spinal cord compression in the neck. Early MRI diagnosis matters. Learn surgical and non surgical options. Call (914) 948 3008.',
  },
  'cervical-radiculopathy': {
    title: 'Cervical Radiculopathy Pinched Nerve Care | ISS',
    description:
      'Arm pain, numbness, or weakness from cervical radiculopathy? Learn evaluation, injections, therapy, and when surgery helps. West Harrison neurosurgery: (914) 948 3008.',
  },
  'cervical-stenosis': {
    title: 'Cervical Stenosis Narrowing Treatment | ISS',
    description:
      'Cervical stenosis narrows the spinal canal and may cause neck pain, myelopathy, or radiculopathy. Explore diagnosis and treatment with our cervical team. (914) 948 3008.',
  },
  'foot-drop': {
    title: 'Foot Drop L5 Nerve Treatment Westchester | ISS',
    description:
      'Foot drop often signals L5 nerve compression from disc herniation or stenosis. Learn urgent evaluation, imaging, and treatment options. Call (914) 948 3008 for an appointment.',
  },
  'low-back-pain': {
    title: 'Low Back Pain Diagnosis and Treatment | ISS',
    description:
      'Low back pain evaluation identifies muscle, joint, and nerve causes. Explore non surgical and surgical paths with board certified spine surgeons. Call (914) 948 3008.',
  },
  'lumbar-degeneration': {
    title: 'Lumbar Degeneration Disc Disease Treatment | ISS',
    description:
      'Lumbar degeneration causes back and leg symptoms after age forty. Learn imaging, therapy, injections, and when fusion or decompression helps. Call (914) 948 3008.',
  },
  'lumbar-disc-herniation': {
    title: 'Lumbar Disc Herniation Sciatica Treatment | ISS',
    description:
      'Lumbar disc herniation can cause leg pain and nerve compression. Most cases improve with conservative care. Learn when surgery is appropriate. Call (914) 948 3008.',
  },
  'lumbar-fracture': {
    title: 'Lumbar Fracture Treatment and Recovery | ISS',
    description:
      'Lumbar fractures range from stable injuries to surgical emergencies. Understand causes, imaging, bracing, and operative options with our spine team. Call (914) 948 3008.',
  },
  'lumbar-radiculopathy': {
    title: 'Lumbar Radiculopathy Leg Pain Treatment | ISS',
    description:
      'Lumbar radiculopathy causes radiating leg pain from nerve root compression. Review diagnosis, injections, therapy, and surgical decompression. Call (914) 948 3008.',
  },
  'lumbar-spondylolisthesis': {
    title: 'Lumbar Spondylolisthesis Slippage Treatment | ISS',
    description:
      'Vertebral slippage can cause back and leg pain. Learn degenerative and isthmic types, grading, and fusion options when instability is present. Call (914) 948 3008.',
  },
  'lumbar-stenosis': {
    title: 'Lumbar Stenosis Canal Narrowing Treatment | ISS',
    description:
      'Lumbar stenosis narrows the spinal canal and may cause neurogenic claudication. Compare injections, therapy, and decompression surgery. West Harrison: (914) 948 3008.',
  },
  'neurogenic-claudication': {
    title: 'Neurogenic Claudication Leg Pain Treatment | ISS',
    description:
      'Neurogenic claudication from lumbar stenosis causes walking pain relieved by sitting or leaning forward. Learn diagnosis and treatment options. Call (914) 948 3008.',
  },
  'spinal-cord-tumor': {
    title: 'Spinal Cord Tumor Evaluation and Treatment | ISS',
    description:
      'Spinal cord tumors require multidisciplinary evaluation. Learn how location, growth, and symptoms guide observation, biopsy, or resection. Call (914) 948 3008.',
  },
}
