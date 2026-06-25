'use client'

import T from './AnimatedText'

export default function FooterSection() {
  return (
    <footer>
      <div className="footer-logo" style={{ display: 'flex', alignItems: 'center'}}>
        <img src="/logo.png" alt="BLB Logo" style={{ width: '36px', height: '36px' }} />
        BLB<span>.</span>
      </div>
      <T tKey="footer_copy" as="p" className="footer-copy" />
    </footer>
  )
}