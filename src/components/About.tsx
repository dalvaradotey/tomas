'use client';

import Link from "next/link";
import Image from 'next/image';
import TomasAireLibre from '@public/toma-aire-libre.jpg';
import LinkButton from "./LinkButton";
import PlayButton from "./PlayButton";
import { Suspense, useState } from "react";
import VideoDialog from "./Dialog/VideoDialog";
import VimeoPlayer from "./Player/VimeoPlayer";

export default function About() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleCloseVideo = () => setIsOpen(false);

	const handleOpenVideo = () => setIsOpen(true);

  return (
    <div id="mi-historia" className="md:py-48 md:px-36 md:h-screen md:flex text-primary">
      <div className="md:w-4/6 md:pr-28">
        <h2 className="text-6xl font-bold text-secondary">Mi historia</h2>
        <p className="text-justify text-xl leading-normal mt-4">Mi nombre es Tomás Ross, tengo 5 años y hace algunos meses me diagnosticaron Distrofía Muscular de Duchenne, una enfermedad degenerativa que afectará significativamente mi movilidad a través del tiempo y reduce mi esperanza de vida a los 30 años. La buena noticia es que la FDA aprobó el primer medicamento de terapia genética para esta enfermedad, llamado Elevidys. ¿La mala noticia? El costo del tratamiento es 3.500 millones de pesos chilenos y necesito administrarme antes de los 6 años.</p>
        <div className="py-8">
          <LinkButton href="" className="flex items-center">
            <svg className="mt-[4px] w-6 h-6 text-secondary animate-[animate-bounce-right_1s_ease-in-out_infinite]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
            </svg>
            <span className="ml-2">Conoce mi testimonio</span>
          </LinkButton>
        </div>
      </div>
      <div className="md:w-2/6 h-full relative justify-center">
        <div className="w-full h-full bg-fourth absolute right-12 rounded-3xl top-0 opacity-30 z-0"></div>
        <Image
          src={TomasAireLibre}
          className="h-full aspect-video object-cover rounded-[50px] absolute top-6 right-4 z-1"
          alt=""
          quality={100}
        />
        <div className="absolute bottom-1 right-8">
          <PlayButton onClick={handleOpenVideo} />
        </div>
      </div>
      <Suspense fallback={<div />}>
				<VideoDialog isOpen={isOpen} onClose={handleCloseVideo}>
					<VimeoPlayer videoId="886676814" />
				</VideoDialog>
			</Suspense>
    </div>
  )
}
