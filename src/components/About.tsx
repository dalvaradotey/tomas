import Image from 'next/image'
import Tomas from '../../public/tomas-catedrales.jpg';

export default function About() {
  return (
    <div className="px-8 py-24 md:px-36 h-screen text-pink-900">
      <div className="rounded-3xl md:flex bg-pink-100 h-full">
        <div className="md:w-2/5">
          <div className="relative snap-center fill-img bg-cover h-full">
            <Image
              src={Tomas}
              fill={true}
              className="object-cover"
              alt=""
              quality={100}
            />
          </div>
        </div>
        <div className="relative md:w-3/5">
          <p className="p-8 text-xl">#TomasContraDuchenne</p>
          <div className="align-middle px-8" style={{ paddingTop: '12%' }}>
            <p className="text-2xl mt-3 leading-9">Tengo 5 años y hace algunos meses me diagnosticaron <span className="font-bold">Distrofía Muscular de Duchenne</span>, para eso necesito el remedio más caro del mundo que tiene un valor apróximado de 3.500 millones de pesos chilenos.</p>
            <p className="text-xl mt-3">Conoce mi testimonio completo <span className="font-bold underline">aquí</span>.</p>
            <button className="pt-5">
              <div className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1v12m0 0 4-4m-4 4L1 9"/>
                </svg>
                <span className="sr-only">Icon description</span>
              </div>
              <span className="text-xl underline font-bold tracking-wide leading-5 text-pink-600">¿Cómo donar?&nbsp;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
