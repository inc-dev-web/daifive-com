'use client';
import React, { useEffect, useState } from 'react';
import { BackButton } from '@/components/BackButton';
import Image from 'next/image';
import arrowUp from '@/public/image/icon/arrowUpRightOrange.svg';
import arrow from '@/public/image/icon/arrowDown.svg';
import arrowUpWhite from '@/public/image/icon/arrowUpWhite.svg';
import service1 from '@/public/image/service/service1.png';
import service2 from '@/public/image/service/service2.png';
import service3 from '@/public/image/service/service3.png';
import service4 from '@/public/image/service/service4.png';
import service5 from '@/public/image/service/service5.png';
import service6 from '@/public/image/service/service6.png';
import ovalYellow from '@/public/image/Oval-yellow.png';
import ovalRed from '@/public/image/Oval-red.png';
import ovalGreen from '@/public/image/OvalGreenish.svg';
import whale from '@/public/image/whale.png';
import child from '@/public/image/service/child.png';
import arrowCheck from '@/public/image/icon/arrowChek.svg';

export default function Page({ params }) {
	const serviceId = params.id || 0;
	const services = [
		{
			name: 'ABA терапія',
			image: service1,
			about: [
				{ category: 'Назва', detail: 'Супер крутецька' },
				{ category: 'Вік', detail: '2-3 роки' },
				{ category: 'Тривалість', detail: '12 років' },
				{ category: 'К-ть занять', detail: '12 років' },
			],
			description: [
				{
					detailOne:
						'Страшне слово для багатьох батьків. Відоме також під назвами «стіми» і «стімінг».\n' +
						'Аутостимуляція це специфічна поведінка дітей з РАС яка підкріплюється зсередини організму - за рахунок того що вона приносить дитині задоволення, заспокоює її, знімає напругу. Звучить ніби добре - для наших діток. Але ззовні стіми можуть приймати зовсім різноманітні форми - це і махи руками, і стрибки на місці, і вокалізації, а також такі неприємні як облизування предметів, обгризання нігтів, колупання в носі і т.д.',
					image: whale,
					detailTwo:
						'Страшне слово для багатьох батьків. Відоме також під назвами «стіми» і «стімінг».\n' +
						'Аутостимуляція це специфічна поведінка дітей з РАС яка підкріплюється зсередини організму - за рахунок того що вона приносить дитині задоволення, заспокоює її, знімає напругу. Звучить ніби добре - для наших діток. Але ззовні стіми можуть приймати зовсім різноманітні форми - це і махи руками, і стрибки на місці, і вокалізації, а також такі неприємні як облизування предметів, обгризання нігтів, колупання в носі і т.д.',
				},
			],
		},
		{
			name: 'Психологія',
			image: service2,
			about: [
				{ category: 'Назва', detail: 'Супер крутецька' },
				{ category: 'Вік', detail: '2-3 роки' },
				{ category: 'Тривалість', detail: '12 років' },
				{ category: 'К-ть занять', detail: '12 років' },
			],
			description: [
				{
					detailOne:
						'Страшне слово для багатьох батьків. Відоме також під назвами «стіми» і «стімінг».\n' +
						'Аутостимуляція це специфічна поведінка дітей з РАС яка підкріплюється зсередини організму - за рахунок того що вона приносить дитині задоволення, заспокоює її, знімає напругу. Звучить ніби добре - для наших діток. Але ззовні стіми можуть приймати зовсім різноманітні форми - це і махи руками, і стрибки на місці, і вокалізації, а також такі неприємні як облизування предметів, обгризання нігтів, колупання в носі і т.д.',
					image: whale,
					detailTwo:
						'Страшне слово для багатьох батьків. Відоме також під назвами «стіми» і «стімінг».\n' +
						'Аутостимуляція це специфічна поведінка дітей з РАС яка підкріплюється зсередини організму - за рахунок того що вона приносить дитині задоволення, заспокоює її, знімає напругу. Звучить ніби добре - для наших діток. Але ззовні стіми можуть приймати зовсім різноманітні форми - це і махи руками, і стрибки на місці, і вокалізації, а також такі неприємні як облизування предметів, обгризання нігтів, колупання в носі і т.д.',
				},
			],
		},
		{
			name: 'Логопед',
			image: service3,
			about: [
				{ category: 'Назва', detail: 'Супер крутецька' },
				{ category: 'Вік', detail: '2-3 роки' },
				{ category: 'Тривалість', detail: '12 років' },
				{ category: 'К-ть занять', detail: '12 років' },
			],
			description: [
				{
					detailOne:
						'Страшне слово для багатьох батьків. Відоме також під назвами «стіми» і «стімінг».\n' +
						'Аутостимуляція це специфічна поведінка дітей з РАС яка підкріплюється зсередини організму - за рахунок того що вона приносить дитині задоволення, заспокоює її, знімає напругу. Звучить ніби добре - для наших діток. Але ззовні стіми можуть приймати зовсім різноманітні форми - це і махи руками, і стрибки на місці, і вокалізації, а також такі неприємні як облизування предметів, обгризання нігтів, колупання в носі і т.д.',
					image: whale,
					detailTwo:
						'Страшне слово для багатьох батьків. Відоме також під назвами «стіми» і «стімінг».\n' +
						'Аутостимуляція це специфічна поведінка дітей з РАС яка підкріплюється зсередини організму - за рахунок того що вона приносить дитині задоволення, заспокоює її, знімає напругу. Звучить ніби добре - для наших діток. Але ззовні стіми можуть приймати зовсім різноманітні форми - це і махи руками, і стрибки на місці, і вокалізації, а також такі неприємні як облизування предметів, обгризання нігтів, колупання в носі і т.д.',
				},
			],
		},
		{
			name: 'Масажист',
			image: service4,
			about: [
				{ category: 'Назва', detail: 'Супер крутецька' },
				{ category: 'Вік', detail: '2-3 роки' },
				{ category: 'Тривалість', detail: '12 років' },
				{ category: 'К-ть занять', detail: '12 років' },
			],
			description: [
				{
					detailOne:
						'Страшне слово для багатьох батьків. Відоме також під назвами «стіми» і «стімінг».\n' +
						'Аутостимуляція це специфічна поведінка дітей з РАС яка підкріплюється зсередини організму - за рахунок того що вона приносить дитині задоволення, заспокоює її, знімає напругу. Звучить ніби добре - для наших діток. Але ззовні стіми можуть приймати зовсім різноманітні форми - це і махи руками, і стрибки на місці, і вокалізації, а також такі неприємні як облизування предметів, обгризання нігтів, колупання в носі і т.д.',
					image: whale,
					detailTwo:
						'Страшне слово для багатьох батьків. Відоме також під назвами «стіми» і «стімінг».\n' +
						'Аутостимуляція це специфічна поведінка дітей з РАС яка підкріплюється зсередини організму - за рахунок того що вона приносить дитині задоволення, заспокоює її, знімає напругу. Звучить ніби добре - для наших діток. Але ззовні стіми можуть приймати зовсім різноманітні форми - це і махи руками, і стрибки на місці, і вокалізації, а також такі неприємні як облизування предметів, обгризання нігтів, колупання в носі і т.д.',
				},
			],
		},
		{
			name: 'Сенсорний педагог',
			image: service5,
			about: [
				{ category: 'Назва', detail: 'Супер крутецька' },
				{ category: 'Вік', detail: '2-3 роки' },
				{ category: 'Тривалість', detail: '12 років' },
				{ category: 'К-ть занять', detail: '12 років' },
			],
			description: [
				{
					detailOne:
						'Страшне слово для багатьох батьків. Відоме також під назвами «стіми» і «стімінг».\n' +
						'Аутостимуляція це специфічна поведінка дітей з РАС яка підкріплюється зсередини організму - за рахунок того що вона приносить дитині задоволення, заспокоює її, знімає напругу. Звучить ніби добре - для наших діток. Але ззовні стіми можуть приймати зовсім різноманітні форми - це і махи руками, і стрибки на місці, і вокалізації, а також такі неприємні як облизування предметів, обгризання нігтів, колупання в носі і т.д.',
					image: whale,
					detailTwo:
						'Страшне слово для багатьох батьків. Відоме також під назвами «стіми» і «стімінг».\n' +
						'Аутостимуляція це специфічна поведінка дітей з РАС яка підкріплюється зсередини організму - за рахунок того що вона приносить дитині задоволення, заспокоює її, знімає напругу. Звучить ніби добре - для наших діток. Але ззовні стіми можуть приймати зовсім різноманітні форми - це і махи руками, і стрибки на місці, і вокалізації, а також такі неприємні як облизування предметів, обгризання нігтів, колупання в носі і т.д.',
				},
			],
		},
		{
			name: 'Томатіс',
			image: service6,
			about: [
				{ category: 'Назва', detail: 'Супер крутецька' },
				{ category: 'Вік', detail: '2-3 роки' },
				{ category: 'Тривалість', detail: '12 років' },
				{ category: 'К-ть занять', detail: '12 років' },
			],
			description: [
				{
					detailOne:
						'Страшне слово для багатьох батьків. Відоме також під назвами «стіми» і «стімінг».\n' +
						'Аутостимуляція це специфічна поведінка дітей з РАС яка підкріплюється зсередини організму - за рахунок того що вона приносить дитині задоволення, заспокоює її, знімає напругу. Звучить ніби добре - для наших діток. Але ззовні стіми можуть приймати зовсім різноманітні форми - це і махи руками, і стрибки на місці, і вокалізації, а також такі неприємні як облизування предметів, обгризання нігтів, колупання в носі і т.д.',
					image: whale,
					detailTwo:
						'Страшне слово для багатьох батьків. Відоме також під назвами «стіми» і «стімінг».\n' +
						'Аутостимуляція це специфічна поведінка дітей з РАС яка підкріплюється зсередини організму - за рахунок того що вона приносить дитині задоволення, заспокоює її, знімає напругу. Звучить ніби добре - для наших діток. Але ззовні стіми можуть приймати зовсім різноманітні форми - це і махи руками, і стрибки на місці, і вокалізації, а також такі неприємні як облизування предметів, обгризання нігтів, колупання в носі і т.д.',
				},
			],
		},
	];
	const itemSlider = [{}, {}, {}];

	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(services[serviceId]);
	const [screenWidth, setScreenWidth] = useState(null);
	let singleService = [services[serviceId]];

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

	const toggleDropdown = () => {
		if (screenWidth < 1024 || !isOpen) {
			setIsOpen(!isOpen);
		}
	};

	const handleItemClick = (item, index) => {
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
			<div className="lg:block hidden rounded-[16px] bg-[#F3F6FA] min-h-[160px] min-w-[343px] w-full h-full mt-8"></div>
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
								<React.Fragment key={index}>
									{items.about.map((item, key) => (
										<div
											key={key}
											className="flex-1 flex flex-row justify-start"
										>
											<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
												<span className="text-[#2A333C] text-[11px] opacity-30">{item.category}</span>
											</div>
											<Image
												src={arrowCheck}
												alt="icon"
												className="mx-4"
											/>
											<span className="text-[#2A333C] text-xs flex w-full">{item.detail}</span>
										</div>
									))}
								</React.Fragment>
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
									{selectedItem ? `${selectedItem.name}` : 'Category Name'}
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
											JSON.stringify(selectedItem) === JSON.stringify(item) ? 'bg-customOrangeLight' : ''
										}`}
										key={index}
										onClick={() => handleItemClick(item, index)}
									>
										<div
											className={`w-[24px] h-[24px] flex justify-center items-center rounded-[32px] ${
												JSON.stringify(selectedItem) === JSON.stringify(item) ? 'bg-customOrangeLight' : 'bg-[#00000019]'
											}`}
										>
											<Image
												src={JSON.stringify(selectedItem) === JSON.stringify(item) ? arrowUp : arrowUpWhite}
												alt="icon"
											/>
										</div>
										<span
											className={`${
												JSON.stringify(selectedItem) === JSON.stringify(item)
													? 'text-customOrange bg-customOrangeLight'
													: 'text-[#2a333c99]'
											}`}
										>
											{item.name}
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
							<h4 className="text-[#2A333C] text-xl lg:text-2xl mb-6 font-bold">{items.name}</h4>
							{items.description.map((item, key) => (
								<React.Fragment key={key}>
									<p className="opacity-70 text-sm text-[#2A333C] lg:text-base">{item.detailOne}</p>
									<Image
										src={item.image}
										alt="img"
										className="min-h-[230px] my-8"
									/>
									<p className="opacity-70 text-sm text-[#2A333C] lg:text-base">{item.detailTwo}</p>
								</React.Fragment>
							))}
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
							<React.Fragment key={index}>
								{items.about.map((item, key) => (
									<div
										key={key}
										className="flex-1 flex flex-row justify-start"
									>
										<div className="gap-3 flex items-center w-[120px] lg:max-w-[196px] lg:w-full">
											<span className="text-[#2A333C] text-[11px] opacity-30 ">{item.category}</span>
										</div>
										<Image
											src={arrowCheck}
											alt="icon"
											className="mx-4"
										/>
										<span className="text-[#2A333C] text-xs">{item.detail}</span>
									</div>
								))}
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
