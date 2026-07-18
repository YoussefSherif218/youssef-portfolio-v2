import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        height: 72,
        background: scrolled ? 'rgba(5,5,5,0.6)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      }}
    >
      <div className="container h-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-2" style={{ fontFamily: "'General Sans', sans-serif", fontWeight: 700, fontSize: 18, color: 'var(--text)', textDecoration: 'none' }}>
          <span style={{ color: 'var(--accent)' }}>Y</span>S
        </a>

        <div className="hidden md:flex items-center gap-12">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: 'var(--muted)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'color 0.25s',
              }}
              className="hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          style={{ background: 'none', border: 'none', color: 'var(--text)' }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: 'rgba(5,5,5,0.95)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
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
                fontSize: 16,
                fontWeight: 500,
                color: 'var(--muted)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
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
