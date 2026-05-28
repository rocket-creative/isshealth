import type { ReactNode } from 'react'
import { buildOverview, ConditionPageSections } from '@/content/condition-page-sections'
import {
  LumbarNonSurgicalExcerpt,
  LumbarSurgicalExcerpt,
} from '@/content/condition-treatment-excerpts'

export const lumbarConditionContent: Record<string, ReactNode> = {
  'foot-drop': (
    <ConditionPageSections
      overview={buildOverview([
        'Foot drop is a common diagnosis when the L5 nerve is compressed from a disc herniation, foraminal stenosis, or spondylolisthesis. Other less common causes include external trauma to the lower leg or nerve sheath tumors and are not addressed here.',
        'A disc herniation at L4-5 or a foraminal disc at L5-S1 can compress the L5 nerve root, producing pain, numbness, or weakness in any combination. Patients develop a foot drop or floppy foot where they cannot dorsiflex or lift the foot upwards while walking. The foot drags and often causes the patient to trip, making it very difficult to go down stairs.',
        'Any time someone develops a foot drop, an MRI of the lumbar spine should be performed to rule out nerve root compression. If a disc herniation is found, the patient is usually started on oral steroids to reduce pain and, when tolerable, begins physical therapy.',
        'A foot drop is concerning if it is complete, or if it does not improve over four to eight weeks. In those cases, the surgeon may consider surgical decompression sooner than later.',
      ])}
      nonSurgical={
        <>
          <LumbarNonSurgicalExcerpt />
          <p>
            The initial course of treatment after diagnosis is oral steroids, rest, and non steroidal anti inflammatory agents. Once
            the pain has lessened, you may be referred for a course of physical therapy. Other options include an epidural injection
            to help with the pain.
          </p>
        </>
      }
      surgical={<LumbarSurgicalExcerpt procedures={['foraminotomy', 'microdiscectomy']} />}
    />
  ),

  'low-back-pain': (
    <ConditionPageSections
      overview={buildOverview([
        'Low back pain is the most common condition affecting the lumbar spine, producing discomfort in over six to twelve million Americans per year. The etiology of back pain is complex and commonly occurs after work, home, and auto related accidents, as well as spontaneous occurrences. Pain generators in the lumbar spine are limited to muscle, joint, and nerve.',
        'The most common cause of low back pain in the younger population is muscular, due to a specific movement. A pain response occurs, subsides over time, and usually resolves. As the population ages, patients become more susceptible to joint pain or arthritis, referred to as degenerative joint disease or degenerative disc disease. These can be multifactorial, including physical and psychological factors.',
        'A complete evaluation requires a thorough history of the patient, family history, and imaging. Although MRI is the gold standard, patients should have x rays of the lumbar spine with static as well as flexion and extension views. While an MRI may show degeneration, surgeons treat according to symptoms. In most cases, patients have a transient episode of back pain. If symptoms have improved, the best course of treatment is conservative care.',
        'Surgical treatment for low back pain is reserved for patients who are unable to perform their activities of daily living, have exhausted all conservative measures, and have an abnormality on imaging. Some patients present with significant pain, but if the MRI does not indicate a pain generator, surgery will usually not help.',
      ])}
      nonSurgical={
        <>
          <LumbarNonSurgicalExcerpt />
          <p>
            Common treatments include non steroidal anti inflammatory agents, physical therapy, and epidural injections.
            Acupuncture and chiropractic care can help as well.
          </p>
        </>
      }
      surgical={
        <>
          <LumbarSurgicalExcerpt procedures={['tlif']} />
          <p>
            To treat low back pain alone without leg pain, most patients require at least a single level fusion with pedicle screws
            and an interbody cage.
          </p>
        </>
      }
    />
  ),

  'lumbar-degeneration': (
    <ConditionPageSections
      overview={buildOverview([
        'Lumbar degeneration is also known as lumbar arthritis, lumbar degenerative disc disease, or lumbar degenerative joint disease. It usually affects patients as they become older, not starting before age forty. Symptoms usually start as bouts of low back pain that subside with either rest or non steroidal anti inflammatory medications.',
        'As the episodes become more frequent, patients may be referred to a course of physical therapy, chiropractic care, or acupuncture. Chiropractic care is more effective if the patient has a component of leg pain. Acupuncture works best in the presence of severe muscle spasms related to the pain.',
        'At some point, an MRI of the lumbar spine should be performed to determine the diagnosis and next best course of therapy. Your physician may refer you to a physiatrist or pain management physician to try something more invasive, such as an epidural or facet block. Depending on the success of any conservative management option, it may be tried again if it is successful at alleviating symptoms.',
        'Lumbar degeneration can cause low back pain, leg pain, or both. Your symptoms will dictate what procedure is indicated if the patient requires surgery. For instance, lumbar degeneration may simply cause foraminal stenosis and leg pain, which would only require a foraminotomy. Alternatively, degeneration may cause severe back pain and require a multi level fusion.',
      ])}
      nonSurgical={
        <>
          <LumbarNonSurgicalExcerpt />
          <p>
            Common treatments include non steroidal anti inflammatory agents, physical therapy, and epidural injections.
            Acupuncture and chiropractic care can help as well.
          </p>
        </>
      }
      surgical={
        <>
          <LumbarSurgicalExcerpt procedures={['foraminotomy', 'tlif']} />
          <p>
            To treat low back pain alone without leg pain, most patients require at least a single level fusion with pedicle screws
            and an interbody cage.
          </p>
        </>
      }
    />
  ),

  'lumbar-disc-herniation': (
    <ConditionPageSections
      overview={buildOverview([
        'A lumbar disc herniation occurs when a small piece of lumbar disc material breaks off and herniates from its normal location, compressing the nerve or the thecal sac. The most common areas are the lower two disc spaces, L4-5 and L5-S1.',
        'If the disc herniates laterally, it compresses a nerve, usually causing unilateral leg pain. If it herniates centrally, it causes back pain and sometimes bilateral leg pain. A disc herniation at L4-5 to one side can produce a foot drop from compression of the L5 nerve root.',
        'An L4-5 disc herniation can cause severe leg pain starting in the buttock and radiating to the top of the foot with or without a foot drop. An L5-S1 herniation can cause severe leg pain starting in the buttock radiating to the bottom of the foot with or without weakness when stepping down. A herniated disc at L3-4 causes thigh pain, and L2-3 causes groin pain.',
        'Most symptomatic disc herniations resolve on their own over time. It is estimated that only ten to fifteen percent of patients who present with a symptomatic disc herniation will need surgery.',
      ])}
      nonSurgical={
        <>
          <LumbarNonSurgicalExcerpt />
          <p>
            The initial course of treatment after diagnosis is oral steroids for seven days, rest, and non steroidal anti
            inflammatory agents for pain. Once the pain has lessened, you may be referred for a course of physical therapy. Other
            options include an epidural injection to help with the pain.
          </p>
        </>
      }
      surgical={<LumbarSurgicalExcerpt procedures={['microdiscectomy']} />}
    />
  ),

  'lumbar-fracture': (
    <ConditionPageSections
      overview={buildOverview([
        'A lumbar fracture is a break or crack in one or more of the vertebrae in the lower back. The condition varies widely in severity and treatment approach depending on the type and extent of the injury.',
        'Lumbar fractures often occur due to high impact trauma, such as motor vehicle collisions or significant falls. However, even minor incidents can lead to fractures in individuals with weakened bones from osteoporosis or other bone weakening conditions. Age, lifestyle factors, and certain chronic diseases can also increase the risk.',
        'Diagnosis begins with a physical examination and a review of your medical history. Imaging studies such as x rays, CT scans, or MRIs confirm the presence and extent of the fracture.',
      ])}
      nonSurgical={
        <>
          <LumbarNonSurgicalExcerpt />
          <p>Most fractures can be treated with bracing, depending on stability and symptoms.</p>
        </>
      }
      surgical={
        <>
          <LumbarSurgicalExcerpt procedures={['tlif']} />
          <p>Some patients are candidates for a kyphoplasty, or may require a lumbar fusion.</p>
        </>
      }
    />
  ),

  'lumbar-radiculopathy': (
    <ConditionPageSections
      overview={buildOverview([
        'Lumbar radiculopathy is usually due to a lumbar disc herniation or foraminal stenosis. A lumbar disc herniation is when a small piece of lumbar disc material herniates from its normal location and compresses the nerve or the thecal sac. The most common areas are the lower two disc spaces, L4-5 and L5-S1.',
        'If the disc herniates laterally, it compresses a nerve, usually causing unilateral leg pain. If it herniates centrally, it usually causes back pain and sometimes bilateral leg pain. A disc herniation at L4-5 to one side can cause foot drop from compression of the L5 nerve.',
        'An L4-5 disc herniation can cause severe leg pain starting in the buttock radiating to the top of the foot with or without a foot drop. An L5-S1 herniation can cause severe leg pain starting in the buttock radiating to the bottom of the foot with or without weakness when stepping down. A herniated disc at L3-4 causes thigh pain, and L2-3 causes groin pain.',
        'Most symptomatic disc herniations resolve on their own over time, and it is predicted that only ten to fifteen percent of patients will need surgery. Foraminal stenosis causes similar symptoms as a disc herniation, but the cause is different. In foraminal stenosis, there is facet joint degeneration causing compression around the nerve as it exits the spinal canal.',
      ])}
      nonSurgical={
        <>
          <LumbarNonSurgicalExcerpt />
          <p>
            The initial course of treatment after diagnosis is oral steroids, rest, and non steroidal anti inflammatory agents. Once
            the pain has lessened, you may be referred for a course of physical therapy. Other options include an epidural injection
            to help with the pain.
          </p>
        </>
      }
      surgical={<LumbarSurgicalExcerpt procedures={['foraminotomy', 'microdiscectomy']} />}
    />
  ),

  'lumbar-spondylolisthesis': (
    <ConditionPageSections
      overview={buildOverview([
        'Lumbar spondylolisthesis, or bone slip, is when one vertebra is shifted relative to another vertebra, most commonly in the lower spine. When there is a spondylolisthesis at L4-5, it is usually due to lumbar degenerative disc disease associated with back and leg pain. Pain in the leg can be unilateral or bilateral.',
        'When there is a spondylolisthesis at L5-S1, it is usually due to lumbar spondylolysis of the pars of L5. The pars interarticularis, or pars, is a segment of bone that attaches the vertebral body pedicle to the inferior articulating facet joint. In a patient with a pars defect, they are usually born this way and can worsen over time to cause a slip.',
        'As the bone slips, the associated degenerative tissue can compress the L5 nerve, causing pain or foot drop. The patient may also have back pain with unilateral or bilateral leg pain and weakness. A spondylolisthesis at L5-S1 is called an isthmic spondylolisthesis and affects approximately five to seven percent of the population. A spondylolisthesis at L4-5 is called a degenerative spondylolisthesis.',
        'Both types can be painful and present with back pain, leg pain, or both. If a patient develops a foot drop or other leg weakness, conservative care will be initiated. If the weakness persists, your surgeon may strongly consider surgical decompression.',
      ])}
      nonSurgical={
        <>
          <LumbarNonSurgicalExcerpt />
          <p>
            Common treatments include non steroidal anti inflammatory agents, physical therapy, and epidural injections.
            Acupuncture and chiropractic care can help as well.
          </p>
        </>
      }
      surgical={
        <>
          <LumbarSurgicalExcerpt procedures={['tlif']} />
          <p>
            Surgery usually requires at least a single level fusion, or TLIF, with pedicle screws and an interbody cage. The goal is
            to decompress the compressed nerve root. Because the level is considered unstable, most surgeons fuse with pedicle screws
            and an interbody cage.
          </p>
        </>
      }
    />
  ),

  'lumbar-stenosis': (
    <ConditionPageSections
      overview={buildOverview([
        'Neurogenic claudication is a symptom caused by central lumbar stenosis. Most of the time the stenosis is at L4-5, L3-4, or L2-3 with a combination of one or two continuous levels. Most patients present with stenosis at L4-5, or L3-4 and L4-5.',
        'Symptoms usually start as generalized low back pain across the lower back, made worse with standing, walking, and extension. Over time, the patient or a family member may notice that the patient is frequently hunched or flexed forward a few minutes after standing from a seated position. As they begin walking, the pain worsens while flexion begins to relieve it.',
        'Pain then travels down the legs bilaterally, sometimes affecting the anterior leg, posterior leg, or both. Once the patient sits down, symptoms begin to subside. Stenosis is a component of degenerative disc disease and can include a central disc herniation or facet hypertrophy.',
        'Enlargement of the facet joint can be very painful, adding to the back pain. Compression of the nerves from lumbar stenosis causes leg pain or neurogenic claudication. Once symptoms start, they usually worsen over time.',
      ])}
      nonSurgical={
        <>
          <LumbarNonSurgicalExcerpt />
          <p>
            Common treatments include non steroidal anti inflammatory agents, physical therapy, and epidural injections.
            Acupuncture and chiropractic care can help. Patients are also candidates for facet blocks to alleviate back pain. Patients
            also find relief from an epidural injection in the region of stenosis. If successful, physiatrists may inject up to three
            times in a twelve month period.
          </p>
        </>
      }
      surgical={<LumbarSurgicalExcerpt procedures={['laminectomy']} />}
    />
  ),

  'neurogenic-claudication': (
    <ConditionPageSections
      overview={buildOverview([
        'Neurogenic claudication is a symptom caused by central lumbar stenosis. Most of the time the stenosis is at L4-5, L3-4, or L2-3 with a combination of one or two continuous levels. Most patients present with stenosis at L4-5 alone, or L3-4 and L4-5.',
        'Symptoms usually start as generalized back pain across the lower back, made worse with standing, walking, and extension. Over time, the patient or a family member may notice the patient is frequently hunched or flexed forward a few minutes after standing from a seated position. As they begin walking, the pain worsens while flexion begins to relieve it.',
        'When you see someone walking severely hunched over, they most likely have neurogenic claudication. Pain then travels down the legs bilaterally, sometimes affecting the anterior leg, posterior leg, or both. Once the patient sits down, symptoms begin to subside.',
        'Stenosis is a component of degenerative disc disease and can include a central disc herniation or facet hypertrophy. Enlargement of the facet joint can be very painful, adding to the back pain. Compression of the nerves from lumbar stenosis causes leg pain or neurogenic claudication. Once symptoms start, they usually worsen over time.',
      ])}
      nonSurgical={
        <>
          <LumbarNonSurgicalExcerpt />
          <p>
            Common treatments include non steroidal anti inflammatory agents, physical therapy, and epidural injections.
            Acupuncture and chiropractic care can help. Patients are also candidates for facet blocks. Patients can find relief from
            an epidural injection in the region of the stenosis. If successful, physiatrists may inject up to three times in a
            twelve month period.
          </p>
        </>
      }
      surgical={<LumbarSurgicalExcerpt procedures={['laminectomy']} />}
    />
  ),

  'spinal-cord-tumor': (
    <ConditionPageSections
      overview={buildOverview([
        'Spinal cord tumors are usually benign in adults and malignant in children under age eighteen. The incidence of having a spinal cord tumor is very low, but possible. Patients will most commonly present with a neurologic deficit of the lower extremities, either unilateral or bilateral. In severe cases, patients will present with urinary retention for at least twelve hours or greater. This can also be associated with numbness in the groin area.',
        'Most spinal cord tumors are resectable and, if benign, are only removed if they are causing symptoms. Benign tumors such as schwannomas are removed if they are compressing a nerve or clearly growing in subsequent imaging studies. Most benign tumors are observed until they become symptomatic or clearly grow by serial imaging.',
        'Removing a tumor can be difficult and depends on the location. The spinal cord ends at the level of L1-2 and then continues as nerve roots or the cauda equina. Tumors above L1-2 are in the spinal cord itself and carry significant risk during resection. Tumors below L1-2 pose less risk, since they are attached to a nerve root.',
      ])}
      nonSurgical={<LumbarNonSurgicalExcerpt />}
      surgical={
        <>
          <LumbarSurgicalExcerpt procedures={['tumor']} />
          <p>
            Treating spinal cord tumors is complex and requires extensive workup and counseling with the patient and family. The
            risks of surgery, in addition to the risk of any cancer, can be significant and require input from a team of providers in
            medicine, oncology, radiation oncology, neurosurgery, and rehabilitation medicine.
          </p>
        </>
      }
    />
  ),
}
