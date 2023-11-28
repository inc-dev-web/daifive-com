import telegramIcon from '../../public/image/icon/telegram.svg';
import instagramIcon from '../../public/image/icon/instagram.svg';
import youTubeIcon from '../../public/image/icon/youtube.svg';
import logo from '../../public/image/logoWhile.png';
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
			link: '#',
		},
		{
			title: 'Instagram',
			icon: (
				<Image
					src={instagramIcon}
					alt={'icon'}
				/>
			),
			link: '#',
		},
		{
			title: 'YouTube',
			icon: (
				<Image
					src={youTubeIcon}
					alt={'icon'}
				/>
			),
			link: '#',
		},
	];

	const handleItemClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<footer className={'md:h-[339px] flex items-center lg:p-[100px] px-4 pt-[100px] md:pt-0'}>
			<div
				className={
					'py-8 md:gap-0 bg-customBlue px-4 md:px-[74px] md:py-[32px] rounded-[42px] flex flex-col md:flex-row justify-between items-center w-full min-w-[343px] sm:max-w-none'
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
							className={`flex items-center justify-center w-[115px] h-[39px] text-white ${
								activeIndex === index ? 'bg-customWhiteTint rounded-[12.581px] opacity-100' : 'opacity-30'
							} transition-opacity duration-300 ease-in-out`}
							onClick={() => handleItemClick(index)}
						>
							<a className={'flex items-center gap-[8px]'}>
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
