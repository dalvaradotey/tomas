const useClipboard = () => {
	return (value: string) => {
		if(!navigator?.clipboard) {
			throw new Error('Clipboard is not supported')
		}

		return navigator.clipboard.writeText(value)
	}
}

export default useClipboard