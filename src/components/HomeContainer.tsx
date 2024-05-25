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

export default function HomeContainer() {
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
      <Hero />
      <About />
      <Methods />
      <TDGBanner />
      <RifaBanner />
      <ManyThanksDialog isOpen={isOpen === Method.BancoChile} onClose={handleClose} />
    </>
  )
}