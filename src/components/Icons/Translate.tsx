import TranslatePNG from "@public/translate.png";
import Image from "next/image";

const TranslateIcon = () => {
  return <Image src={TranslatePNG} alt="Translate" width={24} height={24} />;
};

export default TranslateIcon;
