'use client';
import React from 'react';
import background3 from '@/public/image/background3.png';
import background3mobi from '@/public/image/bgCard.png';
import Image from 'next/image';
import arrowRight from '@/public/image/icon/Arrow-Right-While.svg';
import ovalRed from '@/public/image/Oval-red.png';

export function ServiceCards() {
	const card = [
		{
			title: 'Туалетний\nтренінг',
			image: (
				<Image
					src={arrowRight}
					alt={'icon'}
				/>
			),
			background: 'bg-customBlue',
			shadow: 'customBoxShadowBlue',
			rotate: 'rotate-[-3deg]',
			ellipse: 'ellipseOneCustom',
		},
		{
			title: 'Робота з\nнебажаною\nповедінкою',
			image: (
				<Image
					src={arrowRight}
					alt={'icon'}
				/>
			),
			background: 'bg-customOrange',
			shadow: 'customBoxShadowOrange',
			rotate: 'rotate-[5deg]',
			margin: 'mt-[-150px]',
			ellipse: 'ellipseTwoCustom',
		},
		{
			title: 'Запуск\nмовлення',
			image: (
				<Image
					src={arrowRight}
					alt={'icon'}
				/>
			),
			background: 'bg-customBlue',
			shadow: 'customBoxShadowBlue',
			rotate: 'rotate-[-4deg]',
		},
	];
	return (
		<section className="h-[619px] md:h-[550px] lg:h-[705px] relative flex lg:items-center justify-center">
			<Image
				src={ovalRed}
				alt="img"
				className="lg:block hidden absolute right-[20%] top-[20%]"
				width={21}
				height={21}
			/>
			<div className="bg-radiant-blue absolute left-[-15%] top-[0%] z-10 w-[637px] h-[731px]"></div>
			<Image
				src={background3}
				alt={'img'}
				className={'object-contain absolute md:relative md:block hidden'}
			/>
			<Image
				src={background3mobi}
				alt={'img'}
				className={'object-contain w-full h-full absolute md:relative md:hidden block'}
			/>
			<div className={'flex flex-col justify-center items-center md:flex-row gap-7 md:gap-8 md:absolute md:bottom-[150px] z-1 md:max-w-[1250px] w-full'}>
				{card.map(({ title, image, background, shadow, rotate, margin, ellipse }, index) => (
					<div
						key={index}
						className={`px-[20px] py-[22px] md:px-0 md:py-0 text-[#FFF] font-bold text-base md:text-2xl flex items-end md:justify-around md:flex-1 md:w-full w-[244px] h-[137px] md:h-[220px] rounded-[32px] md:pb-[32px] overflow-hidden ${background} ${shadow} ${rotate} md:${margin} ${ellipse}`}
					>
						<div className={'w-[234px] whitespace-pre-line'}>{title}</div>
						<picture
							className={'w-[32px] h-[32px] lg:w-[52px] lg:h-[52px] flex items-center justify-center rounded-[70px]'}
							style={{ background: 'rgba(255, 255, 255, 0.10)' }}
						>
							{image}
						</picture>
					</div>
				))}
			</div>
		</section>
	);
}
