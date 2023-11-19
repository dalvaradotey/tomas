export default function CurrentGoal() {
  return (
    <div className="flex">
      <div>
        <div className="rounded-full border-4 border-pink-400 px-1.5 py-1 md:px-2 md:py-2 mr-3 md:mr-4">
          <span className="md:text-xl font-bold">1%</span>
        </div>
      </div>
      <div className="">
        <p className="uppercase font-bold text-xs md:text-sm text-cyan-900 opacity-75">
          <span className="md:block hidden">Meta recaudación: CLP $3.500.000.000</span>
          <span className="md:hidden block">Meta: CLP $3.500.000.000</span>
        </p>
        <p className="uppercase font-bold text-xs md:text-sm text-cyan-900 opacity-75">
          <span className="md:block hidden">Monto recaudado: CLP $39.880.440</span>
          <span className="md:hidden block">Recaudado: CLP $39.880.440</span>
        </p>
        <p className="text-xs opacity-70 flex">
          <span className="md:block hidden">Actualización:&nbsp;</span>19 noviembre 2023 - 10:30 hrs
        </p>
      </div>
    </div>
  )
}