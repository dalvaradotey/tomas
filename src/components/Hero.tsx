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
          <Link href="/" className="font-semibold">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/duchenne" className="font-semibold">
            ¿Qué es Duchenne?
          </Link>
        </li>
        <li>
          <Link href="/testimonio" className="font-semibold">
            Testimonio
          </Link>
        </li>
        <li>
          <LinkButton href="#mi-historia" className="font-semibold">
            <span className="ml-2">¿Cómo donar?</span>
          </LinkButton>
        </li>
      </ul>
    </div>
  </div>
)

const StoryButton = () => (
  <LinkButton href="#mi-historia" className="absolute md:relative bottom-4">
    <svg className="animate-bounce mt-2 w-4 h-4 md:w-6 md:h-6 text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1v12m0 0 4-4m-4 4L1 9"></path>
    </svg>
    <span className="md:text-lg ml-2">Conoce mi historia</span>
  </LinkButton>
)

export default function Hero() {
  return (
    <div className="md:h-screen md:px-32">
      <div className="md:bg-secondary md:rounded-3xl md:mt-10 h-full md:h-[80%]">
        <div className="md:hidden absolute bg-secondary z-0 w-full h-[14%]"></div>
        <NavbarHero />
        <div className="md:flex md:items-center md:h-[80%] z-10">
          <div className="relative md:w-3/6 pt-10 md:pt-0">
            <div className="align-middle px-8 py-8 md:pl-20 md:pr-24 pt-24 md:pt-0">
              <span className="text-2xl md:text-2xl font-bold">Mi nombre es Tomás Ross.</span>
              <h1 className="text-4xl md:text-5xl font-bold md:mt-2 bg-clip-text bg-gradient-to-r text-third opacity-90">Me diagnosticaron Duchenne.</h1>
              <p className="mt-2 leading-9">Necesito tu ayuda para costear el medicamento más caro del mundo que cuesta 3.500 millones de pesos chilenos.</p>
              <div className="hidden md:flex mt-10">
                <StoryButton />
              </div>
            </div>
          </div>
          <div className="md:w-3/6 md:h-full px-8 md:px-8 md:pt-6">
            <div className="relative h-full md:h-screen">
              <Image
                src={TomasPaisaje}
                className="h-4/6 md:h-3/4 object-cover rounded-[50px] z-0"
                alt=""
                quality={100}
              />
              <div className="md:hidden absolute w-full">
                <div className="relative mx-4">
                  <StoryButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3 mx-3 md:block hidden">
        <CurrentGoal />
      </div>
    </div>
  )
}
