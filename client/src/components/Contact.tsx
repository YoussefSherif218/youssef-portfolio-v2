import { useGsapSection } from '@/hooks/useGsap';
import { ArrowRight, Mail, Linkedin, Github, MapPin, Send, Calendar, Copy, CheckCircle, Loader2 } from 'lucide-react';
import { useState, useRef, FormEvent } from 'react';

export default function Contact() {
  const ref = useGsapSection<HTMLElement>();
  const [activeType, setActiveType] = useState('Data Analyst');
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const types = ['Data Analyst', 'ML Engineer', 'Freelance', 'Other'];

  const copyEmail = () => {
    navigator.clipboard.writeText('yshreef924@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    const formData = new FormData(formRef.current);
    formData.append('access_key', '966c88e9-9db5-4dde-aa71-1d7fe9296fb5');
    formData.append('subject', `New ${activeType} Inquiry from ${formData.get('name')}`);
    formData.append('from_name', 'Portfolio Contact Form');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" ref={ref} style={{ padding: '128px 0' }}>
      <div className="container">
        <div className="contact-wrapper" style={{
          maxWidth: 1600,
          margin: '0 auto',
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: 24,
          padding: '56px 60px',
          boxShadow: '0 40px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(196,168,130,0.1)',
        }}>

          {/* Section Header with VOL badge */}
          <div className="mb-16 contact-header" data-gsap="fade-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p className="section-label mb-6" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                06 <span style={{ width: 40, height: 1, background: 'var(--muted)', display: 'inline-block' }} /> CONTACT & AVAILABILITY
              </p>
            </div>
            <span style={{
              fontSize: 10,
              color: 'var(--muted)',
              fontFamily: "'Satoshi', monospace",
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              border: '1px solid var(--border)',
              borderRadius: 999,
              padding: '8px 16px',
            }}>
              VOL. 06 · '26
            </span>
          </div>

          {/* Big Heading */}
          <div className="mb-12" data-gsap="fade-up">
            <h2 style={{
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: 0,
            }}>
              Let's build<br />
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>something great.</span>
            </h2>
          </div>

          {/* Subtitle */}
          <div className="mb-20" data-gsap="fade-up">
            <p style={{ fontSize: 19, lineHeight: 1.7, color: 'var(--muted)', maxWidth: 700 }}>
              Open to <strong style={{ color: 'var(--text)' }}>data analytics</strong> and <strong style={{ color: 'var(--text)' }}>AI engineering</strong> roles.
              Based in <strong style={{ color: 'var(--text)' }}>Egypt</strong>, open to freelance.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="contact-columns" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 20 }} data-gsap="fade-up">

            {/* Left: Contact Form */}
            <div className="contact-form-inner" style={{
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: 16,
              padding: '32px 36px',
            }}>
              {/* Form Header */}
              <div className="contact-form-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <span style={{
                  fontSize: 15,
                  color: 'var(--accent)',
                  fontFamily: "'Satoshi', monospace",
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}>
                  <Send size={16} /> SEND A NOTE
                </span>
                <span style={{
                  fontSize: 14,
                  color: 'var(--accent)',
                  fontFamily: "'Satoshi', monospace",
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  DIRECT SUBMISSION
                </span>
              </div>

              {/* Type Pills */}
              <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
                {types.map(t => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setActiveType(t)}
                    style={{
                      fontSize: 15,
                      padding: '12px 26px',
                      borderRadius: 999,
                      border: `1px solid ${activeType === t ? 'var(--accent)' : 'var(--border)'}`,
                      background: activeType === t ? 'rgba(196,168,130,0.1)' : 'transparent',
                      color: activeType === t ? 'var(--accent)' : 'var(--muted)',
                      fontFamily: "'Satoshi', monospace",
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.25s',
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Hidden type field */}
              <input type="hidden" name="inquiry_type" value={activeType} />

              {/* Form */}
              <form ref={formRef} onSubmit={handleSubmit}>
                {/* Name & Email */}
                <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{
                      fontSize: 14,
                      color: 'var(--accent)',
                      fontFamily: "'Satoshi', monospace",
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: 8,
                    }}>NAME</label>
                    <input type="text" name="name" required placeholder="Your name" style={{
                      width: '100%',
                      padding: '18px 20px',
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      borderRadius: 8,
                      color: 'var(--text)',
                      fontSize: 18,
                      fontFamily: "'Satoshi', sans-serif",
                      outline: 'none',
                      transition: 'border-color 0.25s',
                      boxSizing: 'border-box',
                    }}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(196,168,130,0.4)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div>
                    <label style={{
                      fontSize: 14,
                      color: 'var(--accent)',
                      fontFamily: "'Satoshi', monospace",
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: 8,
                    }}>EMAIL</label>
                    <input type="email" name="email" required placeholder="your@email.com" style={{
                      width: '100%',
                      padding: '18px 20px',
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      borderRadius: 8,
                      color: 'var(--text)',
                      fontSize: 18,
                      fontFamily: "'Satoshi', sans-serif",
                      outline: 'none',
                      transition: 'border-color 0.25s',
                      boxSizing: 'border-box',
                    }}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(196,168,130,0.4)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                    />
                  </div>
                </div>

                {/* Note */}
                <div style={{ marginBottom: 24 }}>
                  <label style={{
                    fontSize: 14,
                    color: 'var(--accent)',
                    fontFamily: "'Satoshi', monospace",
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: 8,
                  }}>NOTE</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about the role, project, or what you'd like me to analyze."
                    style={{
                      width: '100%',
                      padding: '16px 18px',
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      borderRadius: 8,
                      color: 'var(--text)',
                      fontSize: 16,
                      fontFamily: "'Satoshi', sans-serif",
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.25s',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(196,168,130,0.4)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                  />
                </div>

                {/* Action Buttons */}
                <div className="contact-actions" style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <button type="submit" disabled={status === 'sending'} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '18px 36px',
                    borderRadius: 999,
                    border: '1px solid var(--accent)',
                    background: status === 'sending' ? 'rgba(196,168,130,0.7)' : 'var(--accent)',
                    color: 'var(--bg)',
                    fontSize: 15,
                    fontWeight: 600,
                    fontFamily: "'Satoshi', monospace",
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    cursor: status === 'sending' ? 'wait' : 'pointer',
                    transition: 'all 0.25s',
                  }}>
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> SENDING...
                      </>
                    ) : (
                      <>SEND MESSAGE <ArrowRight size={16} /></>
                    )}
                  </button>
                  <button type="button" onClick={copyEmail} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '18px 32px',
                    borderRadius: 999,
                    border: '1px solid var(--border)',
                    background: 'transparent',
                    color: 'var(--muted)',
                    fontSize: 15,
                    fontWeight: 500,
                    fontFamily: "'Satoshi', monospace",
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.25s',
                  }}>
                    {copied ? 'COPIED!' : 'COPY EMAIL'} <Copy size={13} />
                  </button>
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginTop: 16,
                    padding: '14px 20px',
                    background: 'rgba(34,197,94,0.1)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: 10,
                    color: '#22c55e',
                    fontSize: 14,
                    fontFamily: "'Satoshi', monospace",
                    fontWeight: 600,
                  }}>
                    <CheckCircle size={18} /> Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginTop: 16,
                    padding: '14px 20px',
                    background: 'rgba(239,68,68,0.1)',
                    border: '1px solid rgba(239,68,68,0.3)',
                    borderRadius: 10,
                    color: '#ef4444',
                    fontSize: 14,
                    fontFamily: "'Satoshi', monospace",
                    fontWeight: 600,
                  }}>
                    ❌ Failed to send. Please try again or email me directly.
                  </div>
                )}
              </form>

              {/* Spin animation for loader */}
              <style>{`
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              `}</style>
            </div>

            {/* Right: Correspondence */}
            <div className="contact-correspondence-inner" style={{
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: 16,
              padding: '32px 36px',
            }}>
              {/* Header */}
              <div className="contact-correspondence-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
                <span style={{
                  fontSize: 15,
                  color: 'var(--accent)',
                  fontFamily: "'Satoshi', monospace",
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}>
                  <Mail size={16} /> CORRESPONDENCE
                </span>
                <span style={{
                  fontSize: 14,
                  color: 'var(--accent)',
                  fontFamily: "'Satoshi', monospace",
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  SEVEN CHANNELS
                </span>
              </div>

              {/* Contact Rows */}
              {[
                { label: 'EMAIL', value: 'yshreef924@gmail.com', href: 'mailto:yshreef924@gmail.com', icon: <Mail size={16} />, external: false },
                { label: 'LINKEDIN', value: 'linkedin.com/in/youssefsherif-', href: 'https://www.linkedin.com/in/youssefsherif-/', icon: <Linkedin size={16} />, external: true },
                { label: 'GITHUB', value: 'github.com/YoussefSherif218', href: 'https://github.com/YoussefSherif218', icon: <Github size={16} />, external: true },
                { label: 'LOCATED', value: 'Egypt', href: undefined, icon: <MapPin size={16} />, external: false },
              ].map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '22px 0',
                    borderBottom: i < 3 ? '1px solid var(--border)' : 'none',
                    textDecoration: 'none',
                    transition: 'all 0.25s',
                  }}
                  className="group"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <span className="contact-label-width" style={{
                      fontSize: 14,
                      color: 'var(--accent)',
                      fontFamily: "'Satoshi', monospace",
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      width: 100,
                    }}>{c.label}</span>
                    <span style={{
                      fontSize: 19,
                      fontWeight: 500,
                      color: 'var(--text)',
                      transition: 'color 0.25s',
                    }}
                      className="group-hover:text-[var(--accent)] contact-value-text"
                    >{c.value}</span>
                  </div>
                  {c.href && (
                    <ArrowRight size={16} style={{ color: 'var(--muted)', transition: 'color 0.25s, transform 0.25s' }}
                      className="group-hover:text-[var(--accent)] group-hover:translate-x-1"
                    />
                  )}
                </a>
              ))}

              {/* Freelance Platforms */}
              <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                <span style={{
                  fontSize: 15,
                  color: 'var(--accent)',
                  fontFamily: "'Satoshi', monospace",
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: 20,
                  textAlign: 'center',
                }}>FREELANCE PLATFORMS</span>
                <div className="freelance-buttons" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                  {[
                    { name: 'Mostaql', href: 'https://mostaql.com/u/Youssef_Shreef', logo: '/mostaql.png', color: '#28a745' },
                    { name: 'Khamsat', href: 'https://khamsat.com/user/youssef_shreef', logo: '/khamsat.jpg', color: '#f5a623' },
                    { name: 'Upwork', href: 'https://www.upwork.com/freelancers/~01266897d69dfba63e', logo: '/upwork.png', color: '#14a800' },
                  ].map((p, i) => (
                    <a
                      key={i}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: '18px 32px',
                        borderRadius: 999,
                        border: '1px solid var(--border)',
                        background: 'transparent',
                        color: 'var(--text)',
                        fontSize: 18,
                        fontWeight: 600,
                        fontFamily: "'Satoshi', sans-serif",
                        textDecoration: 'none',
                        transition: 'all 0.25s',
                      }}
                      className="group"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = p.color;
                        e.currentTarget.style.background = `${p.color}15`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border)';
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <img src={p.logo} alt={p.name} style={{ width: 40, height: 40, borderRadius: 6, objectFit: 'contain' }} />
                      {p.name}
                      <ArrowRight size={14} style={{ color: 'var(--muted)', transition: 'transform 0.25s' }}
                        className="group-hover:translate-x-1"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
