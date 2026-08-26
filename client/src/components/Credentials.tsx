import { useState } from 'react';
import { useGsapSection } from '@/hooks/useGsap';
import { Award, ExternalLink, X } from 'lucide-react';

export default function Credentials() {
  const ref = useGsapSection<HTMLElement>();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <section id="credentials" ref={ref} style={{ padding: '128px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>

            {/* Section Header */}
            <div className="mb-16" data-gsap="fade-up">
              <p className="section-label mb-4">06 / Credentials</p>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 700, marginBottom: 20 }}>
                Professional <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Credentials</span>
              </h2>
              <div className="accent-line" />
            </div>

            {/* Big Microsoft Certificate */}
            <div
              data-gsap="fade-up"
              style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: 18,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.35s, box-shadow 0.35s',
              }}
              className="group"
              onClick={() => setSelected('/certifications/microsoft-certified-power-bi-data-analyst-associate-pl-300.jpg')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="credentials-grid" style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                minHeight: 400,
              }}>
                {/* Certificate Image */}
                <div className="credentials-image" style={{
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,0.3)',
                  padding: 24,
                }}>
                  <img
                    src="/certifications/microsoft-certified-power-bi-data-analyst-associate-pl-300.jpg"
                    alt="Microsoft PL-300 Certification"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: 360,
                      objectFit: 'contain',
                      borderRadius: 8,
                      transition: 'transform 0.5s',
                    }}
                    className="group-hover:scale-[1.02]"
                  />
                </div>

                {/* Certificate Info */}
                <div className="credentials-info" style={{
                  padding: '48px 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 16px',
                    background: 'rgba(196,168,130,0.1)',
                    border: '1px solid rgba(196,168,130,0.2)',
                    borderRadius: 999,
                    width: 'fit-content',
                    marginBottom: 24,
                  }}>
                    <Award size={16} style={{ color: 'var(--accent)' }} />
                    <span style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      fontFamily: "'Satoshi', monospace",
                    }}>
                      Verified Credential
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: 'var(--text)',
                    lineHeight: 1.2,
                    marginBottom: 16,
                  }}>
                    Microsoft Certified
                  </h3>
                  <h4 style={{
                    fontSize: 22,
                    fontWeight: 600,
                    color: 'var(--accent)',
                    fontStyle: 'italic',
                    marginBottom: 20,
                    lineHeight: 1.3,
                  }}>
                    Power BI Data Analyst Associate
                  </h4>
                  <p style={{
                    fontSize: 16,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    marginBottom: 8,
                    fontFamily: "'Satoshi', monospace",
                  }}>
                    PL-300
                  </p>

                  <p style={{
                    fontSize: 17,
                    lineHeight: 1.8,
                    color: 'var(--muted)',
                    marginBottom: 32,
                  }}>
                    Validates expertise in preparing, modeling, analyzing, and visualizing data using Microsoft Power BI to deliver actionable business insights.
                  </p>

                  <div style={{ display: 'flex', gap: 12 }}>
                    <a
                      href="/certifications/microsoft-certified-power-bi-data-analyst-associate-pl-300.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '14px 28px',
                        background: 'var(--accent)',
                        color: 'var(--bg)',
                        borderRadius: 8,
                        fontSize: 15,
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'opacity 0.25s',
                      }}
                      className="hover:opacity-80"
                    >
                      View Certificate
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
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
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(20px)',
            cursor: 'pointer',
          }}
        >
          <button
            onClick={() => setSelected(null)}
            style={{
              position: 'absolute',
              top: 24,
              right: 24,
              background: 'var(--border)',
              border: 'none',
              borderRadius: '50%',
              width: 48,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text)',
              transition: 'background 0.25s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--glass-border)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--border)'; }}
          >
            <X size={24} />
          </button>
          <img
            src={selected}
            alt="Credential"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              borderRadius: 12,
              boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
            }}
          />
        </div>
      )}
    </>
  );
}
