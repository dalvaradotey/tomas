'use client';

import Image from 'next/image';
import TomasAireLibre from '@public/toma-aire-libre.jpg';
import LinkButton from "../LinkButton";
import PlayButton from "../PlayButton";
import { Suspense, useState } from "react";
import VideoDialog from "../Dialog/VideoDialog";
import VimeoPlayer from "../Player/VimeoPlayer";
import clsx from 'clsx';
import style from './About.module.css'

export default function About() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleCloseVideo = () => setIsOpen(false);

	const handleOpenVideo = () => setIsOpen(true);

  return (
    <div id="mi-historia" className={clsx(['container-box', style?.aboutContainer])}>
      <div className={style?.aboutContent}>
        <h2>Mi historia</h2>
        <p>Mi nombre es <strong>Tomás Ross</strong>, tengo 5 años y hace algunos meses me diagnosticaron <strong>Distrofía Muscular de Duchenne</strong>, una enfermedad degenerativa que afectará significativamente mi movilidad a través del tiempo y reduce mi esperanza de vida a los 30 años. La buena noticia es que <strong>la FDA aprobó el primer medicamento</strong> de terapia genética para esta enfermedad, llamado <strong>Elevidys</strong>. ¿La mala noticia? El costo del tratamiento es <strong>3.500 millones de pesos chilenos</strong> y necesito administrarme antes de los 6 años.</p>
        <div className="py-8">
          <LinkButton href="/testimonio" className="hidden md:flex items-center">
            <svg className="mt-[4px] w-6 h-6 text-secondary animate-[animate-bounce-right_1s_ease-in-out_infinite]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
            </svg>
            <span className="ml-2 text-lg">Conoce mi testimonio</span>
          </LinkButton>
        </div>
      </div>
      <div className={style?.aboutImage}>
        <div className="w-full h-full bg-fifth absolute md:right-12 right-4 rounded-3xl md:top-0 top-[-20px] z-0"></div>
        <Image
          src={TomasAireLibre}
          className="h-full aspect-video object-cover rounded-[50px] absolute md:top-6 md:right-4 z-1"
          alt=""
          quality={100}
        />
        <div className="absolute bottom-5 md:bottom-1 right-8">
          <PlayButton onClick={handleOpenVideo} />
        </div>
      </div>
      <div className="py-8">
        <LinkButton href="/testimonio" className="md:hidden items-center">
          <svg className="mt-[4px] w-6 h-6 text-secondary animate-[animate-bounce-right_1s_ease-in-out_infinite]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
          </svg>
          <span className="ml-2 text-lg">Conoce mi testimonio</span>
        </LinkButton>
      </div>
      <Suspense fallback={<div />}>
				<VideoDialog isOpen={isOpen} onClose={handleCloseVideo}>
					<VimeoPlayer videoId="886676814" />
				</VideoDialog>
			</Suspense>
    </div>
  )
}
