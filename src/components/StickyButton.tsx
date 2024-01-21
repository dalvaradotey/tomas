"use client"

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function StickyButton() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname()

  useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			if (scrollY > 150) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

  return (
    <>
      {pathname !== '/donar' && (
        <div className={clsx([isScrolled ? 'block' : 'hidden', 'fixed end-6 bottom-6 group'])} onClick={() => setIsOpen(!isOpen)}>
          <div id="speed-dial-menu-text-outside-button" className={clsx([isOpen ? '' : 'hidden'], 'bg-white shadow-lg text-third p-4 mb-4 rounded-xl space-y-2')}>
            <Link href="/donar" className="flex items-center text-primary font-bold">
              <svg className="w-6 h-6 text-secondary mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
              </svg>
              <span className="">Ir a home</span>
            </Link>
            <Link href="/donar" className="flex items-center text-primary font-bold">
              <svg className="w-6 h-6 text-secondary mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
              </svg>
              <span className="">¿Cómo donar?</span>
            </Link>
            <Link href="/donar" className="flex items-center text-primary font-bold">
              <svg className="w-6 h-6 text-secondary mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
              </svg>
              <span className="">Ir a rifa</span>
            </Link>
            <Link href="/recaudacion" className="flex items-center text-primary font-bold">
              <svg className="w-6 h-6 text-secondary mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
              </svg>
              <span className="">Recaudación</span>
            </Link>
          </div>
          <button type="button" data-dial-toggle="speed-dial-menu-text-outside-button-square" aria-controls="speed-dial-menu-text-outside-button-square" aria-expanded="false" className="flex items-center justify-center text-white bg-gradient-to-r to-violet-500 from-indigo-600 rounded-full w-16 h-16 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none">
            <svg className="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
            </svg>
            <span className="sr-only">Open actions menu</span>
          </button>
        </div>
      )}
    </>
  )
}
