import { goalsData } from '@/app/goals-data'

export default function CurrentGoal() {
  return (
    <div className="md:flex items-center py-12 px-10 md:px-0 md:py-2">
      <div className="w-fit bg-fourth rounded-full border-4 border-white px-4 py-4 md:px-3 md:py-3 mr-3 md:mr-4 mb-3 md:mb-0">
        <span className="text-2xl font-bold">{goalsData?.currentPercentage}</span>
      </div>
      <div className="">
        <p className="uppercase font-bold text-xs opacity-75">
          <span className="md:block hidden">Meta recaudación: CLP $3.500.000.000</span>
        </p>
        <p className="uppercase font-bold text-xs opacity-75">
          <span className="md:block hidden">Monto recaudado: CLP {goalsData?.currentAmount}</span>
        </p>
        <p className="text-sm md:text-xs opacity-70 flex">
          <span className="md:block hidden">Actualización:&nbsp;</span>{goalsData?.currentDate}
        </p>
      </div>
    </div>
  )
}