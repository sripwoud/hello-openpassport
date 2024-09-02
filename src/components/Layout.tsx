import { Footer } from 'c/Footer'
import { Header } from 'c/Header'
import type { ReactNode } from 'react'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div id='layout'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
