import About from '@/components/About'
import Goals from '@/components/Goals'
import Hero from '@/components/Hero'
import Instagram from '@/components/Instagram'
import Methods from '@/components/Methods'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tomás contra Duchenne',
  description: 'Tengo 5 años y me diagnosticaron Distrofía Muscular de Duchenne. Necesito administrarme el remedio más caro del mundo de 3.500 millones de pesos chilenos.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-gradient-to-b from-cyan-100 to-indigo-100 w-100 h-28" />
      <About />
      <div className="bg-gradient-to-b from-indigo-100 w-100 h-28" />
      <Methods />
      <div className="bg-gradient-to-b from-white to-green-50 w-100 h-28" />
      <Goals />
      <div className="bg-gradient-to-b from-green-50 to-white w-100 h-28" />
      <Instagram />
    </>
  )
}
