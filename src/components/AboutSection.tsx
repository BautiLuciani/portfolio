'use client'

import { useLang } from './LangContext'
import T from './AnimatedText'

export default function AboutSection() {
  const skills = [
    'Next.js / React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'SQL / MySQL',
    'Framer Motion',
  ]

  return (
    <section className="about" id="sobre-mi">
      <div className="about-inner">
        {/* Columna izquierda */}
        <div className="about-text reveal">
          <T tKey="about_tag" as="p" className="section-tag" />
          <T tKey="about_title" as="h2" className="section-title" />
          <div className="divider-line" />
          <T tKey="about_p1" as="p" html />
          <T tKey="about_p2" as="p" html />

          <div className="skills-grid">
            {skills.map(skill => (
              <div className="skill-pill" key={skill}>
                <span className="skill-dot" />
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha - Stats */}
        <div className="about-stats reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="stat-card">
            <div className="num">50+</div>
            <T tKey="stat1_lbl" as="div" className="lbl" />
            <div className="sub">→ aitech.com.ar · qcuatro.com</div>
          </div>
          <div className="stat-card">
            <div className="num">100%</div>
            <T tKey="stat2_lbl" as="div" className="lbl" />
            <div className="sub">→ diseño · código · deploy</div>
          </div>
          <div className="stat-card">
            <div className="num">24/7</div>
            <T tKey="stat3_lbl" as="div" className="lbl" />
            <div className="sub">→ mantenimiento incluido</div>
          </div>
        </div>
      </div>
    </section>
  )
}