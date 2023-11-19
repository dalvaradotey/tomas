"use client"

import { ElfsightWidget } from 'next-elfsight-widget';

export default function Instagram() {
  return (
    <div className="md:flex px-8 md:py-24 md:px-36 text-neutral-700">
      <div className="md:w-2/5">
        <h2 className="text-3xl md:text-5xl font-semibold mt-24 mb-8">Sigue mi cuenta de Instagram</h2>
        <p className="text-lg md:text-xl">Ayuda a difundir mi caso. Con tu apoyo podré lograrlo.</p>
      </div>
      <div className="md:w-3/5 px-20 py-8">
        <ElfsightWidget widgetId="639be2f0-ff54-4a50-84e8-42eb7d1baeac" />
      </div>
    </div>
  )
}
