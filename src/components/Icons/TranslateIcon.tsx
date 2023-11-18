import TranslatePNG from "@public/translate.png";
import Image, { ImageProps } from "next/image";
import { FC } from "react";

const TranslateIcon: FC<Omit<ImageProps,'src'|'alt'|'witdth'|'height'>> = ({...props}) => {
  return <Image src={TranslatePNG} alt="Translate" width={24} height={24} {...props} />;
};

export default TranslateIcon;
