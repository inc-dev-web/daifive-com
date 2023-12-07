'use client';
import React, { useState, useEffect } from 'react';
import { BackButton } from '@/components/BackButton';
import Image from 'next/image';
import arrow from '@/public/image/icon/arrowDown.svg';
import arrowUp from '@/public/image/icon/arrowUpBlue.svg';
import arrowBlue from '@/public/image/icon/ArrowRightBlue.svg';
import arrowUpWhite from '@/public/image/icon/arrowUpWhite.svg';
import ovalRed from '@/public/image/Oval-red.png';
import ovalYellow from '@/public/image/Oval-yellow.png';
import Link from 'next/link';
import { GET } from '@/app/api/route';

export default function Blog() {
	const baseUrl = process.env.URL;

	const [itemsArticles, setItemsArticles] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	const [screenWidth, setScreenWidth] = useState(null);
	const [filteredArticles, setFilteredArticles] = useState([]);
	const uniqueCategories = Array.from(new Set(itemsArticles.map(({ attributes }) => attributes.category)));

	useEffect(() => {
		async function fetchData() {
			const response = await GET(`articles?populate=*`);
			const data = await response.json();
			setItemsArticles(data.data);
		}

		fetchData();
	}, []);

	useEffect(() => {
		if (itemsArticles.length > 0) {
			setSelectedItem(itemsArticles[0].attributes.category);
		}
	}, [itemsArticles]);

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
		const defaultFiltered = itemsArticles.filter(({ attributes }) => attributes.category === selectedItem);
		setFilteredArticles(defaultFiltered);
	}, [selectedItem, itemsArticles]);

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

		const filtered = itemsArticles.filter(({ attributes }) => attributes.category === item);
		setFilteredArticles(filtered);
	};
	return (
		<section className="px-4 pt-[39px] pb-[68px] lg:pt-[50px] lg:pb-[118px] lg:px-[50px] xl:px-[100px] relative">
			<BackButton />
			<div className="gap-3 lg:gap-4 my-4 lg:mt-4 lg:mb-12">
				<h1 className="text-2xl lg:text-3xl xl:text-5xl font-bold text-[#2A333C]">Read Our Articles</h1>
				<p className="text-xs xl:text-base text-[#7D7D7D]">Powerful Trading Tools and Features for Experienced Investors</p>
			</div>
			<div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-[32px]">
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
							<h4 className="lg:block hidden text-[#2A333C] text-xl font-bold mb-4">Категорії</h4>
							{uniqueCategories.map((item, index) => (
								<li
									className={`gap-[10px] flex hover:bg-[#F3F6FA] hover:[#0B82FC] hover:font-medium rounded-[70px] h-[48px] pl-[10px] items-center ${
										selectedItem === item ? 'text-[#0B82FC] bg-[#F3F6FA]' : 'text-[#2a333c99]'
									}`}
									key={index}
									onClick={() => handleItemClick(item)}
								>
									<div
										className={`w-[24px] h-[24px] flex justify-center items-center rounded-[32px] ${
											selectedItem === item ? 'bg-blueRadianCustom' : 'bg-[#00000019]'
										}`}
									>
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

				<div className="mt-4 flex flex-col gap-8 items-center lg:mt-0 lg:w-full lg:items-start">
					{filteredArticles.map((item, index) => (
						<div
							className="flex flex-col lg:flex-row lg:items-center lg:w-full lg:max-h-[318px] lg:min-h-[318px]"
							key={index}
						>
							<picture className="bg-white p-3 rounded-[24px] max-w-[343px] max-h-[282px] lg:min-h-[318px] lg:max-h-[318px] lg:min-w-[318px] lg:max-w-[318px]">
								<img
									src={`${baseUrl}${item?.attributes.preview?.data.attributes.url}`}
									alt="img"
									className="object-center w-full h-full lg:min-h-[294px] lg:max-h-[294px] lg:min-w-[294px] lg:max-w-[294px]"
								/>
							</picture>
							<div className="flex flex-col px-5 lg:px-0 lg:pl-5 gap-3 max-w-[350px] lg:max-w-full">
								<div className="mt-6 lg:mt-0 flex flex-col gap-3 min-h-[85px] lg:min-h-[160px] h-full">
									<h4 className="text-[#2A333C] text-xl xl:text-3xl font-medium lg:font-bold">{item.attributes.title}</h4>
									<p className="opacity-70 text-[#2A333C] text-xs xl:text-base">{item.attributes.description}</p>
								</div>
								<div className="w-full flex items-center justify-center lg:justify-start">
									<button className="bg-customBlueLight w-[270px] h-[48px] mt-3 rounded-[72px] flex items-center justify-center gap-2">
										<Link
											key={index}
											href={`blog/${item.id}`}
											className="flex items-center justify-center gap-2 h-full w-full"
										>
											<span className="text-customBlue text-sm xl:text-lg">Read</span>
											<Image
												src={arrowBlue}
												width={18}
												height={18}
												alt={'icon'}
											/>
										</Link>
									</button>
								</div>
							</div>
						</div>
					))}
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
