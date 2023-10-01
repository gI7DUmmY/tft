import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const droid = localFont({
  src: './font/DroidSerifBold.ttf',
  display: 'swap',
  variable: '--font-droid',
})

const lato = localFont({
  src: [
    {
      path: './font/Lato/Lato-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/Lato/Lato-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './font/Lato/Lato-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: 'TFT',
  description: 'Toulouse Football de Table',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${lato.variable} ${droid.variable}`}>{children}</body>
    </html>
  )
}
