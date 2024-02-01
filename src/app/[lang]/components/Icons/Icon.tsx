import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import { FC, memo } from "react";
import icons from "./icons";
import styles from './styles/Icon.module.css';

type Props = Omit<ImageProps, 'src'|'width'|'height'> & {
	icon: string;
	size?: number
};

const Icon: FC<Props> = ({ icon, alt, size=null, className, ...rest }) => {
	const { icon: _icon, sizes: { width, height } } = icons[icon];
	const _width = size || width;
	const _height = size || height;
	const _alt = alt || icon;

	return (
		<Image src={_icon} alt={_alt} width={_width} height={_height} className={clsx([styles.icon, className])} {...rest} />
	)
}

export default memo(Icon);