export default function CurrentGoalSection() {
  return (
    <div className="flex">
      <div>
        <div className="rounded-full border-4 border-green-400 px-1.5 py-1 md:px-3 md:py-4 mr-3 md:mr-4">
          <span className="text-xl md:text-4xl font-bold text-green-900">1%</span>
        </div>
      </div>
      <div className="">
        <p className="font-bold text-md md:text-xl text-green-800">
          <span className="md:block hidden">Meta recaudación: CLP $3.500.000.000</span>
          <span className="md:hidden block">Meta: CLP $3.500.000.000</span>
        </p>
        <p className="font-bold text-md md:text-xl text-green-800">
          <span className="md:block hidden">Monto recaudado: CLP $39.880.440</span>
          <span className="md:hidden block">Recaudado: CLP $39.880.440</span>
        </p>
        <p className="text-xs md:text-lg opacity-70 flex">
          <span className="md:block hidden">Actualización:&nbsp;</span>19 noviembre 2023 - 10:30 hrs
        </p>
      </div>
    </div>
  )
}