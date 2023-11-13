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
            <h1 className="text-2xl mt-3">Necesito tu ayuda para costear el <span className="font-bold">medicamento más caro del mundo</span>.</h1>
            <button className="mt-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Conoce mi historia
              </span>
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
