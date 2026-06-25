'use client'

import { useState, useEffect } from 'react'
import { useLang } from './LangContext'
import T from './AnimatedText'

type TranslationKey = Parameters<ReturnType<typeof useLang>['t']>[0]

const navLinks: { key: TranslationKey; id: string }[] = [
  { key: 'nav_about',     id: 'sobre-mi'  },
  { key: 'nav_services',  id: 'servicios' },
  { key: 'nav_portfolio', id: 'portfolio' },
  { key: 'nav_contact',   id: 'contacto'  },
]

export default function Nav() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { lang, setLang } = useLang()

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const el = document.documentElement
    if (theme === 'light') {
      el.setAttribute('data-theme', 'light')
    } else {
      el.removeAttribute('data-theme')
    }
  }, [theme])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.nav-wrapper') && !target.closest('.mobile-menu')) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    if (!document.startViewTransition) {
      setTheme(next)
      return
    }
    const transition = document.startViewTransition(() => setTheme(next))
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: ['inset(0 0 100% 0)', 'inset(0)'] },
        {
          duration: 600,
          easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      )
    })
  }

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!mounted) return null

  return (
    <div className="nav-wrapper">
      <nav>
        {/* Logo */}
        <div className="nav-logo">BLB<span>.</span></div>

        {/* Links desktop */}
        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.key}>
              <a
                href={`#${link.id}`}
                onClick={e => { e.preventDefault(); scrollTo(link.id) }}
              >
                <T tKey={link.key} as="span" />
              </a>
            </li>
          ))}
        </ul>

        {/* Controles derecha */}
        <div className="nav-right">
          {/* Toggle idioma */}
          <div className="lang-toggle">
            <button
              className={`lang-btn${lang === 'es' ? ' active' : ''}`}
              onClick={() => setLang('es')}
            >
              ES
            </button>
            <button
              className={`lang-btn${lang === 'en' ? ' active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>

          {/* Toggle tema */}
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle tema">
            {theme === 'dark' ? '☽' : '☀'}
          </button>

          {/* CTA */}
          <button className="nav-cta" onClick={() => scrollTo('contacto')}>
            <T tKey="nav_cta" as="span" />
          </button>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menú"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          {navLinks.map(link => (
            <li key={link.key}>
              <a
                href={`#${link.id}`}
                onClick={e => { e.preventDefault(); scrollTo(link.id) }}
              >
                <T tKey={link.key} as="span" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}