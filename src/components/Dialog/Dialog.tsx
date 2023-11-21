import useMobile from "@/hooks/useMobile";
import clsx from "clsx";
import { FC, HTMLAttributes, MouseEventHandler } from "react";
import style from './styles/Dialog.module.css';

type Props = HTMLAttributes<HTMLDialogElement> & {
	isOpen: boolean;
	title: string;
	onClose: () => void;
}

const Dialog: FC<Props> = ({ children, className, isOpen, onClose, title, ...rest }) => {
	const isMobile = useMobile();

	const handleClickOutside: MouseEventHandler<HTMLDivElement> = (event) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	}

	return isOpen && (
		<div className={style.overlay} onClick={handleClickOutside}>
			<dialog open={isOpen} className={style.dialog} {...rest}>
				<div className={style.header}>
					<h4>{title}</h4>
					<button onClick={onClose} className={clsx([isMobile && 'hidden'])}>x</button>
				</div>
				{children}
			</dialog>
		</div>
	)
}

export default Dialog;