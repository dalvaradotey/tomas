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
					<Link onClick={onClose} href="/">Inicio</Link>
				</li>
				<li>
					<Link onClick={onClose} href="/duchenne">¿Qué es duchenne?</Link>
				</li>
				<li>
					<Link onClick={onClose} href="/testimonios">Testimonios</Link>
				</li>
				<li>
					<Link onClick={onClose} href="/#donar">¿Cómo donar?</Link>
				</li>
				<li className="flex justify-center md:justify-center">
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