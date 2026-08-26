import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

function useCairoTime() {
  const [time, setTime] = useState(() => formatCairoTime());

  useEffect(() => {
    const interval = setInterval(() => setTime(formatCairoTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

function formatCairoTime() {
  const now = new Date();
  const cairo = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Africa/Cairo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(now);

  const offset = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Africa/Cairo',
    timeZoneName: 'shortOffset',
  })
    .formatToParts(now)
    .find((p) => p.type === 'timeZoneName')?.value || 'UTC+2';

  return { time: cairo, offset };
}

const aboutItems = [
  { label: 'About Me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Professional Experience', href: '#experience' },
  { label: 'Education', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/YoussefSherif218' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/youssefsherif-/' },
  { label: 'Email', href: 'mailto:yshreef924@gmail.com' },
];

export default function Footer() {
  const { time, offset } = useCairoTime();
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!aboutOpen) return;
    const handler = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [aboutOpen]);

  const handleNav = (href: string) => {
    setAboutOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#000', color: '#fff', position: 'relative' }}>
      {/* ── Editorial Grid ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
          padding: '0',
          maxWidth: '100%',
        }}
        className="footer-grid"
      >
        {/* ── LINKS ── */}
        <div style={{ padding: '48px 32px' }}>
          <p style={labelStyle}>LINKS</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              { label: 'Home', href: '#' },
              { label: 'Resume', href: '/YoussefSherif_CV.pdf', download: true },
              { label: 'Contact', href: '#contact' },
            ].map((l) => (
              <li key={l.label} style={{ marginBottom: 14 }}>
                <a
                  href={l.href}
                  {...(l.download ? { download: true } : {})}
                  style={linkStyle}
                  className="footer-link"
                >
                  {l.label}
                </a>
              </li>
            ))}

            {/* About Dropdown */}
            <li ref={aboutRef as any} style={{ position: 'relative' }}>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                style={{
                  ...linkStyle,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  padding: 0,
                }}
                className="footer-link"
              >
                About
                <ChevronDown
                  size={12}
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: aboutOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    opacity: 0.5,
                  }}
                />
              </button>

              <div
                style={{
                  overflow: 'hidden',
                  maxHeight: aboutOpen ? '400px' : '0',
                  opacity: aboutOpen ? 1 : 0,
                  transition: 'max-height 0.4s ease, opacity 0.3s ease',
                  marginTop: aboutOpen ? 12 : 0,
                }}
              >
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {aboutItems.map((item) => (
                    <li key={item.label} style={{ marginBottom: 10 }}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNav(item.href);
                        }}
                        style={{
                          ...linkStyle,
                          fontSize: 13,
                          color: 'rgba(255,255,255,0.35)',
                        }}
                        className="footer-link-sub"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* ── SOCIALS ── */}
        <div style={{ padding: '48px 32px' }}>
          <p style={labelStyle}>SOCIALS</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {socials.map((s) => (
              <li key={s.label} style={{ marginBottom: 14 }}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  className="footer-link"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── LOCAL TIME ── */}
        <div style={{ padding: '48px 32px' }}>
          <p style={labelStyle}>LOCAL TIME</p>
          <p
            style={{
              fontFamily: "'General Sans', sans-serif",
              fontSize: 28,
              fontWeight: 600,
              color: '#fff',
              margin: '0 0 4px',
              letterSpacing: '-0.02em',
            }}
          >
            {time}{' '}
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 14 }}>
              {offset}
            </span>
          </p>
          <p
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: 13,
              color: 'rgba(255,255,255,0.35)',
              margin: 0,
              letterSpacing: '0.05em',
            }}
          >
            Cairo, Egypt
          </p>
        </div>

        {/* ── VERSION ── */}
        <div style={{ padding: '48px 32px' }}>
          <p style={labelStyle}>VERSION</p>
          <p
            style={{
              fontFamily: "'General Sans', sans-serif",
              fontSize: 18,
              fontWeight: 500,
              color: '#fff',
              margin: '0 0 4px',
            }}
          >
            2026
          </p>
          <p
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: 13,
              color: 'rgba(255,255,255,0.35)',
              margin: 0,
              letterSpacing: '0.05em',
            }}
          >
            Portfolio Edition
          </p>
        </div>
      </div>

      {/* ── Divider ── */}
      <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />

      {/* ── Big Name — Flush Bottom ── */}
      <div
        style={{
          width: '100vw',
          overflow: 'hidden',
          marginLeft: 'calc(-50vw + 50%)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '40px 0 0',
        }}
      >
        <h1
          style={{
            fontFamily: "'General Sans', sans-serif",
            fontSize: 'clamp(80px, 22vw, 400px)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.04em',
            lineHeight: 0.82,
            textTransform: 'uppercase',
            userSelect: 'none',
            whiteSpace: 'nowrap',
            margin: 0,
            padding: 0,
            textAlign: 'center',
            width: '100%',
          }}
        >
          YOUSSEF
        </h1>
      </div>

      {/* ── Responsive Styles ── */}
      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-grid > div {
            padding: 32px 24px !important;
          }
        }
        .footer-link {
          transition: color 0.25s ease !important;
        }
        .footer-link:hover {
          color: #fff !important;
        }
        .footer-link-sub {
          transition: color 0.25s ease !important;
        }
        .footer-link-sub:hover {
          color: rgba(255,255,255,0.6) !important;
        }
      `}</style>
    </footer>
  );
}

/* ── Shared Styles ── */

const labelStyle: React.CSSProperties = {
  fontFamily: "'Satoshi', sans-serif",
  fontSize: 11,
  fontWeight: 600,
  color: 'rgba(255,255,255,0.3)',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  marginBottom: 20,
  marginTop: 0,
};

const linkStyle: React.CSSProperties = {
  fontFamily: "'General Sans', sans-serif",
  fontSize: 15,
  fontWeight: 500,
  color: 'rgba(255,255,255,0.6)',
  textDecoration: 'none',
  transition: 'color 0.25s ease',
  display: 'inline-block',
};
