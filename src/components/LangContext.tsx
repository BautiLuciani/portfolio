'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

// ── TRADUCCIONES (completas del mockup) ──
const i18n = {
  es: {
    nav_about: 'Sobre mí',
    nav_services: 'Servicios',
    nav_portfolio: 'Portfolio',
    nav_contact: 'Contacto',
    nav_cta: 'Hablemos',

    hero_badge: 'Disponible para nuevos proyectos',
    hero_greeting: 'Hola, soy',
    hero_pre: 'Desarrollo web\u00a0',
    hero_sub: 'Creo sitios web que combinan diseño visual impactante con código limpio y performático. Desde el concepto hasta el deploy, me encargo de todo.',
    hero_cta1: 'Ver mi trabajo →',
    hero_cta2: 'Cotizá tu proyecto',
    hero_float_lbl: 'años de experiencia',

    about_tag: '// Sobre mí',
    about_title: 'Desarrollador web full-stack basado en Buenos Aires',
    about_p1: 'Soy <strong>Bautista Luciani</strong>, desarrollador de sistemas con base en Buenos Aires, Argentina. Me especializo en construir sitios y aplicaciones web modernas, priorizando el diseño visual, la performance y la experiencia de usuario.',
    about_p2: 'Trabajo de manera <strong>end-to-end</strong>: desde la primera conversación con el cliente hasta el deploy en producción. No me limito a copiar templates — cada proyecto tiene su propia identidad visual y su propia solución técnica.',
    stat1_lbl: 'Proyectos completados',
    stat2_lbl: 'End-to-end',
    stat3_lbl: 'Soporte post-lanzamiento',

    services_tag: '// Servicios',
    services_title: '¿Qué puedo hacer por tu negocio?',
    services_sub: 'Desde una landing page hasta un sistema completo. Me adapto a lo que necesitás.',
    s1_title: 'Diseño web',
    s1_desc: 'Diseño interfaces únicas y a medida, con identidad propia. No uso templates genéricos. Cada proyecto parte de cero con una paleta, tipografía y layout pensados para tu marca.',
    s1_tag: 'Figma → Código',
    s2_title: 'Desarrollo',
    s2_desc: 'Código limpio, performático y escalable. Stack moderno: Next.js, TypeScript, Tailwind. Animaciones fluidas, carga rápida y compatibilidad con todos los dispositivos.',
    s2_tag: 'Next.js + TypeScript',
    s3_title: 'Deploy y mantenimiento',
    s3_desc: 'Me encargo del hosting, dominio, CI/CD y mantenimiento mensual. Tu sitio siempre online, actualizado y seguro. Sin que tengas que preocuparte por nada técnico.',
    s3_tag: 'Vercel · Dominio · Soporte',

    process_tag: '// Proceso de trabajo',
    process_title: 'Así trabajo con vos',
    step1_title: 'Consulta',
    step1_desc: 'Entiendo tu negocio, tus objetivos y qué tipo de presencia web necesitás.',
    step2_title: 'Diseño',
    step2_desc: 'Armo un mockup completo para que veas cómo va a quedar antes de escribir una línea de código.',
    step3_title: 'Desarrollo',
    step3_desc: 'Convierto el diseño en código real, con animaciones, formularios y funcionalidad completa.',
    step4_title: 'Deploy',
    step4_desc: 'Publico el sitio, configuro el dominio y me aseguro de que todo funcione perfecto desde el primer día.',
    step5_title: 'Soporte',
    step5_desc: 'Mantenimiento mensual, actualizaciones y soporte técnico continuo.',

    portfolio_tag: '// Portfolio',
    portfolio_title: 'Proyectos recientes',
    portfolio_sub: 'Sitios en producción, construidos con diseño custom y código de calidad.',
    proj1_desc: 'Sitio corporativo para empresa de soluciones tecnológicas. Dark theme, animaciones con Framer Motion y sección de chatbot integrada.',
    proj2_desc: 'Portfolio de consultoría Oracle Analytics para LATAM. Diseño editorial con tipografía Playfair Display, paleta navy y rojo.',
    proj_link: 'Ver sitio →',
    proj_soon: 'En producción próximamente',
    coming_soon: 'Coming Soon',
    coming_title: 'Próximo proyecto',
    coming_desc: '¿El tuyo? Estoy disponible para nuevos proyectos. Hablemos sobre tu idea.',
    coming_cta: 'Empezar ahora →',

    contact_tag: '// Contacto',
    contact_title: '¿Tenés un proyecto en mente?',
    contact_sub: 'Contame tu idea y te armo una propuesta sin costo. Respondo en menos de 24 horas.',
    form_name: 'Nombre',
    form_email: 'Email',
    form_subject: 'Asunto',
    form_msg: 'Mensaje',
    form_send: 'Enviar mensaje →',

    footer_copy: '© 2026 Bautista Luciani. Todos los derechos reservados.',
    footer_home: 'Inicio',

    typewriter_words: ['a medida.', 'moderno.', 'rápido.', 'escalable.', 'end-to-end.'],
  },
  en: {
    nav_about: 'About',
    nav_services: 'Services',
    nav_portfolio: 'Portfolio',
    nav_contact: 'Contact',
    nav_cta: "Let's talk",

    hero_badge: 'Available for new projects',
    hero_greeting: "Hi, I'm",
    hero_pre: 'Web development\u00a0',
    hero_sub: 'I build websites that combine impactful visual design with clean, performant code. From concept to deployment, I handle everything.',
    hero_cta1: 'See my work →',
    hero_cta2: 'Get a quote',
    hero_float_lbl: 'years of experience',

    about_tag: '// About me',
    about_title: 'Full-stack web developer based in Buenos Aires',
    about_p1: "I'm <strong>Bautista Luciani</strong>, a systems developer based in Buenos Aires, Argentina. I specialize in building modern websites and web apps, prioritizing visual design, performance and user experience.",
    about_p2: 'I work <strong>end-to-end</strong>: from the first client conversation to deployment in production. I don\'t just copy templates — each project has its own visual identity and technical solution.',
    stat1_lbl: 'Completed projects',
    stat2_lbl: 'End-to-end',
    stat3_lbl: 'Post-launch support',

    services_tag: '// Services',
    services_title: 'What can I do for your business?',
    services_sub: 'From a landing page to a complete system. I adapt to what you need.',
    s1_title: 'Web Design',
    s1_desc: "I design unique, custom interfaces with their own identity. No generic templates. Each project starts from scratch with a palette, typography and layout built for your brand.",
    s1_tag: 'Figma → Code',
    s2_title: 'Development',
    s2_desc: 'Clean, performant, scalable code. Modern stack: Next.js, TypeScript, Tailwind. Smooth animations, fast loading and cross-device compatibility.',
    s2_tag: 'Next.js + TypeScript',
    s3_title: 'Deploy & Maintenance',
    s3_desc: "I handle hosting, domain, CI/CD and monthly maintenance. Your site always online, updated and secure. No need to worry about anything technical.",
    s3_tag: 'Vercel · Domain · Support',

    process_tag: '// How I work',
    process_title: 'My process',
    step1_title: 'Consultation',
    step1_desc: 'I understand your business, your goals and what kind of web presence you need.',
    step2_title: 'Design',
    step2_desc: "I build a full mockup so you can see exactly how it'll look before I write a single line of code.",
    step3_title: 'Development',
    step3_desc: 'I turn the design into real code, with animations, forms and complete functionality.',
    step4_title: 'Deploy',
    step4_desc: 'I publish the site, configure the domain and make sure everything works perfectly from day one.',
    step5_title: 'Support',
    step5_desc: 'Monthly maintenance, updates and ongoing technical support.',

    portfolio_tag: '// Portfolio',
    portfolio_title: 'Recent projects',
    portfolio_sub: 'Live sites, built with custom design and quality code.',
    proj1_desc: 'Corporate site for a tech solutions company. Dark theme, Framer Motion animations and integrated chatbot section.',
    proj2_desc: 'Oracle Analytics consulting portfolio for LATAM. Editorial design with Playfair Display typography, navy and red palette.',
    proj_link: 'Visit site →',
    proj_soon: 'Launching soon',
    coming_soon: 'Coming Soon',
    coming_title: 'Next project',
    coming_desc: "Yours? I'm available for new projects. Let's talk about your idea.",
    coming_cta: 'Start now →',

    contact_tag: '// Contact',
    contact_title: 'Got a project in mind?',
    contact_sub: "Tell me your idea and I'll put together a free proposal. I respond within 24 hours.",
    form_name: 'Name',
    form_email: 'Email',
    form_subject: 'Subject',
    form_msg: 'Message',
    form_send: 'Send message →',

    footer_copy: '© 2026 Bautista Luciani. All rights reserved.',
    footer_home: 'Home',

    typewriter_words: ['custom.', 'modern.', 'fast.', 'scalable.', 'end-to-end.'],
  },
} as const

type Lang = keyof typeof i18n
type TranslationKey = keyof typeof i18n.es

// ── CONTEXT ──
interface LangContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: TranslationKey) => string
  typewriterWords: string[]
}

const LangContext = createContext<LangContextType | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  const t = (key: TranslationKey): string => {
    return i18n[lang][key] as string
  }

  const typewriterWords = [...i18n[lang].typewriter_words]

  return (
    <LangContext.Provider value={{ lang, setLang, t, typewriterWords }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang debe usarse dentro de LangProvider')
  return ctx
}