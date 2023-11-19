import Image from 'next/image'
import Tomas from '../../public/tomas-catedrales.jpg';

export default function About() {
  return (
    <div className="px-8 py-24 md:px-36 h-screen bg-indigo-100 text-indigo-800">
      <div className="rounded-3xl md:flex h-full">
        <div className="">
          <div className="align-middle px-18" style={{ paddingTop: '12%' }}>
            <p className="text-4xl mt-3 leading-12">Tengo 5 años y hace algunos meses me diagnosticaron <span className="font-bold">Distrofía Muscular de Duchenne</span>, para eso necesito el remedio más caro del mundo que tiene un valor apróximado de 3.500 millones de pesos chilenos.</p>
            <p className="text-2xl mt-3">Conoce mi testimonio completo <span className="font-bold underline decoration-pink-500 underline-offset-8 cursor-pointer">aquí</span>.</p>
            <div className="flex">
              <button type="button" className="mt-10 flex text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-4 text-center me-2 mb-2 dark:focus:ring-yellow-900">
                <svg className="animate-bounce mt-2 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1v12m0 0 4-4m-4 4L1 9"></path>
                </svg>
                <span className="text-lg ml-2">¿Cómo donar?</span>
              </button>
              <button type="button" className="mt-10 flex text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-4 text-center me-2 mb-2 dark:focus:ring-yellow-900">
                <svg style={{ marginTop: '4px' }}className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                </svg>
                <span className="text-lg ml-2">¿Qué es duchenne?</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
