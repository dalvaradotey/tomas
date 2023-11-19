import Image from 'next/image'
import BancoChile from '../../public/bancochile.png'
import BancoEstado from '../../public/bancoestado.jpg'
import WebPay from '../../public/webpay.png'

export default function Methods() {
  return (
    <div id="donar" className="px-8 py-24 md:px-28 h-screen text-neutral-700">
      <h2 className="text-5xl font-semibold text-center">¿Cómo <span className="underline decoration-pink-500 underline-offset-8 font-bold">donar</span>?</h2>
      <p className="text-center text-2xl my-5">Puedes donar utilizando cualquiera de estos métodos:</p>
      <div className="flex justify-center py-5">
        <div className="text-center p-10 m-10 cursor-pointer rounded-2xl bg-gray-100 shadow-md hover:shadow-xl transition duration-700 ease-in-out">
          <Image
            src={BancoChile}
            className="w-40 aspect-square object-cover mb-4 rounded-xl"
            alt=""
            quality={100}
          />
          <p className="mt-5 font-bold text-2xl">Transferencia</p>
          <p className="text-sm">Banco de Chile</p>
        </div>
        <div className="text-center p-10 m-10 cursor-pointer rounded-2xl bg-gray-100 shadow-md hover:shadow-xl transition duration-700 ease-in-out">
          <Image
            src={BancoEstado}
            className="w-40 aspect-square object-cover mb-4 rounded-xl"
            alt=""
            quality={100}
          />
          <p className="mt-5 font-bold text-2xl">Transferencia</p>
          <p className="text-sm">Banco Estado</p>
        </div>
        <a
          href="https://www.webpay.cl/company/112863?utm_source=transbank&utm_medium=portal3.0&utm_campaign=link_portal"
          target="_blank"
          className="text-center p-10 m-10 cursor-pointer rounded-2xl bg-gray-100 shadow-md hover:shadow-xl transition duration-700 ease-in-out"
        >
          <Image
            src={WebPay}
            className="aspect-square object-cover mb-4 rounded-xl"
            alt=""
            quality={100}
          />
          <p className="mt-5 font-bold text-2xl">WebPay</p>
          <p className="text-sm">Tarjeta de crédito y débito</p>
        </a>
        <a
          href="https://l.instagram.com/?u=https%3A%2F%2Fwww.paypal.me%2Ftomascontraduchenne&e=AT3j3njtrOiXDYmk1wJpiSKYi_1xlCkPStah5upIKwwTFouBIl0Zfd0df8vIntame4zIv8oGmnORLR7MObj_h293MNk-GRHgYmXGuQ"
          target="_blank"
          className="text-center p-10 m-10 cursor-pointer rounded-2xl bg-gray-100 shadow-md hover:shadow-xl transition duration-700 ease-in-out"
        >
          <svg className="w-40 h-40 me-2 -ms-1 text-blue-700" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path>
          </svg>
          <p className="mt-5 font-bold text-2xl">PayPal</p>
          <p className="text-sm">Chile y extranjero</p>
        </a>
      </div>
    </div>
  )
}
