import { useGsapSection } from '@/hooks/useGsap';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const ref = useGsapSection<HTMLElement>();

  const projects = [
    { title: 'RetailPulse AI', sub: 'Customer Segmentation Engine', year: '2026', desc: 'Built an end-to-end ML pipeline on the UCI Online Retail II dataset (~1M rows) to segment customers into 4 actionable business archetypes using K-Means clustering. Engineered RFM features with StandardScaler normalization.', tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'K-Means'], github: 'https://github.com/YoussefSherif218/Retail-Pulse-AI-Strategic-Customer-Intelligence' },
    { title: 'Bank Marketing Analytics', sub: 'Campaign Performance Analysis', year: '2025', desc: 'Analyzed bank marketing campaign data to identify key factors influencing customer subscription to term deposits. Built classification models and generated actionable insights.', tech: ['Python', 'Pandas', 'Scikit-learn', 'Data Visualization'], github: 'https://github.com/YoussefSherif218/Bank-Marketing-Analytics' },
    { title: 'NeuroScope Core', sub: 'Visual Neural Network Builder', year: '2026', desc: 'Data & research lead for a 3D visual ML model builder. Authored the BRD/PRD, defined user personas, and structured 30+ functional requirements to bridge the gap in deep learning education.', tech: ['Requirements Engineering', 'BRD/PRD', 'User Personas', 'Stakeholder Analysis'], github: 'https://github.com/hazemelerefey/neuroscope' },
    { title: 'NeuroScope Landing', sub: 'Marketing & Conversion Analytics', year: '2026', desc: 'Led research and analysis for the NeuroScope marketing site. Conducted competitive gap analysis against TensorBoard and structured the 3D scroll-driven conversion funnel and information architecture.', tech: ['Competitive Analysis', 'User Journey Mapping', 'Market Positioning'], github: 'https://github.com/hazemelerefey/neuroscope' },
  ];

  return (
    <section id="projects" ref={ref} style={{ padding: '128px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div className="mb-16" data-gsap="fade-up">
            <p className="section-label mb-4">03 / Projects</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: 20 }}>
              Featured <span style={{ color: 'var(--accent)' }}>Work</span>
            </h2>
            <div className="accent-line" />
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-gsap="fade-up">
            {projects.map((p, i) => (
              <a key={i} href={p.github} target="_blank" rel="noopener noreferrer"
                className="glass-card p-8 group block"
                style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="flex items-center justify-between mb-6">
                  <span className="section-label">{p.sub}</span>
                  <span style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 13, color: 'var(--muted)' }}>{p.year}</span>
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, transition: 'color 0.25s' }} className="group-hover:text-[var(--accent)]">{p.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--muted)', marginBottom: 20 }}>{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.tech.map((t, j) => (
                    <span key={j} style={{ display: 'inline-flex', alignItems: 'center', height: 26, padding: '0 10px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', borderRadius: 6, fontFamily: "'Satoshi', sans-serif", fontSize: 12, color: 'var(--muted)' }}>{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2" style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 500 }}>
                  <ExternalLink size={14} />
                  <span>View on GitHub</span>
                  <ArrowRight size={14} className="transition-transform duration-250 group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10" data-gsap="fade-up">
            <a href="https://github.com/YoussefSherif218" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Github size={16} />
              View All on GitHub
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
