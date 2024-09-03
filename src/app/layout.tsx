'use client'
import 'tailwindcss/tailwind.css'
import '../app.css'
import { Layout } from 'components/Layout'
import { StoreProvider } from 'easy-peasy'
import { config } from 'l/config'
import { store } from 'l/store'
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>{config.openPassport.appName}</title>
      </head>
      <body>
        <StoreProvider store={store}>
          <Layout>{children}</Layout>
        </StoreProvider>
      </body>
    </html>
  )
}
