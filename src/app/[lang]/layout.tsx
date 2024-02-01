import Navbar from '@/app/[lang]/components/Navbar'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import Script from 'next/script'
import Footer from '@/app/[lang]/components/Footer'
import StickyButton from '@/app/[lang]/components/StickyButton'
import { Locale, i18n } from '@/i18n.config'
import SettingsProvider from '@/context/SettingsContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ayudatomas.com'),
  title: 'Tomás contra Duchenne',
  description: 'Tengo 5 años y me diagnosticaron Distrofía Muscular de Duchenne. Necesito administrarme remedio más caro del mundo de 3.500 millones de pesos chilenos.',
  openGraph: {
    siteName: 'Tomas contra Duchenne',
    locale: 'es-CL',
    type: 'website',
    title: 'Tomás contra Duchenne',
    description: 'Tengo 5 años y me diagnosticaron Distrofía Muscular de Duchenne. Necesito administrarme remedio más caro del mundo de 3.500 millones de pesos chilenos.',
    url: 'https://ayudatomas.com',
    images: [
      {
        url: '/tomas-og.jpg',
        width: 662,
        height: 487,
      },
    ],
  },
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: Locale }
}) {
  console.log('PARAMS => ', params.lang);
  return (
    <html lang="es">
      {process.env.ENVIRONMENT === 'production' && (
        <>
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.GTAG_MANAGER_ID}')
            `}
          </Script>
        </>
      )}
      <body className={clsx(['relative', 'scroll-smooth', inter.className])}>
        <SettingsProvider>
          <Navbar />
          <main className="h-full mt-[-76px] md:mt-0">
            {children}
          </main>
          <Footer />
          <StickyButton />
          <ToastContainer />
        </SettingsProvider>
      </body>
    </html>
  )
}
