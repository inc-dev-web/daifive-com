'use client';
import React, { useState, useEffect } from 'react';
import { BackButton } from '@/components/BackButton';
import Image from 'next/image';
import arrow from '@/public/image/icon/arrowDown.svg';
import arrowUp from '@/public/image/icon/arrowUpBlue.svg';
import imageArticles from '@/public/image/faqImage.png';
import arrowBlue from '@/public/image/icon/ArrowRightBlue.svg';
import arrowUpWhite from '@/public/image/icon/arrowUpWhite.svg';
import ovalRed from '@/public/image/Oval-red.png';
import ovalYellow from '@/public/image/Oval-yellow.png';

export default function Blog() {
	const itemsArticles = [
		{
			imageLink: imageArticles,
			title: '1Data loop and zeitgeist',
			description:
				'I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas...',
			articles: '',
			company: 'Company 1',
		},
		{
			imageLink: imageArticles,
			title: '2Data loop and zeitgeist 2Data loop and zeitgeist',
			description: 'Get all your ducks in a row good optics close the loop and zeitgeist so manage quarterly sales are great to hear for me.',
			articles: '',
			company: 'Company 1',
		},
		{
			imageLink: imageArticles,
			title: '3Data loop and zeitgeist',
			description: 'Get all your ducks in a row good optics close the loop and zeitgeist so manage quarterly sales are great to hear for me.',
			articles: '',
			company: 'Company 2',
		},
		{
			imageLink: imageArticles,
			title: '3Data loop and zeitgeist',
			description: 'Get all your ducks in a row good optics close the loop and zeitgeist so manage quarterly sales are great to hear for me.',
			articles: '',
			company: 'Company 3',
		},
		{
			imageLink: imageArticles,
			title: '3Data loop and zeitgeist',
			description: 'Get all your ducks in a row good optics close the loop and zeitgeist so manage quarterly sales are great to hear for me.',
			articles: '',
			company: 'Company 3',
		},
		{
			imageLink: imageArticles,
			title: '3Data loop and zeitgeist',
			description: 'Get all your ducks in a row good optics close the loop and zeitgeist so manage quarterly sales are great to hear for me.',
			articles: '',
			company: 'Company 3',
		},
		{
			imageLink: imageArticles,
			title: '3Data loop and zeitgeist',
			description: 'Get all your ducks in a row good optics close the loop and zeitgeist so manage quarterly sales are great to hear for me.',
			articles: '',
			company: 'Company 3',
		},
	];

	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(itemsArticles[0].company);
	const [screenWidth, setScreenWidth] = useState(null);
	const [filteredArticles, setFilteredArticles] = useState([]);

	const uniqueCompanies = Array.from(new Set(itemsArticles.map((item) => item.company)));

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
		const filtered = itemsArticles.filter((article) => article.company === item);
		setFilteredArticles(filtered);
	};

	useEffect(() => {
		setScreenWidth(window.innerWidth);

		const handleResize = () => {
			setScreenWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
		};

		setScreenWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		setIsOpen(screenWidth >= 1024);
	}, [screenWidth]);

	useEffect(() => {
		// Set filtered articles for the default selected item
		const defaultFiltered = itemsArticles.filter((article) => article.company === selectedItem);
		setFilteredArticles(defaultFiltered);
	}, [selectedItem]);

	return (
		<section className="px-4 pt-[39px] pb-[68px] lg:pt-[50px] lg:pb-[118px] lg:px-[50px] xl:px-[100px] relative">
			<BackButton />
			<div className="gap-3 lg:gap-4 my-4 lg:mt-8 lg:mb-12">
				<h1 className="text-2xl lg:text-3xl xl:text-5xl font-bold text-[#2A333C]">Read Our Articles</h1>
				<p className="text-xs xl:text-base text-[#7D7D7D]">Powerful Trading Tools and Features for Experienced Investors</p>
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
								{selectedItem ? `${selectedItem}` : 'Category Name'}
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
						<ul className="flex gap-1 flex-col text-sm xl:text-base lg:p-6">
							<h4 className="lg:block hidden text-[#2A333C] text-xl font-bold mb-4">Categories</h4>
							{uniqueCompanies.map((item, index) => (
								<li
									className={`gap-[10px] flex hover:bg-[#F3F6FA] hover:[#0B82FC] hover:font-medium rounded-[70px] h-[48px] pl-[10px] items-center ${
										selectedItem === item ? 'text-[#0B82FC] bg-[#F3F6FA]' : 'text-[#2a333c99]'
									}`}
									key={index}
									onClick={() => handleItemClick(item)}
								>
									<div className="bg-[#00000019] w-[24px] h-[24px] flex justify-center items-center rounded-[32px]">
										<Image
											src={selectedItem === item ? arrowUp : arrowUpWhite}
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
				<div className="mt-4 flex flex-col gap-8 items-center lg:mt-0 lg:w-full lg:items-start">
					{filteredArticles.length > 0 ? (
						filteredArticles.map((item) => (
							<div
								className="flex flex-col lg:flex-row lg:items-center lg:w-full lg:max-h-[318px] lg:min-h-[318px]"
								key={item.title}
							>
								{/* Article image */}
								<picture className="bg-white p-3 rounded-[24px] max-w-[343px] max-h-[282px] lg:min-h-[318px] lg:max-h-[318px] lg:min-w-[318px] lg:max-w-[318px]">
									<Image
										src={item.imageLink}
										alt="img"
										className="object-center w-full h-full lg:min-h-[294px] lg:max-h-[294px] lg:min-w-[294px] lg:max-w-[294px]"
									/>
								</picture>
								{/* Article details */}
								<div className="flex flex-col px-5 lg:px-0 lg:pl-5 gap-3 max-w-[350px] lg:max-w-full">
									<div className="mt-6 lg:mt-0 flex flex-col gap-3 min-h-[85px] lg:min-h-[160px] h-full">
										<h4 className="text-[#2A333C] text-xl xl:text-3xl font-medium lg:font-bold">{item.title}</h4>
										<p className="opacity-70 text-[#2A333C] text-xs xl:text-base">{item.description}</p>
									</div>
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
						))
					) : (
						<p>No articles available for the selected category.</p>
					)}
				</div>
			</div>
			<div className="lg:block hidden customRotate bg-radiant-blue absolute w-[900px] h-[500px] bottom-[0%] left-[-15%] -z-10"></div>
			<Image
				src={ovalRed}
				alt="icon"
				className="lg:block hidden w-[21px] h-[21px] absolute -z-10 left-[216px] bottom-[42%]"
			/>
			<Image
				src={ovalRed}
				alt="icon"
				className="lg:block hidden w-[21px] h-[21px] absolute -z-10 right-[-120px] bottom-[34%]"
			/>
			<Image
				src={ovalYellow}
				alt="icon"
				className="lg:block hidden w-[29px] h-[29px] absolute -z-10 left-[316px] bottom-[25%]"
			/>
		</section>
	);
}
