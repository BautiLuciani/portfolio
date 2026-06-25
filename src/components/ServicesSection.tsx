'use client'

import { useLang } from './LangContext'
import T from './AnimatedText'

type TKey = Parameters<ReturnType<typeof useLang>['t']>[0]

const services: { icon: string; titleKey: TKey; descKey: TKey; tagKey: TKey; num: string }[] = [
  { icon: '🎨', titleKey: 's1_title', descKey: 's1_desc', tagKey: 's1_tag', num: '01' },
  { icon: '⚡', titleKey: 's2_title', descKey: 's2_desc', tagKey: 's2_tag', num: '02' },
  { icon: '🚀', titleKey: 's3_title', descKey: 's3_desc', tagKey: 's3_tag', num: '03' },
]

export default function ServicesSection() {
  return (
    <section id="servicios">
      <div className="section-inner">
        <div className="reveal">
          <T tKey="services_tag" as="p" className="section-tag" />
          <T tKey="services_title" as="h2" className="section-title" />
          <div className="divider-line" />
          <T tKey="services_sub" as="p" className="section-sub" />
        </div>
        <div className="services-grid reveal" style={{ transitionDelay: '0.1s' }}>
          {services.map(s => (
            <div className="service-card" key={s.num}>
              <span className="service-num">{s.num}</span>
              <div className="service-icon">{s.icon}</div>
              <T tKey={s.titleKey} as="h3" />
              <T tKey={s.descKey} as="p" />
              <T tKey={s.tagKey} as="span" className="service-tag" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}