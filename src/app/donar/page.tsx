import AidMethodsSection from "@/components/AidMethodsSection";
import Banner from "@/components/Banner";
import { Metadata } from "next";
import Image from "next/image";
import TomasTeleton from "@public/tomas-teleton.jpg";
import DonarContainer from "@/components/DonarContainer";

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
  return <DonarContainer />
}