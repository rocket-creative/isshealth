import type { FaqItem } from '@/components/FaqSection'

const sharedInsuranceAnswer =
  'Our practice accepts most major insurance plans. Call (914) 948 3008 to confirm coverage before your appointment. Bring your insurance card and any prior imaging on the day of your visit.'

export const cervicalCenterFaqs: FaqItem[] = [
  {
    question: 'I have neck pain. Do I need an MRI?',
    answer:
      'Most neck pain improves with non steroidal anti inflammatory agents such as Motrin, Aleve, Advil, and Tylenol. If your pain is persistent for more than a few weeks, you should consult your primary care physician about whether you should see a specialist and obtain imaging studies. Any patient with numbness or weakness is a more urgent matter and should undergo an MRI of the cervical spine regardless of pain level.',
  },
  {
    question: 'Should I try physical therapy?',
    answer:
      'Any patient with persistent and worsening symptoms greater than four to six weeks is a candidate for a cervical spine evaluation. Most patients undergo an MRI to develop a diagnosis with their clinical presentation. If the patient is diagnosed with arthritis or cervical degeneration without any nerve root or spinal cord compression, they are a good candidate for an initial course of physical therapy. Most providers send patients to therapy for six to eight weeks and only continue if they improve after the initial course.',
  },
  {
    question: 'Should I try an epidural injection?',
    answer:
      'An epidural injection will work for a pinched nerve or cervical radiculopathy. Most pain management providers try a selective epidural on the compressed nerve for some form of relief. They will attempt up to three injections. If there is no improvement in the presence of a compressed nerve, they may refer to a surgeon.',
  },
  {
    question: 'Can acupuncture help me?',
    answer:
      'Acupuncture is extremely helpful for someone with persistent muscle spasms without nerve root compression and without myelopathy. Constant neck pain can cause the muscles of the neck and shoulders to remain in spasm. Acupuncture helps in this specific situation.',
  },
  {
    question: 'Who needs surgery after non surgical care?',
    answer:
      'Patients who present with any sort of neurological deficit are candidates for surgery sooner than later. This includes severe weakness of the upper extremities from a pinched nerve or progressive cervical stenosis causing cord compression. Patients with mild to moderate symptoms are evaluated based on the extent of any deficits, length of symptoms, and overall function.',
  },
  {
    question: 'Do I need to wear a collar after cervical spine surgery?',
    answer:
      'Most patients who undergo anterior cervical surgery through a one level, two level, or three level surgery will not be required to wear a collar. Fusion rates are higher now, patient education on postoperative care is better, and fusion technology has improved. A small number of patients involved in a traumatic accident with or without cervical spine surgery may be required to wear a collar for instability, but this is a minority, under five percent.',
  },
  {
    question: 'Are you taking bone from my hip if I have a cervical fusion?',
    answer:
      'The vast majority of spine surgeons do not take bone from your hip. As technology improved and allograft products became more available, the need for hip bone became less important. In this practice, we only use bone harvested from the patient through the same incision.',
  },
  {
    question: 'Do I need to stay in bed after cervical surgery?',
    answer:
      'Mobility is key. Over the past twenty years, surgical recovery has moved from immobility as the standard to mobility as the standard. We tell our patients to follow the 20 Minute Rule of changing position every twenty minutes, as mobility loosens muscles and improves pain.',
  },
  {
    question: 'Will I keep having more surgery after my first one?',
    answer:
      'The risk of needing additional surgery after a first cervical spine surgery is approximately four percent over a lifetime. This means about four patients out of one hundred surgical patients will need additional surgery, most likely on the level above or below the initial surgical level.',
  },
  {
    question: 'Is cervical disc replacement better than cervical fusion?',
    answer:
      'A research study evaluating the ten year outcome of single level cervical disc replacement versus anterior cervical discectomy and fusion in New York was published in the Journal of Neurosurgery — Spine in April 2023. The study included 7,450 patients. The analysis showed no significant differences in revision risk between the two groups. The CDR cohort had a higher incidence of postoperative swallowing difficulty while ACDF patients had a longer average hospital stay. Overall, this supports both procedures in terms of success and outcomes.',
  },
]

export const lumbarCenterFaqs: FaqItem[] = [
  {
    question: 'What conditions does the Lumbar Center treat?',
    answer:
      'We treat lumbar disc herniation, stenosis, spondylolisthesis, radiculopathy, degeneration, fractures, foot drop, neurogenic claudication, and selected spinal cord tumors. Each patient receives imaging review and a plan that starts with non surgical care when appropriate.',
  },
  {
    question: 'When is lumbar spine surgery recommended?',
    answer:
      'Surgery is considered when there is a progressive neurological deficit, severe pain that limits function after conservative care, or cauda equina symptoms. Many disc herniations improve within six to twelve weeks without surgery.',
  },
  {
    question: 'How long is recovery after lumbar microdiscectomy?',
    answer:
      'Many patients walk the day of surgery and return to desk work within two to four weeks. Heavy lifting and twisting are restricted for about six weeks. Your surgeon provides activity guidelines based on your job and overall health.',
  },
  {
    question: 'What non surgical options are available for low back pain?',
    answer:
      'We use physical therapy, anti inflammatory medication, epidural steroid injections, radiofrequency ablation, and coordinated pain management. Acupuncture may help selected muscle spasm patterns without nerve compression.',
  },
  {
    question: 'What insurance plans do you accept for lumbar care?',
    answer: sharedInsuranceAnswer,
  },
]

export const surgicalOptionsFaqs = (region: 'cervical' | 'lumbar'): FaqItem[] => {
  const label = region === 'cervical' ? 'cervical' : 'lumbar'
  return [
    {
      question: `Who is a candidate for ${label} spine surgery?`,
      answer: `Candidates typically have persistent arm or leg symptoms, a matching abnormality on MRI, and limited improvement after structured non surgical care. Patients with progressive weakness or spinal cord compression may need earlier surgical evaluation.`,
    },
    {
      question: `What is the difference between fusion and motion preserving surgery?`,
      answer: `Fusion stabilizes the segment after disc removal. Motion preserving options such as disc replacement may be appropriate for selected one or two level cervical cases. Your surgeon reviews alignment, bone quality, and symptom pattern before recommending a procedure.`,
    },
    {
      question: `Is ${label} spine surgery performed as outpatient surgery?`,
      answer: `Many one and two level anterior cervical procedures and selected lumbar decompressions go home the same day. Multilevel fusion or cases with medical comorbidities may require an overnight stay for monitoring.`,
    },
    {
      question: `What are realistic expectations after ${label} surgery?`,
      answer: `Most patients notice gradual improvement in nerve related pain over weeks. Numbness can take longer to resolve. Physical therapy and activity modification remain important during recovery to protect adjacent levels.`,
    },
    {
      question: 'How do I prepare for a surgical consultation?',
      answer:
        'Bring prior MRI or CT reports, a medication list, and notes about symptoms that limit work or sleep. Write down questions about risks, recovery time, and return to activity so we can address them during your visit.',
    },
  ]
}

export function getConditionFaqs(conditionTitle: string): FaqItem[] {
  return [
    {
      question: `What is ${conditionTitle}?`,
      answer: `Our clinical team explains ${conditionTitle} using your history, examination, and imaging. Symptoms vary by nerve or spinal cord involvement. An accurate diagnosis guides whether conservative care or surgery is the safest next step.`,
    },
    {
      question: `What are the most common symptoms of ${conditionTitle}?`,
      answer: `Symptoms may include neck or back pain, arm or leg pain, numbness, weakness, or balance changes when the spinal cord is involved. Severity and duration help determine urgency and treatment options.`,
    },
    {
      question: `How is ${conditionTitle} diagnosed?`,
      answer: `Evaluation usually includes a neurological examination and MRI. X ray or CT may assess bone alignment. We correlate imaging with your symptoms before recommending injections, therapy, or surgery.`,
    },
    {
      question: `What non surgical treatments help ${conditionTitle}?`,
      answer: `Physical therapy, medication, activity modification, and selective injections are common first steps. We monitor progress over four to eight weeks and escalate only when symptoms persist or neurologic deficits progress.`,
    },
    {
      question: `When should I call about ${conditionTitle} urgently?`,
      answer: `Seek urgent care for rapidly worsening weakness, loss of bowel or bladder control, saddle anesthesia, or severe pain after trauma. Call (914) 948 3008 for guidance if you are unsure how quickly to be seen.`,
    },
  ]
}
