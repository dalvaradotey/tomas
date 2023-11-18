
const DEFAULT_SIZES = {
	width: 24,
	height: 24
}

type Icon = {
	[key: string]: {
		icon: string,
		sizes: {
			width: number,
			height: number
		}
	}
}

const icons: Icon = {
	translate: {
		icon: '/translate.png',
		sizes: DEFAULT_SIZES
	},
	menu: {
		icon: '/menu.png',
		sizes: DEFAULT_SIZES,
	},
	close: {
		icon: '/close.png',
		sizes: DEFAULT_SIZES,
	}
}

export default icons