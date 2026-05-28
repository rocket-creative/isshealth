/** MedicalCondition JSON-LD fields sourced from existing on-page copy only. */

export type ConditionSchemaDetails = {
  alternateName?: string[]
  associatedAnatomy?: { name: string; bodyLocation?: string }
  possibleTreatment?: string[]
}

export const CONDITION_SCHEMA_DETAILS: Record<string, ConditionSchemaDetails> = {
  'cervical-degeneration': {
    alternateName: ['Cervical Arthritis'],
    associatedAnatomy: { name: 'Cervical Spine', bodyLocation: 'Neck' },
    possibleTreatment: ['Physical Therapy', 'Epidural Injection'],
  },
  'cervical-disc-herniation': {
    alternateName: ['Herniated Cervical Disc'],
    associatedAnatomy: { name: 'Cervical Spine', bodyLocation: 'Neck, C3-T1' },
    possibleTreatment: ['Physical Therapy', 'Anterior Cervical Discectomy and Fusion'],
  },
  'cervical-myelopathy': {
    associatedAnatomy: { name: 'Cervical Spine', bodyLocation: 'Spinal cord, neck' },
    possibleTreatment: ['Anterior Cervical Discectomy and Fusion', 'Posterior Decompression and Fusion'],
  },
  'cervical-radiculopathy': {
    alternateName: ['Pinched Nerve in the Neck'],
    associatedAnatomy: { name: 'Cervical Spine', bodyLocation: 'Neck nerve roots' },
    possibleTreatment: ['Physical Therapy', 'Epidural Injection'],
  },
  'cervical-stenosis': {
    associatedAnatomy: { name: 'Cervical Spine', bodyLocation: 'Cervical spinal canal' },
    possibleTreatment: ['Anterior Cervical Decompression and Fusion', 'Posterior Decompression and Fusion'],
  },
  'foot-drop': {
    associatedAnatomy: { name: 'Lumbar Spine', bodyLocation: 'L5 nerve root, L4-5 and L5-S1' },
    possibleTreatment: ['Physical Therapy', 'Epidural Injection', 'Micro Foraminotomy'],
  },
  'low-back-pain': {
    associatedAnatomy: { name: 'Lumbar Spine', bodyLocation: 'Lower back' },
    possibleTreatment: ['Physical Therapy', 'Epidural Injection', 'Lumbar Fusion'],
  },
  'lumbar-degeneration': {
    alternateName: ['Degenerative Disc Disease', 'Degenerative Joint Disease'],
    associatedAnatomy: { name: 'Lumbar Spine', bodyLocation: 'Lower back' },
    possibleTreatment: ['Physical Therapy', 'Epidural Injection', 'Lumbar Fusion'],
  },
  'lumbar-disc-herniation': {
    alternateName: ['Herniated Disc', 'Slipped Disc', 'Ruptured Disc'],
    associatedAnatomy: { name: 'Lumbar Spine', bodyLocation: 'Lower back, L4-5 and L5-S1' },
    possibleTreatment: ['Microdiscectomy', 'Physical Therapy', 'Epidural Injection'],
  },
  'lumbar-fracture': {
    associatedAnatomy: { name: 'Lumbar Spine', bodyLocation: 'Lower back vertebrae' },
    possibleTreatment: ['Kyphoplasty', 'Lumbar Fusion'],
  },
  'lumbar-radiculopathy': {
    alternateName: ['Pinched Nerve in the Lower Back'],
    associatedAnatomy: { name: 'Lumbar Spine', bodyLocation: 'Lumbar nerve roots' },
    possibleTreatment: ['Physical Therapy', 'Epidural Injection'],
  },
  'lumbar-spondylolisthesis': {
    alternateName: ['Vertebral Slippage', 'Bone Slip'],
    associatedAnatomy: { name: 'Lumbar Spine', bodyLocation: 'Lower spine' },
    possibleTreatment: ['Physical Therapy', 'Epidural Injection', 'Lumbar Fusion'],
  },
  'lumbar-stenosis': {
    associatedAnatomy: { name: 'Lumbar Spine', bodyLocation: 'L4-5 or L3-4' },
    possibleTreatment: ['Physical Therapy', 'Epidural Injection', 'Laminectomy'],
  },
  'neurogenic-claudication': {
    associatedAnatomy: { name: 'Lumbar Spine', bodyLocation: 'Central lumbar spinal canal' },
    possibleTreatment: ['Physical Therapy', 'Epidural Injection', 'Laminectomy'],
  },
  'spinal-cord-tumor': {
    associatedAnatomy: { name: 'Spinal Cord' },
    possibleTreatment: ['Multidisciplinary Evaluation', 'Surgical Resection'],
  },
}

export function getConditionSchemaDetails(slug: string): ConditionSchemaDetails | undefined {
  return CONDITION_SCHEMA_DETAILS[slug]
}
