import { Metadata } from "next";
import { goalsData } from '@/app/goals-data'
import RecaudacionContainer from "@/components/RecaudacionContainer";

export const metadata: Metadata = {
  title: 'Avances en recaudación | Tomas contra Duchenne',
  description: 'Avances en la recaudación de fondos.',
  openGraph: {
    siteName: 'Tomas contra Duchenne',
    locale: 'es-CL',
    type: 'website',
    title: 'Avances en recaudación | Tomas contra Duchenne',
    description: 'Avances en la recaudación de fondos.',
    url: 'https://ayudatomas.com/recaudacion',
    images: [
      {
        url: '/tomas-og.jpg',
        width: 662,
        height: 487,
      },
    ],
  },
}

export default function Recaudacion() {
  return <RecaudacionContainer />
}