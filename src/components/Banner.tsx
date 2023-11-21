import Link from "next/link";
import TomasPNG from "../../public/tomas.png";
import Image from 'next/image';

export default function Banner () {
  return (
    <div className="md:flex bg-amber-50 text-amber-900 items-center">
      <div className="w-5/8 p-10">
        <h3 className="text-2xl md:text-3xl mb-3">#TomasContraDuchenne</h3>
        <p className="text-xl">Necesito tu ayuda para costear el medicamento más caro del mundo. Puedes colaborarme haciendo una donación o difundiendo en las redes sociales.</p>
        <p className="font-semibold">Juntos lo podemos lograr.</p>
        <div className="w-fit mt-4 md:mt-0">
          <Link
            href="/donar"
            className="flex text-white bg-pink-500 hover:bg-pink-600 focus:outline-none font-medium rounded-full text-sm px-3 py-4 md:px-5 md:py-4 text-center me-2 mb-2 transition duration-700 ease-in-out mt-2"
          >
            <svg className="w-4 h-4 md:w-4 md:h-4 text-pink-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
            </svg>
            <span className="md:text-md ml-2">¿Cómo donar?</span>
          </Link>
        </div>
      </div>
      <div className="w-3/8">
        <Image
          src={TomasPNG}
          className=""
          alt="Alex, Tomás, Camila y Erwin en la nieve"
          quality={100}
        />
      </div>
    </div>
  )
}