import clsx from "clsx";
import { FC, HTMLAttributes, MouseEventHandler, memo } from "react";
import style from './styles/Dialog.module.css';

type Props = HTMLAttributes<HTMLDialogElement> & {
	isOpen: boolean;
	onClose: () => void;
}

const VideoDialog: FC<Props> = ({ children, className, isOpen, onClose, ...rest }) => {
	const handleClickOutside: MouseEventHandler<HTMLDivElement> = (event) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	}

	return isOpen && (
		<div className={style.overlay} onClick={handleClickOutside}>
			<dialog open={isOpen} className={clsx([style.dialog, style.video])} {...rest}>
				{children}
			</dialog>
		</div>
	)
}

export default memo(VideoDialog);