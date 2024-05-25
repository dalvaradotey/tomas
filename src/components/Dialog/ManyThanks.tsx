import { FC, HTMLAttributes } from "react"
import Dialog from "./Dialog"
import Image from "next/image"
import TomasPaisaje from "@public/tomas.png";

type Props = HTMLAttributes<HTMLDialogElement> & {
	isOpen: boolean
	onClose: () => void
}

const ManyThanksDialog: FC<Props> = ({ isOpen, onClose, ...rest }) => {
	return (
			<Dialog
				title=""
				isOpen={isOpen}
				onClose={onClose}
			>
				<div className="flex flex-col text-center">
					<h3 className="mb-0 font-bold">Llegamos a la meta 🥳</h3>
					<p>¡Gracias por ser parte del millón!</p>
					<Image
						src={TomasPaisaje}
						className="h-4/6 md:h-2/4 object-cover z-0"
						alt=""
						quality={100}
					/>
					<section className="flex justify-between items-center gap-4 mt-4">
						<button
							className="rounded w-full p-3 text-center text-blue-700 hover:bg-blue-50"
							onClick={onClose}
						>
							Ver sitio web
						</button>
					</section>
				</div>
			</Dialog>
	)
}

export default ManyThanksDialog
