"use client";

import BancoChile from "@public/bancochile.png";
import BancoEstado from "@public/bancoestado.jpg";
import Paypal from "@public/paypal.svg";
import WebPay from "@public/webpay.png";
import { useState } from "react";
import Card from "./Card/Card";
import Dialog from "./Dialog/Dialog";

enum Method {
	BancoChile = 1,
	BancoEstado = 2,
	WebPay = 3,
	Paypal = 4,
	None = 0,
}

export default function Methods() {
	const [isOpen, setIsOpen] = useState<Method>(Method.None);

	const handleOpen = (modal: number) => setIsOpen(modal);

	const handleClose = () => setIsOpen(0);

	return (
		<>
			<div id="donar" className="px-8 py-20 md:py-24 md:px-28 text-neutral-700">
				<h2 className="text-3xl md:text-5xl font-semibold text-center">
					¿Cómo donar?
				</h2>
				<p className="text-center text-xl md:text-2xl my-12">
					Puedes donar utilizando cualquiera de estos métodos:
				</p>
				<div className="grid grid-cols-1 gap-4 my-2 md:grid-cols-4 md:gap-10 md:my-5">
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
				</div>
			</div>
			<Dialog
				title="Transaferencia Banco Chile"
				isOpen={isOpen === Method.BancoChile}
				onClose={handleClose}
			>
				<div className="flex flex-col">
					<ul className="mb-8 text-sm md:text-base">
						<li>Nombre: Camila Gómez</li>
						<li>RUT: 18.116.965-6</li>
						<li>Banco: Banco de Chile</li>
						<li>Tipo de cuenta: Corriente</li>
						<li>N° cuenta: 003280566707</li>
						<li>Email: camila.gomezval@gmail.com</li>
					</ul>
					<button className="rounded w-full p-3 text-center bg-blue-700 text-white" onClick={handleClose}>
						Cerrar
					</button>
				</div>
			</Dialog>
			<Dialog
				title="Transferencia Banco Estado"
				isOpen={isOpen === Method.BancoEstado}
				onClose={handleClose}
			>
				<div className="flex flex-col">
					<ul className="mb-8 text-sm md:text-base">
						<li>Nombre: Camila Gómez</li>
						<li>RUT: 18.116.965-6</li>
						<li>Banco: Banco Estado</li>
						<li>Tipo de cuenta: Cuenta Rut</li>
						<li>N° cuenta: 18116965</li>
						<li>Email: camila.gomezval@gmail.com</li>
					</ul>
					<button className="rounded w-full p-3 text-center bg-blue-700 text-white" onClick={handleClose}>
						Cerrar
					</button>
				</div>
			</Dialog>
		</>
	);
}
