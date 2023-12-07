'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/image/logoBlack.png';
import iconPhone from '@/public/image/icon/phone.svg';
import burger from '@/public/image/icon/burger.svg';
import Link from 'next/link';

export function Navbar() {
	const menuItem = [
		{ title: 'Головна', href: '/' },
		{ title: 'Послуги', href: '/services' },
		{ title: 'Спеціалісти', href: '/team' },
		{ title: 'Блог', href: '/blog' },
		{ title: 'Контакти', href: '/contact' },
	];

	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<header className="px-4 lg:px-[100px] mt-10 flex justify-between items-center md:h-[58px] h-[48px] relative">
			<Link href="/">
				<Image
					src={logo}
					alt="logo"
					className="object-contain w-[69px] h-[44px]"
				/>
			</Link>
			<nav className={`md:relative flex items-center justify-center`}>
				<ul
					className={`text-[#2A333CB2] md:text-[#2A333C] md:bg-none md:flex gap-8 text-xl z-40 py-[60px] md:py-0 right-0 top-[50px] bg-[#fafafa] absolute flex flex-col md:gap-10 md:flex-row items-center md:h-[48px] md:text-xs lg:text-base w-full ${
						isMenuOpen ? 'visible' : 'md:flex hidden md:static'
					}`}
				>
					{menuItem.map((item, index) => (
						<li
							className="text-customStyleHover w-[50%] md:w-auto flex items-center justify-center border-b border-gray-300 md:border-none"
							key={index}
						>
							<Link
								href={item.href}
								title={item.title}
								onClick={closeMenu}
								className="w-full"
							>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<button
				className="md:hidden flex justify-center items-center relative bg-blueRadianCustom rounded-full w-[50px] h-[50px]"
				onClick={toggleMenu}
			>
				<Image
					src={burger}
					alt={'menu'}
					className="object-contain w-[24px] h-[24px]"
				/>
			</button>
			<div className="md:flex hidden h-[48px] flex-row items-center w-[213px] justify-between py-[16px] px-[32px] text-sm bg-customOrangeLight rounded-[60px]">
				<Image
					src={iconPhone}
					alt="phone"
				/>
				<a
					href="tel:+380668262415"
					className="text-customOrange"
				>
					+38 066 826 24 15
				</a>
			</div>
		</header>
	);
}
