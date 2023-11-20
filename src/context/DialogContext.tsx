import { FC, HTMLAttributes, createContext, useState } from "react";

type Value = {
	isOpen: boolean;
	toggleModal: () => void;
}

export const DialogContext = createContext<Value>({
	isOpen: false,
	toggleModal: () => {}
});

const DialogProvider: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	
	const toggleModal = () => setIsOpen((prev) => !prev);
	
	return (
		<DialogContext.Provider value={{ isOpen, toggleModal }} {...rest}>
			{children}
		</DialogContext.Provider>
	)
}

export default DialogProvider;