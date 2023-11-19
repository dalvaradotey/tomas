'use client';

import useMobile from "@/hooks/useMobile";
import { useState } from "react";
import Icon from "./Icons/Icon";
import Menu from "./Menu/Menu";
import Title from "./Title";

export default function Navbar () {
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false);
	const isMobile = useMobile();

	const handleMobileMenu = () => {
		setMobileMenuIsOpen(prev => !prev);
	}

  return (
    <nav className="sticky top-0 flex justify-around md:justify-center p-4 mt-4">
      <Title />
      {isMobile && (
				<button className="cursor-pointer" onClick={handleMobileMenu}>
					<Icon icon="menu" alt="menu" />
				</button>
			)}
			{(!isMobile || mobileMenuIsOpen) && <Menu onClose={handleMobileMenu} />}
    </nav>
  );
};
