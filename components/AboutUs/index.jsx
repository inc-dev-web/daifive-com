'use client';

import { useState } from 'react';
import Image from 'next/image';
import childCat from '@/public/image/childCat.png';
import arrowRight from '@/public/image/icon/arrow-right.svg';
import ovalRed from '@/public/image/Oval-red.png';
import ovalYellow from '@/public/image/Oval-yellow.png';
import ovalBlue from '@/public/image/Oval-blue.png';

export function AboutUs() {
	const content = [
		{
			title: 'Висококваліфіковані спеціалісти.',
			content:
				'В нашому центрі працюють сертифіковані ABA-спеціалісти, під керівництвом куратора та супервізора рівня BCBA',
		},
		{
			title: 'Наушники форбрейн і саундсорі',
			content:
				'Навушники використовують для подолання сенсорних та мовленнєвих проблем, а також проблем концентрації уваги та памʼяті',
		},
		{
			title: 'Пільгові програми',
			content: 'В нашому центрі діють знижки та безоплатні послуги для вразливих категорій населення.',
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);
	const handleButtonClick = () => {
		setActiveIndex((prevIndex) => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
	};

	return (
		<section className="flex lg:flex-row lg:h-[768px] min-h-[793px] flex-col lg:items-center items-start gap-[23px] overflow-hidden relative pt-[50px] lg:pt-0 pb-[96px] lg:pb-0">
			<div className="max-w-[710px] flex-1 w-full h-full mt-[-12px] relative flex -mb-[78px]">
				<Image
					src={childCat}
					className="w-full h-full object-contain lg:absolute"
					alt="img"
				/>
				<Image
					src={ovalRed}
					width={29}
					alt="icon"
					className="absolute bottom-[20%] right-[5%]"
				/>
				<Image
					src={ovalYellow}
					alt="icon"
					className="absolute right-[8%] top-[15%]"
					width={29}
				/>
				<Image
					src={ovalBlue}
					alt="icon"
					width={19}
					className="absolute right-[18%] bottom-[10%]"
				/>
			</div>
			<div className="w-full lg:w-[49%] px-4 lg:px-0 mt-[48px] md:mt-0">
				<span className="font-bold md:text-base text-xs text-customBlue">ПРО НАС</span>
				<div className="mt-6 mb-12 flex flex-row items-center relative overflow-hidden">
					{content.map((item, index) => (
						<div
							key={index}
							className={`lg:max-h-[250px] min-h-[200px] lg:min-h-[250px] h-full w-[65%] lg:w-[55%] justify-start flex-col gap-4 md:mr-[48px] mr-[15px] ${
								index === activeIndex ? 'flex' : 'hidden'
							}`}
						>
							<h4 className="lg:text-custom32 md:text-2xl text-xl font-bold text-[#2A333C] mb-4">{item.title}</h4>
							<p className="text-[#2A333CB2] font-normal leading-[normal] lg:text-lg md:text-base text-sm"> {item.content}</p>
						</div>
					))}
					<div className="relative lg:max-h-[250px] min-h-[200px] lg:min-h-[250px] h-full flex items-center flex-1">
						<button
							className="w-[48px] h-[48px] md:w-[86px] md:h-[86px] flex items-center justify-center rounded-[80px] bg-customAmberTint z-10"
							onClick={handleButtonClick}
						>
							<Image
								src={arrowRight}
								alt="icon"
								className="w-[24px] h-[24px] md:w-[48px] md:h-[48px]"
							/>
						</button>
						{content.map((item, index) => (
							<div
								key={index}
								className={`lg:max-h-[250px] min-h-[200px] lg:min-h-[250px] h-full absolute w-[220px] lg:w-[392px] flex-col gap-4 top-0 opacity-30 md:left-[130px] sm:left-[68px] left-[58px] ${
									index === (activeIndex - 1 + content.length) % content.length ? 'flex' : 'hidden'
								}`}
							>
								<h4 className="lg:text-custom32 md:text-2xl text-xl font-bold text-[#2A333C] mb-4">{item.title}</h4>
								<p className="text-[#2A333CB2] font-normal leading-[normal] lg:text-lg md:text-base text-sm"> {item.content}</p>
							</div>
						))}
					</div>
				</div>
				<div className="w-full justify-center lg:justify-start flex">
					<button className="font-bold md:text-base text-sm text-[#FAFAFA] bg-customBlue rounded-[42px] customBoxShadowBlu w-[270px] h-[48px] md:w-[316px] md:h-[56px]">
						Замовити дзвінок!
					</button>
				</div>
			</div>
		</section>
	);
}
