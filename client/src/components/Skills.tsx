import { useGsapSection } from '@/hooks/useGsap';

export default function Skills() {
  const ref = useGsapSection<HTMLElement>();

  const heroes = [
    { name: 'Python', level: '80%', note: 'Data analysis, ML pipelines, automation' },
    { name: 'Excel', level: '85%', note: 'Advanced formulas, pivot tables, dashboards' },
    { name: 'Social Media', level: '90%', note: 'Strategy, content, campaigns across 7+ accounts' },
  ];

  const grid = [
    { name: 'SQL', level: '70%' }, { name: 'Statistics', level: '75%' },
    { name: 'Pandas', level: '75%' }, { name: 'Scikit-learn', level: '65%' },
    { name: 'Tableau', level: '65%' }, { name: 'Power BI', level: '60%' },
    { name: 'Matplotlib', level: '75%' }, { name: 'ML Fundamentals', level: '60%' },
    { name: 'Data Cleaning', level: '80%' }, { name: 'Meta Business Suite', level: '85%' },
    { name: 'Content Creation', level: '85%' }, { name: 'Campaign Analytics', level: '80%' },
    { name: 'Copywriting', level: '80%' }, { name: 'Canva', level: '85%' },
    { name: 'Data Storytelling', level: '70%' },
  ];

  const tools = ['Git & GitHub', 'Streamlit', 'Buffer', 'Google Analytics', 'CRM Systems', 'Microsoft Office', 'Deep Learning Basics', 'Data Mining'];

  return (
    <section id="skills" ref={ref} style={{ padding: '128px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div className="mb-16" data-gsap="fade-up">
            <p className="section-label mb-4">04 / Skills</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: 20 }}>
              Technical <span style={{ color: 'var(--accent)' }}>Toolkit</span>
            </h2>
            <div className="accent-line" />
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-gsap="fade-up">
            {heroes.map((s, i) => (
              <div key={i} className="glass-card p-8">
                <p style={{ fontFamily: "'General Sans', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 700, color: 'var(--accent)', lineHeight: 1, marginBottom: 12 }}>{s.level}</p>
                <h4 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{s.name}</h4>
                <p style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--muted)' }}>{s.note}</p>
              </div>
            ))}
          </div>

          {/* Grid Skills */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8" data-gsap="fade-up">
            {grid.map((s, i) => (
              <div key={i} className="glass-card px-5 py-4 flex items-center justify-between group" style={{ borderRadius: 12 }}>
                <span style={{ fontSize: 13, color: 'var(--muted)', transition: 'color 0.25s' }} className="group-hover:text-white">{s.name}</span>
                <span style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 11, color: 'var(--accent)', fontWeight: 600 }}>{s.level}</span>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="flex flex-wrap gap-2" data-gsap="fade-up">
            {tools.map((t, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', height: 30, padding: '0 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', borderRadius: 999, fontFamily: "'Satoshi', sans-serif", fontSize: 13, color: 'var(--muted)' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
