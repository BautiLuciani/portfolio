'use client'

import { useEffect, useRef } from 'react'
import { useLang } from './LangContext'
import T from './AnimatedText'

export default function HeroSection() {
  const { t, typewriterWords, lang } = useLang()
  const twEl = useRef<HTMLSpanElement>(null)
  const twState = useRef({ index: 0, charIndex: 0, deleting: false, timer: 0 })
  const wordsRef = useRef(typewriterWords)
  const isRunning = useRef(false)

  function typeWrite() {
    const s = twState.current
    const words = wordsRef.current
    const word = words[s.index]
    if (!twEl.current) return

    if (s.deleting) {
      twEl.current.textContent = word.substring(0, s.charIndex--)
      if (s.charIndex < 0) {
        s.deleting = false
        s.index = (s.index + 1) % words.length
        s.timer = window.setTimeout(typeWrite, 400)
        return
      }
      s.timer = window.setTimeout(typeWrite, 45 + Math.random() * 20)
    } else {
      twEl.current.textContent = word.substring(0, s.charIndex++)
      if (s.charIndex > word.length) {
        s.deleting = true
        s.timer = window.setTimeout(typeWrite, 2800 + Math.random() * 400)
        return
      }
      s.timer = window.setTimeout(typeWrite, 90 + Math.random() * 50)
    }
  }

  useEffect(() => {
    wordsRef.current = typewriterWords
    const s = twState.current
    clearTimeout(s.timer)
    s.index = 0
    s.charIndex = 0
    s.deleting = false
    isRunning.current = false
    if (twEl.current) twEl.current.textContent = ''
    isRunning.current = true
    s.timer = window.setTimeout(typeWrite, 300)
  }, [lang]) // eslint-disable-line

  useEffect(() => {
    if (isRunning.current) return // ← si ya está corriendo (segunda llamada del Strict Mode), no hace nada
    isRunning.current = true
    twState.current.timer = window.setTimeout(typeWrite, 600)
    return () => {
      clearTimeout(twState.current.timer)
      isRunning.current = false
    }
  }, []) // eslint-disable-line

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="inicio">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-glow2" />

      <div className="hero-inner">
        {/* Columna izquierda */}
        <div className="hero-left reveal">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <T tKey="hero_badge" as="span" />
          </div>

          <h1 className="hero-title">
            <T tKey="hero_greeting" as="span" className="greeting" /><br />
            <span>Bautista Luciani</span>
          </h1>

          <div className="hero-typewriter">
            <T tKey="hero_pre" as="span" />
            <span className="typewriter-text" ref={twEl} />
            <span className="typewriter-cursor" />
          </div>

          <T tKey="hero_sub" as="p" className="hero-sub" />

          <div className="hero-actions">
            <a
              href="#portfolio"
              className="btn-primary"
              onClick={e => { e.preventDefault(); scrollTo('portfolio') }}
            >
              <T tKey="hero_cta1" as="span" />
            </a>
            <a
              href="#contacto"
              className="btn-outline"
              onClick={e => { e.preventDefault(); scrollTo('contacto') }}
            >
              <T tKey="hero_cta2" as="span" />
            </a>
          </div>
        </div>

        {/* Columna derecha - Avatar */}
        <div className="hero-photo-wrap reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="hero-photo-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/avatar.png" alt="Bautista Luciani" width={480} height={580} />
            <div className="hero-float-tag">
              <span className="num">3+</span>
              <T tKey="hero_float_lbl" as="span" className="lbl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="14" height="24" rx="7" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8" cy="8" r="2.5" fill="currentColor">
            <animate attributeName="cy" values="8;16;8" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </svg>
        <span>scroll</span>
      </div>
    </section>
  )
}