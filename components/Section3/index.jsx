import React from 'react';
import background3 from '../../public/image/background3.png';
import Image from 'next/image';
import arrowRight from '../../public/image/icon/Arrow-Right-While.svg';

export default function Section3() {
	const card = [
		{
			title: 'Туалетний\nтренінг',
			image: <Image src={arrowRight} />,
			background: 'bg-customBlue',
			shadow: 'customBoxShadowBlue',
			rotate: 'rotate-[-3deg]',
			ellipse: 'ellipseOneCustom',
		},
		{
			title: 'Робота з\nнебажаною\nповедінкою',
			image: <Image src={arrowRight} />,
			background: 'bg-customOrange',
			shadow: 'customBoxShadowOrange',
			rotate: 'rotate-[5deg]',
			margin: 'mt-[-150px]',
			ellipse: 'ellipseTwoCustom',
		},
		{
			title: 'Запуск\nмовлення',
			image: <Image src={arrowRight} />,
			background: 'bg-customBlue',
			shadow: 'customBoxShadowBlue',
			rotate: 'rotate-[-4deg]',
		},
	];
	return (
		<section className="h-[705px] relative flex items-center justify-center">
			<Image
				src={background3}
				alt={'img'}
				className={'absolute right-[37px] top-[60px] z-2'}
			/>
			<div className={'flex flex-row gap-8 absolute bottom-[150px] z-1'}>
				{card.map(({ title, image, background, shadow, rotate, margin, ellipse }, index) => (
					<div
						key={index}
						className={`text-[#FFF] font-bold text-2xl flex items-end justify-around w-[392px] h-[220px] rounded-[32px] pb-[42px] overflow-hidden ${background} ${shadow} ${rotate} ${margin} ${ellipse}`}
					>
						<div className={'w-[234px] whitespace-pre-line'}>{title}</div>
						<picture
							className={'w-[52px] h-[52px] flex items-center justify-center rounded-[70px]'}
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
