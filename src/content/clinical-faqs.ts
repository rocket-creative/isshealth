import type { FaqItem } from '@/components/FaqSection'

export const cervicalCenterFaqs: FaqItem[] = [
  {
    question: 'I have neck pain. Do I need an MRI?',
    answer:
      'Most neck pain improves with non steroidal anti inflammatory agents such as Motrin, Aleve, Advil, and Tylenol. If your pain is persistent for more than a few weeks, you should consult your primary care physician about whether you should see a specialist and obtain imaging studies. Any patient with numbness or weakness is a more urgent matter and should undergo an MRI of the cervical spine regardless of pain level.',
  },
  {
    question: 'Should I try physical therapy?',
    answer:
      'Any patient with persistent and worsening symptoms beyond four to six weeks is a candidate for a cervical spine evaluation. Most patients undergo an MRI to pair a diagnosis with their clinical presentation. If the diagnosis is arthritis or cervical degeneration without any nerve root or spinal cord compression, they are a good candidate for an initial course of physical therapy. Most providers send patients to therapy for six to eight weeks and continue only if they improve after the initial course. If symptoms worsen, the patient may be referred to pain management or a surgeon.',
  },
  {
    question: 'Should I try an epidural injection?',
    answer:
      'An epidural injection can help a pinched nerve, or cervical radiculopathy. Most pain management providers try a selective epidural on the compressed nerve for relief, and may attempt up to three injections to achieve improvement. If there is no improvement while a nerve remains compressed, they may refer you to a surgeon.',
  },
  {
    question: 'Can acupuncture help me?',
    answer:
      'Acupuncture can be very helpful for someone with persistent muscle spasm, when there is no nerve root compression and no myelopathy. Constant neck pain can keep the muscles of the neck and shoulders in spasm, and acupuncture helps in that particular situation.',
  },
  {
    question: 'Who needs surgery after non surgical care?',
    answer:
      'Patients with any neurological deficit are candidates for surgery sooner rather than later. That includes severe weakness in the arms from a pinched nerve, or progressive cervical stenosis causing cord compression. Patients with mild to moderate symptoms are evaluated based on the extent of any deficit, how long the symptoms have lasted, and overall function.',
  },
  {
    question: 'Do I need to wear a collar after cervical spine surgery?',
    answer:
      'Most patients who undergo anterior cervical surgery at one, two, or three levels are not required to wear a collar. As recently as ten years ago surgeons routinely mandated one, but that is no longer the case, thanks to higher fusion rates, better postoperative education, and improved fusion technology. A small number of patients, mainly those involved in a traumatic accident, may need a collar for instability, but that is fewer than five percent.',
  },
  {
    question: 'Are you taking bone from my hip if I have a cervical fusion?',
    answer:
      'The vast majority of spine surgeons do not take bone from your hip. As the technology improved and allograft products became more available, the need for hip bone fell away. In fact, harvesting hip bone often hurt more than the cervical surgery itself. In our practice we only use bone harvested through the same incision.',
  },
  {
    question: 'Do I need to stay in bed after cervical surgery?',
    answer:
      'No. Mobility is the key. Over the past twenty years the gold standard has shifted from immobility to movement. We often tell patients to follow the twenty minute rule, changing position every twenty minutes, since moving loosens the muscles and eases pain.',
  },
  {
    question: 'Will I keep having more surgery after my first one?',
    answer:
      'The risk of needing additional surgery after your first cervical spine procedure is roughly four percent over your lifetime. That means about four patients in one hundred return for more surgery, most often at the level just above or below the original one.',
  },
  {
    question: 'Is cervical disc replacement better than cervical fusion?',
    answer:
      'Both procedures work well, and neither is simply better. ACDF, the fusion procedure, is still considered the gold standard for cervical disc disease that causes radiculopathy or myelopathy. Disc replacement can offer more range of motion and may reduce the risk of adjacent segment disease over the long term. A ten year New York State study of single level cases, published in the Journal of Neurosurgery Spine in April 2023, found no significant difference in revision risk between the two. The disc replacement group had more postoperative swallowing difficulty, while the fusion group had a slightly longer hospital stay. Our main caution is that some patients report increased neck pain after disc replacement, so the right choice depends on your anatomy and symptoms.',
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
      answer: `A fusion joins two or more vertebrae so they heal into one solid unit, which stabilizes the segment but removes motion at that level. Motion preserving surgery, such as an artificial disc replacement, relieves the same nerve pressure while keeping natural movement. Fusion suits instability and certain causes of pain, while motion preservation suits selected patients with good alignment and mainly nerve related symptoms.`,
    },
    {
      question: `Is ${label} spine surgery performed as outpatient surgery?`,
      answer: `Often, yes. Most one level and two level procedures are performed on a same day basis, and patients go home the same day. A three level surgery, or a patient who lives far away or alone, may warrant an overnight stay. Your surgeon confirms the plan with you beforehand.`,
    },
    {
      question: `What are realistic expectations after ${label} surgery?`,
      answer: `The clearest improvement is usually in the radiating arm or leg symptoms caused by a compressed nerve. Axial neck or back pain can improve too, though it may respond more gradually. Walking is the main activity for the first four weeks, and most patients return to everyday activity within weeks, with heavier work taking longer.`,
    },
    {
      question: 'How do I prepare for a surgical consultation?',
      answer:
        'Bring any prior imaging such as MRI, CT, or x ray studies, ideally on a disc, along with the reports. Bring a current medication list, a short summary of your symptoms and what makes them better or worse, and a note of treatments you have already tried. Writing your questions down in advance, and bringing someone with you, makes the visit more useful.',
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
