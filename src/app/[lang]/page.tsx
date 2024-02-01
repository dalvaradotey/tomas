import About from '@/app/[lang]/components/About/About'
import Hero from '@/app/[lang]/components/Hero'
import Methods from '@/app/[lang]/components/Methods/Methods'
import RifaBanner from '@/app/[lang]/components/RifaBanner/RifaBanner'
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
      <RifaBanner />
    </>
  )
}
