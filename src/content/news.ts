export type NewsBodyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }

export type NewsArticle = {
  slug: string
  title: string
  datePublished: string
  dateDisplay: string
  location: string
  summary: string
  body: NewsBodyBlock[]
  image: string
  alt: string
  /** Optional link to the full publication when only a summary lives on this site. */
  externalUrl?: string
}

export const articles: NewsArticle[] = [
  {
    slug: 'the-importance-of-step-count-in-recovery-after-lumbar-spine-surgery',
    title: 'The Importance of Step Count in Recovery After Lumbar Spine Surgery',
    datePublished: '2025-03-21',
    dateDisplay: 'March 21, 2025',
    location: 'West Harrison, NY',
    summary:
      'Recovering from lumbar spine surgery is a delicate process that requires a balanced approach to physical activity. Tracking your daily step count is one of the most useful ways to guide a steady, safe return to strength.',
    image: '/images/stepcount.jpg',
    alt: 'Patient walking to track step count during spine surgery recovery',
    body: [
      {
        type: 'paragraph',
        text: 'Recovering from lumbar spine surgery is a delicate process that necessitates a balanced approach to physical activity. One of the key metrics is the number of steps taken per day. Monitoring step count can significantly contribute to a successful rehabilitation by promoting gradual increases in physical activity, which is crucial for restoring strength and function to the spine and surrounding muscles. The average adult takes 3,000 to 5,000 steps per day, and we strongly recommend keeping track of your daily step count as you recover and even after you heal.',
      },
      { type: 'heading', text: 'Post-operative goals' },
      {
        type: 'paragraph',
        text: 'Week 1: A simple goal should be 500 to 1,000 steps per day in the first week after surgery. In older patients, this may be slightly lower.',
      },
      {
        type: 'paragraph',
        text: 'Weeks 2 to 3: Patients should target 1,000 to 3,000 steps per day as their pain begins to subside and they are feeling better. If you are having trouble achieving this goal, please alert our care team.',
      },
      {
        type: 'paragraph',
        text: 'Weeks 3 to 5: By this point you should be close to the daily average for an adult, around 3,000 to 5,000 steps per day. Older patients over 75 years may be lower, and a deficit such as weakness or numbness may also keep the numbers lower.',
      },
      { type: 'heading', text: 'Benefits' },
      {
        type: 'list',
        items: [
          'Gradual increase in activity: Post-surgery recovery programs emphasize slowly and steadily increasing physical activity. Initially patients may be limited to walking short distances around the home, then gradually increase the number of steps to rebuild endurance and muscle strength without overloading the healing spine. These increases should be discussed and planned with a healthcare provider.',
          'Promotes healing and reduces complications: Walking is a low-impact activity that enhances blood flow and promotes healing. Increased circulation delivers nutrients and oxygen to the surgical site, helps prevent complications such as blood clots and pulmonary issues, maintains spinal flexibility, and reduces the risk of muscle atrophy.',
          'Supports mental health: Walking increases the production of endorphins, which are natural mood lifters. Regular increments in daily steps can help combat the depression and anxiety that may arise during recovery.',
          'Monitoring and motivation: Tracking daily steps with a pedometer or fitness tracker gives patients a tangible way to measure progress, offering immediate feedback and a sense of accomplishment that encourages continued effort.',
          'Establishes long-term health habits: The habits formed during recovery can set the foundation for long-term health and mobility, encouraging a more active lifestyle well after full recovery.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Every patient\u2019s recovery journey is unique. The optimal number of steps will vary depending on individual factors such as the type of surgery, overall health, and other medical conditions. Patients should work closely with their healthcare team to set step goals that align with their specific recovery needs.',
      },
    ],
  },
  {
    slug: 'best-practices-guidelines-postoperative-cervical-and-lumbar-fusions',
    title:
      'Best Practices Guidelines in Postoperative Management of Patients Who Underwent Cervical and Lumbar Fusions',
    datePublished: '2025-02-13',
    dateDisplay: 'February 13, 2025',
    location: 'West Harrison, NY',
    summary:
      'Best practice guidelines for the postoperative management of cervical and lumbar fusion patients emphasize a multidisciplinary approach to optimize recovery and outcomes.',
    image: '/images/care.jpg',
    alt: 'Clinical team reviewing postoperative spine fusion care',
    body: [
      {
        type: 'paragraph',
        text: 'Best practice guidelines for the postoperative management of patients who have undergone cervical and lumbar fusions emphasize a multidisciplinary approach to optimize recovery and outcomes. Key recommendations include effective pain management, early mobilization, and the use of physical therapy to promote healing and restore function.',
      },
      {
        type: 'paragraph',
        text: 'Guidelines also stress the importance of monitoring for complications, such as infection or hardware failure, and providing patient education on activity restrictions and lifestyle modifications. By adhering to these best practices, healthcare providers can enhance patient satisfaction and improve overall surgical results.',
      },
    ],
  },
  {
    slug: 'single-neurosurgeon-experience-zimvie-ldr-c-roi-implant-236-patients',
    title:
      'Single Neurosurgeon Experience with the ZimVie LDR-C ROI Implant: A Study of 236 Patients',
    datePublished: '2024-09-27',
    dateDisplay: 'September 27, 2024',
    location: 'West Harrison, NY',
    summary:
      'A study of 236 patients who underwent spinal surgery using the ZimVie LDR-C ROI implant, with predictive outcome modeling to evaluate effectiveness and safety.',
    image: '/images/spinal_fusion.jpg',
    alt: 'Cervical spine implant illustration',
    body: [
      {
        type: 'paragraph',
        text: 'The study titled \u201CSingle Neurosurgeon Experience with the ZimVie LDR-C ROI Implant: A Study of 236 Patients with Predictive Outcome Modeling\u201D investigates the outcomes of 236 patients who underwent spinal surgery using the ZimVie LDR-C ROI implant.',
      },
      {
        type: 'paragraph',
        text: 'Conducted by a single neurosurgeon, the research evaluates the effectiveness and safety of the implant, using predictive modeling to identify factors influencing surgical success and patient recovery. The findings highlight the implant\u2019s performance, complications, and potential for improving patient outcomes, offering valuable insights for clinicians in spinal surgery.',
      },
    ],
  },
  {
    slug: 'cranial-neurosurgical-robotics',
    title: 'Cranial Neurosurgical Robotics',
    datePublished: '2024-09-27',
    dateDisplay: 'September 27, 2024',
    location: 'West Harrison, NY',
    summary:
      'Cranial neurosurgical robotics integrates robotic systems into cranial surgery to enhance precision, efficiency, and patient outcomes.',
    image: '/images/innovations.jpg',
    alt: 'Neurosurgical robotics in the operating room',
    body: [
      {
        type: 'paragraph',
        text: 'Cranial neurosurgical robotics refers to the integration of robotic systems in cranial surgeries to enhance precision, efficiency, and patient outcomes. These advanced technologies assist surgeons in various procedures, such as tumor resections and biopsies, by providing enhanced visualization, stability, and dexterity.',
      },
      {
        type: 'paragraph',
        text: 'Robotics can reduce the invasiveness of surgeries, minimize complications, and improve recovery times. Ongoing research and development in this field continue to expand the capabilities of robotic systems, making them a promising tool for the future of neurosurgery.',
      },
    ],
  },
  {
    slug: 'neurosurgeons-navigate-changing-landscape',
    title:
      'Neurosurgeons Navigate Changing Landscape: Balancing Costs, Reimbursements, and Private Equity',
    datePublished: '2023-11-28',
    dateDisplay: 'November 28, 2023',
    location: 'West Harrison, NY',
    summary:
      'In a rapidly evolving healthcare landscape, neurosurgery is undergoing significant transformations. The article authored by John M. Abrahams, MD, sheds light on the changing dynamics within the neurosurgical field, addressing critical issues surrounding costs, reimbursements, and the growing influence of private equity in healthcare.',
    image: '/images/grand-opening.jpeg',
    alt: 'Press event at Institute For Spine Surgery',
    body: [
      {
        type: 'paragraph',
        text: 'In a rapidly evolving healthcare landscape, neurosurgery is undergoing significant transformations. The article titled \u201CThe Future of Private Practice Neurosurgery and the Pitfalls of Private Equity,\u201D authored by John M. Abrahams, MD, sheds light on the changing dynamics within the neurosurgical field.',
      },
      {
        type: 'paragraph',
        text: 'The piece addresses critical issues surrounding costs, reimbursements, and the growing influence of private equity in healthcare, and considers what these forces mean for surgeons, practices, and the patients they serve.',
      },
    ],
  },
]

export function getArticle(slug: string): NewsArticle | undefined {
  return articles.find((a) => a.slug === slug)
}

export function allArticleSlugs(): string[] {
  return articles.map((a) => a.slug)
}

/** Articles sorted newest first by publication date. */
export function articlesByDate(): NewsArticle[] {
  return [...articles].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1))
}
