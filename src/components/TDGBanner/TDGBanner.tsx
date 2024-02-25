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
  </div>
)

export default TDGBanner
