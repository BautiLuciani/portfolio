'use client'

import { useState } from 'react'
import T from './AnimatedText'

const channels = [
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '+54 9 11 3782-5307',
    href: 'https://wa.me/5491137825307',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'bautistalucianibroquen',
    href: 'https://linkedin.com/in/bautistalucianibroquen',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'bautiluciani@hotmail.com',
    href: 'mailto:bautiluciani@hotmail.com',
  },
]

export default function ContactSection() {
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const res = await fetch('https://formspree.io/f/mykqklle', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
    if (res.ok) {
      form.reset()
      setSent(true)
      setTimeout(() => setSent(false), 5000)
    } else {
      alert('Hubo un error, intentá de nuevo.')
    }
  }

  return (
    <section className="contact" id="contacto">
      <div className="section-inner">
        <div className="contact-inner">

          {/* Columna izquierda — título + canales */}
          <div className="reveal">
            <T tKey="contact_tag" as="p" className="section-tag" />
            <T tKey="contact_title" as="h2" className="section-title" />
            <div className="divider-line" />
            <T tKey="contact_sub" as="p" className="section-sub" style={{ marginBottom: '40px' }} />
            <div className="contact-channels">
              {channels.map(ch => (
                <a
                  key={ch.label}
                  href={ch.href}
                  className="contact-channel"
                  target={ch.href.startsWith('http') ? '_blank' : undefined}
                  rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="channel-icon">{ch.icon}</div>
                  <div>
                    <div className="channel-label">{ch.label}</div>
                    <div className="channel-value">{ch.value}</div>
                  </div>
                  <span className="channel-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Columna derecha — formulario alineado al subtexto */}
          <div className="contact-form-wrap reveal" style={{ transitionDelay: '0.15s' }}>
            {/* Spacer invisible que ocupa exactamente lo mismo que tag + title + divider */}
            <div style={{ visibility: 'hidden', pointerEvents: 'none' }}>
              <p className="section-tag" style={{ marginBottom: '14px' }}>placeholder</p>
              <h2 className="section-title" style={{ marginBottom: '16px' }}>placeholder</h2>
              <div className="divider-line" style={{ margin: '20px 0' }} />
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <T tKey="form_name" as="label" />
                  <input type="text" name="nombre" placeholder="Juan García" required />
                </div>
                <div className="form-group">
                  <T tKey="form_email" as="label" />
                  <input type="email" name="email" placeholder="juan@empresa.com" required />
                </div>
              </div>
              <div className="form-group">
                <T tKey="form_subject" as="label" />
                <input type="text" name="asunto" placeholder="Quiero una landing page para mi negocio" required />
              </div>
              <div className="form-group">
                <T tKey="form_msg" as="label" />
                <textarea name="mensaje" placeholder="Contame sobre tu proyecto..." required />
              </div>
              <button type="submit" className="btn-primary">
                <T tKey="form_send" as="span" />
              </button>
              <p style={{
                color: 'var(--accent)',
                fontSize: '14px',
                fontWeight: 500,
                marginTop: '8px',
                height: '20px',
                visibility: sent ? 'visible' : 'hidden',
                animation: sent ? 'langFadeIn 0.35s ease forwards' : 'none',
              }}>
                ✓ Mensaje enviado correctamente
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}