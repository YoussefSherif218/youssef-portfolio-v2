import { useState } from 'react';
import { useGsapSection } from '@/hooks/useGsap';
import { X, ZoomIn } from 'lucide-react';

interface Dashboard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  metrics?: string[];
  tags: string[];
}

export default function Analytics() {
  const ref = useGsapSection<HTMLElement>();
  const [selectedDashboard, setSelectedDashboard] = useState<Dashboard | null>(null);

  const dashboards: Dashboard[] = [
    {
      id: '1',
      title: 'Global Sales Performance',
      subtitle: 'Multi-Region Sales Analysis',
      image: '/dashboards/Screenshot 2026-04-26 193906.png',
      description: 'Comprehensive sales analysis across multiple geographic regions with agent performance metrics and country-specific trends. Features monthly trend analysis, regional sales breakdown, and agent productivity comparison.',
      metrics: ['80 Total Orders', 'Multi-Region Coverage', 'Agent Performance Tracking'],
      tags: ['Sales', 'Geography', 'Performance'],
    },
    {
      id: '2',
      title: 'GTX Sales Intelligence',
      subtitle: 'Product & Sector Analytics',
      image: '/dashboards/Screenshot 2026-04-28 121632.png',
      description: 'Advanced sales intelligence dashboard for GTX product line. Analyzes total sales by sector, regional office distribution, product performance, and sales agent contributions. Total revenue tracked at 85.26M with comprehensive filtering capabilities.',
      metrics: ['85.26M Revenue', 'Multi-Sector Analysis', 'Manager Performance'],
      tags: ['Enterprise', 'Products', 'Revenue'],
    },
    {
      id: '3',
      title: 'GTX Analytics Pro',
      subtitle: 'Dark Mode Enterprise Dashboard',
      image: '/dashboards/Screenshot 2026-05-02 142730.png',
      description: 'Professional enterprise-grade dashboard with sophisticated dark theme design. Integrates sector analysis, regional distribution, product performance, and management metrics. Enhanced with visual design patterns and interactive filtering.',
      metrics: ['85.26M Total Amount', 'Real-time Updates', 'Advanced Filtering'],
      tags: ['Enterprise', 'Analytics', 'Real-time'],
    },
    {
      id: '4',
      title: 'Logistics & Shipment Analytics',
      subtitle: 'Executive Operations Dashboard',
      image: '/dashboards/Screenshot 2026-05-02 143344.png',
      description: 'Executive overview dashboard for logistics and shipment management. Tracks 6,000 total shipments with 67.6% delay rate analysis and 32.4% on-time delivery rate. Includes distance segment analysis, customer concentration insights, and delivery status breakdown.',
      metrics: ['6,000 Shipments', '67.6% Delay Rate', '552 km Avg Distance'],
      tags: ['Logistics', 'Operations', 'Executive'],
    },
    {
      id: '5',
      title: 'Regional Sales Performance Hub',
      subtitle: 'Market Performance Tracking',
      image: '/dashboards/Screenshot 2026-05-02 195555.png',
      description: 'Focused regional dashboard analyzing sales performance across target markets. Features comprehensive monthly trend analysis with amount vs. target comparisons, monthly amounts tracking, and regional performance metrics.',
      metrics: ['Regional Focus', 'Monthly Trends', 'Target Analysis'],
      tags: ['Regional', 'Sales', 'Performance'],
    },
    {
      id: '6',
      title: 'Monthly Sales Dynamics',
      subtitle: 'Seasonal Trend Analysis',
      image: '/dashboards/Screenshot 2026-05-02 195709.png',
      description: 'Deep dive into market dynamics with monthly time-series analysis. Visualizes sum of amount and target comparisons across all months, showing seasonal patterns and performance fluctuations throughout the year.',
      metrics: ['12-Month Trend', 'Target Tracking', 'Seasonal Analysis'],
      tags: ['Temporal', 'Analysis', 'Trends'],
    },
    {
      id: '7',
      title: 'Territory & Time Series Analysis',
      subtitle: 'Multi-Region Temporal Dashboard',
      image: '/dashboards/Screenshot 2026-05-02 195813.png',
      description: 'Advanced dashboard combining territorial analysis with time-series trends. Includes page navigation for data exploration with multiple performance views tracking sales patterns across different regions and time periods.',
      metrics: ['Multi-Page Analytics', 'Territory Breakdown', 'Trend Visualization'],
      tags: ['Territory', 'TimeSeries', 'Advanced'],
    },
    {
      id: '8',
      title: 'XS Logistics Intelligence',
      subtitle: 'Shipment Performance Analytics',
      image: '/dashboards/Screenshot 2026-05-12 172424.png',
      description: 'Comprehensive logistics dashboard for XS company featuring monthly shipment volume trends, delivery status analytics, customer concentration risk analysis, and distance segment insights. Tracks on-time vs. delayed shipments with detailed operational insights.',
      metrics: ['1,951 On-time Shipments', '57.8% L&T Dominance', '38 Unique Customers'],
      tags: ['Logistics', 'Shipments', 'Analytics'],
    },
  ];

  return (
    <>
      <section
        id="analytics"
        ref={ref}
        style={{
          padding: '128px 0',
          borderTop: '1px solid var(--border)',
          background: 'var(--bg)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: 1400, margin: '0 auto' }}>
            {/* Header */}
            <div className="mb-20" data-gsap="fade-up">
              <p className="section-label mb-4">04 / Analytics</p>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 700, marginBottom: 20 }}>
                Data-Driven <span style={{ color: 'var(--accent)' }}>Insights</span>
              </h2>
              <div className="accent-line" />
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: 'var(--muted)',
                  marginTop: 16,
                  maxWidth: 800,
                }}
              >
                Professional dashboards showcasing real-world business intelligence projects. From sales analytics to logistics optimization, these dashboards demonstrate expertise in data visualization and strategic insights.
              </p>
            </div>

            {/* Dashboards Grid */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
              data-gsap="fade-up"
              style={{ perspective: '1000px' }}
            >
              {dashboards.map((dashboard) => (
                <div
                  key={dashboard.id}
                  className="group glass-card overflow-hidden"
                  style={{
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transform: 'translateZ(0)',
                    transformStyle: 'preserve-3d',
                  }}
                  onClick={() => setSelectedDashboard(dashboard)}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  {/* Image Container */}
                  <div
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      height: 320,
                      background: 'linear-gradient(135deg, var(--accent-light, #c4a882) 0%, var(--accent, #c4a882) 100%)',
                      border: 'none',
                    }}
                  >
                    <img
                      src={dashboard.image}
                      alt={dashboard.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      }}
                      className="group-hover:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(2px)',
                        opacity: 0,
                        transition: 'opacity 0.35s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      className="group-hover:opacity-100"
                    >
                      <ZoomIn size={32} style={{ color: 'white' }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: 20 }}>
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: 'var(--accent)',
                        textTransform: 'uppercase',
                        marginBottom: 8,
                      }}
                    >
                      {dashboard.subtitle}
                    </p>
                    <h3
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        marginBottom: 12,
                        color: 'var(--text)',
                        lineHeight: 1.4,
                      }}
                      className="group-hover:text-[var(--accent)] transition-colors"
                    >
                      {dashboard.title}
                    </h3>

                    {/* Tags */}
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {dashboard.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: 11,
                            padding: '4px 10px',
                            background: 'var(--accent)',
                            color: '#000',
                            borderRadius: 4,
                            fontWeight: 600,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedDashboard && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: 20,
            animation: 'fadeIn 0.3s ease-out',
          }}
          onClick={() => setSelectedDashboard(null)}
        >
          <style>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(30px) scale(0.95);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
          `}</style>

          <div
            style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              maxWidth: '90vw',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
              animation: 'slideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedDashboard(null)}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: 'rgba(196, 168, 130, 0.1)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                zIndex: 10,
                color: 'var(--text)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(196, 168, 130, 0.2)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(196, 168, 130, 0.1)';
              }}
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div style={{ display: 'flex', flexDirection: 'column', maxHeight: '90vh' }}>
              {/* Image */}
              <div style={{ position: 'relative' }}>
                <img
                  src={selectedDashboard.image}
                  alt={selectedDashboard.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </div>

              {/* Info */}
              <div
                style={{
                  padding: 32,
                  overflow: 'auto',
                  flex: 1,
                }}
              >
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    marginBottom: 12,
                  }}
                >
                  {selectedDashboard.subtitle}
                </p>

                <h2
                  style={{
                    fontSize: 36,
                    fontWeight: 700,
                    marginBottom: 16,
                    color: 'var(--text)',
                  }}
                >
                  {selectedDashboard.title}
                </h2>

                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.8,
                    color: 'var(--muted)',
                    marginBottom: 24,
                  }}
                >
                  {selectedDashboard.description}
                </p>

                {selectedDashboard.metrics && selectedDashboard.metrics.length > 0 && (
                  <div style={{ marginBottom: 24 }}>
                    <h3
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        color: 'var(--accent)',
                        marginBottom: 12,
                        textTransform: 'uppercase',
                      }}
                    >
                      Key Metrics
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
                      {selectedDashboard.metrics.map((metric, i) => (
                        <div
                          key={i}
                          style={{
                            padding: 12,
                            background: 'rgba(196, 168, 130, 0.05)',
                            border: '1px solid rgba(196, 168, 130, 0.1)',
                            borderRadius: 8,
                            fontSize: 13,
                            color: 'var(--text)',
                          }}
                        >
                          ✓ {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {selectedDashboard.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 12,
                        padding: '6px 14px',
                        background: 'var(--accent)',
                        color: '#000',
                        borderRadius: 6,
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
