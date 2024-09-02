import 'tailwindcss/tailwind.css'
import '../app.css'
import { Layout } from 'components/Layout'
import { config } from 'config'
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>{config.appTitle}</title>
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
