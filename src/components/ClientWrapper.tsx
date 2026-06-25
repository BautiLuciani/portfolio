'use client'

import { LangProvider } from './LangContext'
import Cursor from './Cursor'
import Nav from './Nav'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <Cursor />
      <Nav />
      {children}
    </LangProvider>
  )
}