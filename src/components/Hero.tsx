import CurrentGoal from "./CurrentGoal";
import LinkButton from "./LinkButton";
import Link from "next/link";
import Image from "next/image";
import TomasPaisaje from "@public/tomas-paisaje.jpg";

const NavbarHero = () => (
  <div className="hidden md:block md:flex w-full px-8 py-6 items-center">
    <p className="text-xl w-2/5 font-bold text-transparent bg-clip-text bg-gradient-to-r to-violet-500 from-indigo-900">#TomasContraDuchenne</p>
    <div className="w-3/5">
      <ul className="flex justify-end gap-6 items-center text-base">
        <li>
          <Link href="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/duchenne">
            ¿Qué es Duchenne?
          </Link>
        </li>
        <li>
          <Link href="/testimonio">
            Testimonio
          </Link>
        </li>
        <li>
          <LinkButton href="#mi-historia">
            <span className="ml-2">¿Cómo donar?</span>
          </LinkButton>
        </li>
      </ul>
    </div>
  </div>
)

export default function Hero() {
  return (
    <div className="md:h-screen md:px-32">
      <div className="bg-secondary md:rounded-3xl md:mt-10 h-[80%] md:h-[80%]">
        <NavbarHero />
        <div className="md:flex md:items-center md:h-[80%]">
          <div className="relative md:w-3/6 pt-10 md:pt-0">
            <div className="align-middle px-8 py-8 md:pl-20 md:pr-24 pt-24 md:pt-0">
              <span className="text-2xl md:text-2xl font-bold">Mi nombre es Tomás Ross.</span>
              <h1 className="text-4xl md:text-5xl font-bold md:mt-2 bg-clip-text bg-gradient-to-r text-third opacity-90">Me diagnosticaron Duchenne.</h1>
              <p className="mt-2 leading-9">Necesito tu ayuda para costear el medicamento más caro del mundo que cuesta 3.500 millones de pesos chilenos.</p>
              <div className="hidden md:flex mt-10">
                <LinkButton href="#mi-historia">
                  <svg className="animate-bounce mt-2 w-4 h-4 md:w-6 md:h-6 text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1v12m0 0 4-4m-4 4L1 9"></path>
                  </svg>
                  <span className="md:text-lg ml-2">Conoce mi historia</span>
                </LinkButton>
              </div>
            </div>
          </div>
          <div className="md:w-3/6 h-[500px] md:h-full px-8 md:px-8 md:pt-6">
            <div className="relative h-full md:h-screen">
              <Image
                src={TomasPaisaje}
                className="h-4/6 md:h-3/4 object-cover rounded-[50px] z-0"
                alt=""
                quality={100}
              />
              <div className="md:hidden absolute w-full">
                <div className="relative mx-4">
                  <LinkButton href="/testimonio" className="flex items-center absolute bottom-4">
                    <svg className="mt-[4px] w-6 h-6 text-secondary animate-[animate-bounce-right_1s_ease-in-out_infinite]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                    </svg>
                    <span className="ml-2">Conoce mi testimonio</span>
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3 mx-3">
        <CurrentGoal />
      </div>
    </div>
  )
}
