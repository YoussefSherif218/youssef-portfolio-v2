import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP scroll-triggered fade-up for a container's direct children.
 * Usage: const ref = useGsapScroll(); <section ref={ref}>...</section>
 */
export function useGsapScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    const children = Array.from(ref.current.children) as HTMLElement[];
    children.forEach((child, i) => {
      gsap.fromTo(child,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: {
            trigger: child,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return ref;
}

/**
 * Animate specific elements by selector inside a section.
 */
export function useGsapSection<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll<HTMLElement>('[data-gsap]');
    els.forEach((el) => {
      const type = el.dataset.gsap || 'fade-up';
      const from: gsap.TweenVars = type === 'fade-left' ? { opacity: 0, x: -60 }
        : type === 'fade-right' ? { opacity: 0, x: 60 }
        : type === 'scale' ? { opacity: 0, scale: 0.9 }
        : { opacity: 0, y: 50 };

      gsap.fromTo(el, from, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return ref;
}
