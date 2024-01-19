'use client';

import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import CurrentGoal from "./CurrentGoal";
import VimeoPlayer from "./Player/VimeoPlayer";
import VideoGallery from "./VideoGallery";
import LinkButton from "./LinkButton";

const VideoDialog = dynamic(() => import('./Dialog/VideoDialog'));

export default function Hero() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleCloseVideo = () => setIsOpen(false);

	const handleOpenVideo = () => setIsOpen(true);

  return (
    <div className="md:h-screen text-primary md:px-32">
      <div className="bg-secondary md:rounded-3xl md:mt-10 h-[80%] md:h-[80%]">
        <div className="hidden md:block md:flex w-full px-8 py-6 items-center">
          <p className="text-xl w-2/5 font-bold text-transparent bg-clip-text bg-gradient-to-r to-violet-500 from-indigo-900">#TomasContraDuchenne</p>
          <div className="w-3/5">
            <ul className="flex justify-end gap-6 items-center">
              <li>Inicio</li>
              <li>¿Qué es Duchenne?</li>
              <li>Testimonio</li>
              <li>
                <LinkButton href="#mi-historia">
                  <span className="ml-2">¿Cómo donar?</span>
                </LinkButton>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:flex md:items-center md:h-[80%]">
          <div className="relative md:w-3/6">
            <div className="align-middle px-4 py-8 md:pl-20 md:pr-24 pt-24 md:pt-0">
              <span className="text-2xl">Mi nombre es Tomás Ross.</span>
              <h1 className="text-5xl md:text-5xl font-bold md:mt-2 bg-clip-text bg-gradient-to-r text-third opacity-90">Me diagnosticaron Duchenne.</h1>
              <p className="mt-2 text-2xl md:text-xl">Necesito tu ayuda para costear el medicamento más caro del mundo que cuesta 3.500 millones de pesos chilenos.</p>
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
          <div className="md:w-3/6 h-[500px] md:h-full px-4 md:px-8 md:pt-6">
            <VideoGallery className="" onOpenVideo={handleOpenVideo} />
          </div>
        </div>
      </div>
      <div className="my-3 mx-3">
        <CurrentGoal />
      </div>
    </div>
  )
}
