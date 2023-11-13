import Image from 'next/image'
import Tomas from '../../public/tomas-paisaje.jpg';

export default function Hero() {
  return (
    <div className="px-8 py-24 md:px-36 h-screen text-teal-900">
      <div className="rounded-3xl md:flex bg-teal-100 h-full">
        <div className="relative md:w-3/5">
          <p className="p-8 text-xl">#TomasContraDuchenne</p>
          <div className="align-middle px-8" style={{ paddingTop: '18%' }}>
            <span className="text-5xl">Mi nombre es <span className="font-bold">Tomás</span>.</span>
            <h1 className="text-2xl mt-3 leading-9">Necesito tu ayuda para costear el <span className="font-bold">medicamento más caro del mundo</span>.</h1>
            <button className="pt-5">
              <div className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1v12m0 0 4-4m-4 4L1 9"/>
                </svg>
                <span className="sr-only">Icon description</span>
              </div>
              <span className="text-xl underline font-bold tracking-wide leading-5 text-teal-600">Conoce mi historia&nbsp;</span>
            </button>
          </div>
        </div>
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
      </div>
    </div>
  )
}
