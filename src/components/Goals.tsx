import CurrentGoalSection from "./CurrentGoalSection";

export default function Goals() {
  return (
    <div className="md:flex bg-green-50 px-8 md:py-24 md:px-36 text-neutral-700">
      <div className="md:w-2/5">
        <div className="py-10 px-5 rounded-2xl">
          <h2 className="text-xl md:text-2xl font-normal text-green-700 mb-1">Camino a la meta 🏁</h2>
          <p className="text-2xl md:text-4xl text-green-800 font-semibold italic">&ldquo;<span className="text-green-800">Si 1 millón de personas donan CLP$ 3.500 llegamos a la meta.</span>&rdquo;</p>
        </div>
      </div>
      <div className="md:w-3/5 md:px-20 md:py-8">
        <h3 className="text-2xl font-normal md:mb-5 mb-2 text-green-700 text-center md:text-left">Recaudación actualizada</h3>
        <div className="border-t-4 border-dashed border-green-300 pt-5">
          <CurrentGoalSection />
        </div>
      </div>
    </div>
  )
}
