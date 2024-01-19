export default function CurrentGoal() {
  return (
    <div className="md:flex items-center py-2">
      <div className="w-fit bg-fourth rounded-full border-4 border-white px-1.5 py-1 md:px-3 md:py-3 mr-3 md:mr-4">
        <span className="text-xl font-bold">3%</span>
      </div>
      <div className="">
        <p className="uppercase font-bold text-xs opacity-75">
          <span className="md:block hidden">Meta recaudación: CLP $3.500.000.000</span>
          <span className="md:hidden block">Meta: CLP $3.500.000.000</span>
        </p>
        <p className="uppercase font-bold text-xs opacity-75">
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