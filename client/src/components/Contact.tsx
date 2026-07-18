import { useGsapSection } from '@/hooks/useGsap';
import { ArrowRight, Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const ref = useGsapSection<HTMLElement>();

  return (
    <section id="contact" ref={ref} style={{ padding: '128px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div className="mb-16" data-gsap="fade-up">
            <p className="section-label mb-4">06 / Contact</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: 20 }}>
              Let's Work <span style={{ color: 'var(--accent)' }}>Together</span>
            </h2>
            <div className="accent-line" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-12">
            <div className="lg:col-span-6 space-y-8" data-gsap="fade-up">
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--muted)' }}>
                I'm currently open to data analyst roles, freelance projects, and internship opportunities. Whether you have a specific project in mind or want to discuss analytics and data strategy, feel free to reach out.
              </p>
              <a href="mailto:yshreef924@gmail.com" className="btn-primary">
                <Mail size={16} />
                Send Me an Email
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="lg:col-span-6 space-y-0" data-gsap="fade-up">
              {[
                { Icon: Mail, label: 'Email', val: 'yshreef924@gmail.com', href: 'mailto:yshreef924@gmail.com' },
                { Icon: Linkedin, label: 'LinkedIn', val: 'linkedin.com/in/youssefsherif-', href: 'https://www.linkedin.com/in/youssefsherif-/' },
                { Icon: Github, label: 'GitHub', val: 'github.com/YoussefSherif218', href: 'https://github.com/YoussefSherif218' },
              ].map((c, i) => (
                <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  className="group flex items-center gap-5"
                  style={{ padding: '24px 0', borderBottom: '1px solid var(--border)', textDecoration: 'none' }}>
                  <c.Icon size={20} style={{ color: 'var(--muted)' }} />
                  <div>
                    <p className="section-label mb-1">{c.label}</p>
                    <p style={{ fontSize: 15, fontWeight: 500, color: 'var(--text)', transition: 'color 0.25s' }} className="group-hover:text-[var(--accent)]">{c.val}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="mt-20 flex items-center gap-4" style={{ padding: '28px 0', borderTop: '1px solid var(--border)' }} data-gsap="fade-up">
            <div style={{ width: 10, height: 10, borderRadius: 999, background: 'var(--accent-success)', boxShadow: '0 0 12px rgba(34,197,94,0.4)' }} />
            <p style={{ fontSize: 14, color: 'var(--muted)' }}>
              <span style={{ color: 'var(--accent-success)', fontWeight: 600 }}>Available</span> — Currently advancing through the Digilians AI scholarship while seeking data analyst positions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
