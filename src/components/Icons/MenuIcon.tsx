import MenuPNG from "@public/menu.png";
import Image, { ImageProps } from "next/image";
import { FC } from "react";

const MenuIcon: FC<Omit<ImageProps,'src'|'alt'|'witdth'|'height'>> = (props) => {
  return <Image src={MenuPNG} alt="Translate" width={24} height={24} {...props} />;
};

export default MenuIcon;
