import { useState } from 'react';
import { useGsapSection } from '@/hooks/useGsap';
import { Award, ExternalLink, X } from 'lucide-react';

export default function Certifications() {
  const ref = useGsapSection<HTMLElement>();
  const [selected, setSelected] = useState<string | null>(null);

  const certifications = [
    { name: 'Foundations: Data, Data, Everywhere', image: '/certifications/foundations-data-data-everywhere.png', pdf: '/Foundations Data, Data, Everywhere.pdf' },
    { name: 'Ask Questions to Make Data-Driven Decisions', image: '/certifications/ask-questions-to-make-data-driven-decisions.png', pdf: '/Ask Questions to Make Data-Driven Decisions.pdf' },
    { name: 'Prepare Data for Exploration', image: '/certifications/prepare-data-for-exploration.png', pdf: '/Prepare Data for Exploration.pdf' },
    { name: 'Process Data from Dirty to Clean', image: '/certifications/process-data-from-dirty-to-clean.png', pdf: '/Process Data from Dirty to Clean.pdf' },
    { name: 'Share Data Through the Art of Visualization', image: '/certifications/share-data-through-the-art-of-visualization.png', pdf: '/Share Data Through the Art of Visualization.pdf' },
    { name: 'Introduction to SQL', image: '/certifications/introduction-to-sql.png', pdf: '/Introduction to SQL.pdf' },
    { name: 'Delivering Quality Work with Agility', image: '/certifications/delivering-quality-work-with-agility.png', pdf: '/Delivering Quality Work with Agility.pdf' },
  ];

  return (
    <>
      <section id="certifications" ref={ref} style={{ padding: '128px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div className="mb-16" data-gsap="fade-up">
              <p className="section-label mb-4">06 / Certifications</p>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: 20 }}>
                Professional <span style={{ color: 'var(--accent)' }}>Certifications</span>
              </h2>
              <div className="accent-line" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-gsap="fade-up">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="glass-card p-6 group"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelected(cert.image)}
                >
                  <div style={{ borderRadius: 10, overflow: 'hidden', marginBottom: 16, border: '1px solid var(--border)' }}>
                    <img
                      src={cert.image}
                      alt={cert.name}
                      style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.35s' }}
                      className="group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award size={16} style={{ color: 'var(--accent)' }} />
                      <h3 style={{ fontSize: 15, fontWeight: 600, transition: 'color 0.25s' }} className="group-hover:text-[var(--accent)]">
                        {cert.name}
                      </h3>
                    </div>
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{ color: 'var(--muted)', transition: 'color 0.25s' }}
                      className="hover:text-[var(--accent)]"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(16px)',
            cursor: 'pointer',
          }}
        >
          <button
            onClick={() => setSelected(null)}
            style={{
              position: 'absolute',
              top: 24,
              right: 24,
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '50%',
              width: 44,
              height: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
            }}
          >
            <X size={22} />
          </button>
          <img
            src={selected}
            alt="Certificate"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              borderRadius: 12,
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          />
        </div>
      )}
    </>
  );
}
