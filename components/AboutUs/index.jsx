'use client';
import { useState } from 'react';
import Image from 'next/image';
import childCat from '@/public/image/childCat.png';
import childCatSmall from '@/public/image/childCatSmall.png';
import arrowRight from '@/public/image/icon/arrow-right.svg';
import ovalRed from '@/public/image/Oval-red.png';
import ovalYellow from '@/public/image/Oval-yellow.png';
import ovalBlue from '@/public/image/Oval-blue.png';
import Link from 'next/link';

export function AboutUs() {
	const content = [
		{
			title: 'Висококваліфіковані спеціалісти.',
			content: 'В нашому центрі працюють сертифіковані ABA-спеціалісти, під керівництвом куратора та супервізора рівня BCBA',
		},
		{
			title: 'Наушники форбрейн і саундсорі',
			content: 'Навушники використовують для подолання сенсорних та мовленнєвих проблем, а також проблем концентрації уваги та памʼяті',
		},
		{
			title: 'Пільгові програми',
			content: 'В нашому центрі діють знижки та безоплатні послуги для вразливих категорій населення.',
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [animate, setAnimate] = useState(false);

	const changeContent = () => {
		setAnimate(true);
		setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
	};

	const onAnimationEnd = () => {
		setAnimate(false);
	};

	return (
		<section className="flex lg:flex-row lg:h-[768px] h-auto flex-col lg:items-center items-start gap-[23px] overflow-hidden relative pt-[50px] lg:pt-0 pb-[96px] lg:pb-0">
			<div className="max-w-[710px] flex-1 w-full h-full mt-[-12px] relative flex -mb-[78px]">
				<Image
					loading="lazy"
					src={childCat}
					className="hidden md:block w-full h-full object-contain lg:absolute"
					alt="img"
				/>
				<Image
					loading="lazy"
					src={childCatSmall}
					className="md:hidden w-full h-full object-contain lg:absolute"
					alt="img"
				/>
				<Image
					src={ovalRed}
					width={29}
					alt="icon"
					className="absolute bottom-[20%] right-[5%] -z-10"
				/>
				<Image
					src={ovalYellow}
					alt="icon"
					className="absolute right-[8%] top-[15%] -z-10"
					width={29}
				/>
				<Image
					src={ovalBlue}
					alt="icon"
					width={19}
					className="absolute right-[18%] bottom-[10%] -z-10"
				/>
			</div>
			<div className="w-full h-auto lg:w-[55%] xl:w-[45%] px-4 lg:px-0 mt-[48px] md:mt-0">
				<span className="font-bold md:text-base text-xs text-customBlue">ПРО НАС</span>
				<div className="accent-amber-800 flex items-center relative w-[75%] min-h-[200px] max-h-[200px] lg:min-h-[300px] lg:max-h-[300px]">
					<div className="flex-1 flex items-center justify-center w-full overflow-hidden">
						<div
							className={`text-2xl ${animate ? 'animate-slideRight' : ''}`}
							onAnimationEnd={onAnimationEnd}
						>
							<h4 className="lg:text-custom32 md:text-2xl text-xl font-bold text-[#2A333C] mb-4">{content[currentIndex].title}</h4>
							<p className="text-[#2A333CB2] font-normal leading-[normal] lg:text-lg md:text-base text-sm"> {content[currentIndex].content}</p>
						</div>
					</div>
					<button
						className="w-[48px] h-[48px] md:w-[86px] md:h-[86px] flex items-center justify-center rounded-[80px] bg-customAmberTint z-10"
						onClick={changeContent}
					>
						<Image
							src={arrowRight}
							alt="icon"
							className="w-[24px] h-[24px] md:w-[48px] md:h-[48px]"
						/>
					</button>
					<div className="opacity-20 absolute right-[-110%] flex items-center justify-center w-full overflow-hidden">
						<div
							className={`text-2xl ${animate ? 'animate-slideRight' : ''}`}
							onAnimationEnd={onAnimationEnd}
						>
							<h4 className="lg:text-custom32 md:text-2xl text-xl font-bold text-[#2A333C] mb-4">
								{content[(currentIndex - 1 + content.length) % content.length].title}
							</h4>
							<p className="text-[#2A333CB2] font-normal leading-[normal] lg:text-lg md:text-base text-sm">
								{' '}
								{content[(currentIndex - 1 + content.length) % content.length].content}
							</p>
						</div>
					</div>
				</div>
				<div className="w-full justify-center lg:justify-start flex xl:mt-12">
					<button className="font-bold md:text-base text-sm text-[#FAFAFA] bg-customBlue rounded-[42px] customBoxShadowBlu w-[270px] h-[48px] md:w-[316px] md:h-[56px]">
						<Link
							href={`#consultation`}
							className="flex h-full w-full items-center justify-center "
						>
							Замовити дзвінок!
						</Link>
					</button>
				</div>
			</div>
		</section>
	);
}
