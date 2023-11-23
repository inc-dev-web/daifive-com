import React, { useState } from 'react';
import Image from 'next/image';
import iconWhite from '../../public/image/icon/iconLogoWhite.svg';
import iconGray from '../../public/image/icon/iconLogo.svg';
import arrowOrange from '../../public/image/icon/light-orange-arrow.svg';
import arrowUpGray from '../../public/image/icon/Arrow-Right-Gray.svg';
import arrowUpWhile from '../../public/image/icon/Arrow-Right-While.svg';
import ovar from '../../public/image/Oval.png';

export default function Directions() {
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
		<section className="h-[764px] px-[100px] py-[150px] flex flex-row justify-between items-center relative">
			<Image
				src={ovar}
				className={'absolute top-[42px] right-[44%]'}
				width={29}
				height={29}
			/>
			<div className={'gap-4 flex flex-col'}>
				{items.map((item, index) => (
					<div
						key={index}
						className={`gap-4 flex items-center justify-between bg-customLightGray rounded-[94px] h-[80px] px-[25px] ${
							index === activeIndex ? 'bg-customOrange' : 'opacity-80'
						}`}
						onClick={() => handleItemClick(index)}
					>
						<Image
							src={index === activeIndex ? iconWhite : iconGray}
							alt={'icon'}
							width={32}
							height={32}
							className={index === activeIndex ? '' : 'opacity-30'}
						/>
						<span className={`text-2xl font-bold text-[#2A333C] ${index === activeIndex ? 'text-[#FAFAFA]' : 'opacity-80'}`}>{item.name}</span>
						<Image
							src={index === activeIndex ? arrowUpWhile : arrowUpGray}
							alt={'icon'}
							width={32}
							height={32}
							className={index === activeIndex ? '' : 'opacity-30'}
						/>
					</div>
				))}
			</div>
			<div className={'w-[630px] h-[316px]'}>
				<span className={'font-bold text-base text-customBlue'}>Наші напрямки</span>
				<h4 className={'text-custom32 font-bold text-[#2A333C] mt-[22px] mb-6'}>{items[activeIndex].title}</h4>
				<p className="text-[#2A333CB2] font-normal leading-6 text-base w-[498px] ">{items[activeIndex].description}</p>
				<button className={'w-[286px] h-[56px] mt-12 flex items-center gap-4 justify-center rounded-[92px] bg-customOrangeLight '}>
					<span className={'text-customOrange flex items-center text-base font-bold'}>Дізнатись більше</span>
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
