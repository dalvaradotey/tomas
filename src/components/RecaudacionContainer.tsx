"use client";

import { useEffect, useState } from "react";
import { goalsData } from '@/app/goals-data'
import Confetti from 'react-confetti';
import { Method } from "@/lib/types/methods";
import ManyThanksDialog from "./Dialog/ManyThanks";

export default function RecaudacionContainer() {
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
      <div className="my-20 container-box">
        <h1 className="mb-8">Recaudación</h1>
        <div>
          <div className="w-fit bg-success text-success-font rounded-full border-8 border-white px-8 py-8 md:px-3 md:py-3 mr-3 md:mr-4 mb-3 md:mb-0">
            <span className="text-4xl font-bold">{goalsData?.currentPercentage}</span>
          </div>
          <div className="mb-4">
            <p className="text-secondary text-2xl font-semibold">Meta recaudación</p>
            <p className="text-4xl font-light">$3.500.000.000</p>
          </div>
          <div className="mb-4">
            <p className="text-secondary text-2xl font-semibold">Monto recaudado</p>
            <p className="text-4xl font-light">{goalsData?.currentAmount}</p>
          </div>
          <div>
            <p>Última actualización</p>
            <p className="mt-[-10px]">{goalsData?.currentDate}</p>
          </div>
        </div>
      </div>
      <ManyThanksDialog isOpen={isOpen === Method.BancoChile} onClose={handleClose} />
    </>
  )
}