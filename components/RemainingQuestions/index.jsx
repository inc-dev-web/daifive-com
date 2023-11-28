import React, { useState } from 'react';
import Image from 'next/image';
import childrenImage from '@/public/image/childrenTeacher.png';
import arrowUpWhile from '@/public/image/icon/Arrow-Right-While.svg';
import arrowUpGray from '@/public/image/icon/Arrow-Right-Gray.svg';
import ovalYellow from '@/public/image/Oval-yellow.png';
import ovalBlue from '@/public/image/Oval-blue.png';
import ovalRed from '@/public/image/Oval-red.png';
import arrowOrange from '@/public/image/icon/light-orange-arrow.svg';

export function RemainingQuestions() {
	const items = [
		{
			title: 'What are your services?',
			description: '1We offer various educational and creative programmes for children \n' + 'aged 3 to 16.',
		},
		{
			title: 'What are your services?',
			description: '2We offer various educational and creative programmes for children \n' + 'aged 3 to 16.',
		},
		{
			title: 'How to enrol a child?',
			description: '3We offer various educational and creative programmes for children \n' + 'aged 3 to 16.',
		},
		{
			title: 'Any feedback from other parents?',
			description: '4We offer various educational and creative programmes for children \n' + 'aged 3 to 16.',
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);

	const handleItemClick = (index) => {
		setActiveIndex(index);
	};
	return (
		<section className="pt-[93px] px-4 md:h-[764px] md:px-[50px] md:py-[100px] xl:px-[100px] xl:py-[150px] flex flex-col md:flex-row xl:justify-between gap-10 items-center relative">
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
				className="md:block hidden absolute bottom-[19%] right-[20%]"
			/>
			<div className={'gap-3 md:gap-4 flex flex-col md:mt-12 md:pr-[33px] z-40'}>
				<div className="md:hidden flex justify-center flex-col items-center relative">
					<Image
						src={ovalRed}
						alt="img"
						className="absolute right-0 top-0"
						width={12}
					/>
					<span className="font-bold text-sm text-customBlue uppercase">Почитай</span>
					<h4 className="text-xl font-bold text-[#2A333C] mt-3 mb-6 text-center">Відповіді на питання</h4>
				</div>
				{items.map((item, index) => (
					<div key={index}>
						<div
							key={index}
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
			<div className={'w-full md:w-2/4 relative pl-[75px]'}>
				<div className={'md:block hidden bg-radiant-orange absolute w-full h-full z-[-1] top-[0] right-[-20%]'}></div>
				<Image
					src={childrenImage}
					alt={'img'}
					className={'object-cover w-full h-full'}
				/>
				добавити овали
			</div>
		</section>
	);
}
