import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Sparkles, GraduationCap, Clock3, Target } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const tl = gsap.timeline({ delay: 0.2 });
    const e = 'power4.out';

    // Cinematic portrait fade in & slight scale down
    tl.fromTo('.h-cinematic-portrait',
      { opacity: 0, scale: 1.1, filter: 'blur(20px)' },
      { opacity: 0.85, scale: 1, filter: 'blur(0px)', duration: 2.5, ease: 'power2.out' }
    )
      // Glass panel slides in from the left
      .fromTo('.h-glass-panel',
        { opacity: 0, x: -60, filter: 'blur(10px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1.4, ease: e },
        '-=1.8'
      )
      // Elements inside the glass panel stagger
      .fromTo('.h-stagger',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: e },
        '-=1.0'
      );

    return () => { tl.kill(); };
  }, []);

  return (
    <section ref={ref} className="relative flex items-center overflow-hidden" style={{ minHeight: '100vh', background: '#020202' }}>

      {/* ── 1. Cinematic Portrait Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Portrait wrapper aligned to right */}
        <div className="absolute bottom-0 right-0 w-full lg:w-[60%] h-full flex justify-end items-end">
          <img
            src="/youssef-3d.png"
            alt="Youssef Sherif"
            className="h-cinematic-portrait relative w-auto max-w-full h-[75vh] lg:h-[88vh] object-contain object-right-bottom"
            style={{
              // Deep fade on the left side to blend with the dark background, and fade at the very bottom
              maskImage: 'linear-gradient(to right, transparent 0%, black 25%), linear-gradient(to top, transparent 0%, black 15%)',
              maskComposite: 'intersect',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%), linear-gradient(to top, transparent 0%, black 15%)',
              WebkitMaskComposite: 'source-in',
              opacity: 0.85, // Subtle transparency for cinematic feel
            }}
          />
        </div>

        {/* Ambient Overlays to push the image back and blend it */}
        {/* Dark gradient from the left to ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-[#020202]/90 to-transparent w-full lg:w-[55%]" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#020202] to-transparent" />

        {/* Cinematic light leak/glow on the portrait */}
        <div className="absolute inset-0 mix-blend-screen pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 80% 40%, rgba(94,158,255,0.15) 0%, transparent 60%)',
        }} />
      </div>

      {/* ── 2. Foreground Content (Glass Panel) ── */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20">

        <div className="h-glass-panel w-full max-w-[680px] rounded-3xl border border-white/10 p-8 lg:p-14 relative overflow-hidden shadow-2xl" style={{
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}>
          {/* Subtle noise inside glass to give it premium texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          }} />

          {/* Tag */}
          <div className="h-stagger inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent/20 bg-accent/10 w-fit mb-8 relative z-10 shadow-[0_0_20px_rgba(94,158,255,0.15)]">
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs font-bold tracking-[0.15em] uppercase text-accent font-['Satoshi']">
              AI & Data Analytics
            </span>
          </div>

          {/* Title */}
          <h1 className="h-stagger text-[clamp(3.5rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-white mb-6 relative z-10 drop-shadow-2xl">
            Youssef<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40">Sherif</span>
          </h1>

          {/* Bio */}
          <p className="h-stagger text-[17px] lg:text-[19px] text-white/70 leading-[1.7] mb-12 max-w-[520px] relative z-10 font-medium">
            Transforming raw datasets into strategic insights. Specializing in advanced analytics and data-driven marketing to build intelligent solutions.
          </p>

          {/* Stats Grid inside Panel */}
          <div className="h-stagger grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 relative z-10">

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-accent">
                <Clock3 size={16} />
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/50">Experience</span>
              </div>
              <p className="text-2xl font-bold text-white tracking-tight">2+ Years</p>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-accent">
                <GraduationCap size={16} />
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/50">Education</span>
              </div>
              <p className="text-2xl font-bold text-white tracking-tight">Cairo Univ</p>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-accent">
                <Target size={16} />
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/50">Focus</span>
              </div>
              <p className="text-[16px] font-bold text-white leading-tight mt-0.5 tracking-tight">Marketing<br />Analytics</p>
            </div>

          </div>

          {/* Actions */}
          <div className="h-stagger flex flex-wrap gap-4 relative z-10">
            <a href="#projects" className="btn-primary group relative overflow-hidden h-[54px] px-8 rounded-xl shadow-[0_10px_30px_rgba(94,158,255,0.2)]">
              <span className="relative z-10 flex items-center gap-2 text-[15px] font-bold">
                Explore Work
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
            <a href="#contact" className="btn-secondary h-[54px] px-8 rounded-xl text-[15px] font-bold border-white/20 hover:bg-white/5 hover:border-white/30">
              Contact Me
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
