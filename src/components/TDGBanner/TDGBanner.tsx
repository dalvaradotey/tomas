import Image from "next/image"
import style from "./TDGBanner.module.css"
import TDGLogo from "@public/tdg-logo.png"
import TDG72Horas from "@public/tdg-72-horas.png"
import PasslineLogo from "@public/passline-logo.png"
import clsx from "clsx"

export const TDGBanner = () => (
  <div className="bg-[#282232] text-white">
    <div className={clsx(['banner-box', style?.rifaBanner])}>
      <div className="md:flex">
        <Image
          src={TDGLogo}
          alt=""
          className="md:w-96 md:mr-16"
          quality={100}
        />
        <Image
          src={TDG72Horas}
          alt=""
          className="md:w-80 mt-16 md:mt-0 w-60 ml-[15%] md:ml-0"
          quality={100}
        />
      </div>
    </div>
    <div className="md:py-3 md:px-40 px-8 py-8 bg-[#282232] text-white md:flex gap-8 items-center">
      <p className="text-amber-400 text-base font-semibold rounded-full border-amber-400 border-2 md:px-3 md:py-1 py-3 text-center md:text-left">Jueves 22</p>
      <p className="font-semibold md:text-xl text-3xl py-8 md:py-0">Gepe - Julius Popper - Arremacho - <span className="text-amber-400">Entre otros</span></p>
    </div>
    <div className="md:py-3 md:px-40 px-8 py-8 bg-[#282232] text-white md:flex gap-8 items-center">
      <p className="text-amber-400 text-base font-semibold rounded-full border-amber-400 border-2 md:px-3 md:py-1 py-3 text-center md:text-left">Viernes 23</p>
      <p className="font-semibold md:text-xl text-3xl py-8 md:py-0">Los Indomables - Dúo Pajarito - Claudio Constazo - Los Vargas - Carlos Azocar - <span className="text-amber-400">Entre otros</span></p>
    </div>
    <div className="md:py-3 md:px-40 px-8 py-8 bg-[#282232] text-white md:flex gap-8 items-center">
      <p className="text-amber-400 text-base font-semibold rounded-full border-amber-400 border-2 md:px-3 md:py-1 py-3 text-center md:text-left">Sábado 24</p>
      <p className="font-semibold md:text-xl text-3xl py-8 md:py-0">La 29 - Chamacumbia - Quilalar - Maldito Gordo - Anacrónicos - <span className="text-amber-400">Entre otros</span></p>
    </div>
    <div className="md:py-3 md:px-40 px-8 py-8 md:flex gap-8 items-center">
      <a href="https://www.passline.com/sitio/tdgaviotas" target="_blank" className="bg-[#39344c] text-sm py-4 md:py-2 md:px-6 font-normal rounded-lg block text-center">Compra tus entradas aquí</a>
      <Image
        src={PasslineLogo}
        alt=""
        className="w-[85px] h-[23px] mt-2 md:mt-0 ml-[40%] md:ml-0"
        quality={100}
      />
    </div>
  </div>
)

export default TDGBanner
