'use client'

import { useEffect, useRef, ReactNode } from 'react'

type AnimationType = 'up' | 'left' | 'right' | 'scale'

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
  threshold?: number
  rootMargin?: string
}

const animationClasses: Record<AnimationType, string> = {
  up: 'animate-on-scroll',
  left: 'animate-on-scroll-left',
  right: 'animate-on-scroll-right',
  scale: 'animate-on-scroll-scale',
}

export function AnimateOnScroll({
  children,
  className = '',
  animation = 'up',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      element.classList.add('is-visible')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('is-visible'), delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [delay, threshold, rootMargin])

  return (
    <div ref={ref} className={`${animationClasses[animation]} ${className}`}>
      {children}
    </div>
  )
}
