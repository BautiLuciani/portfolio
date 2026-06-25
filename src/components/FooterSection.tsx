'use client'

import T from './AnimatedText'

export default function FooterSection() {
  return (
    <footer>
      <div className="footer-logo">BLB<span>.</span></div>
      <T tKey="footer_copy" as="p" className="footer-copy" />
    </footer>
  )
}