import { Method } from "@/lib/types/methods";
import BancoChile from "@public/bancochile.png";
import BancoEstado from "@public/bancoestado.jpg";
import Paypal from "@public/paypal.svg";
import WebPay from "@public/webpay.png";
import { useState } from "react";
import Card from "./Card/Card";
import BancoChileDialog from "./Dialog/BancoChileDialog";
import BancoEstadoDialog from "./Dialog/BancoEstadoDialog";

export default function AidMethods() {
  const [isOpen, setIsOpen] = useState<Method>(Method.None);

	const handleOpen = (modal: number) => setIsOpen(modal);

	const handleClose = () => setIsOpen(0);

  return (
    <>
      <Card
        onClick={() => handleOpen(Method.BancoChile)}
        image={BancoChile}
      >
        <p className="md:mt-5 font-bold text-sm md:text-2xl">
          Transferencia
        </p>
        <p className="text-sm">Banco de Chile</p>
      </Card>
      <Card
        onClick={() => handleOpen(Method.BancoEstado)}
        image={BancoEstado}
      >
        <p className="md:mt-5 font-bold text-sm md:text-2xl">
          Transferencia
        </p>
        <p className="text-sm">Banco Estado</p>
      </Card>
      <Card
        href="https://www.webpay.cl/company/112863?utm_source=transbank&utm_medium=portal3.0&utm_campaign=link_portal"
        target="_blank"
        image={WebPay}
      >
        <p className="md:mt-5 font-bold text-sm md:text-2xl">WebPay</p>
        <p className="text-sm">Tarjeta de crédito y débito</p>
      </Card>
      <Card
        href="https://www.paypal.com/paypalme/tomascontraduchenne"
        target="_blank"
        image={Paypal}
        className="paypal"
      >
        <p className="md:mt-5 font-bold text-sm md:text-2xl">PayPal</p>
        <p className="text-sm">Chile y extranjero</p>
      </Card>
      <BancoChileDialog isOpen={isOpen === Method.BancoChile} onClose={handleClose} />
			<BancoEstadoDialog isOpen={isOpen === Method.BancoEstado} onClose={handleClose} />
    </>
  )
}