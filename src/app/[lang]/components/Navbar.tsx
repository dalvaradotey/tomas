"use client";

import useMobile from "@/hooks/useMobile";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Icon from "./Icons/Icon";
import Menu from "./Menu/Menu";
import Title from "./Title";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false);
	const isMobile = useMobile();
	const pathname = usePathname();

	const handleMobileMenu = () => {
		setMobileMenuIsOpen((prev) => !prev);
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;

			if (scrollY > 700) {
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
				isScrolled || isMobile || !['/', '/en'].includes(pathname) ? "block" : "hidden",
				"sticky md:fixed top-4 w-full z-[40]",
			])}
		>
			<div className="mx-4 md:mx-32 bg-white m-auto rounded-[50px] flex justify-around md:justify-between py-6 md:px-8">
				<Link href="/">
					<Title />
				</Link>
				{isMobile && (
					<button className="cursor-pointer" onClick={handleMobileMenu}>
						<Icon icon="menu" alt="menu" />
					</button>
				)}
				{(!isMobile || mobileMenuIsOpen) && <Menu onClose={handleMobileMenu} />}
			</div>
		</nav>
	);
}
