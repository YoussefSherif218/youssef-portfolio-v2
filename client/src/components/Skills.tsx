import { useGsapSection } from '@/hooks/useGsap';
import { useRef, useEffect, useCallback, useState } from 'react';

function StarNetwork({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const starsRef = useRef<Array<{ x: number; y: number; r: number; vx: number; vy: number; bright: number }>>([]);

  const initStars = useCallback((w: number, h: number) => {
    const count = 18;
    starsRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      bright: Math.random() * 0.6 + 0.4,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      if (starsRef.current.length === 0) initStars(canvas.width, canvas.height);
    };
    resize();

    let opacity = 0;

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (active && opacity < 1) opacity = Math.min(1, opacity + 0.03);
      if (!active && opacity > 0) opacity = Math.max(0, opacity - 0.05);

      if (opacity <= 0) {
        animRef.current = requestAnimationFrame(draw);
        return;
      }

      const stars = starsRef.current;
      stars.forEach(s => {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0 || s.x > canvas.width) s.vx *= -1;
        if (s.y < 0 || s.y > canvas.height) s.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.3 * opacity;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(196, 168, 130, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw stars
      stars.forEach(s => {
        // Glow
        const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 6);
        grad.addColorStop(0, `rgba(196, 168, 130, ${0.4 * s.bright * opacity})`);
        grad.addColorStop(1, 'rgba(196, 168, 130, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 6, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `rgba(255, 240, 220, ${s.bright * opacity})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, [active, initStars]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}

export default function Skills() {
  const ref = useGsapSection<HTMLElement>();

  const categories = [
    {
      num: 'T.01',
      title: 'Data Analysis',
      skills: ['Python', 'Pandas', 'NumPy', 'Excel', 'Statistics', 'Data Cleaning', 'Data Wrangling', 'Data Mining', 'EDA', 'Feature Engineering', 'Data Validation'],
    },
    {
      num: 'T.02',
      title: 'Machine Learning',
      skills: ['Scikit-learn', 'XGBoost', 'Random Forest', 'K-Means', 'Deep Learning', 'Feature Engineering', 'Model Evaluation', 'TensorFlow'],
    },
    {
      num: 'T.03',
      title: 'SQL & Databases',
      skills: ['SQL Server', 'PostgreSQL', 'Data Modeling', 'Star Schema', 'CRM Systems', 'Window Functions', 'ETL'],
    },
    {
      num: 'T.04',
      title: 'Visualization',
      skills: ['Tableau', 'Power BI', 'Data Storytelling', 'Seaborn', 'Matplotlib', 'Plotly'],
    },
    {
      num: 'T.05',
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Streamlit', 'VS Code', 'JupyterHub', 'Google Analytics', 'Google Colab', 'Microsoft Office'],
    },
    {
      num: 'T.06',
      title: 'Marketing & Strategy',
      skills: ['Social Media', 'Content Strategy', 'Copywriting', 'Meta Business Suite', 'Campaign Analytics', 'Brand Strategy'],
    },
  ];

  return (
    <section id="skills" ref={ref} style={{ padding: '128px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>

          {/* Header */}
          <div className="mb-16" data-gsap="fade-up">
            <p className="section-label mb-6">05 / Skills</p>
            <h2 style={{
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: 20,
            }}>
              Technical <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Toolkit</span>
            </h2>
          </div>

          {/* Category Cards Grid */}
          <div className="skills-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            justifyItems: 'center',
          }} data-gsap="fade-up">
            {categories.map((cat, i) => (
              <SkillCard key={i} cat={cat} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function SkillCard({ cat, index }: { cat: { num: string; title: string; skills: string[] }; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={cardRef}
      className="skill-card"
      style={{
        position: 'relative',
        background: hovered
          ? 'linear-gradient(160deg, #1e1a16 0%, #151311 40%, #1e1a16 70%, #151311 100%)'
          : 'var(--glass-bg)',
        border: `1px solid ${hovered ? 'rgba(196,168,130,0.3)' : 'var(--glass-border)'}`,
        borderRadius: 20,
        padding: '52px 40px',
        width: '100%',
        maxWidth: 480,
        minHeight: 540,
        transition: 'transform 0.35s, border-color 0.35s, box-shadow 0.35s, background 0.35s',
        cursor: 'default',
        overflow: 'hidden',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.4)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <StarNetwork active={hovered} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Card Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 24,
        }}>
          <span style={{
            fontSize: 13,
            color: 'var(--muted)',
            fontFamily: "'Satoshi', monospace",
            letterSpacing: '0.05em',
          }}>
            {cat.num}
          </span>
          <span style={{
            fontSize: 12,
            color: 'var(--muted)',
            fontFamily: "'Satoshi', monospace",
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            {cat.skills.length} Skills
          </span>
        </div>

        {/* Category Title */}
        <h3 style={{
          fontSize: 34,
          fontWeight: 700,
          color: 'var(--text)',
          marginBottom: 28,
          lineHeight: 1.2,
        }}>
          {cat.title}
        </h3>

        {/* Skill Tags */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 10,
        }}>
          {cat.skills.map((skill, j) => (
            <span
              key={j}
              style={{
                fontSize: 15,
                padding: '12px 22px',
                borderRadius: 999,
                border: '1px solid var(--border)',
                color: 'var(--muted)',
                fontFamily: "'Satoshi', monospace",
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                transition: 'all 0.25s',
                background: hovered ? 'rgba(196,168,130,0.05)' : 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(196,168,130,0.4)';
                e.currentTarget.style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--muted)';
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
