'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import arrowOrange from '@/public/image/icon/light-orange-arrow.svg';
import ovalYellow from '@/public/image/Oval-yellow.png';
import ovalBlue from '@/public/image/Oval-blue.png';
import ovalRed from '@/public/image/Oval-red.png';
import Link from 'next/link';

export function Directions() {
	const items = [
		{
			title: 'АВА-терапія',
			description:
				'Наша програма ABA-терапії розроблена для підтримки дітей з аутизмом і не тільки, через структуроване та стратегічне навчання, спрямоване на покращення всіх навичок дитини',
		},
		{
			title: 'Психолог для дітей та дорослих',
			description:
				'Наш кваліфікований психолог пропонує консультації та терапію для дітей та дорослих, створюючи безпечне середовище для вирішення емоційних проблем.',
		},
		{
			title: 'Дефектолог',
			description:
				'Професійний дефектолог нашого центру допомагає дітям з особливими освітніми потребами досягати успіху в навчанні за допомогою індивідуалізованих планів та методів.',
		},
		{
			title: 'Логопед',
			description:
				'Наш логопед спеціалізуюється на допомозі дітям та дорослим у  запуску або вдосконаленні мовленнєвих навичок, використовуючи цілеспрямовані та інтерактивні методики.',
		},
		{
			title: 'Сенсорна інтеграція',
			description:
				'Програма сенсорної інтеграції призначена для допомоги дітям з особливими потребами у координації відчуттів та рухів, що сприяє кращому сприйняттю навколишнього світу та взаємодії з ним.',
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);

	const handleItemClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<section className="py-[100px] px-4 lg:px-[50px] lg:py-[100px] xl:px-[100px] xl:py-[150px] flex flex-col lg:flex-row items-center relative h-auto">
			<div className="-z-10 lg:flex hidden bg-radiant-blue absolute rotate-[-120deg] bottom-[-50%] right-[-15%] md:w-[955px] md:h-[1095px]"></div>
			<Image
				alt={'image'}
				src={ovalYellow}
				className={'left-[60%] w-[19px] md:w-[29px] absolute top-[5%] lg:right-[44%] -z-10'}
			/>
			<Image
				src={ovalBlue}
				alt={'image'}
				width={17}
				height={17}
				className="absolute bottom-[2%] md:bottom-[19%] right-[20%] -z-10"
			/>
			<div className={'gap-3 lg:gap-4 flex flex-col lg:mt-12 lg:w-2/4'}>
				<div className="lg:hidden flex justify-center flex-col items-center relative">
					<Image
						src={ovalRed}
						alt="img"
						className="absolute right-0 top-0"
						width={12}
					/>
					<span className="font-bold md:text-base text-xs text-customBlue uppercase">Наші напрямки</span>
					<h4 className="text-xl font-bold text-[#2A333C] mt-3 mb-6 text-center">
						Напрямки які ми <br /> пропонуємо
					</h4>
				</div>
				{items.map((item, index) => (
					<div
						key={index}
						className="lg:max-w-[498px]"
					>
						<div
							className={`customHover cursor-pointer hover:bg-customOrange gap-2 w-full md:gap-4 flex items-center justify-between bg-customLightGray rounded-[94px] h-[80px] px-[25px] ${
								index === activeIndex ? 'bg-customOrange' : 'opacity-80'
							}`}
							onClick={() => handleItemClick(index)}
						>
							<div className={'flex items-center justify-start gap-6 w-full'}>
								<div
									className={`w-[28px] h-[28px] lg:w-[48px] lg:h-[48px] rounded-[50%] flex items-center justify-center lg:text-2xl text-xl font-bold leading-none ${
										index === activeIndex ? 'bg-[#FFFFFF33] text-white' : 'bg-[#2A333C33] opacity-30 text-[#2A333C]'
									}`}
								></div>
								<span
									className={`flex-1 lg:text-2xl md:text-xl text-base font-bold text-[#2A333C] flex-1 ${
										index === activeIndex ? 'text-[#FAFAFA] transition-opacity' : 'opacity-30'
									}`}
								>
									{item.title}
								</span>
							</div>
							<div className={'flex justify-center items-center w-[18px] h-[18px] md:w-[32px] md:h-[32px] '}>
								<svg
									viewBox="0 0 32 32"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									className={` ${index === activeIndex ? 'opacity-100 stroke-[#FAFAFA]' : 'stroke-[#2A333C] opacity-30'}`}
								>
									<path
										d="M9.33203 22.6668L22.6654 9.3335M22.6654 9.3335H11.9987M22.6654 9.3335V20.0002"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</div>
						<span
							className={`mt-4 lg:hidden block md:text-base text-xs font-normal text-[#2A333CB3] px-[25px] ${
								index === activeIndex ? 'block' : 'hidden'
							}`}
						>
							{item.description}
						</span>
					</div>
				))}
			</div>
			<div className={'flex-1'}>
				<span className={'lg:inline hidden font-bold text-base text-customBlue uppercase'}>Наші напрямки</span>
				<div className="max-h-[250px] h-full">
					<h4 className={'lg:block hidden lg:text-custom32 text-xl font-bold text-[#2A333C] mt-[22px] mb-6'}>{items[activeIndex].title}</h4>
					<p className="lg:block hidden text-[#2A333CB2] font-normal leading-6 text-sm lg:text-base w-full lg:w-[498px] ">
						{items[activeIndex].description}
					</p>
				</div>
				<Link href={'/services'}>
					<button className="w-[270px] h-[48px] lg:w-[286px] lg:h-[56px] mt-8 lg:mt-12 flex items-center gap-4 justify-center rounded-[92px] bg-customOrangeLight ">
						<span className={'text-customOrange flex items-center text-base md:text-sm font-bold'}>Дізнатись більше</span>
						<Image
							src={arrowOrange}
							alt={'icon'}
							width={24}
							height={24}
							className="w-[18] h-[18] lg:w-[24] lg:h-[24]"
						/>
					</button>
				</Link>
			</div>
		</section>
	);
}
