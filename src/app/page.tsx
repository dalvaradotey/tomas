import About from '@/components/About'
import Dialog from '@/components/Dialog'
import Goals from '@/components/Goals'
import Hero from '@/components/Hero'
import Instagram from '@/components/Instagram'
import Methods from '@/components/Methods'

export default function Home() {
  async function onClose() {
    "use server"
    console.log("Modal has closed")
}

async function onOk() {
    "use server"
    console.log("Ok was clicked")
}

  return (
    <>
      <Dialog title="Transferencia Banco de Chile" onClose={onClose} onOk={onOk}>
        <ul>
          <li>Nombre: Camila Gómez</li>
          <li>RUT: 18.116.965-6</li>
          <li>Banco: Banco de Chile</li>
          <li>Tipo de cuenta: Corriente</li>
          <li>N° cuenta: 003280566707</li>
          <li>Email: camila.gomezval@gmail.com</li>
        </ul>
      </Dialog>
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
