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
  title: 'Toulouse Football de Table',
  description:
    "Toulouse Football de Table : club de babyfoot officiel toulousain. Loisirs, competition, accompagnement, animations, esprit d'equipe pour toutes et tous sont au rendez-vous !",
  openGraph: {
    title: 'Toulouse Football de Table',
    description:
      "Toulouse Football de Table : club de babyfoot officiel toulousain. Loisirs, competition, accompagnement, animations, esprit d'equipe pour toutes et tous sont au rendez-vous !",
    url: 'https://toulouseft.fr',
    siteName: 'toulouseft.fr',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/tft_officiel.png?alt=media&token=eaabc2b1-206a-4aff-bed4-025ed922cbfe', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'fr',
    type: 'website',
  },
  other: {
    'color-scheme': 'dark only',
    'twitter:image':
      'https://firebasestorage.googleapis.com/v0/b/tft---site.appspot.com/o/tft_officiel.png?alt=media&token=eaabc2b1-206a-4aff-bed4-025ed922cbfe',
    'twitter:card': 'summary_large_image',
    'twitter:domain': 'toulouseft.fr',
    'twitter:url': 'https://toulouseft.fr/',
    'twitter:title': 'Toulouse Football de Table',
    'twitter:description':
      "Toulouse Football de Table : club de babyfoot officiel toulousain. Loisirs, competition, accompagnement, animations, esprit d'equipe pour toutes et tous sont au rendez-vous !",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${lato.variable} ${droid.variable} scroll-smooth`}>
        {children}
      </body>
    </html>
  )
}
