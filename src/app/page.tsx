import About from '@/components/About/About'
import Hero from '@/components/Hero'
import Methods from '@/components/Methods/Methods'
import RifaBanner from '@/components/RifaBanner/RifaBanner'
import TDGBanner from '@/components/TDGBanner/TDGBanner'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tomás contra Duchenne',
  description: 'Tengo 5 años y me diagnosticaron Distrofía Muscular de Duchenne. Necesito administrarme el remedio más caro del mundo de 3.500 millones de pesos chilenos.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Methods />
      <TDGBanner />
      <RifaBanner />
    </>
  )
}
