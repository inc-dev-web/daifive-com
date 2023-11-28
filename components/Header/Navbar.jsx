import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/image/logoBlack.png';
import iconPhone from '../../public/image/icon/phone.svg';
import burger from '../../public/image/icon/burger.svg';

export function Navbar() {
	const menuItem = [
		{ title: 'Головна', href: '#' },
		{ title: 'Послуги', href: '#' },
		{ title: 'Спеціалісти', href: '#' },
		{ title: 'Блог', href: '#' },
	];

	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<header className="px-4 lg:pl-[100px] mt-10 flex flex-row justify-between items-center h-[58px] lg:h-[48px] lg:pr-[100px] relative">
			<Image
				src={logo}
				alt="logo"
				className="object-contain h-[58px] w-[101px] lg:h-[34px] lg:w-[69px]"
			/>
			<nav className={`absolute right-0 left-0 bottom-[-50%] md:static items-center justify-center flex`}>
				<ul
					className={`flex bottom-[-150%] flex-col gap-5 md:gap-10 md:flex-row items-center h-[48px] z-40 ${
						isMenuOpen ? 'visible' : 'md:flex hidden'
					}`}
				>
					{menuItem.map((item, index) => (
						<li
							className="text-customStyleHover"
							key={index}
						>
							<a
								href={item.href}
								title={item.title}
								className="text-xl lg:text-xs"
							>
								{item.title}
							</a>
						</li>
					))}
				</ul>
			</nav>
			<button
				className="flex justify-center items-center relative"
				onClick={toggleMenu}
			>
				<Image
					src={burger}
					alt={'menu'}
					className="object-contain w-[50px] h-[50px] inline md:hidden"
				/>
			</button>
			<div className="md:flex hidden h-[48px] flex-row items-center w-[213px] justify-between py-[16px] px-[32px] text-sm bg-customOrangeLight rounded-[60px]">
				<Image
					src={iconPhone}
					alt="phone"
				/>
				<span className="text-customOrange">+38 066 826 24 15</span>
			</div>
		</header>
	);
}
