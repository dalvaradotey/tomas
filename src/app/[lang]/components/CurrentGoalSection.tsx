export default function CurrentGoalSection() {
  return (
    <div className="md:flex">
      <div className="w-fit rounded-full border-4 border-green-400 px-1.5 py-1 md:px-3 md:py-4 mr-3 md:mr-4">
        <span className="text-xl md:text-4xl font-bold text-green-900">3%</span>
      </div>
      <div className="mt-2 md:mt-0">
        <p className="text-xl text-green-600 mb-1 font-semibold md:hidden">Recaudación actualizada</p>
        <p className="font-bold text-md md:text-xl text-green-800">
          <span className="md:block hidden">Meta recaudación: CLP $3.500.000.000</span>
          <span className="md:hidden block">Meta: CLP $3.500.000.000</span>
        </p>
        <p className="font-bold text-md md:text-xl text-green-800">
          <span className="md:block hidden">Monto recaudado: CLP $114.007.700</span>
          <span className="md:hidden block">Recaudado: CLP $114.007.700</span>
        </p>
        <p className="text-xs md:text-lg opacity-70 flex">
          <span className="md:block hidden">Actualización:&nbsp;</span>30 diciembre 2023 - 12:13 hrs
        </p>
      </div>
    </div>
  )
}