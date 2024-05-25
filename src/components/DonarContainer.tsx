"use client";

import { useEffect, useState } from "react";
import About from "./About/About";
import Hero from "./Hero";
import Methods from "./Methods/Methods";
import RifaBanner from "./RifaBanner/RifaBanner";
import TDGBanner from "./TDGBanner/TDGBanner";
import Confetti from 'react-confetti';
import BancoChileDialog from "./Dialog/BancoChileDialog";
import { Method } from "@/lib/types/methods";
import ManyThanksDialog from "./Dialog/ManyThanks";
import Image from "next/image";
import TomasTeleton from "@public/tomas-teleton.jpg";
import AidMethodsSection from "./AidMethodsSection";
import Banner from "./Banner";

export default function DonarContainer() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isOpen, setIsOpen] = useState<Method>(Method.BancoChile);
  const handleOpen = (modal: number) => setIsOpen(modal);

	const handleClose = () => setIsOpen(0);

  useEffect(() => {
    // Trigger the confetti effect when the component mounts
    setShowConfetti(true);

    // Optionally, you can stop the confetti after a few seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 20000); // 5000ms = 5 seconds

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showConfetti && <Confetti />}
      <Image
        src={TomasTeleton}
        className="object-cover md:hidden"
        alt=""
        quality={100}
      />
      <div id="donar" className="px-8 py-12 md:py-48 md:px-40 text-primary">
        <h2 className="text-secondary text-4xl md:text-5xl font-semibold text-center">
          ¿Cómo donar?
        </h2>
        <p className="text-center font-extralight text-2xl md:text-3xl mt-6 mb-12">
          Puedes donar seleccionando cualquiera de estos métodos:
        </p>
        <AidMethodsSection />
      </div>
      <div className="mt-10">
        <Banner />
      </div>
      <ManyThanksDialog isOpen={isOpen === Method.BancoChile} onClose={handleClose} />
    </>
  )
}