import clsx from "clsx";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";
import Icon from "../Icons/Icon";
import LanguageSwitch from "../LanguageSwitch";
import styles from "./styles/Menu.module.css";

type Props = HTMLAttributes<HTMLDivElement> & {
	onClose: () => void;
};

const Menu: FC<Props> = ({ onClose, className, ...rest }) => {
	return (
		<div className={clsx([styles.nav, className])} {...rest}>
			<ul role="menu" className={styles.menu}>
				<li>
					<Link onClick={onClose} className="underline decoration-pink-500 underline-offset-8 decoration-4" href="/">Inicio</Link>
				</li>
				<li>
					<Link onClick={onClose} href="/duchenne">¿Qué es duchenne?</Link>
				</li>
				<li className="hidden">
					<Link onClick={onClose} href="/testimonios">Testimonio</Link>
				</li>
				<li>
					<Link onClick={onClose} href="/#donar">¿Cómo donar?</Link>
				</li>
				<li className="hidden justify-center md:justify-center">
					<LanguageSwitch onClick={onClose} />
				</li>
			</ul>
			<div className="flex items-center justify-center md:hidden absolute bottom-16 w-full">
				<button onClick={onClose}>
					<Icon icon="close" alt="close" size={48} />
				</button>
			</div>
		</div>
	);
};

export default Menu;
