"use client";

import useMobile from "@/hooks/useMobile";
import Image from "next/image";
import Link from "next/link";
import TomasPNG from "../../public/tomas.png";
import SocialNetworks from "./SocialNetworks/SocialNetworks";

export default function Banner() {
	const isMobile = useMobile();
 
	return (
		<div className="grid grid-col-1 md:grid-cols-5 bg-fifth text-amber-900 items-center overflow-hidden">
			<div className="col-span-1 md:col-span-3 py-4 px-10 md:p-10">
				<h3 className="text-2xl md:text-3xl mb-2 font-bold">
					#TomasContraDuchenne
				</h3>
				<p className="text-base mb-4">
					Necesito tu ayuda para costear el medicamento más caro del mundo.
					Puedes colaborarme haciendo una donación o difundiendo en las redes
					sociales.
				</p>
				<p className="font-semibold mb-2">Juntos podemos logralo.</p>
				<div className="flex justify-start items-center gap-6 w-full md:w-fit mt-0 md:mt-8 md:mt-0">
					<Link
						href="/donar"
						className="flex text-white bg-pink-500 hover:bg-pink-600 focus:outline-none font-medium rounded-full text-sm px-3 py-4 md:px-5 md:py-4 text-center me-2 mb-2 transition duration-700 ease-in-out mt-2 w-full md:w-fit justify-center"
					>
						<svg
							className="w-4 h-4 md:w-4 md:h-4 text-pink-200"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							></path>
						</svg>
						<span className="md:text-md ml-2">¿Cómo donar?</span>
					</Link>
					{!isMobile && (
						<div className="flex flex-col border-l-2 border-amber-900 pl-6 gap-2">
							<small className="text-xs">Sigue mis redes sociales</small>
							<SocialNetworks />
						</div>
					)}
				</div>
			</div>
			<div className="col-span-1 md:col-span-2 relative flex flex-row justify-end items-center">
				{isMobile && (
					<div>
						<SocialNetworks orientation="portrait" />
					</div>
				)}
				<div>
					<Image
						src={TomasPNG}
						className="w-72 md:relative md:w-96 md:top-2 md:left-2"
						alt="Alex, Tomás, Camila y Erwin en la nieve"
						quality={100}
					/>
				</div>
			</div>
		</div>
	);
}
