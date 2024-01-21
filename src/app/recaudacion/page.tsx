import { Metadata } from "next";
import { goalsData } from '@/app/goals-data'

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
  return (
    <div className="my-20 container-box">
      <h1 className="mb-8">Recaudación</h1>
      <div>
        <div className="w-fit bg-fourth rounded-full border-8 border-white px-8 py-8 md:px-3 md:py-3 mr-3 md:mr-4 mb-3 md:mb-0">
          <span className="text-4xl font-bold">{goalsData?.currentPercentage}</span>
        </div>
        <div className="mb-4">
          <p className="text-secondary text-2xl font-semibold">Meta recaudación</p>
          <p className="text-4xl font-light">CLP $3.500.000.000</p>
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
  )
}