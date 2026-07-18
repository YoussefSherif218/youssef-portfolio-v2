import { useGsapSection } from '@/hooks/useGsap';

export default function Projects() {
  const ref = useGsapSection<HTMLElement>();

  const projects = [
    {
      id: 'plate-1',
      num: 'I.',
      title: 'RetailPulse AI',
      subtitle: 'Customer Segmentation Engine',
      desc: 'Built an end-to-end ML pipeline on the UCI Online Retail II dataset (~1M rows) to segment customers into 4 actionable business archetypes using K-Means clustering.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'K-Means'],
      github: 'https://github.com/YoussefSherif218/Retail-Pulse-AI-Strategic-Customer-Intelligence',
      image: '/projects/retailpulse.jpg',
    },
    {
      id: 'plate-2',
      num: 'II.',
      title: 'Corelytics',
      subtitle: 'Body Performance Classification',
      desc: 'End-to-end ML project on the Kaggle Body Performance dataset (13,393 records). Best model: XGBoost with 89% accuracy on binary classification.',
      tech: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'SHAP'],
      github: 'https://github.com/YoussefSherif218/Corelytics-Body.Performance',
      image: '/projects/corelytics.jpg',
    },
    {
      id: 'plate-3',
      num: 'III.',
      title: 'Transportation & Logistics',
      subtitle: 'GPS Shipment Analytics',
      desc: 'Two-part data project covering EDA, Random Forest delay prediction (88.9% accuracy), and SQL database design with 11 tables.',
      tech: ['Python', 'SQL Server', 'Random Forest', 'Pandas'],
      github: 'https://github.com/YoussefSherif218/Transportation_and_Logistics_Tracking',
      image: '/projects/logistics.jpg',
    },
    {
      id: 'plate-4',
      num: 'IV.',
      title: 'Retail SQL Lab',
      subtitle: 'Database Design & Analytics',
      desc: 'Designed and queried a retail database with complex SQL joins, aggregations, and stored procedures for business intelligence reporting.',
      tech: ['SQL Server', 'T-SQL', 'Data Modeling', 'Star Schema'],
      github: 'https://github.com/YoussefSherif218/Retail-SQL-Lab',
      image: '/projects/sqlab.jpg',
    },
    {
      id: 'plate-5',
      num: 'V.',
      title: 'Bank Marketing Analytics',
      subtitle: 'Predictive Campaign Modeling',
      desc: 'Analyzed bank marketing campaign data to predict term deposit subscriptions using classification algorithms and feature importance analysis.',
      tech: ['Python', 'XGBoost', 'Pandas', 'Matplotlib', 'SHAP'],
      github: 'https://github.com/YoussefSherif218',
      image: '/projects/bankanalytics.jpg',
    },
    {
      id: 'plate-6',
      num: 'VI.',
      title: 'NeuroScope Core',
      subtitle: 'AI Research Framework',
      desc: 'Research framework exploring neural network architectures for pattern recognition and anomaly detection in complex datasets.',
      tech: ['Python', 'TensorFlow', 'NumPy', 'Jupyter'],
      github: 'https://github.com/YoussefSherif218',
      image: '/projects/neuroscope.jpg',
    },
    {
      id: 'plate-7',
      num: 'VII.',
      title: 'NeuroScope Landing',
      subtitle: 'AI Product Showcase',
      desc: 'Landing page for an AI-powered analytics product, featuring modern design and interactive data visualization demos.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/YoussefSherif218',
      image: '/projects/neuroscopelanding.jpg',
    },
  ];

  return (
    <section id="projects" ref={ref} style={{ padding: '128px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>

          {/* Section Header */}
          <div className="mb-16" data-gsap="fade-up">
            <p className="section-label mb-4">03 / Projects</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: 20 }}>
              Seven projects, <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>all built, all real.</span>
            </h2>
            <div className="accent-line" />
          </div>

          {/* Contents Navigation */}
          <div className="mb-16" data-gsap="fade-up" style={{
            borderTop: '1px solid var(--border)',
            paddingTop: 24,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text)' }}>
                Contents
              </span>
              <span style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', fontFamily: "'Satoshi', monospace" }}>
                Seven Plates
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {projects.map((project, i) => (
                <a
                  key={i}
                  href={`#${project.id}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: '16px 0',
                    borderBottom: '1px solid var(--border)',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.3s',
                  }}
                  className="group"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.paddingLeft = '8px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                >
                  <span style={{
                    fontSize: 18,
                    fontWeight: 600,
                    fontStyle: 'italic',
                    color: 'var(--accent)',
                    fontFamily: "'General Sans', serif",
                    width: 40,
                  }}>
                    {project.num}
                  </span>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'baseline', gap: 12 }}>
                    <span style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: 'var(--text)',
                      transition: 'color 0.25s',
                    }}
                    className="group-hover:text-[var(--accent)]"
                    >
                      {project.title}
                    </span>
                    <span style={{
                      fontSize: 13,
                      color: 'var(--muted)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                    }}>
                      {project.subtitle}
                    </span>
                  </div>
                  <span style={{
                    fontSize: 11,
                    color: 'var(--muted)',
                    fontFamily: "'Satoshi', monospace",
                  }}>
                    P.{String(i + 1).padStart(2, '0')}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Full-Size Project Cards */}
          {projects.map((project, i) => (
            <div
              key={i}
              id={project.id}
              data-gsap="fade-up"
              style={{
                marginBottom: 80,
                scrollMarginTop: 80,
              }}
            >
              {/* Full-width image */}
              <div style={{
                borderRadius: 14,
                overflow: 'hidden',
                marginBottom: 24,
                height: 400,
                background: 'var(--surface)',
                border: '1px solid var(--border)',
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s',
                  }}
                  className="group-hover:scale-105"
                />
              </div>

              {/* Project info */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 40 }}>
                <div>
                  <p style={{
                    fontSize: 11,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    marginBottom: 8,
                    fontFamily: "'Satoshi', monospace",
                  }}>
                    Plate {project.num.replace('.', '')} · P.{String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: 8,
                    fontStyle: 'italic',
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--accent)', marginBottom: 16 }}>
                    {project.subtitle}
                  </p>
                </div>

                <div>
                  <p style={{
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: 'var(--muted)',
                    marginBottom: 20,
                  }}>
                    {project.desc}
                  </p>

                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                    {project.tech.map((t, j) => (
                      <span key={j} style={{
                        fontSize: 10,
                        padding: '6px 14px',
                        borderRadius: 999,
                        border: '1px solid var(--border)',
                        color: 'var(--muted)',
                        fontFamily: "'Satoshi', monospace",
                        letterSpacing: '0.05em',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 12,
                      fontWeight: 600,
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      transition: 'opacity 0.25s',
                    }}
                    className="hover:opacity-70"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
