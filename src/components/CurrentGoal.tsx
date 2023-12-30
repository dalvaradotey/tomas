export default function CurrentGoal() {
  return (
    <div className="md:flex">
      <div className="w-fit rounded-full border-4 border-pink-400 px-1.5 py-1 md:px-3 md:py-3 mr-3 md:mr-4">
        <span className="text-xl font-bold">3%</span>
      </div>
      <div className="mt-2 md:mt-0">
        <p className="text-lg text-pink-500 font-semibold md:hidden">Recaudación actualizada</p>
        <p className="uppercase font-bold text-sm text-cyan-900 opacity-75">
          <span className="md:block hidden">Meta recaudación: CLP $3.500.000.000</span>
          <span className="md:hidden block">Meta: CLP $3.500.000.000</span>
        </p>
        <p className="uppercase font-bold text-sm text-cyan-900 opacity-75">
          <span className="md:block hidden">Monto recaudado: CLP $114.007.700</span>
          <span className="md:hidden block">Recaudado: CLP $114.007.700</span>
        </p>
        <p className="text-xs opacity-70 flex">
          <span className="md:block hidden">Actualización:&nbsp;</span>30 diciembre 2023 - 12:13 hrs
        </p>
      </div>
    </div>
  )
}