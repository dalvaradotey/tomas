import Link from "next/link";

export default function About() {
  return (
    <div id="mi-historia" className="px-8 md:py-24 md:px-36 md:h-screen bg-indigo-100 text-indigo-800">
      <div className="rounded-3xl md:flex h-full">
        <div className="align-middle px-18 pt-16">
          <h2 className="text-xl text-indigo-800 opacity-90 mb-10">Hoy tengo una posibilidad de un tratamiento que puede frenar la progresión de mi enfermedad ❤️</h2>
          <p className="text-xl md:text-4xl mt-3 leading-10">Tengo 5 años y hace algunos meses me diagnosticaron <span className="font-bold">Distrofía Muscular de Duchenne</span>. Necesito administrarme antes de los 6 años el remedio más caro del mundo que tiene un valor apróximado de 3.500 millones de pesos chilenos.</p>
          <p className="text-xl md:text-3xl my-8">Conoce mi testimonio completo <Link href="/testimonio" className="font-bold underline decoration-pink-500 underline-offset-8 cursor-pointer">aquí</Link>.</p>
          <div className="flex mt-4">
            <a
              href="#donar"
              className="flex text-white bg-pink-500 hover:bg-pink-600 focus:outline-none font-medium rounded-full text-sm px-3 py-4 md:px-5 md:py-4  text-center me-2 mb-2 transition duration-700 ease-in-out"
            >
              <svg className="animate-bounce mt-2 w-4 h-4 md:w-6 md:h-6 text-pink-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1v12m0 0 4-4m-4 4L1 9"></path>
              </svg>
              <span className="md:text-lg ml-2">¿Cómo donar?</span>
            </a>
            <Link href="/duchenne" className="flex text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none font-medium rounded-full text-sm px-3 py-4 md:px-5 md:py-4  text-center me-2 mb-2 transition duration-700 ease-in-out">
              <svg style={{ marginTop: '4px' }} className="w-4 h-4 md:w-6 md:h-6 text-indigo-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
              </svg>
              <span className="md:text-lg ml-2">¿Qué es duchenne?</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
