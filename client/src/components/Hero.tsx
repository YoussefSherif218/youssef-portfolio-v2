import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Sparkles, GraduationCap, Clock3, Target, FileDown } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const tl = gsap.timeline({ delay: 0.2 });
    const e = 'power4.out';

    // Cinematic portrait fade in & slight scale down
    tl.fromTo('.h-cinematic-portrait',
      { opacity: 0, scale: 1.05, filter: 'blur(10px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 2.0, ease: 'power2.out' }
    )
      // Glass panel slides in from the left
      .fromTo('.h-glass-panel',
        { opacity: 0, x: -60, filter: 'blur(10px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1.4, ease: e },
        '-=1.4'
      )
      // Elements inside the glass panel stagger
      .fromTo('.h-stagger',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: e },
        '-=0.8'
      );

    return () => { tl.kill(); };
  }, []);

  return (
    <section ref={ref} className="relative flex items-center overflow-hidden" style={{ minHeight: '100vh', background: 'var(--bg)' }}>

      {/* ── 1. Cinematic Portrait Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* ── Light Mode: Clouds & Sunlight ── */}
        {/* Sunlight glow — top right */}
        <div
          className="hero-sunlight"
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: '70%',
            height: '70%',
            opacity: 0,
            transition: 'opacity 0.8s ease',
            background: 'radial-gradient(ellipse at 70% 30%, rgba(255,220,140,0.35) 0%, rgba(255,200,100,0.15) 30%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        {/* Cloud layer 1 — large soft clouds */}
        <div
          className="hero-clouds"
          style={{
            position: 'absolute',
            top: '5%',
            right: '0',
            width: '100%',
            height: '50%',
            opacity: 0,
            transition: 'opacity 0.8s ease',
            background: `
              radial-gradient(ellipse 350px 120px at 75% 25%, rgba(255,255,255,0.7) 0%, transparent 70%),
              radial-gradient(ellipse 280px 90px at 55% 35%, rgba(255,255,255,0.5) 0%, transparent 70%),
              radial-gradient(ellipse 400px 100px at 85% 40%, rgba(255,255,255,0.6) 0%, transparent 70%),
              radial-gradient(ellipse 200px 70px at 40% 20%, rgba(255,255,255,0.4) 0%, transparent 70%),
              radial-gradient(ellipse 320px 80px at 65% 15%, rgba(255,255,255,0.55) 0%, transparent 70%)
            `,
            pointerEvents: 'none',
          }}
        />
        {/* Cloud layer 2 — smaller wispy clouds */}
        <div
          className="hero-clouds"
          style={{
            position: 'absolute',
            top: '15%',
            left: '10%',
            width: '80%',
            height: '40%',
            opacity: 0,
            transition: 'opacity 1s ease 0.2s',
            background: `
              radial-gradient(ellipse 180px 50px at 20% 40%, rgba(255,255,255,0.45) 0%, transparent 70%),
              radial-gradient(ellipse 150px 40px at 50% 55%, rgba(255,255,255,0.35) 0%, transparent 70%),
              radial-gradient(ellipse 220px 60px at 75% 30%, rgba(255,255,255,0.4) 0%, transparent 70%),
              radial-gradient(ellipse 130px 35px at 35% 65%, rgba(255,255,255,0.3) 0%, transparent 70%)
            `,
            pointerEvents: 'none',
          }}
        />

        {/* Portrait wrapper aligned to right */}
        <div className="absolute bottom-0 right-0 w-full lg:w-[60%] h-full flex justify-end items-end">
          <img
            src="/youssef-3d.png"
            alt="Youssef Sherif"
            className="h-cinematic-portrait relative w-auto max-w-full h-[75vh] lg:h-[88vh] object-contain object-right-bottom"
            style={{
              // Subtle fade on the left edge to blend with background
              maskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
            }}
          />
        </div>

        {/* Ambient Overlays to push the image back and blend it */}
        {/* Dark gradient from the left to ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/90 to-transparent w-full lg:w-[55%]" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[var(--bg)] to-transparent" />

        {/* Cinematic light leak/glow on the portrait */}
        <div className="absolute inset-0 mix-blend-screen pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 80% 40%, rgba(196,168,130,0.15) 0%, transparent 60%)',
        }} />
      </div>

      {/* ── 2. Foreground Content (Glass Panel) ── */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20">

        <div className="h-glass-panel w-full max-w-[850px] rounded-3xl border border-white/10 p-8 lg:p-14 relative overflow-hidden shadow-2xl" style={{
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(196,168,130,0.1)',
        }}>
          {/* Subtle noise inside glass to give it premium texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          }} />

          {/* Tag */}
          <div className="h-stagger inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent/20 bg-accent/10 w-fit mb-8 relative z-10 shadow-[0_0_20px_rgba(196,168,130,0.15)]">
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs font-bold tracking-[0.15em] uppercase text-accent font-['Satoshi']">
              AI & Data Analytics
            </span>
          </div>

          {/* Title */}
          <h1 className="h-stagger text-[clamp(4rem,8vw,6.5rem)] font-bold leading-[1.05] tracking-tight text-[var(--text)] mb-6 relative z-10 drop-shadow-2xl">
            Youssef<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text)] via-[var(--text)]/90 to-[var(--text)]/40">Sherif</span>
          </h1>

          {/* Bio */}
          <p className="h-stagger text-[19px] lg:text-[21px] text-[var(--muted)] leading-[1.7] mb-12 max-w-[620px] relative z-10 font-medium">
            Transforming raw datasets into strategic insights. Specializing in advanced analytics and data-driven marketing to build intelligent solutions.
          </p>

          {/* Stats Grid inside Panel */}
          <div className="h-stagger grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 relative z-10">

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-accent">
                <Clock3 size={16} />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--muted)]">Experience</span>
              </div>
              <p className="text-2xl font-bold text-[var(--text)] tracking-tight">2+ Years</p>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-accent">
                <GraduationCap size={16} />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--muted)]">Education</span>
              </div>
              <p className="text-2xl font-bold text-[var(--text)] tracking-tight">Cairo Uni</p>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-accent">
                <Target size={16} />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--muted)]">Focus</span>
              </div>
              <p className="text-[16px] font-bold text-[var(--text)] leading-tight mt-0.5 tracking-tight">Marketing<br />Analytics</p>
            </div>

          </div>

          {/* Actions */}
          <div className="h-stagger flex flex-wrap gap-4 relative z-10">
            <a href="#projects" className="btn-primary group relative overflow-hidden h-[54px] px-8 rounded-xl shadow-[0_10px_30px_rgba(196,168,130,0.2)]">
              <span className="relative z-10 flex items-center gap-2 text-[15px] font-bold">
                Explore Work
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
            <a href="#contact" className="btn-secondary h-[54px] px-8 rounded-xl text-[15px] font-bold border-[var(--border)] hover:bg-[var(--glass-bg)] hover:border-[var(--glass-border)]">
              Contact Me
            </a>
            <a
              href="/Youssef.Sherif_CV.pdf"
              download="Youssef.Sherif_CV.pdf"
              className="btn-secondary h-[54px] px-8 rounded-xl text-[15px] font-bold border-[var(--border)] hover:bg-[var(--glass-bg)] hover:border-[var(--glass-border)] group"
            >
              <span className="flex items-center gap-2">
                <FileDown size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                Download CV
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
