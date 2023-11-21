
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
	},
	clipboard: {
		icon: '/clipboard.png',
		sizes: DEFAULT_SIZES,
	},
	x: {
		icon: '/x.png',
		sizes: DEFAULT_SIZES,
	},
	tiktok: {
		icon: '/tiktok.png',
		sizes: DEFAULT_SIZES,
	},
	instagram: {
		icon: '/instagram.png',
		sizes: DEFAULT_SIZES,
	}
}

export default icons