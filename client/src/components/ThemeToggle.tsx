import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  if (!toggleTheme) return null;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to day mode' : 'Switch to night mode'}
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        zIndex: 9998,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 18px 10px 14px',
        borderRadius: 999,
        border: '1px solid var(--glass-border)',
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        cursor: 'pointer',
        transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s, border-color 0.3s, background 0.4s',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.08)';
        e.currentTarget.style.boxShadow = '0 6px 30px rgba(196,168,130,0.25)';
        e.currentTarget.style.borderColor = 'rgba(196,168,130,0.4)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        e.currentTarget.style.borderColor = 'var(--glass-border)';
      }}
    >
      {/* Sun icon — always visible */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke={isDark ? 'var(--accent)' : '#f0a030'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transition: 'stroke 0.4s, filter 0.4s',
          filter: isDark ? 'none' : 'drop-shadow(0 0 6px rgba(240,160,48,0.5))',
        }}
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>

      {/* DAY / NIGHT labels */}
      <span style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: "'Satoshi', monospace",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
      }}>
        <span style={{
          color: !isDark ? '#f0a030' : 'var(--muted)',
          transition: 'color 0.4s, text-shadow 0.4s',
          textShadow: !isDark ? '0 0 8px rgba(240,160,48,0.4)' : 'none',
        }}>
          DAY
        </span>
        <span style={{ color: 'var(--muted)', opacity: 0.4 }}>/</span>
        <span style={{
          color: isDark ? 'var(--accent)' : 'var(--muted)',
          transition: 'color 0.4s, text-shadow 0.4s',
          textShadow: isDark ? '0 0 8px rgba(196,168,130,0.4)' : 'none',
        }}>
          NIGHT
        </span>
      </span>
    </button>
  );
}
