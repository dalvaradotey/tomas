import useClipboard from "@/hooks/useClipboard"
import { FC, HTMLAttributes } from "react"
import { toast } from "react-toastify"
import Icon from "../Icons/Icon"
import Dialog from "./Dialog"

type Props = HTMLAttributes<HTMLDialogElement> & {
	isOpen: boolean
	onClose: () => void
}

const BancoEstadoDialog: FC<Props> = ({ isOpen, onClose, ...rest }) => {
	const saveOnClipboard = useClipboard()

	const handleClipboard = () => {
		saveOnClipboard("Camila Gómez\n18116965-6\nBanco de Estado\nCuenta Rut\n18116965\ncamila.gomezval@gmail.com").then(() => {
			toast.success('Copiado al portapapeles')
		})
	}

	return (
		<Dialog
				title="Transaferencia Banco Estado"
				isOpen={isOpen}
				onClose={onClose}
			>
				<div className="flex flex-col">
					<ul className="mb-8 text-sm md:text-base flex flex-col gap-1">
						<li>Nombre: Camila Gómez</li>
						<li>RUT: 18.116.965-6</li>
						<li>Banco: Banco Estado</li>
						<li>Tipo de cuenta: Cuenta Rut</li>
						<li>N° cuenta: 18116965</li>
						<li>Email: camila.gomezval@gmail.com</li>
					</ul>
					<section className="flex justify-between items-center gap-4">
						<button
							className="rounded w-full p-3 text-center text-blue-700 hover:bg-blue-50"
							onClick={onClose}
						>
							Cerrar
						</button>
						<button
							className="flex justify-center items-center rounded w-full p-3 bg-blue-700 text-white hover:bg-blue-800 gap-2"
							onClick={handleClipboard}
						>
							<Icon icon="clipboard" alt="Copiar datos bancarios" size={18} className="text-white" />
							<span>Copiar</span>
						</button>
					</section>
				</div>
			</Dialog>
	)
}

export default BancoEstadoDialog