import clsx from "clsx";
import { ButtonHTMLAttributes, FC, MouseEvent, useState } from "react";
import Icon from "./Icons/Icon";

const LanguageSwitch: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, onClick, ...rest }) => {
	const [language, setLanguage] = useState<"es"|"en">("es");
	
	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		setLanguage(language === "es" ? "en" : "es");
		
		if (typeof onClick !== "undefined") {
			onClick(e);
		}
	}

	return (
		<button className={clsx(['flex justify-center items-center gap-1', className])} onClick={handleClick} {...rest}>
			<Icon icon="translate" alt="translate" />
			<span className="text-sm uppercase">{language}</span>
		</button>
	);
};

export default LanguageSwitch;
