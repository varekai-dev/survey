import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

import { Layout } from '@/shared/components'

import ReduxProvider from '@/store/redux-provider'

import '../styles/globals.css'

const openSans = Open_Sans({
  display: 'swap',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Survey App',
  description: 'Survey App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <ReduxProvider>
          <Layout>{children}</Layout>
        </ReduxProvider>
      </body>
    </html>
  )
}
