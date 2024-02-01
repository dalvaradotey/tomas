'use client';

import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import Icon from "../Icons/Icon";

type Props = HTMLAttributes<HTMLDivElement> & {
	orientation?: "landscape" | "portrait";
}

const SocialNetworks: FC<Props> = ({
	className,
	orientation = "landscape",
	...rest
}) => (
	<div
		className={clsx([
			"flex gap-6 md:gap-8",
			orientation === "portrait" ? 'flex-col justify-center items-start' : 'flex-row justify-start items-center',
			className])}
		{...rest}
	>
		<a href="https://www.instagram.com/tomas_contra_duchenne/" target="_blank">
			<Icon icon="instagram" alt="Sígueme en Instagram" />
		</a>
		<a href="https://www.tiktok.com/@tomy_contra_duchenne" target="_blank">
			<Icon icon="tiktok" alt="Sígueme en Tiktok" />
		</a>
		<a href="https://twitter.com/tomasxduchenne" target="_blank">
			<Icon icon="x" alt="Sígueme en X" />
		</a>
		<a href="https://www.facebook.com/profile.php?id=61553041485172&mibextid=ZbWKwL" target="_blank">
			<Icon icon="facebook" alt="Sígueme en facebook" />
		</a>
	</div>
);

export default SocialNetworks;
