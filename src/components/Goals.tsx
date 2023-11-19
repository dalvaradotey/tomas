export default function Goals() {
  return (
    <div id="donar" className="flex px-8 py-24 md:px-28 h-screen text-neutral-700">
      <div className="w-2/5">
        <h2 className="text-5xl font-semibold">Nuestra meta</h2>
        <p className="text-2xl my-5">Muchas gracias a todos</p>
      </div>
      <div className="w-3/5">
        <div className="flex">
          <div className="rounded-full bg-teal-200 px-4 py-6">
            <span className="text-5xl font-bold">1%</span>
          </div>
          <div className="px-10">
            <p>Meta final: $3.500.000.000</p>
            <p>Monto actual: $39.880.440</p>
          </div>
        </div>
        <div className="flex justify-center py-5">
          <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500" style={{ width: '1%' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
