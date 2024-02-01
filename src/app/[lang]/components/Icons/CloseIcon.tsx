import ClosePNG from "@public/close.png";
import Image, { ImageProps } from "next/image";
import { FC } from "react";

const CloseIcon: FC<Omit<ImageProps,'src'|'alt'|'witdth'|'height'>> = (props) => {
  return <Image src={ClosePNG} alt="Translate" width={24} height={24} {...props} />;
};

export default CloseIcon;
