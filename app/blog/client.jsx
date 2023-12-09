'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import arrow from '@/public/image/icon/arrowDown.svg';
import arrowUp from '@/public/image/icon/arrowUpBlue.svg';
import arrowBlue from '@/public/image/icon/ArrowRightBlue.svg';
import arrowUpWhite from '@/public/image/icon/arrowUpWhite.svg';
import ovalRed from '@/public/image/Oval-red.png';
import ovalYellow from '@/public/image/Oval-yellow.png';
import Link from 'next/link';
import { useWindowSize } from '@uidotdev/usehooks';

export default function BlogClient({articles}) {

	const baseUrl = process.env.URL;
	const { width: screenWidth } = useWindowSize();

	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	const [isAllCategoriesSelected, setIsAllCategoriesSelected] = useState(true);
	const [allArticles, setAllArticles] = useState([]);
	const [itemsArticles, setItemsArticles] = useState([]);
	const [filteredArticles, setFilteredArticles] = useState([]);

	const uniqueCategories = Array.from(new Set(itemsArticles.map(({ attributes }) => attributes.category)));

	useEffect(() => {
		setAllArticles(articles);
		setItemsArticles(articles);
	}, [articles]);

	useEffect(() => {
		setIsOpen(screenWidth >= 1024);
	}, [screenWidth]);

	useEffect(() => {
		if (isAllCategoriesSelected) {
			setFilteredArticles(allArticles);
		} else {
			const defaultFiltered = itemsArticles.filter(({ attributes }) => attributes.category === selectedItem);
			setFilteredArticles(defaultFiltered);
		}
	}, [selectedItem, itemsArticles, isAllCategoriesSelected, allArticles]);

	const toggleDropdown = () => {
		if (screenWidth < 1024 || !isOpen) {
			setIsOpen(!isOpen);
		}
	};

	const handleItemClick = (item) => {
		if (item === 'all' && isAllCategoriesSelected) {
			return;
		}
		setIsAllCategoriesSelected(item === 'all');
		setSelectedItem(item);

		const filtered = itemsArticles.filter(({ attributes }) => isAllCategoriesSelected || attributes.category === item);
		setFilteredArticles(filtered);
	};

	return (
		<section className="px-4 pt-[39px] pb-[68px] lg:pt-[50px] lg:pb-[118px] lg:px-[50px] xl:px-[100px] relative min-h-[500px]">
			<div className="gap-3 lg:gap-4 my-4 lg:mt-4 lg:mb-12">
				<h1 className="text-2xl lg:text-3xl xl:text-5xl font-bold text-[#2A333C]">Читайте наші статті</h1>
				{/*<p className="text-xs xl:text-base text-[#7D7D7D]">Powerful Trading Tools and Features for Experienced Investors</p>*/}
			</div>
			<div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-[32px]">
				<div className={`w-full lg:max-w-[360px] bg-white rounded-[23px] lx:p-24`}>
					<div
						className={`lg:hidden px-3 text-sm flex items-center h-[48px] rounded-[84px] bg-white justify-between`}
						onClick={toggleDropdown}
					>
						<div className="flex gap-3 justify-center items-center">
							<div className="bg-customOrangeLight w-[24px] h-[24px] flex justify-center items-center rounded-[32px]">
								<Image
									src={arrowUp}
									alt="icon"
									className="object-center max-h-[343px] min-h-[230px] h-full"
								/>
							</div>
							<span className={`text-[#0B82FC] min-w-[268px] text-sm xl:text-base font-medium`}>
								{isAllCategoriesSelected ? 'Всі категорії' : selectedItem ? `${selectedItem}` : 'Category Name'}
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
							<li
								className={`hover:cursor-pointer gap-[10px] flex hover:bg-[#F3F6FA] hover:[#0B82FC] hover:font-medium rounded-[70px] h-[48px] pl-[10px] items-center ${
									isAllCategoriesSelected ? 'text-[#0B82FC] bg-[#F3F6FA]' : 'text-[#2a333c99]'
								}`}
								onClick={() => handleItemClick('all')}
							>
								<div
									className={`w-[24px] h-[24px] flex justify-center items-center rounded-[32px] ${
										isAllCategoriesSelected ? 'bg-blueRadianCustom' : 'bg-[#00000019]'
									}`}
								>
									<Image
										src={isAllCategoriesSelected ? arrowUp : arrowUpWhite}
										alt="icon"
									/>
								</div>
								Всі категорії
							</li>
							{uniqueCategories.map((item, index) => (
								<li
									className={`hover:cursor-pointer gap-[10px] flex hover:bg-[#F3F6FA] hover:[#0B82FC] hover:font-medium rounded-[70px] h-[48px] pl-[10px] items-center ${
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
							<picture className="bg-white p-3 lg:p-6 rounded-[24px] max-w-[343px] max-h-[282px] lg:min-h-[318px] lg:max-h-[318px] lg:min-w-[318px] lg:max-w-[318px]">
								<img
									loading="lazy"
									src={`${baseUrl}${item?.attributes.preview?.data.attributes.url}`}
									alt="img"
									className="object-cover h-[258px] w-full lg:h-[269px] lg:w-[269px] rounded-[16px]"
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
			<div className="lg:block hidden customRotate bg-radiant-blue absolute w-[600px] h-[600px] bottom-[0%] left-[0] -z-10"></div>
			<Image
				src={ovalRed}
				alt="icon"
				className="lg:block hidden w-[21px] h-[21px] absolute -z-10 left-[216px] bottom-[42%]"
			/>
			<Image
				src={ovalRed}
				alt="icon"
				className="lg:block hidden w-[21px] h-[21px] absolute -z-10 right-[34px] bottom-[34%]"
			/>
			<Image
				src={ovalYellow}
				alt="icon"
				className="lg:block hidden w-[29px] h-[29px] absolute -z-10 left-[316px] bottom-[25%]"
			/>
		</section>
	);
}
