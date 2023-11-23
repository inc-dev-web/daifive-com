import { useState } from 'react';
import Image from 'next/image';
import childCat from '../../public/image/childCat.png';
import arrowRight from '../../public/image/icon/arrow-right.svg';

export default function AboutUs() {
	const content = [
		{
			title: <h4 className="text-custom32 font-bold text-[#2A333C] mb-4">Development and Improvement</h4>,
			content: (
				<p className="text-[#2A333CB2] font-normal leading-[normal] text-lg">
					We strive to create an environment where every child can reach their potential by developing their intellectual,
					creative, and social skills.
				</p>
			),
		},
		{
			title: <h4 className="text-custom32 font-bold text-[#2A333C] mb-4">Individuality and Innovation</h4>,
			content: (
				<p className="text-[#2A333CB2] font-normal leading-[normal] text-lg">
					We strive to create an environment where every child can reach their potential by developing their intellectual,
					creative, and social skills.
				</p>
			),
		},
		{
			title: <h4 className="text-custom32 font-bold text-[#2A333C] mb-4">Another Title</h4>,
			content: <p className="text-[#2A333CB2] font-normal leading-[normal] text-lg">Another content goes here.</p>,
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);
	const handleButtonClick = () => {
		setActiveIndex((prevIndex) => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
	};

	return (
		<section className="flex flex-row h-[768px] items-center gap-[23px] overflow-hidden">
			<Image
				src={childCat}
				width={710}
				className="mt-[-12px]"
			/>
			<div>
				<span className="font-bold text-base text-customBlue">ПРО НАС</span>
				<div className="mt-6 mb-12 flex flex-row items-center gap-[48px]">
					{content.map((item, index) => (
						<div
							key={index}
							className={`flex-col gap-4 w-[392px] h-full duration-1000 transition-opacity ${
								index === activeIndex ? 'flex' : 'hidden'
							}`}
						>
							{item.title}
							{item.content}
						</div>
					))}
					<button
						className="w-[86px] h-[86px] flex items-center justify-center rounded-[80px] bg-customAmberTint"
						onClick={handleButtonClick}
					>
						<Image
							src={arrowRight}
							width={48}
							height={48}
						/>
					</button>
					{content.map((item, index) => (
						<div
							key={index}
							className={`flex-col gap-4 w-[392px] left-[118%] h-full opacity-30 ${
								index === (activeIndex - 1 + content.length) % content.length ? 'flex' : 'hidden'
							}`}
						>
							{item.title}
							{item.content}
						</div>
					))}
				</div>
				<button className="font-bold text-base text-[#FAFAFA] bg-customBlue rounded-[42px] customBoxShadowBlu w-[316px] h-[56px]">
					Замовити дзвінок!
				</button>
			</div>
		</section>
	);
}
