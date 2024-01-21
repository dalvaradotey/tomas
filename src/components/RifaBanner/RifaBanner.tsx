import Image from "next/image"
import LinkButton from "../LinkButton"
import TomasRifa from "@public/tomas-rifa.jpg"
import Link from "next/link"
import style from "./style.module.css"

export const RifaBanner = () => (
  <div className={style?.rifaBanner}>
    <div>
      <h2>Gran rifa solidaria por Tomás</h2>
      <h3>Participa y gana una parcela en Chiloé</h3>
      <p className="text-xl">Parcela de 5.000 m2 a orilla de camino, con derecho a orilla de la Laguna Popetan. Acceso a luz eléctrica. Aprox a 6 km de Quemchi, Chiloé.</p>
      <p className="text-lg mt-3 mb-3">Sorteo 1 junio de 2024</p>
      <div className="md:hidden my-8">
        <Image
          src={TomasRifa}
          className="w-30 rounded-xl"
          alt=""
          quality={100}
        />
      </div>
      <div className="text-center md:flex md:items-center md:gap-x-8">
        <LinkButton href="https://www.tomascontraduchenne.com/parcelachiloe" className="flex items-center mb-4 md:mb-0" target="_blank">
          <svg className="mt-[4px] w-6 h-6 text-secondary animate-[animate-bounce-right_1s_ease-in-out_infinite]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
          </svg>
          <span className="ml-2 text-lg">Ir a rifa</span>
        </LinkButton>
        <Link href="/bases-legales-rifa" className="underline font-bold text-lg opacity-80">
          Ver bases legales
        </Link>
      </div>
    </div>
    <div>
      <Image
        src={TomasRifa}
        alt=""
        quality={100}
      />
    </div>
  </div>
)

export default RifaBanner
