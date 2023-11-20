"use client";

import AidMethods from "@/components/AidMethods";

export default function Donar() {
  return (
    <div id="donar" className="px-8 py-8 md:py-24 md:px-28 text-neutral-700">
      <h2 className="text-3xl md:text-5xl font-semibold text-center">
        ¿Cómo donar?
      </h2>
      <p className="text-center text-xl md:text-2xl my-12">
        Puedes donar seleccionando cualquiera de estos métodos:
      </p>
      <div className="grid grid-cols-1 gap-4 my-2 md:grid-cols-4 md:gap-10 md:my-5">
        <AidMethods />
      </div>
    </div>
  )
}