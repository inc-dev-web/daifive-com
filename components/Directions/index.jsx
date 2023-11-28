import React, { useState } from 'react';
import Image from 'next/image';
import arrowOrange from '@/public/image/icon/light-orange-arrow.svg';
import arrowUpGray from '@/public/image/icon/Arrow-Right-Gray.svg';
import arrowUpWhile from '@/public/image/icon/Arrow-Right-While.svg';
// import oval from '@/public/image/Oval.png';
import ovalYellow from '@/public/image/Oval-yellow.png';
import ovalBlue from '@/public/image/Oval-blue.png';
import ovalRed from '@/public/image/Oval-red.png';

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
		<section className="py-[100px] px-4 md:h-[764px] md:px-[50px] md:py-[100px] xl:px-[100px] xl:py-[150px] flex flex-col md:flex-row xl:justify-between md:gap-10 items-center relative">
			<Image
				alt={'image'}
				src={ovalYellow}
				className={'left-[40%] w-[19px] md:w-[29px] absolute top-[5%] md:right-[44%]'}
			/>
			<Image
				src={ovalBlue}
				alt={'image'}
				width={17}
				height={17}
				className="absolute bottom-[2%] md:bottom-[19%] right-[20%]"
			/>
			<div className={'gap-3 md:gap-4 flex flex-col md:mt-12 md:pr-[33px] z-40'}>
				<div className="md:hidden flex justify-center flex-col items-center relative">
					<Image
						src={ovalRed}
						alt="img"
						className="absolute right-0 top-0"
						width={12}
					/>
					<span className="font-bold text-sm text-customBlue uppercase">Наші напрямки</span>
					<h4 className="text-xl font-bold text-[#2A333C] mt-3 mb-6 text-center">
						Напрямки які ми <br /> пропонуємо
					</h4>
				</div>
				{items.map((item, index) => (
					<div key={index}>
						<div
							className={`gap-2 md:gap-4 flex items-center justify-between bg-customLightGray rounded-[94px] h-[80px] px-[25px] ${
								index === activeIndex ? 'bg-customOrange mb-4' : 'opacity-80'
							}`}
							onClick={() => handleItemClick(index)}
						>
							<div className={'flex gap-6'}>
								<div
									className={`w-8 h-8 rounded-[50%] flex items-center justify-center text-2xl font-bold leading-none ${
										index === activeIndex ? 'bg-[#FFFFFF33] text-white' : 'bg-[#2A333C33] opacity-30 text-[#2A333C]'
									}`}
								>
									{index + 1}
								</div>
								<span
									className={`text-2xl font-bold text-[#2A333C] ${
										index === activeIndex ? 'text-[#FAFAFA] transition-opacity' : 'opacity-30'
									}`}
								>
									{item.title}
								</span>
							</div>
							<Image
								src={index === activeIndex ? arrowUpWhile : arrowUpGray}
								alt={'icon'}
								width={32}
								height={32}
								className={index === activeIndex ? '' : 'opacity-30'}
							/>
						</div>
						<span className={`md:hidden block text-base font-normal text-[#2A333CB3] px-[25px] ${index === activeIndex ? 'block' : 'hidden'}`}>
							{item.description}
						</span>
					</div>
				))}
			</div>
			<div className={'md:w-[630px] md:h-[316px] '}>
				<span className={'md:inline hidden font-bold text-base text-customBlue'}>Наші напрямки</span>
				<h4 className={'md:block hidden lg:text-custom32 text-xl font-bold text-[#2A333C] mt-[22px] mb-6'}>{items[activeIndex].title}</h4>
				<p className="md:block hidden text-[#2A333CB2] font-normal leading-6 text-sm lg:text-base w-full lg:w-[498px] ">
					{items[activeIndex].description}
				</p>
				<button className="w-[286px] h-[56px] mt-8 md:mt-12 flex items-center gap-4 justify-center rounded-[92px] bg-customOrangeLight ">
					<span className={'text-customOrange flex items-center lg:text-base text-sm font-bold'}>Дізнатись більше</span>
					<Image
						src={arrowOrange}
						alt={'icon'}
						width={24}
						height={24}
					/>
				</button>
			</div>
		</section>
	);
}
