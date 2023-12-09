'use client';
import telegramIcon from '@/public/image/icon/telegram.svg';
import instagramIcon from '@/public/image/icon/instagram.svg';
import youTubeIcon from '@/public/image/icon/youtube.svg';
import logo from '@/public/image/logoWhite.png';
import Image from 'next/image';
import { useState } from 'react';

export function Footer() {
	const [activeIndex, setActiveIndex] = useState(null);

	const item = [
		{
			title: 'Telegram',
			icon: (
				<Image
					src={telegramIcon}
					alt={'icon'}
				/>
			),
			link: 'https://t.me/abatherapistM',
		},
		{
			title: 'Instagram',
			icon: (
				<Image
					src={instagramIcon}
					alt={'icon'}
				/>
			),
			link: 'https://www.instagram.com/dai5pyat/',
		},
		{
			title: 'YouTube',
			icon: (
				<Image
					src={youTubeIcon}
					alt={'icon'}
				/>
			),
			link: 'https://www.youtube.com/@ABAtherapistM',
		},
	];

	const handleItemClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<footer className={'md:h-[339px] flex items-center lg:px-[100px] px-4 md:pt-0'}>
			<div
				className={
					'md:h-[139px] py-8 md:gap-0 bg-customBlue px-4 md:px-[74px] md:py-[32px] rounded-[42px] flex flex-col md:flex-row justify-between items-center w-full min-w-[343px] sm:max-w-none'
				}
			>
				<Image
					src={logo}
					alt={'logo'}
					width={139}
				/>
				<ul className={'py-12 md:py-0 flex md:flex-row flex-col gap-8 md:gap-3 md:my-12'}>
					{item.map((item, index) => (
						<li
							key={index}
							className={`flex items-center justify-center rounded-[12.581px] hover:opacity-100 hover:bg-customWhiteTint opacity-30 text-white transition-opacity duration-300 ease-in-out`}
							onClick={() => handleItemClick(index)}
						>
							<a href={item.link} className={'flex items-center gap-[8px] py-2 px-4'}>
								{item.title}
								{item.icon}
							</a>
						</li>
					))}
				</ul>
				<div className={'text-customLightGrayTint '}>
					<a className={'underline'}>Privacy policy</a>
				</div>
			</div>
		</footer>
	);
}
