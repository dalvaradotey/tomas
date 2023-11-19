import Image from 'next/image'
import TomasPaisaje from '../../public/tomas-paisaje.jpg';
import TomasCapillasMarmol from '../../public/tomas-catedrales.jpg';
import TomasFamiliaNieve from '../../public/tomas-familia-nieve.jpg';
import TomasTeleton from '../../public/tomas-teleton.jpg';

export default function Hero() {
  return (
    <div className="px-8 py-24 md:px-24 bg-cyan-100 h-screen text-cyan-900">
      <div className="rounded-3xl md:flex h-full">
        <div className="relative md:w-3/5">
          <div className="align-middle px-8" style={{ paddingTop: '18%' }}>
            <span className="text-6xl font-bold">Mi nombre es <span className="underline decoration-pink-500 underline-offset-8">Tomás</span>.</span>
            <h1 className="text-3xl mt-8 leading-9">Necesito tu ayuda para costear el medicamento más caro del mundo.</h1>
            <div className="flex mt-10">
              <button type="button" className="flex text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-4 text-center me-2 mb-2 dark:focus:ring-yellow-900">
                <svg className="animate-bounce mt-2 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1v12m0 0 4-4m-4 4L1 9"></path>
                </svg>
                <span className="text-lg ml-2 ">Conoce mi historia</span>
              </button>
              <button type="button" className="flex text-white bg-cyan-500 hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-4 text-center mb-2">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                  <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"></path>
                </svg>
                <span className="text-lg ml-2">Ver el video</span>
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 relative">
          <div className="absolute" style={{ top: '45%', left: '45%' }}>
            <button className="relative flex h-20 w-20">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-20 w-20 bg-sky-500 opacity-90">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-4 ml-4">
                  <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" fill="currentColor" strokeWidth="0"></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="columns-2 mt-20">
            <Image
              src={TomasPaisaje}
              className="w-full aspect-video object-cover mb-4 rounded-xl"
              alt=""
              quality={100}
            />
            <Image
              src={TomasCapillasMarmol}
              className="w-full aspect-square object-cover rounded-xl"
              alt=""
              quality={100}
            />
            <Image
              src={TomasFamiliaNieve}
              className="w-full aspect-square object-cover mb-4 rounded-xl"
              alt=""
              quality={100}
            />
            <Image
              src={TomasTeleton}
              className="w-full aspect-video object-cover rounded-xl"
              alt=""
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
