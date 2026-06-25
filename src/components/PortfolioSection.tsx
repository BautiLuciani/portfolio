'use client'

import T from './AnimatedText'

export default function PortfolioSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="portfolio">
      <div className="section-inner">
        <div className="portfolio-header reveal">
          <div>
            <T tKey="portfolio_tag" as="p" className="section-tag" />
            <T tKey="portfolio_title" as="h2" className="section-title" />
            <div className="divider-line" />
            <T tKey="portfolio_sub" as="p" className="section-sub" />
          </div>
        </div>

        <div className="projects-grid">
          {/* Proyecto 1 - AITECH */}
          <div className="project-card reveal">
            <div className="project-thumb project-thumb-aitech">
              <div className="project-thumb-placeholder">
                <div className="project-logo-aitech">AITECH</div>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: '#2ecc71',
                  opacity: 0.7,
                  letterSpacing: '0.05em',
                }}>aitech.com.ar</span>
              </div>
            </div>
            <div className="project-info">
              <div className="project-tags">
                <span className="project-tag">Next.js</span>
                <span className="project-tag">TypeScript</span>
                <span className="project-tag">Tailwind</span>
              </div>
              <h3>AITECH Soluciones</h3>
              <T tKey="proj1_desc" as="p" />
              <a
                href="https://aitech.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <T tKey="proj_link" as="span" />
              </a>
            </div>
          </div>

          {/* Proyecto 2 - QCuatro */}
          <div className="project-card reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="project-thumb project-thumb-qcuatro">
              <div className="project-thumb-placeholder">
                <div className="project-logo-qcuatro">Q4</div>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: '#CC0033',
                  opacity: 0.7,
                  letterSpacing: '0.05em',
                }}>qcuatro.com</span>
              </div>
            </div>
            <div className="project-info">
              <div className="project-tags">
                <span className="project-tag">Next.js</span>
                <span className="project-tag">Framer Motion</span>
                <span className="project-tag">Dark theme</span>
              </div>
              <h3>QCuatro Finance</h3>
              <T tKey="proj2_desc" as="p" />
              <T tKey="proj_soon" as="span" className="project-link" style={{ color: 'var(--muted)' }} />
            </div>
          </div>

          {/* Proyecto 3 - Coming Soon */}
          <div className="project-card reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="project-thumb project-thumb-soon">
              <div className="project-thumb-placeholder">
                <div className="project-logo-soon">+</div>
                <T tKey="coming_soon" as="span" className="project-coming-badge" />
              </div>
            </div>
            <div className="project-info">
              <div className="project-tags">
                <span className="project-tag">2026</span>
              </div>
              <T tKey="coming_title" as="h3" />
              <T tKey="coming_desc" as="p" />
              <a
                href="#contacto"
                className="project-link"
                onClick={e => { e.preventDefault(); scrollTo('contacto') }}
              >
                <T tKey="coming_cta" as="span" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}