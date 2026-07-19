import { useEffect, useRef } from 'react';
import { useGsapSection } from '@/hooks/useGsap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const ref = useGsapSection<HTMLElement>();
  const timelineRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current || !flashRef.current) return;

    // Animate the flash down the timeline as user scrolls
    gsap.fromTo(flashRef.current,
      { top: '0%' },
      {
        top: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      }
    );

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  const items = [
    { title: 'Applied AI & Data Analytics Scholar', co: 'Digilians Initiative — MCIT', p: 'Dec 2025 — Present', year: '2026', desc: 'Selected for a 9-month scholarship by Egypt\'s Ministry of Communications. Applying statistics, probability, and data analysis using Python, SQL, and Excel.', tags: ['Python', 'SQL', 'Excel', 'Statistics', 'ML', 'DL', 'Tableau', 'Power BI'], cur: true, type: 'work' },
    { title: 'Bachelor\'s in Biotechnology', co: 'Cairo University', p: 'Sep 2019 — Jun 2023', year: '2023', desc: 'Graduated from Cairo University with a Bachelor\'s degree in Biotechnology.', tags: [], type: 'edu' },
    { title: 'Senior Social Media Specialist', co: 'Arcktech Marketing Agency', p: 'Feb 2025 — Oct 2025', year: '2025', desc: 'Managed content creation and scheduling for 7 social media accounts across various industries.', tags: ['Content Strategy', 'Meta Business Suite', 'Canva'], type: 'work' },
    { title: 'Social Media Marketing Track', co: 'ITI — MCIT, Fayoum', p: 'Nov 2024 — Mar 2025', year: '2025', desc: 'Intensive training in social media marketing strategy, analytics, and content creation.', tags: [], type: 'edu' },
    { title: 'Social Media Specialist', co: 'Vook Marketing Agency', p: 'Mar 2024 — Dec 2024', year: '2024', desc: 'Managed and grew clients\' social media accounts. Created strategies aligned with brand goals.', tags: ['Social Media', 'Content Creation', 'Analytics'], type: 'work' },
    { title: 'Social Media Specialist', co: 'Creative Digital Marketing', p: 'Jan 2023 — Feb 2024', year: '2024', desc: 'Spearheaded digital marketing campaigns that expanded brand visibility.', tags: ['Digital Marketing', 'Copywriting', 'Brand Strategy'], type: 'work' },
    { title: 'Customer Service Representative', co: 'Concentrix', p: 'Oct 2020 — Feb 2022', year: '2021', desc: 'Handled inbound and outbound customer calls with professionalism and effective communication.', tags: ['Communication', 'Problem Solving', 'CRM'], type: 'work' },
  ];

  // Already sorted newest-first, add an index for alternating left/right
  const sorted = items;

  return (
    <section
      id="experience"
      ref={ref}
      className="experience-section"
      style={{
        padding: '128px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="mb-20" data-gsap="fade-up">
            <p className="section-label mb-4">02 / Experience</p>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 700, marginBottom: 20 }}>
              The <span style={{ color: 'var(--accent)' }}>Journey.</span>
            </h2>
            <div className="accent-line" />
          </div>

          {/* Timeline container */}
          <div className="experience-timeline" ref={timelineRef} style={{ position: 'relative', paddingBottom: 40 }}>
            {/* Central vertical line */}
            <div className="experience-line" style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: 2,
              background: 'repeating-linear-gradient(to bottom, var(--accent) 0, var(--accent) 6px, transparent 6px, transparent 14px)',
              opacity: 0.35,
              transform: 'translateX(-50%)',
            }} />

            {/* Scrolling flash */}
            <div ref={flashRef} style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              width: 4,
              height: 120,
              transform: 'translateX(-50%)',
              background: 'linear-gradient(to bottom, transparent, var(--accent), transparent)',
              borderRadius: 4,
              zIndex: 3,
              pointerEvents: 'none',
              filter: 'blur(2px)',
              boxShadow: '0 0 20px var(--accent), 0 0 40px var(--accent), 0 0 60px var(--accent)',
            }} />

            {sorted.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  data-gsap="fade-up"
                  className="experience-item"
                  style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: isLeft ? 'flex-start' : 'flex-end',
                    marginBottom: 60,
                  }}
                >
                  {/* Dot on the timeline */}
                  <div className="experience-dot" style={{
                    position: 'absolute',
                    left: '50%',
                    top: 28,
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: item.cur ? 'var(--accent)' : 'var(--bg)',
                    border: `2px solid var(--accent)`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                    boxShadow: item.cur ? '0 0 16px rgba(196,168,130,0.5)' : 'none',
                  }} />

                  {/* Year label on the line */}
                  <div className="experience-year-label" style={{
                    position: 'absolute',
                    left: '50%',
                    top: -20,
                    transform: 'translateX(-50%)',
                    fontFamily: "'Satoshi', sans-serif",
                    fontSize: 12,
                    color: 'var(--muted)',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                    zIndex: 1,
                  }}>
                    {item.year}
                  </div>

                  {/* Card */}
                  <div
                    className="experience-card"
                    style={{
                      width: 'calc(50% - 40px)',
                      background: 'var(--glass-bg)',
                      border: '1px solid var(--glass-border)',
                      borderTop: `2px solid var(--accent)`,
                      borderRadius: 14,
                      padding: '28px 28px 24px',
                      backdropFilter: 'blur(12px)',
                      transition: 'transform 0.35s, border-color 0.35s, box-shadow 0.35s',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, flexWrap: 'wrap', gap: 8 }}>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>
                        {item.title}
                      </h3>
                      {item.cur && (
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 5,
                          padding: '3px 10px',
                          background: 'rgba(196,168,130,0.12)',
                          border: '1px solid rgba(196,168,130,0.25)',
                          borderRadius: 999,
                          fontSize: 10,
                          fontWeight: 700,
                          color: 'var(--accent)',
                          letterSpacing: '0.04em',
                          whiteSpace: 'nowrap',
                        }}>
                          <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)' }} />
                          PRESENT
                        </span>
                      )}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600 }}>{item.co}</span>
                      <span style={{ fontSize: 12, color: 'var(--muted)' }}>•</span>
                      <span style={{ fontSize: 12, color: 'var(--muted)' }}>{item.p}</span>
                    </div>

                    <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--muted)', marginBottom: item.tags.length > 0 ? 16 : 0 }}>
                      {item.desc}
                    </p>

                    {item.tags.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {item.tags.map((t, j) => (
                          <span key={j} style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            height: 24,
                            padding: '0 10px',
                            background: 'rgba(196,168,130,0.06)',
                            border: '1px solid rgba(196,168,130,0.15)',
                            borderRadius: 6,
                            fontFamily: "'Satoshi', sans-serif",
                            fontSize: 11,
                            fontWeight: 500,
                            color: 'var(--muted)',
                          }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
