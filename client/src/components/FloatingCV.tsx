import { useEffect, useState, useRef } from 'react';

export default function FloatingCV() {
  const [pulsing, setPulsing] = useState(false);
  const [tooltip, setTooltip] = useState(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const onScroll = () => {
      setPulsing(false);
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setPulsing(true), 3000);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    idleTimer.current = setTimeout(() => setPulsing(true), 3000);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(idleTimer.current);
    };
  }, []);

  return (
    <a
      href="/YoussefSherif_CV.pdf"
      download="YoussefSherif_CV.pdf"
      onMouseEnter={() => { setTooltip(true); setPulsing(false); }}
      onMouseLeave={() => setTooltip(false)}
      className="floating-cv-wrapper"
      style={{
        position: 'fixed',
        right: 28,
        bottom: 100,
        zIndex: 9997,
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        textDecoration: 'none',
      }}
    >
      {/* Tooltip label */}
      <span style={{
        display: 'inline-block',
        padding: '8px 16px',
        background: 'var(--accent)',
        color: 'var(--bg)',
        fontFamily: "'Satoshi', monospace",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        borderRadius: 8,
        whiteSpace: 'nowrap',
        marginRight: 12,
        opacity: tooltip ? 1 : 0,
        transform: tooltip ? 'translateX(0)' : 'translateX(10px)',
        transition: 'opacity 0.3s, transform 0.3s cubic-bezier(0.16,1,0.3,1)',
        boxShadow: '0 4px 20px rgba(196,168,130,0.3)',
      }}>
        Download CV
      </span>

      {/* Circle button with CV text */}
      <div
        className="floating-cv-btn"
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, var(--accent) 0%, #a08060 100%)',
          border: '2px solid rgba(255,255,255,0.15)',
          cursor: 'pointer',
          transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s, border-color 0.3s',
          boxShadow: pulsing
            ? '0 0 0 0 rgba(196,168,130,0.5), 0 6px 25px rgba(196,168,130,0.35)'
            : '0 6px 25px rgba(196,168,130,0.35)',
          animation: pulsing ? 'cv-pulse 2s ease-in-out infinite' : 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.15)';
          e.currentTarget.style.boxShadow = '0 10px 40px rgba(196,168,130,0.5), 0 0 60px rgba(196,168,130,0.2)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 6px 25px rgba(196,168,130,0.35)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
        }}
      >
        <span style={{
          fontFamily: "'General Sans', sans-serif",
          fontSize: 15,
          fontWeight: 800,
          color: '#000000',
          letterSpacing: '0.05em',
          lineHeight: 1,
        }}>
          CV
        </span>
      </div>

      {/* Pulse ring */}
      {pulsing && (
        <div style={{
          position: 'absolute',
          right: 0,
          width: 56,
          height: 56,
          borderRadius: '50%',
          border: '2px solid var(--accent)',
          animation: 'cv-ring 2s ease-out infinite',
          pointerEvents: 'none',
        }} />
      )}

      <style>{`
        @keyframes cv-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(196,168,130,0.5), 0 6px 25px rgba(196,168,130,0.35); }
          50% { box-shadow: 0 0 0 10px rgba(196,168,130,0), 0 6px 30px rgba(196,168,130,0.3); }
        }
        @keyframes cv-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        :root:not(.dark) .floating-cv-btn {
          background: linear-gradient(135deg, #c4a882 0%, #a08060 100%) !important;
          border-color: rgba(0,0,0,0.1) !important;
          box-shadow: 0 6px 25px rgba(160,128,96,0.3) !important;
        }
        :root:not(.dark) .floating-cv-btn span {
          color: #ffffff !important;
        }
        :root:not(.dark) .floating-cv-btn:hover {
          box-shadow: 0 10px 40px rgba(160,128,96,0.45) !important;
        }

        @media (max-width: 768px) {
          .floating-cv-wrapper {
            display: none !important;
          }
        }
      `}</style>
    </a>
  );
}
