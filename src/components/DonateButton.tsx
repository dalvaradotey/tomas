"use client"

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function DonateButton() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
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
        <Link
          href="/donar"
          className={clsx([
            isScrolled ? 'block' : 'hidden',
            'fixed shadow-md items-center md:hidden bottom-2 right-2 flex text-gray-800 font-semibold bg-white hover:bg-gray-200 focus:outline-none font-medium rounded-full text-sm px-5 py-4 md:px-5 md:py-4 text-center me-2 mb-2 transition duration-700 ease-in-out w-fit justify-center'
          ])}
        >
          <span className="text-xs">¿Cómo donar?</span>
        </Link>
      )}
    </>
  )
}
