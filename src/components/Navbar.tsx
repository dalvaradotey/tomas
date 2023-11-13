'use client';

import Link from "next/link";
import Title from "./Title";

export default function Navbar () {
  return (
    <nav className="flex justify-center p-4">
      <Title />
      <ul className="grid grid-cols-4">
        <li className="text-center font-light">
          <Link href="/">Inicio</Link>
        </li>
        <li className="text-center font-light">
          <Link href="/duchenne">¿Qué es duchenne?</Link>
        </li>
        <li className="text-center font-light">
          <Link href="/testimonios">Testimonios</Link>
        </li>
        <li className="text-center font-light">
          <Link href="/">Lang</Link>
        </li>
      </ul>
    </nav>
  );
};
