import AidMethodsSection from "@/app/[lang]/components/AidMethodsSection";
import Banner from "@/app/[lang]/components/Banner";
import { Metadata } from "next";
import Image from "next/image";
import TomasTeleton from "@public/tomas-teleton.jpg";

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
    </>
  )
}