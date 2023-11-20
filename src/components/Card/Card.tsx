import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { FC, HTMLAttributes } from "react";
import styles from "./styles/Card.module.css";

type Props = HTMLAttributes<HTMLDivElement> & {
	image: StaticImageData;
	href: string;
	target?: string
};

const Card: FC<Props> = ({ children, className, image, href, target="_self", ...rest }) => (
	<a href={href} target={target} className={clsx([styles.anchor])}>
		<div className={clsx([styles.card, className])} {...rest}>
			<Image
				src={image}
				className={styles.image}
				alt="método de transferencia"
				quality={100}
			/>
			<div className={styles.content}> 
				{children}
			</div>
		</div>
	</a>
);

export default Card;
