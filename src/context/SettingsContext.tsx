"use client"

import { FC, HTMLAttributes, createContext, useState } from "react";

type Value = {
	lang: string
	setLang: (langcode: string) => void
}

export const SettingsContext = createContext<Value>({
	lang: 'es',
	setLang: () => {}
});

const SettingsProvider: any = ({ children, ...rest }) => {
	const [lang, setLanguage] = useState<string>('es');

	const setLang = (langcode: string) => setLanguage(langcode);
	
	return (
		<SettingsContext.Provider value={{ lang, setLang }} {...rest}>
			{children}
		</SettingsContext.Provider>
	)
}

export default SettingsProvider;