"use client";

import useMobile from "@/hooks/useMobile";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Icon from "./Icons/Icon";
import Menu from "./Menu/Menu";
import Title from "./Title";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false);
	const isMobile = useMobile();

	const handleMobileMenu = () => {
		setMobileMenuIsOpen((prev) => !prev);
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			if (scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={clsx([
				isScrolled || isMobile ? "bg-white" : "bg-transparent",
				"sticky md:fixed top-0 flex justify-around md:justify-between w-full p-6 z-[1000] gap-4 px-2 md:px-16",
			])}
		>
			<Title />
			{isMobile && (
				<button className="cursor-pointer" onClick={handleMobileMenu}>
					<Icon icon="menu" alt="menu" />
				</button>
			)}
			{(!isMobile || mobileMenuIsOpen) && <Menu onClose={handleMobileMenu} />}
		</nav>
	);
}
