import Link from "next/link";
import SocialNetworks from "./SocialNetworks/SocialNetworks";

export default function Footer() {
  return (
    <section className='flex flex-col justify-center items-center py-24 bg-white'>
      <ul className="space-y-2 text-lg text-gray-500 font-normal md:flex md:space-y-0 md:space-x-12 py-8 md:py-4">
        <li>
          <Link
            href="/"
            className="hover:underline hover:decoration-pink-500 hover:underline-offset-8 hover:decoration-4"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            href="/duchenne"
            className="hover:underline hover:decoration-pink-500 hover:underline-offset-8 hover:decoration-4"
          >
            ¿Qué es duchenne?
          </Link>
        </li>
        <li>
          <Link
            href="/testimonio"
            className="hover:underline hover:decoration-pink-500 hover:underline-offset-8 hover:decoration-4"
          >
            Testimonio
          </Link>
        </li>
        <li>
          <Link
            href="/donar"
            className="hover:underline hover:decoration-pink-500 hover:underline-offset-8 hover:decoration-4"
          >
            ¿Cómo donar?
          </Link>
        </li>
        <li>
          <Link
            href="/bases-legales-rifa"
            className="hover:underline hover:decoration-pink-500 hover:underline-offset-8 hover:decoration-4"
          >
            Bases legales rifa
          </Link>
        </li>
      </ul>
      <p className="mb-4 text-gray-800 text-base font-thin">Apóyame en redes sociales</p>
      <SocialNetworks />
    </section>
  )
}