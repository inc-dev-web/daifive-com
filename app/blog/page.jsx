'use client';
import React, { useState, useEffect } from 'react';
import { BackButton } from '@/components/BackButton';
import Image from 'next/image';
import arrow from '@/public/image/icon/arrowDown.svg';
import arrowUp from '@/public/image/icon/arrowUpBlue.svg';
import imageArticles from '@/public/image/faqImage.png';
import arrowBlue from '@/public/image/icon/ArrowRightBlue.svg';
import arrowUpWhite from '@/public/image/icon/arrowUpWhite.svg';

export default function Blog() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	const itemsDropdown = ['Company1', 'Company2', 'Company3', 'Company4', 'Company5'];
	const itemsArticles = [
		{
			imageLink: imageArticles,
			title: '1Data loop and zeitgeist',
			description: 'Get all your ducks in a row good optics close the loop and zeitgeist so manage quarterly sales are great to hear for me.',
			articles: '',
		},
		{
			imageLink: imageArticles,
			title: '2Data loop and zeitgeist',
			description: 'Get all your ducks in a row good optics close the loop and zeitgeist so manage quarterly sales are great to hear for me.',
			articles: '',
		},
		{
			imageLink: imageArticles,
			title: '3Data loop and zeitgeist',
			description: 'Get all your ducks in a row good optics close the loop and zeitgeist so manage quarterly sales are great to hear for me.',
			articles: '',
		},
	];

	const toggleDropdown = () => {
		if (screenWidth < 1024 || !isOpen) {
			setIsOpen(!isOpen);
		}
	};

	const handleItemClick = (item) => {
		setSelectedItem(item);
		if (screenWidth < 1024) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};

		setScreenWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		setIsOpen(screenWidth >= 1024);
	}, [screenWidth]);

	return (
		<section className="px-4 pt-[39px] pb-[68px] lg:pt-[50px] lg:pb-[118px] lg:px-[50px] xl:px-[100px]">
			<BackButton />
			<div className="gap-3 lg:gap-4 my-4 lg:mt-8 lg:mb-12">
				<h1 className="text-2xl lg:text-3xl xl:text-5xl font-bold text-[#2A333C]">Читайте наші статті</h1>
				<p className="text-xs xl:text-base text-[#7D7D7D]">Powerful Trading Tools and Features for Experienced InvestorsFeaturesInvestorsFeatures</p>
			</div>
			<div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-[32px]">
				{/* Dropdown block */}
				<div className={`w-full lg:max-w-[360px] bg-white rounded-[23px] lx:p-24`}>
					<div
						className={`lg:hidden px-3 text-sm flex items-center h-[48px] rounded-[84px] bg-white justify-between`}
						onClick={toggleDropdown}
					>
						<div className="flex gap-3 justify-center items-center">
							<div className="bg-blueRadianCustom w-[24px] h-[24px] flex justify-center items-center rounded-[32px]">
								<Image
									src={arrowUp}
									alt="icon"
								/>
							</div>
							<span className="text-[#0B82FC] min-w-[268px] text-sm xl:text-base font-medium">
								{selectedItem ? `${selectedItem}` : 'Назва категорії'}
							</span>
						</div>
						<Image
							src={arrow}
							alt={'icon'}
							width={24}
							height={24}
						/>
					</div>
					{isOpen && (
						<ul className="flex gap-1 flex-col text-sm xl:text-base">
							{itemsDropdown.map((item, index) => (
								<li
									className={`gap-[10px] flex text-[#2a333c99] hover:bg-[#F3F6FA] hover:[#0B82FC] hover:font-medium rounded-[70px] h-[48px] pl-[10px] items-center ${
										selectedItem === item ? 'bg-[#F3F6FA]' : ''
									}`}
									key={index}
									onClick={() => handleItemClick(item)}
								>
									<div className="bg-[#00000019] w-[24px] h-[24px] flex justify-center items-center rounded-[32px]">
										<Image
											src={arrowUpWhite}
											alt="icon"
										/>
									</div>
									{item}
								</li>
							))}
						</ul>
					)}
				</div>

				{/* Articles block */}
				<div className="mt-4 flex flex-col gap-8 items-center lg:mt-0">
					{itemsArticles.map((item) => (
						<div
							className="flex flex-col lg:flex-row lg:items-center"
							key={item.title}
						>
							{/* Article image */}
							<picture className="bg-white p-3 rounded-[24px] max-w-[343px] max-h-[282px] lg:max-w-[317px] lg:max-h-[317px]">
								<Image
									src={item.imageLink}
									alt="img"
								/>
							</picture>
							{/* Article details */}
							<div className="flex flex-col px-5 gap-3 max-w-[350px]">
								{/* Article title */}
								<h4 className="text-[#2A333C] text-xl xl:text-3xl font-medium lg:font-bold">{item.title}</h4>
								{/* Article description */}
								<p className="text-[#2A333C] text-xs xl:text-base">{item.description}</p>
								{/* Read button */}
								<div className="w-full flex items-center justify-center lg:justify-start">
									<button className="bg-customBlueLight w-[270px] h-[48px] mt-3 rounded-[72px] flex items-center justify-center gap-2">
										<span className="text-customBlue text-sm xl:text-lg">Read</span>
										<Image
											src={arrowBlue}
											width={18}
											height={18}
											alt={'icon'}
										/>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
