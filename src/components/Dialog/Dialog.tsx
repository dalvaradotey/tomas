import useMobile from "@/hooks/useMobile";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import style from './styles/Dialog.module.css';

type Props = HTMLAttributes<HTMLDivElement> & {
	isOpen: boolean;
	title: string;
	onClose: () => void;
}

const Dialog: FC<Props> = ({ children, className, isOpen, onClose, title, ...rest }) => {
	const isMobile = useMobile();

	return isOpen && (
		<div className={style.overlay}>
			<div className={style.dialog} {...rest}>
				<div className={style.header}>
					<h4>{title}</h4>
					<button onClick={onClose} className={clsx([isMobile && 'hidden'])}>x</button>
				</div>
				{children}
			</div>
		</div>
	)
}

export default Dialog;