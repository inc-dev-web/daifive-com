import telegramIcon from '../../public/image/icon/telegram.svg';
import instagramIcon from '../../public/image/icon/instagram.svg';
import youTubeIcon from '../../public/image/icon/youtube.svg';
import logo from '../../public/image/logoWhile.png';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
	const [activeIndex, setActiveIndex] = useState(null);

	const item = [
		{
			title: 'Telegram',
			icon: <Image src={telegramIcon} />,
			link: '#',
		},
		{
			title: 'Instagram',
			icon: <Image src={instagramIcon} />,
			link: '#',
		},
		{
			title: 'YouTube',
			icon: <Image src={youTubeIcon} />,
			link: '#',
		},
	];

	const handleItemClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<footer className={'h-[339px] flex items-center p-[100px]'}>
			<div className={'bg-customBlue px-[74px] py-[32px] rounded-[42px] flex justify-between items-center w-full'}>
				<Image
					src={logo}
					alt={'logo'}
					width={139}
				/>
				<ul className={'flex flex-row gap-3'}>
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
