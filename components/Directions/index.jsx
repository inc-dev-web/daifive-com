'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import arrowOrange from '@/public/image/icon/light-orange-arrow.svg';
import arrowUpGray from '@/public/image/icon/Arrow-Right-Gray.svg';
import arrowUpWhile from '@/public/image/icon/Arrow-Right-While.svg';
import ovalYellow from '@/public/image/Oval-yellow.png';
import ovalBlue from '@/public/image/Oval-blue.png';
import ovalRed from '@/public/image/Oval-red.png';
import arrowUpWhileSmall from '@/public/image/icon/arrowRightUp-whileSmall.svg';
import arrowUpGraySmall from '@/public/image/icon/arrowRightUp-graySmall.svg';
import Link from 'next/link';

export function Directions() {
	const items = [
		{
			name: 'Training and development',
			title: 'Training \n and development',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis dignissimos est eveniet ipsa iure maxime omnis, perferendis quaerat, recusandae reiciendis reprehenderit vel veniam? Ad autem eius odio quaerat tempore.',
		},
		{
			name: 'Development of social skills',
			title: 'Development \n of social skills',
			description:
				'ТIt is a long established fact that a reader will be distracted by the readable content of a paТIТIt is a long established fact that reader will be distracted by the readable content of a paТI',
		},
		{
			name: 'Art and creativity',
			title: 'Art and creativity',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci, consequatur, doloribus earum eligendi expedita fugiat harum natus nesciunt porro possimus quia quidem ullam vel voluptatibus? Adipisci impedit laboriosam velit.',
		},
		{
			name: 'Language courses',
			title: 'Language courses',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, asperiores, praesentium. Commodi delectus earum ex libero repellendus! Animi beatae corporis facere ipsam ipsum iusto, maxime nam nulla perferendis perspiciatis vero?',
		},
		{
			name: 'Physical development',
			title: 'Physical development',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem cumque, debitis distinctio dolore dolorem earum eius excepturi facilis laboriosam, magnam maiores modi pariatur quasi, quo rerum tenetur totam ut.',
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);

	const handleItemClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<section className="py-[100px] px-4 h-full lg:px-[50px] lg:py-[100px] xl:px-[100px] xl:py-[150px] flex flex-col lg:flex-row items-center relative">
			<div className="lg:flex hidden bg-radiant-blue absolute rotate-[-120deg] bottom-[-100%] right-[-13%] md:w-[955px] md:h-[1095px]"></div>
			<Image
				alt={'image'}
				src={ovalYellow}
				className={'left-[60%] w-[19px] md:w-[29px] absolute top-[5%] lg:right-[44%]'}
			/>
			<Image
				src={ovalBlue}
				alt={'image'}
				width={17}
				height={17}
				className="absolute bottom-[2%] md:bottom-[19%] right-[20%]"
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
					<div key={index}>
						<div
							className={`gap-2 lg:max-w-[498px] w-full md:gap-4 flex items-center justify-between bg-customLightGray rounded-[94px] h-[80px] px-[25px] ${
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
									className={`lg:text-2xl md:text-xl text-base font-bold text-[#2A333C] ${
										index === activeIndex ? 'text-[#FAFAFA] transition-opacity' : 'opacity-30'
									}`}
								>
									{item.title}
								</span>
							</div>
							<Image
								src={index === activeIndex ? arrowUpWhileSmall : arrowUpGraySmall}
								alt={'icon'}
								className={`md:hidden block w-[18] h-[18]`}
							/>
							<Image
								src={index === activeIndex ? arrowUpWhile : arrowUpGray}
								alt={'icon'}
								className={`md:block hidden w-[18] h-[18] md:w-[32] md:h-[32]`}
							/>
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
			{/*<div className={'lg:w-[630px] lg:h-[316px] '}>*/}
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
