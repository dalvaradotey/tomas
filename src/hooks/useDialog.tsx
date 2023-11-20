import { DialogContext } from "@/context/DialogContext";
import { useContext } from "react";

const useDialog = () => {
	const context = useContext(DialogContext);

	if(!context) {
		throw new Error("useDialog must be used within a DialogProvider");
	}

	return context
}