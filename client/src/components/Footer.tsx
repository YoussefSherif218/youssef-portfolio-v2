import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '64px 0', background: 'var(--surface)' }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span style={{ fontFamily: "'General Sans', sans-serif", fontSize: 20, fontWeight: 700, color: 'var(--accent)' }}>Y</span>
              <span style={{ fontFamily: "'General Sans', sans-serif", fontSize: 20, fontWeight: 700, color: 'var(--text)' }}>S</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--muted)', maxWidth: 280 }}>
              Data Analyst & Marketing Analytics Specialist. Turning raw data into strategic insights.
            </p>
          </div>

          <div>
            <p className="section-label mb-5">Navigation</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((l) => (
                <li key={l} style={{ marginBottom: 10 }}>
                  <a href={`#${l.toLowerCase()}`} style={{ fontSize: 14, color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.25s' }}
                    className="hover:text-[var(--accent)]">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label mb-5">Connect</p>
            <div className="flex gap-3">
              {[
                { Icon: Github, href: 'https://github.com/YoussefSherif218', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/youssefsherif-/', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:yshreef924@gmail.com', label: 'Email' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                  style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', transition: 'all 0.25s' }}
                  className="hover:border-[var(--accent)] hover:text-[var(--accent)]">
                  <s.Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: 'var(--border)', marginBottom: 24 }} />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontSize: 13, color: 'var(--muted)' }}>© {year} Youssef Sherif. All rights reserved.</p>
          <p style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 12, color: 'var(--muted)', letterSpacing: '0.1em' }}>
            BUILT WITH REACT · TAILWIND CSS · GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}
