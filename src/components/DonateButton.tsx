"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DonateButton() {
  const pathname = usePathname()

  return (
    <>
      {pathname !== '/donar' && (
        <Link
          href="/donar"
          className="fixed shadow-md items-center md:hidden bottom-2 right-2 flex text-gray-800 font-semibold bg-white hover:bg-gray-200 focus:outline-none font-medium rounded-full text-sm px-5 py-4 md:px-5 md:py-4 text-center me-2 mb-2 transition duration-700 ease-in-out w-fit justify-center"
        >
          <span className="text-xs">¿Cómo donar?</span>
        </Link>
      )}
    </>
  )
}
