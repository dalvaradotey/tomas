import BancoChile from "@public/bancochile.png";
import BancoEstado from "@public/bancoestado.jpg";
import Paypal from "@public/paypal.svg";
import WebPay from "@public/webpay.png";
import Card from "./Card/Card";

export default function Methods() {
	return (
		<div id="donar" className="px-8 py-20 md:py-24 md:px-28 text-neutral-700">
			<h2 className="text-3xl md:text-5xl font-semibold text-center">
				¿Cómo donar?
			</h2>
			<p className="text-center text-xl md:text-2xl my-12">
				Puedes donar utilizando cualquiera de estos métodos:
			</p>
			<div className="grid grid-cols-1 gap-4 my-2 md:grid-cols-4 md:gap-10 md:my-5">
				<Card href="?showDialog=y" image={BancoChile}>
					<p className="md:mt-5 font-bold text-sm md:text-2xl">Transferencia</p>
					<p className="text-sm">Banco de Chile</p>
				</Card>
				<Card href="/#donar" image={BancoEstado}>
					<p className="md:mt-5 font-bold text-sm md:text-2xl">Transferencia</p>
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
	);
}
