import { useGsapSection } from '@/hooks/useGsap';

export default function About() {
  const ref = useGsapSection<HTMLElement>();

  const expertise = [
    { n: '01', t: 'Data Analysis', d: 'Python, SQL, Excel, Tableau, Power BI for extracting actionable insights from complex datasets.' },
    { n: '02', t: 'Marketing Analytics', d: 'Campaign performance analysis, audience insights, and data-driven marketing strategy.' },
    { n: '03', t: 'AI & ML Foundations', d: 'Predictive models with machine learning and deep learning via Digilians MCIT scholarship.' },
    { n: '04', t: 'Digital Marketing', d: 'Social media strategy, content creation, brand management across multiple agencies.' },
  ];

  return (
    <section id="about" ref={ref} style={{ padding: '128px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          {/* Header */}
          <div className="mb-16" data-gsap="fade-up">
            <p className="section-label mb-4">01 / About</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: 20 }}>
              From Biotech <span style={{ color: 'var(--accent)' }}>to Data</span>
            </h2>
            <div className="accent-line" />
          </div>

          {/* Two-column editorial */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-10 mb-20" data-gsap="fade-up">
            <div className="lg:col-span-5">
              {/* Pull quote */}
              <blockquote style={{
                borderLeft: '3px solid var(--accent)',
                paddingLeft: 24,
                marginBottom: 24,
              }}>
                <p style={{ fontFamily: "'General Sans', sans-serif", fontSize: 22, fontWeight: 600, lineHeight: 1.5, color: 'var(--text)', fontStyle: 'italic' }}>
                  "Understanding not just the numbers, but the business context behind them."
                </p>
              </blockquote>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--muted)' }}>
                Junior Data Analyst with a Biotechnology degree from Cairo University, pivoting into data analytics through the Digilians Initiative — a 9-month scholarship by Egypt's Ministry of Communications.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--muted)' }}>
                With hands-on experience in both data analysis and digital marketing, I bring a unique perspective to every project. I've managed social media accounts across multiple agencies, analyzed campaign performance, and built data-driven strategies that improved engagement.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--muted)' }}>
                Currently focused on Python, SQL, machine learning, and data visualization tools like Tableau and Power BI — working toward becoming a full-stack data professional.
              </p>
            </div>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-gsap="fade-up">
            {expertise.map((x) => (
              <div key={x.n} className="glass-card p-6 group">
                <span style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: 'var(--accent)', display: 'block', marginBottom: 20 }}>{x.n}</span>
                <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, transition: 'color 0.25s' }} className="group-hover:text-[var(--accent)]">{x.t}</h4>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--muted)' }}>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
