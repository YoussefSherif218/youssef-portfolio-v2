import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ExternalLink, Award, Mail, Github, Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Animate sections
    const items = containerRef.current.querySelectorAll('.section');
    items.forEach((item) => {
      gsap.fromTo(item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Hero parallax
    const hero = containerRef.current.querySelector('.hero');
    if (hero) {
      gsap.to(hero, {
        y: -150,
        opacity: 0,
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  const experiences = [
    {
      title: 'Applied AI & Data Analytics Scholar',
      company: 'Digilians Initiative — MCIT',
      period: 'Dec 2025 — Present',
      desc: 'Selected for a 9-month scholarship by Egypt\'s Ministry of Communications. Applying statistics, probability, and data analysis using Python, SQL, and Excel.',
      highlights: [
        { label: 'SCHOLARSHIP', value: 'Top 1% selected' },
        { label: 'FOCUS', value: 'AI & Data Analytics' },
      ],
    },
    {
      title: 'Senior Social Media Specialist',
      company: 'Arcktech Marketing Agency',
      period: 'Feb 2025 — Oct 2025',
      desc: 'Managed content creation and scheduling for 7 social media accounts across various industries.',
      highlights: [
        { label: 'ACCOUNTS', value: '7+' },
        { label: 'INDUSTRIES', value: 'Multiple' },
      ],
    },
  ];

  const projects = [
    {
      title: 'RetailPulse AI',
      subtitle: 'Customer Segmentation Engine',
      desc: 'Built an end-to-end ML pipeline on the UCI Online Retail II dataset (~1M rows) to segment customers into 4 actionable business archetypes using K-Means clustering.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'K-Means'],
      github: 'https://github.com/YoussefSherif218/Retail-Pulse-AI-Strategic-Customer-Intelligence',
      image: '/projects/retailpulse.jpg',
    },
    {
      title: 'Corelytics',
      subtitle: 'Body Performance Classification',
      desc: 'End-to-end ML project on the Kaggle Body Performance dataset (13,393 records). Best model: XGBoost with 89% accuracy on binary classification.',
      tech: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'SHAP'],
      github: 'https://github.com/YoussefSherif218/Corelytics-Body.Performance',
      image: '/projects/corelytics.jpg',
    },
    {
      title: 'Transportation & Logistics',
      subtitle: 'GPS Shipment Analytics',
      desc: 'Two-part data project covering EDA, Random Forest delay prediction (88.9% accuracy), and SQL database design with 11 tables.',
      tech: ['Python', 'SQL Server', 'Random Forest', 'Pandas'],
      github: 'https://github.com/YoussefSherif218/Transportation_and_Logistics_Tracking',
      image: '/projects/logistics.jpg',
    },
  ];

  const toolkit = [
    {
      category: 'Data Analysis',
      skills: ['Python', 'Pandas', 'NumPy', 'Jupyter', 'Excel', 'Statistics'],
    },
    {
      category: 'Machine Learning',
      skills: ['Scikit-learn', 'XGBoost', 'Random Forest', 'K-Means', 'SHAP'],
    },
    {
      category: 'SQL & Databases',
      skills: ['SQL Server', 'T-SQL', 'Data Modeling', 'Star Schema', 'PostgreSQL'],
    },
    {
      category: 'Visualization',
      skills: ['Tableau', 'Power BI', 'Matplotlib', 'Data Storytelling'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Streamlit', 'VS Code', 'JupyterHub'],
    },
    {
      category: 'Soft Skills',
      skills: ['Communication', 'Problem Solving', 'Analytics', 'Strategy'],
    },
  ];

  return (
    <div ref={containerRef} style={{ background: '#0a0806', minHeight: '100vh' }}>
      {/* Navigation dots */}
      <nav style={{
        position: 'fixed',
        left: 16,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}>
        {['00', '01', '02', '03', '04', '05'].map((num, i) => (
          <a
            key={i}
            href={`#section-${i}`}
            style={{
              fontSize: 10,
              color: 'rgba(255,255,255,0.4)',
              textDecoration: 'none',
              padding: '4px 0',
              transition: 'color 0.3s',
              fontFamily: "'Satoshi', monospace",
            }}
            className="hover:text-white"
          >
            {num}
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <section className="hero" id="section-0" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 48px',
        maxWidth: 1200,
        margin: '0 auto',
        position: 'relative',
      }}>
        <div style={{ flex: 1 }}>
          <p style={{
            fontSize: 11,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#c4a882',
            marginBottom: 24,
            fontFamily: "'Satoshi', monospace",
          }}>
            Data Analyst & AI Enthusiast
          </p>
          <h1 style={{
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: 32,
            color: '#f5f0e8',
            fontFamily: "'General Sans', serif",
          }}>
            Youssef<br />
            <span style={{ fontStyle: 'italic', color: '#c4a882' }}>Sherif</span>
          </h1>
          <p style={{
            fontSize: 16,
            color: '#9a9590',
            maxWidth: 480,
            lineHeight: 1.7,
            marginBottom: 40,
          }}>
            Transforming raw data into actionable insights. Specializing in Machine Learning, Statistical Analysis, and Data Visualization.
          </p>
          <a href="#section-5" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 24px',
            border: '1px solid rgba(196,168,130,0.3)',
            borderRadius: 999,
            color: '#f5f0e8',
            fontSize: 13,
            textDecoration: 'none',
            width: 'fit-content',
            transition: 'all 0.3s',
          }}>
            Get in touch <ArrowRight size={14} />
          </a>
        </div>
        <div style={{
          flex: '0 0 550px',
          height: '100vh',
          position: 'relative',
        }}>
          <img
            src="/youssef-3d.png"
            alt="Youssef Sherif"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center bottom',
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '30%',
            background: 'linear-gradient(to top, #0a0806, transparent)',
            pointerEvents: 'none',
          }} />
        </div>
      </section>

      {/* Section 01: Background */}
      <section className="section" id="section-1" style={{
        padding: '120px 48px',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 40 }}>
          <span style={{ fontSize: 11, color: '#c4a882', fontFamily: "'Satoshi', monospace" }}>01</span>
          <span style={{ width: 40, height: 1, background: '#c4a882' }} />
          <span style={{ fontSize: 11, color: '#9a9590', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Satoshi', monospace" }}>Background & Working Style</span>
        </div>

        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: 40,
          color: '#f5f0e8',
        }}>
          A data analyst<br />
          who thinks in <span style={{ fontStyle: 'italic', color: '#c4a882' }}>insights</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#9a9590', marginBottom: 24, borderLeft: '2px solid #c4a882', paddingLeft: 20 }}>
              I build data pipelines and analysis workflows that turn raw numbers into business decisions. From EDA to production ML models, I care about the quality of insights and the systems that produce them.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#9a9590', marginBottom: 32 }}>
              My journey started with Biotechnology at Cairo University, evolved through Social Media Marketing, and now focuses on the intersection of Data Analytics and Artificial Intelligence.
            </p>

            <p style={{ fontSize: 12, color: '#9a9590', marginBottom: 8, fontFamily: "'Satoshi', monospace" }}>THROUGH THE YEARS</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { year: '2019', event: 'Started Biotechnology at Cairo University' },
                { year: '2023', event: 'Graduated, began marketing career' },
                { year: '2024', event: 'Social Media Marketing Track at ITI' },
                { year: '2025', event: 'Applied AI & Data Analytics Scholarship at MCIT' },
                { year: '2026', event: 'Building ML projects, seeking data roles' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, fontSize: 13 }}>
                  <span style={{ color: '#c4a882', fontFamily: "'Satoshi', monospace", width: 40 }}>{item.year}</span>
                  <span style={{ color: '#9a9590' }}>{item.event}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12,
              padding: 24,
            }}>
              <p style={{ fontSize: 11, color: '#9a9590', letterSpacing: '0.15em', marginBottom: 20, fontFamily: "'Satoshi', monospace" }}>VITALS</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <p style={{ fontSize: 11, color: '#9a9590', marginBottom: 4, fontFamily: "'Satoshi', monospace" }}>CURRENTLY</p>
                  <p style={{ fontSize: 14, color: '#f5f0e8' }}>Applied AI & Data Analytics Scholar</p>
                </div>
                <div>
                  <p style={{ fontSize: 11, color: '#9a9590', marginBottom: 4, fontFamily: "'Satoshi', monospace" }}>BASED IN</p>
                  <p style={{ fontSize: 14, color: '#f5f0e8' }}>Egypt</p>
                </div>
                <div>
                  <p style={{ fontSize: 11, color: '#9a9590', marginBottom: 4, fontFamily: "'Satoshi', monospace" }}>OPEN TO</p>
                  <p style={{ fontSize: 14, color: '#f5f0e8' }}>Data Analyst, ML Engineer roles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Experience */}
      <section className="section" id="section-2" style={{
        padding: '120px 48px',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 40 }}>
          <span style={{ fontSize: 11, color: '#c4a882', fontFamily: "'Satoshi', monospace" }}>02</span>
          <span style={{ width: 40, height: 1, background: '#c4a882' }} />
          <span style={{ fontSize: 11, color: '#9a9590', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Satoshi', monospace" }}>Experience</span>
        </div>

        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: 48,
          color: '#f5f0e8',
        }}>
          Professional <span style={{ fontStyle: 'italic', color: '#c4a882' }}>journey</span>
        </h2>

        {experiences.map((exp, i) => (
          <div key={i} style={{
            marginBottom: 48,
            paddingBottom: 48,
            borderBottom: i < experiences.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
          }}>
            <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
              <span style={{
                fontSize: 24,
                color: '#c4a882',
                fontFamily: "'General Sans', serif",
                fontStyle: 'italic',
                lineHeight: 1,
              }}>
                {['I.', 'II.', 'III.', 'IV.'][i]}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#f5f0e8' }}>{exp.title}</h3>
                  <span style={{ fontSize: 12, color: '#9a9590', fontFamily: "'Satoshi', monospace" }}>{exp.period}</span>
                </div>
                <p style={{ fontSize: 13, color: '#c4a882', marginBottom: 12 }}>{exp.company}</p>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: '#9a9590', marginBottom: 16 }}>{exp.desc}</p>
                <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                  {exp.highlights.map((h, j) => (
                    <div key={j}>
                      <p style={{ fontSize: 10, color: '#9a9590', letterSpacing: '0.1em', marginBottom: 4, fontFamily: "'Satoshi', monospace" }}>{h.label}</p>
                      <p style={{ fontSize: 14, color: '#f5f0e8', fontWeight: 600 }}>{h.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Section 03: Projects */}
      <section className="section" id="section-3" style={{
        padding: '120px 48px',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 40 }}>
          <span style={{ fontSize: 11, color: '#c4a882', fontFamily: "'Satoshi', monospace" }}>03</span>
          <span style={{ width: 40, height: 1, background: '#c4a882' }} />
          <span style={{ fontSize: 11, color: '#9a9590', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Satoshi', monospace" }}>Projects</span>
        </div>

        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: 48,
          color: '#f5f0e8',
        }}>
          Selected <span style={{ fontStyle: 'italic', color: '#c4a882' }}>work</span>
        </h2>

        {projects.map((project, i) => (
          <a
            key={i}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              marginBottom: 48,
              paddingBottom: 48,
              borderBottom: i < projects.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div style={{
              borderRadius: 12,
              overflow: 'hidden',
              marginBottom: 24,
              height: 300,
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <img src={project.image} alt={project.title} style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
              <div>
                <p style={{ fontSize: 11, color: '#9a9590', marginBottom: 8, fontFamily: "'Satoshi', monospace" }}>PLATE {['I', 'II', 'III'][i]}</p>
                <h3 style={{ fontSize: 24, fontWeight: 700, color: '#f5f0e8', marginBottom: 8 }}>{project.title}</h3>
                <p style={{ fontSize: 13, color: '#c4a882', marginBottom: 12 }}>{project.subtitle}</p>
              </div>
              <div>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: '#9a9590', marginBottom: 16 }}>{project.desc}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {project.tech.map((t, j) => (
                    <span key={j} style={{
                      fontSize: 10,
                      padding: '6px 12px',
                      borderRadius: 999,
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#9a9590',
                      fontFamily: "'Satoshi', monospace",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </section>

      {/* Section 04: Toolkit */}
      <section className="section" id="section-4" style={{
        padding: '120px 48px',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 40 }}>
          <span style={{ fontSize: 11, color: '#c4a882', fontFamily: "'Satoshi', monospace" }}>04</span>
          <span style={{ width: 40, height: 1, background: '#c4a882' }} />
          <span style={{ fontSize: 11, color: '#9a9590', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Satoshi', monospace" }}>Toolkit</span>
        </div>

        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: 48,
          color: '#f5f0e8',
        }}>
          The stack <span style={{ fontStyle: 'italic', color: '#c4a882' }}>under the hood</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {toolkit.map((item, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 12,
              padding: 24,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ fontSize: 11, color: '#9a9590', fontFamily: "'Satoshi', monospace" }}>T.0{i + 1}</span>
                <span style={{ fontSize: 10, color: '#c4a882', fontFamily: "'Satoshi', monospace" }}>{item.skills.length} SKILLS</span>
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: '#f5f0e8', marginBottom: 16 }}>{item.category}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {item.skills.map((skill, j) => (
                  <span key={j} style={{
                    fontSize: 10,
                    padding: '4px 10px',
                    borderRadius: 999,
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#9a9590',
                    fontFamily: "'Satoshi', monospace",
                  }}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 05: Certifications */}
      <section className="section" id="section-5" style={{
        padding: '120px 48px',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 40 }}>
          <span style={{ fontSize: 11, color: '#c4a882', fontFamily: "'Satoshi', monospace" }}>05</span>
          <span style={{ width: 40, height: 1, background: '#c4a882' }} />
          <span style={{ fontSize: 11, color: '#9a9590', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Satoshi', monospace" }}>Credentials</span>
        </div>

        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: 48,
          color: '#f5f0e8',
        }}>
          Certifications & <span style={{ fontStyle: 'italic', color: '#c4a882' }}>training</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {[
            'Microsoft Certified Power BI Data Analyst Associate (PL-300)',
            'Foundations: Data, Data, Everywhere',
            'Ask Questions to Make Data-Driven Decisions',
            'Prepare Data for Exploration',
            'Process Data from Dirty to Clean',
            'Share Data Through the Art of Visualization',
            'Introduction to SQL',
            'Delivering Quality Work with Agility',
          ].map((cert, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 12,
              padding: 20,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}>
              <Award size={16} style={{ color: '#c4a882', flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: '#9a9590' }}>{cert}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 06: Contact */}
      <section className="section" id="section-6" style={{
        padding: '120px 48px 80px',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 40 }}>
          <span style={{ fontSize: 11, color: '#c4a882', fontFamily: "'Satoshi', monospace" }}>06</span>
          <span style={{ width: 40, height: 1, background: '#c4a882' }} />
          <span style={{ fontSize: 11, color: '#9a9590', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Satoshi', monospace" }}>Contact</span>
        </div>

        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: 24,
          color: '#f5f0e8',
        }}>
          Let's build<br />
          <span style={{ fontStyle: 'italic', color: '#c4a882' }}>something good</span>
        </h2>
        <p style={{ fontSize: 15, color: '#9a9590', marginBottom: 40, maxWidth: 500, lineHeight: 1.7 }}>
          Open to data analyst and ML engineer roles where insights and ownership matter. Always interested in new challenges.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 12,
            padding: 32,
          }}>
            <p style={{ fontSize: 11, color: '#9a9590', marginBottom: 20, fontFamily: "'Satoshi', monospace" }}>SEND A NOTE</p>
            <a href="mailto:youssef@example.com" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 28px',
              background: '#c4a882',
              color: '#0a0806',
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}>
              <Mail size={14} />
              Send Message
              <ArrowRight size={14} />
            </a>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 12,
            padding: 32,
          }}>
            <p style={{ fontSize: 11, color: '#9a9590', marginBottom: 20, fontFamily: "'Satoshi', monospace" }}>CORRESPONDENCE</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <a href="https://github.com/YoussefSherif218" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#9a9590', fontSize: 13, textDecoration: 'none', transition: 'color 0.3s' }} className="hover:text-white">
                <Github size={14} /> github.com/YoussefSherif218
              </a>
              <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#9a9590', fontSize: 13, textDecoration: 'none', transition: 'color 0.3s' }} className="hover:text-white">
                <ArrowRight size={14} /> Main Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '80px 48px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <h1 style={{
          fontSize: 'clamp(4rem, 12vw, 10rem)',
          fontWeight: 700,
          color: '#f5f0e8',
          lineHeight: 1,
          opacity: 0.1,
        }}>
          Youssef
        </h1>
      </footer>
    </div>
  );
}
