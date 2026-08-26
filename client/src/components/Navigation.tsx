import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
  const time = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Africa/Cairo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(now);
  const offset = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Africa/Cairo',
    timeZoneName: 'shortOffset',
  }).formatToParts(now).find((p) => p.type === 'timeZoneName')?.value || 'UTC+2';
  return { time, offset };
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { time, offset } = useCairoTime();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Analytics', href: '#analytics' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        height: 76,
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="container h-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-2" style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 700, fontSize: 20, color: 'var(--text)', textDecoration: 'none' }}>
          <span style={{ color: 'var(--accent)' }}>Y</span>S
        </a>

        {/* Live Cairo Time — desktop only */}
        <div className="hidden md:flex items-center gap-3" style={{ marginLeft: -40 }}>
          <span style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: 10,
            fontWeight: 600,
            color: 'var(--muted)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            opacity: 0.5,
          }}>
            LOCAL TIME
          </span>
          <span style={{
            fontFamily: "'General Sans', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--text)',
          }}>
            {time}
          </span>
          <span style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: 10,
            color: 'var(--muted)',
            opacity: 0.4,
          }}>
            {offset}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-14">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color: 'var(--muted)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'color 0.25s',
              }}
              className="hover:text-[var(--text)]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            style={{ background: 'none', border: 'none', color: 'var(--text)' }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid var(--border)',
            padding: '24px 20px',
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '14px 0',
                fontFamily: "'Satoshi', sans-serif",
                fontSize: 18,
                fontWeight: 500,
                color: 'var(--muted)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
