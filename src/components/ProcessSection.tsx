'use client'

import { useLang } from './LangContext'
import T from './AnimatedText'

type TKey = Parameters<ReturnType<typeof useLang>['t']>[0]

const steps: { num: string; titleKey: TKey; descKey: TKey }[] = [
  { num: '01', titleKey: 'step1_title', descKey: 'step1_desc' },
  { num: '02', titleKey: 'step2_title', descKey: 'step2_desc' },
  { num: '03', titleKey: 'step3_title', descKey: 'step3_desc' },
  { num: '04', titleKey: 'step4_title', descKey: 'step4_desc' },
  { num: '05', titleKey: 'step5_title', descKey: 'step5_desc' },
]

export default function ProcessSection() {
  return (
    <section className="process">
      <div className="section-inner">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <T tKey="process_tag" as="p" className="section-tag" />
          <T tKey="process_title" as="h2" className="section-title" />
          <div className="divider-line" style={{ margin: '20px auto' }} />
        </div>
        <div className="process-steps reveal" style={{ transitionDelay: '0.1s' }}>
          {steps.map(step => (
            <div className="process-step" key={step.num}>
              <div className="step-circle">{step.num}</div>
              <T tKey={step.titleKey} as="div" className="step-title" />
              <T tKey={step.descKey} as="div" className="step-desc" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}