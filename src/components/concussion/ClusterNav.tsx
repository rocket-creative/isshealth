import Link from 'next/link'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

export type ClusterLink = { href: string; title: string; description: string }

export const CLUSTER_LINKS: ClusterLink[] = [
  {
    href: '/concussion-program/post-concussion-syndrome/',
    title: 'Post Concussion Syndrome Care',
    description: 'Focused care for concussion symptoms that last beyond the usual recovery window.',
  },
  {
    href: '/concussion-program/sports-concussion-return-to-play/',
    title: 'Sports Concussion and Return to Play',
    description: 'Baseline assessment and a graded, clinician supervised return to sport.',
  },
  {
    href: '/concussion-program/concussion-after-car-accident/',
    title: 'Concussion After a Car Accident',
    description: 'Neurological evaluation when a collision affects the brain and the neck.',
  },
  {
    href: '/concussion-program/concussion-symptoms/',
    title: 'Concussion Symptoms',
    description: 'Common signs of a concussion and when to see a specialist.',
  },
  {
    href: '/concussion-program/telehealth-concussion-care/',
    title: 'Telehealth Concussion Care',
    description: 'Virtual evaluation and follow up alongside your in person care.',
  },
  {
    href: '/concussion-program/pediatric-youth-concussion/',
    title: 'Youth and Pediatric Concussion Care',
    description: 'Evaluation and return to learn guidance for children and teenagers.',
  },
]

/**
 * Sub navigation linking every child page in the concussion cluster. Rendered
 * on the pillar and on every child so every page is one click from each sibling.
 */
export function ClusterNav({ currentPath }: { currentPath?: string }) {
  return (
    <section
      className="bg-iss-alt px-6 lg:px-12 py-12 md:py-16 border-y border-stone-200"
      aria-labelledby="cluster-nav-heading"
    >
      <p className="font-body text-xs uppercase tracking-[0.2em] text-iss-teal font-bold">Explore the program</p>
      <h2 id="cluster-nav-heading" className="mt-4 font-heading text-h2">
        Concussion care by need.
      </h2>
      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 list-none">
        {CLUSTER_LINKS.map((link, i) => {
          const isCurrent = link.href === currentPath
          return (
            <li key={link.href}>
              <AnimateOnScroll animation="up" delay={i * 70} className="h-full">
                {isCurrent ? (
                  <div
                    aria-current="page"
                    className="block h-full bg-white p-6 border-l-4 border-iss-coral"
                  >
                    <p className="font-heading text-lg font-bold text-iss-ink uppercase tracking-tight">{link.title}</p>
                    <p className="mt-3 text-iss-body font-light text-sm leading-relaxed">{link.description}</p>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="group block h-full bg-white p-6 border-l-4 border-iss-teal hover:bg-iss-teal hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-iss-teal focus-visible:outline-none"
                  >
                    <p className="font-heading text-lg font-bold text-iss-ink uppercase tracking-tight group-hover:text-white">
                      {link.title}
                    </p>
                    <p className="mt-3 text-iss-body font-light text-sm leading-relaxed group-hover:text-white/90">
                      {link.description}
                    </p>
                  </Link>
                )}
              </AnimateOnScroll>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
