import { useState } from "react";
import TranslateIcon from "./Icons/Translate";

const LanguageSwitch = () => {
	const [language, setLanguage] = useState<"es"|"en">("es");
	
	const handleClick = () => {
		setLanguage(language === "es" ? "en" : "es");
	}

	return (
		<button className="flex justify-center items-center gap-1" onClick={handleClick}>
			<TranslateIcon />
			<span className="text-sm uppercase">{language}</span>
		</button>
	);
};

export default LanguageSwitch;
