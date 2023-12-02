'use client';
import React, { useEffect, useState } from 'react';
import { BackButton } from '@/components/BackButton';
import Image from 'next/image';
import arrowUp from '@/public/image/icon/arrowUpRightOrange.svg';
import arrow from '@/public/image/icon/arrowDown.svg';
import arrowUpWhite from '@/public/image/icon/arrowUpWhite.svg';
// import service1 from '@/public/image/service/service1.png';
// import service2 from '@/public/image/service/service2.png';
// import service3 from '@/public/image/service/service3.png';
// import service4 from '@/public/image/service/service4.png';
// import service5 from '@/public/image/service/service5.png';
// import service6 from '@/public/image/service/service6.png';
import ovalYellow from '@/public/image/Oval-yellow.png';
import ovalRed from '@/public/image/Oval-red.png';
import ovalGreen from '@/public/image/OvalGreenish.svg';
// import whale from '@/public/image/whale.png';
import child from '@/public/image/service/child.png';
import arrowCheck from '@/public/image/icon/arrowChek.svg';
import { GET } from '@/app/api/route';

export default function Page({ params }) {
	const baseUrl = process.env.URL;
	const [services, setServices] = useState([]);
	const [selectedItem, setSelectedItem] = useState(null);
	const [screenWidth, setScreenWidth] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	let singleService = [selectedItem];
	const itemSlider = [{}, {}, {}];

	useEffect(() => {
		async function fetchData() {
			const response = await GET(`services?populate=*`);
			const data = await response.json();
			setServices(data.data);
		}

		fetchData();
	}, []);

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
		// Виконується тільки після завершення завантаження даних або зміни параметрів
		const initialSelectedItem = services.length > 0 ? services[params.id - 1] : null;
		setSelectedItem(initialSelectedItem);
	}, [services, params.id]);

	const toggleDropdown = () => {
		if (screenWidth < 1024 || !isOpen) {
			setIsOpen(!isOpen);
		}
	};

	const handleItemClick = (item, index) => {
		console.log('item', item);
		setSelectedItem(item);
		if (screenWidth < 1024) {
			setIsOpen(false);
		}
	};

	return (
		<section className="pt-[39px] pb-[59px] px-4 relative xl:px-[100px] lg:pt-[50px] lg:pb-[150px]">
			<Image
				src={ovalYellow}
				alt="icon"
				className="absolute w-[18px] h-[18px] lg:w-[29px] lg:h-[29px] lg:top-[32px] top-0 right-[115px] -z-10"
			/>
			<Image
				src={ovalRed}
				alt="icon"
				className="lg:block hidden absolute w-[32px] h-[32px] bottom-[215px] left-[178px] -z-10"
			/>
			<Image
				src={ovalGreen}
				alt="icon"
				className="lg:block hidden absolute w-[26px] h-[26px] bottom-[317px] left-[302px] -z-10"
			/>
			<BackButton />
			<div className="block rounded-[16px] bg-[#F3F6FA] min-h-[160px] min-w-[343px] w-full max-h-[228px] mt-8">
				<img
					src={`${baseUrl}${singleService[0]?.attributes.imageTop.data.attributes.url}`}
					alt={'img'}
					className="object-cover min-h-[160px] min-w-[343px] max-h-[228px] w-full rounded-[16px]"
				/>
			</div>
			<div className="flex flex-col lg:flex-row lg:gap-8 lg:mt-8">
				<div className="flex flex-col lg:w-[286px]">
					<div className="lg:flex hidden flex-col bg-white rounded-[32px] p-6">
						<div className="relative h-[210px] flex mb-[22px] items-start">
							<Image
								src={child}
								alt="icon"
								className="absolute w-[295px] object-contain z-10"
							/>
						</div>
						<div className="flex flex-col lg:justify-center gap-[14px]">
							<h4 className="text-xl font-bold text-customOrange mb-[10px]">Кому підійде?</h4>
							{singleService.map((items, index) => (
								<div
									key={index}
									className="gap-[14px]"
								>
									<div className="flex-1 flex flex-row justify-start">
										<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
											<span className="text-[#2A333C] text-[11px] opacity-30">Назва</span>
										</div>
										<Image
											src={arrowCheck}
											alt="icon"
											className="mx-4"
										/>
										<span className="text-[#2A333C] text-xs flex w-full">{items?.attributes.titlle}</span>
									</div>
									<div className="flex-1 flex flex-row justify-start">
										<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
											<span className="text-[#2A333C] text-[11px] opacity-30">Назва</span>
										</div>
										<Image
											src={arrowCheck}
											alt="icon"
											className="mx-4"
										/>
										<span className="text-[#2A333C] text-xs flex w-full">{items?.attributes.detailsCategorySmallDescription}</span>
									</div>
									<div className="flex-1 flex flex-row justify-start">
										<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
											<span className="text-[#2A333C] text-[11px] opacity-30">Вік</span>
										</div>
										<Image
											src={arrowCheck}
											alt="icon"
											className="mx-4"
										/>
										<span className="text-[#2A333C] text-xs flex w-full">{items?.attributes.categoryAge}</span>
									</div>
									<div className="flex-1 flex flex-row justify-start">
										<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
											<span className="text-[#2A333C] text-[11px] opacity-30">Тривалість</span>
										</div>
										<Image
											src={arrowCheck}
											alt="icon"
											className="mx-4"
										/>
										<span className="text-[#2A333C] text-xs flex w-full">{items?.attributes.durationLesson}</span>
									</div>
									<div className="flex-1 flex flex-row justify-start">
										<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
											<span className="text-[#2A333C] text-[11px] opacity-30">К-ть занять</span>
										</div>
										<Image
											src={arrowCheck}
											alt="icon"
											className="mx-4"
										/>
										<span className="text-[#2A333C] text-xs flex w-full">{items?.attributes.countLessons}</span>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className={`w-full lg:max-w-[360px] bg-white rounded-[23px] lx:p-24 mt-6 mb-8 lg:mb-0`}>
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
								<span className="text-customOrange min-w-[268px] text-sm xl:text-base font-medium">
									{selectedItem ? `${selectedItem?.attributes.titlle}` : 'Category Name'}
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
								{services.map((item, index) => (
									<li
										className={`gap-[10px] flex hover:bg-[#F3F6FA] hover:text-customOrange hover:font-medium rounded-[70px] h-[48px] pl-[10px] items-center text-[#2a3340] ${
											selectedItem?.id === item?.id ? 'bg-customOrangeLight' : ''
										}`}
										key={index}
										onClick={() => handleItemClick(item, index)}
									>
										<div
											className={`w-[24px] h-[24px] flex justify-center items-center rounded-[32px] ${
												selectedItem?.id === item?.id ? 'bg-customOrangeLight' : 'bg-[#00000019]'
											}`}
										>
											<Image
												src={selectedItem?.id === item?.id ? arrowUp : arrowUpWhite}
												alt="icon"
											/>
										</div>
										<span className={`${selectedItem?.id === item?.id ? 'text-customOrange bg-customOrangeLight' : 'text-[#2a333c99]'}`}>
											{item?.attributes.titlle}
										</span>
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
				<div className="flex gap-8 flex-col w-full flex-1">
					<div className="lg:hidden rounded-[16px] bg-[#F3F6FA] min-h-[160px] min-w-[343px] w-full h-full"></div>
					{singleService.map((items, index) => (
						<div
							key={index}
							className="flex flex-col bg-white rounded-[32px] px-4 py-6 xl:p-8"
						>
							<h4 className="text-[#2A333C] text-xl lg:text-2xl mb-6 font-bold">{items?.attributes.titlle}</h4>
							<p className="opacity-70 text-sm text-[#2A333C] lg:text-base">{items?.attributes.descriptionOne}</p>
							{items?.attributes.image?.data?.attributes?.url ? (
								<img
									src={`${baseUrl}${items?.attributes.image.data.attributes.url}`}
									alt="Preview"
									className="min-h-[230px] my-8"
								/>
							) : (
								<div className="min-h-[230px] my-8 bg-[#F3F6FA] rounded-[16px]"></div>
							)}
							<p className="opacity-70 text-sm text-[#2A333C] lg:text-base">{items?.attributes.descriptionTwo}</p>
						</div>
					))}
					{/*Slider Block*/}
					<div className="desktop:overflow-visible overflxow-x-scroll flex items-center md:mb-8 lg:mb-0 lg:h-[280px] w-full relative">
						<div className="flex gap-4 px-4 md:px-0  lg:absolute">
							{itemSlider.map((item, key) => (
								<div
									key={key}
									className="p-4 lg:p-6 rounded-[16px] md:rounded-[24px] flex h-[200px] md:h-[261px] w-[200px] md:w-[286px] md:bg-white"
								>
									<div className="rounded-[16px] object-contain bg-[#F3F6FA] w-full h-full"></div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="lg:hidden flex flex-col bg-white rounded-[32px] p-6">
					<div className="relative h-[210px] flex mb-[22px] items-start">
						<Image
							src={child}
							alt="icon"
							className="absolute w-[295px] object-contain z-10"
						/>
					</div>
					<div className="flex flex-col lg:justify-center gap-[14px]">
						<h4 className="text-xl font-bold text-customOrange mb-[10px]">Кому підійде?</h4>
						{singleService.map((items, index) => (
							<div
								key={index}
								className="gap-[14px]"
							>
								<div className="flex-1 flex flex-row justify-start">
									<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
										<span className="text-[#2A333C] text-[11px] opacity-30">Назва</span>
									</div>
									<Image
										src={arrowCheck}
										alt="icon"
										className="mx-4"
									/>
									<span className="text-[#2A333C] text-xs flex w-full">{items?.attributes.titlle}</span>
								</div>
								<div className="flex-1 flex flex-row justify-start">
									<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
										<span className="text-[#2A333C] text-[11px] opacity-30">Назва</span>
									</div>
									<Image
										src={arrowCheck}
										alt="icon"
										className="mx-4"
									/>
									<span className="text-[#2A333C] text-xs flex w-full">{items?.attributes.detailsCategorySmallDescription}</span>
								</div>
								<div className="flex-1 flex flex-row justify-start">
									<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
										<span className="text-[#2A333C] text-[11px] opacity-30">Вік</span>
									</div>
									<Image
										src={arrowCheck}
										alt="icon"
										className="mx-4"
									/>
									<span className="text-[#2A333C] text-xs flex w-full">{items?.attributes.categoryAge}</span>
								</div>
								<div className="flex-1 flex flex-row justify-start">
									<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
										<span className="text-[#2A333C] text-[11px] opacity-30">Тривалість</span>
									</div>
									<Image
										src={arrowCheck}
										alt="icon"
										className="mx-4"
									/>
									<span className="text-[#2A333C] text-xs flex w-full">{items?.attributes.durationLesson}</span>
								</div>
								<div className="flex-1 flex flex-row justify-start">
									<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
										<span className="text-[#2A333C] text-[11px] opacity-30">К-ть занять</span>
									</div>
									<Image
										src={arrowCheck}
										alt="icon"
										className="mx-4"
									/>
									<span className="text-[#2A333C] text-xs flex w-full">{items?.attributes.countLessons}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
