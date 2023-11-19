import About from '@/components/About'
import Goals from '@/components/Goals'
import Hero from '@/components/Hero'
import Methods from '@/components/Methods'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-gradient-to-b from-cyan-100 to-indigo-100 w-100 h-40" />
      <About />
      <div className="bg-gradient-to-b from-indigo-100 w-100 h-40" />
      <Methods />
      <Goals />
    </>
  )
}
