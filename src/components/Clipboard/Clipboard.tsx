import useClipboard from "@/hooks/useClipboard";
import { FC, HTMLAttributes, memo, useCallback } from "react";
import { toast } from "react-toastify";

type Props = HTMLAttributes<HTMLDivElement> & {
	value: string;
};

const Clipboard: FC<Props> = ({ children, value, ...rest }) => {
	const saveOnClipboard = useClipboard()
	
	const copyClipboard = useCallback(() => {
		saveOnClipboard(value).then(() => {
			toast.success('Copiado al portapapeles')
		})
	}, [value, saveOnClipboard]);

	return (
		<span onClick={copyClipboard} className="cursor-pointer" {...rest}>
			{children}
		</span>
	);
};

export default memo(Clipboard);
