import About from '@/components/About'
import Goals from '@/components/Goals'
import Hero from '@/components/Hero'
import Instagram from '@/components/Instagram'
import Methods from '@/components/Methods'
import Rifa from '@/components/Rifa'
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
    </>
  )
}
