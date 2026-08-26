import { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

/**
 * HalloIntro — Handwriting intro overlay (page load) + bottom section
 *
 * Uses real SVG handwriting paths from hello-nl.svg with stroke animation.
 * 1. On page load: fixed overlay, blocks scroll, "hallo" written, user scrolls → dismissed
 * 2. After scrolling past portfolio: "hallo" section appears at the bottom with normal scroll
 */

// The handwritten SVG paths from hello-nl.svg
const HALLO_PATHS = [
  'M7.69226 169.416C35.1867 153.231 58.9735 132.924 85.514 96.9917C104.141 71.7732 113.252 49.099 113.75 31.0304C113.998 17.6314 107.546 7.46666 95.3874 7.46666C81.9879 7.46666 73.5512 17.6314 68.3403 40.9642C62.6331 66.6071 58.4147 96.0314 47.7448 190.384',
  'M48.7905 181.163C54.0546 134.889 75.04 98.0761 101.591 98.0761C117.472 98.0761 127.565 110.731 124.699 128.845C123.086 139.515 120.171 151.922 118.506 164.081C116.48 179.466 122.267 191.376 140.19 191.376C165.556 191.376 180.752 163.941 188.99 135.059',
  'M267.249 112.858C262.384 101.663 252.044 94.1058 235.585 94.1058C208.289 94.1058 187.776 121.401 186.429 150.681C185.255 177.48 197.621 192.545 215.235 192.369C240.235 192.119 258.612 167.563 266.815 115.606C267.827 109.195 268.876 102.501 269.888 96.0909',
  'M269.888 96.0909C268.863 102.593 267.839 109.096 266.814 115.598C262.333 144.038 260.265 155.258 260.487 162.592C261.005 179.714 267.163 191.376 286.65 191.376C320.429 191.376 367.006 134.578 389.416 75.5902C395.893 58.5411 398.365 42.4346 398.365 31.1793C398.365 17.8337 394.147 7.5863 382.236 7.5863C370.574 7.5863 362.881 16.6422 355.933 30.9409C347.793 47.5248 341.772 71.4443 339.308 98.483C333.105 166.329 347 191.376 380.041 191.376C420.104 191.376 464.647 135.563 487.39 75.6967C493.908 58.5411 496.38 42.4346 496.38 31.1793C496.38 17.8337 492.162 7.5863 480.251 7.5863C468.588 7.5863 460.896 16.6422 453.948 30.9409C445.808 47.5248 439.786 71.4443 437.323 98.483C431.119 166.329 445.015 191.376 474.52 191.376C503.979 191.376 519.982 165.698 529.576 138.431C539.06 111.476 550.722 94.8502 575.04 94.8502C595.139 94.8502 611.02 109.739 611.02 137.778C611.02 168.796 590.896 192.121 565.466 192.369C543.088 192.617 528.39 174.503 529.879 147.208C531.616 116.935 549.978 94.8502 574.047 94.8502C587.943 94.8502 599.615 101.027 608.787 107.753C633.654 125.894 652.814 114.684 660.152 96.7467',
];

/* ── The reusable "hallo" SVG writing block ── */
function HalloWriting({ onDone }: { onDone?: () => void }) {
  const pathRefs = useRef<SVGPathElement[]>([]);
  const penRef = useRef<HTMLDivElement>(null);
  const onDoneRef = useRef(onDone);
  const [done, setDone] = useState(false);
  const animated = useRef(false);

  // Keep ref in sync
  useEffect(() => { onDoneRef.current = onDone; }, [onDone]);

  useEffect(() => {
    if (animated.current) return; // Only animate once
    animated.current = true;

    const paths = pathRefs.current.filter(Boolean);
    if (paths.length === 0) return;

    paths.forEach((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = `${len}`;
    });

    const totalLen = paths.reduce((sum, p) => sum + p.getTotalLength(), 0);
    const totalDuration = 2.0;

    const tl = gsap.timeline({
      onComplete() {
        setDone(true);
        if (penRef.current) gsap.to(penRef.current, { opacity: 0, duration: 0.2 });
        onDoneRef.current?.();
      },
    });

    paths.forEach((p, i) => {
      const len = p.getTotalLength();
      const dur = (len / totalLen) * totalDuration;

      tl.to(p, {
        strokeDashoffset: 0,
        duration: dur,
        ease: 'power2.out',
        onUpdate() {
          if (penRef.current) {
            const progress = 1 - (parseFloat(p.style.strokeDashoffset) / len);
            const pt = p.getPointAtLength(progress * len);
            const svg = p.ownerSVGElement;
            if (svg) {
              const rect = svg.getBoundingClientRect();
              const vb = svg.viewBox.baseVal;
              const sx = rect.width / vb.width;
              const sy = rect.height / vb.height;
              penRef.current.style.left = `${rect.left + pt.x * sx}px`;
              penRef.current.style.top = `${rect.top + pt.y * sy}px`;
              penRef.current.style.opacity = progress > 0.01 && progress < 0.98 ? '1' : '0';
            }
          }
        },
      }, i === 0 ? 0 : '-=0.08');
    });

    return () => { tl.kill(); };
  }, []); // Empty deps — runs once

  return (
    <>
      <svg
        viewBox="0 0 668 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: 'min(85vw, 620px)',
          height: 'auto',
          overflow: 'visible',
          filter: 'none',
          willChange: 'transform',
        }}
      >
        {HALLO_PATHS.map((d, i) => (
          <path
            key={i}
            ref={(el) => { if (el) pathRefs.current[i] = el; }}
            d={d}
            fill="none"
            stroke="#f5f0e8"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ willChange: 'stroke-dashoffset' }}
          />
        ))}
      </svg>

      <div
        ref={penRef}
        style={{
          position: 'fixed',
          width: 4,
          height: 4,
          borderRadius: '50%',
          background: 'rgba(245,240,232,0.7)',
          boxShadow: 'none',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          opacity: 0,
          willChange: 'left, top',
        }}
      />

      {done && (
        <p style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: "'Satoshi', sans-serif",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.2)',
          animation: 'halloFadeInUp 0.6s ease-out forwards',
        }}>
          scroll to explore
        </p>
      )}
    </>
  );
}

/* ── Main intro overlay (page load only, one time) ── */
export default function HalloIntro() {
  const [visible, setVisible] = useState(true);
  const [writingDone, setWritingDone] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const dismissed = useRef(false);

  // Block body scroll while overlay is visible
  useEffect(() => {
    if (!visible) return;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [visible]);

  // Dismiss — slides overlay up, gone forever
  const dismiss = useCallback(() => {
    if (dismissed.current || !overlayRef.current) return;
    dismissed.current = true;
    gsap.to(overlayRef.current, {
      y: '-100%',
      duration: 0.6,
      ease: 'power3.out',
      onComplete() {
        setVisible(false);
        document.body.style.overflow = '';
      },
    });
  }, []);

  // Listen for scroll on overlay to dismiss
  useEffect(() => {
    if (!writingDone || !overlayRef.current) return;
    const el = overlayRef.current;
    const onWheel = (e: WheelEvent) => { e.preventDefault(); dismiss(); };
    const timer = setTimeout(() => {
      el.addEventListener('wheel', onWheel, { passive: false });
      el.addEventListener('touchmove', dismiss, { once: true });
    }, 300);
    return () => {
      clearTimeout(timer);
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('touchmove', dismiss);
    };
  }, [writingDone, dismiss]);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <HalloWriting onDone={() => setWritingDone(true)} />
      <style>{`
        @keyframes halloFadeInUp {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
}
