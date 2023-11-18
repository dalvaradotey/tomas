import { useEffect, useState } from 'react';

const MOBILE_WIDTH = 768;

const useMobile = () => {
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		setIsMobile(window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches);
	};

	useEffect(() => {
		if(typeof window === 'undefined') return;

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return isMobile;
}

export default useMobile