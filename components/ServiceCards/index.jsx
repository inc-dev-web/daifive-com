import React from 'react';
import bg from '@/public/image/bgCard.png';
import bgSmall from '@/public/image/bgCardSmall.png';
import Image from 'next/image';
import arrowRight from '@/public/image/icon/Arrow-Right-While.svg';
import ovalRed from '@/public/image/Oval-red.png';
import Link from 'next/link';

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
		<section className="h-[619px] md:h-[550px] lg:h-[705px]">
			<div className="text-center mb-8 lg:mb-0">
				<div className="font-bold md:text-base text-xs text-customBlue uppercase mb-5">Довіряй найкащим</div>
				<h4 className="font-bold text-4xl mb-5">До нас звертаються з такими запитами:</h4>
				<div className="opacity-50">Good specialists are those who are professional, warm andugh a creat</div>
			</div>
			<div className="relative flex lg:items-center justify-center">
				<Image
					src={ovalRed}
					alt="img"
					className="lg:block hidden absolute right-[20%] top-[20%] -z-10"
					width={21}
					height={21}
				/>
				<div className="bg-radiant-blue absolute left-[-15%] top-[0%] -z-10 w-[637px] h-[731px]"></div>
				<Image
					loading="lazy"
					src={bg}
					alt={'img'}
					className={'object-contain absolute md:relative md:block hidden -z-10'}
				/>
				<Image
					loading="lazy"
					src={bgSmall}
					alt={'img'}
					className={'object-contain w-full h-full absolute md:relative md:hidden block -z-10'}
				/>
				<div
					className={
						'flex flex-col justify-center items-center lg:flex-row gap-7 lg:gap-8 md:absolute lg:bottom-[150px] z-1 lg:max-w-[1250px] w-full'
					}
				>
					{card.map(({ title, image, background, shadow, rotate, margin, ellipse }, index) => (
						<Link
							key={index}
							href={'/services'}
							className={'flex w-full h-full justify-center items-center'}
						>
							<div
								className={`px-[20px] py-[22px] lg:px-0 lg:py-0 text-[#FFF] font-bold text-base lg:text-2xl flex items-end lg:justify-around lg:flex-1 lg:w-full w-[244px] h-[137px] lg:h-[220px] rounded-[32px] lg:pb-[32px] overflow-hidden cursor-pointer ${background} ${shadow} ${rotate} lg:${margin} ${ellipse}`}
								// onClick={router.push(`/services`)}
							>
								<div className={'w-[234px] whitespace-pre-line'}>{title}</div>
								<picture
									className={'w-[32px] h-[32px] lg:w-[52px] lg:h-[52px] flex items-center justify-center rounded-[70px]'}
									style={{ background: 'rgba(255, 255, 255, 0.10)' }}
								>
									{image}
								</picture>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
