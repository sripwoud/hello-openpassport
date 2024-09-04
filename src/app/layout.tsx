import 'tailwindcss/tailwind.css'
import '../app.css'
import { Providers } from 'c/Providers'
import { Layout } from 'components/Layout'
import { config } from 'l/config'
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <title>{config.openPassport.appName}</title>
      </head>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
