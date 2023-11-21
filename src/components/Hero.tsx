import CurrentGoal from "./CurrentGoal";
import VideoGallery from "./VideoGallery";

export default function Hero() {
  return (
    <div className="bg-cyan-100 md:h-screen text-cyan-900 md:px-16">
      <div className="rounded-3xl md:flex md:h-full md:items-center">
        <div className="relative md:w-3/5">
          <div className="align-middle px-8 pt-8 md:pt-0">
            <span className="text-4xl md:text-6xl font-bold">Mi nombre es <span className="underline decoration-cyan-500 underline-offset-8 md:decoration-8 decoration-4">Tomás</span>.</span>
            <h1 className="md:text-3xl text-xl mt-8 md:leading-9 leading-7">Necesito tu ayuda para costear el medicamento más caro del mundo.</h1>
            <div className="py-5 md:block hidden">
              <CurrentGoal />
            </div>
            <VideoGallery className="md:hidden my-6" />
            <div className="flex mt-10">
              <a href="#mi-historia" className="flex text-white bg-indigo-500 hover:bg-indigo-700 font-medium rounded-full text-sm px-3 py-4 md:px-5 md:py-4 text-center me-2 mb-2 transition duration-700 ease-in-out">
                <svg className="animate-bounce mt-2 w-4 h-4 md:w-6 md:h-6 text-indigo-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1v12m0 0 4-4m-4 4L1 9"></path>
                </svg>
                <span className="md:text-lg ml-2">Conoce mi historia</span>
              </a>
              <button type="button" className="flex text-white bg-cyan-500 hover:bg-cyan-800 font-medium rounded-full text-sm px-3 py-4 md:px-5 md:py-4 text-center mb-2 transition duration-700 ease-in-out">
                <svg className="w-4 h-4 md:w-6 md:h-6 text-cyan-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                  <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"></path>
                </svg>
                <span className="md:text-lg ml-2">Ver el video</span>
              </button>
            </div>
            <div className="mt-5 pb-16 border-t-4 border-dashed border-cyan-300 md:hidden pt-6 mt-12">
              <CurrentGoal />
            </div>
          </div>
        </div>
        <div className="md:w-2/5 relative">
          <VideoGallery className="hidden md:block py-8" />
        </div>
      </div>
    </div>
  )
}
