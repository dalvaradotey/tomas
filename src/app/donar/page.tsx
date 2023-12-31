import AidMethodsSection from "@/components/AidMethodsSection";
import Banner from "@/components/Banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '¿Cómo donar? | Tomas contra Duchenne',
  description: 'Tengo 5 años y me diagnosticaron Distrofía Muscular de Duchenne. Necesito administrarme el remedio más caro del mundo de 3.500 millones de pesos chilenos.',
  openGraph: {
    siteName: 'Tomas contra Duchenne',
    locale: 'es-CL',
    type: 'website',
    title: '¿Cómo donar? | Tomas contra Duchenne',
    description: 'Tengo 5 años y me diagnosticaron Distrofía Muscular de Duchenne. Necesito administrarme remedio más caro del mundo de 3.500 millones de pesos chilenos.',
    url: 'https://ayudatomas.com/donar',
    images: [
      {
        url: '/tomas-og.jpg',
        width: 662,
        height: 487,
      },
    ],
  },
}

export default function Donar() {
  return (
    <>
      <div id="donar" className="px-8 py-8 md:py-24 md:px-28 text-neutral-700">
        <h2 className="text-3xl md:text-5xl font-semibold text-center">
          ¿Cómo donar?
        </h2>
        <p className="text-center text-xl md:text-2xl my-12">
          Puedes donar seleccionando cualquiera de estos métodos:
        </p>
        <AidMethodsSection />
      </div>
      <div className="mt-10">
        <Banner />
      </div>
    </>
  )
}