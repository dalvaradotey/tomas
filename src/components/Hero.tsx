import VideoGallery from "./VideoGallery";

export default function Hero() {
  return (
    <div className="bg-cyan-100 h-screen text-cyan-900 md:px-16">
      <div className="rounded-3xl md:flex h-full">
        <div className="relative md:w-3/5">
          <div className="align-middle px-8" style={{ paddingTop: '18%' }}>
            <span className="text-3xl md:text-6xl font-bold">Mi nombre es <span className="underline decoration-cyan-500 underline-offset-8 md:decoration-8 decoration-4">Tomás</span>.</span>
            <h1 className="md:text-3xl text-xl mt-4 md:mt-8 md:leading-9">Necesito tu ayuda para costear el medicamento más caro del mundo.</h1>
            <div className="flex py-5">
              <div>
                <div className="rounded-full border-4 border-pink-400 px-2 py-2 mr-4">
                  <span className="text-xl font-bold">1%</span>
                </div>
              </div>
              <div className="">
                <p className="uppercase font-bold text-xs md:text-sm text-cyan-900 opacity-75">Meta recaudación: CLP $3.500.000.000</p>
                <p className="uppercase font-bold text-xs md:text-sm text-cyan-900 opacity-75">Monto recaudado: CLP $38.000.000</p>
                <p className="text-xs opacity-70">actualizacion: 19 noviembre 2023 - 10:30 hrs</p>
              </div>
            </div>
            <VideoGallery className="md:hidden my-6" />
            <div className="flex mt-10">
              <button type="button" className="flex text-white bg-indigo-500 hover:bg-indigo-700 font-medium rounded-full text-sm px-3 py-4 md:px-5 md:py-4 text-center me-2 mb-2 transition duration-700 ease-in-out">
                <svg className="animate-bounce mt-2 w-4 h-4 md:w-6 md:h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1v12m0 0 4-4m-4 4L1 9"></path>
                </svg>
                <span className="md:text-lg ml-2">Conoce mi historia</span>
              </button>
              <button type="button" className="flex text-white bg-cyan-500 hover:bg-cyan-800 font-medium rounded-full text-sm px-3 py-4 md:px-5 md:py-4 text-center mb-2 transition duration-700 ease-in-out">
                <svg className="w-4 h-4 md:w-6 md:h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                  <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"></path>
                </svg>
                <span className="md:text-lg ml-2">Ver el video</span>
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 relative">
          <VideoGallery className="mt-20 hidden md:block" />
        </div>
      </div>
    </div>
  )
}
