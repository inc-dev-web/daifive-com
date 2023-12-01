'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import childrenImage from '@/public/image/childrenTeacher.png';
import childrenImageSmall from '@/public/image/childrenTeacherSmall.png';
import arrowUpWhile from '@/public/image/icon/Arrow-Right-While.svg';
import arrowUpWhileSmall from '@/public/image/icon/arrowRightUp-whileSmall.svg';
import arrowUpGray from '@/public/image/icon/Arrow-Right-Gray.svg';
import arrowUpGraySmall from '@/public/image/icon/arrowRightUp-graySmall.svg';
import ovalYellow from '@/public/image/Oval-yellow.png';
import ovalBlue from '@/public/image/Oval-blue.png';
import ovalRed from '@/public/image/Oval-red.png';

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
		<section className="pt-[93px] px-4 lg:h-[764px] lg:px-[50px] lg:py-[100px] xl:px-[100px] xl:py-[150px] flex flex-col lg:flex-row items-center lg:justify-between relative">
			<Image
				alt={'image'}
				src={ovalYellow}
				className={'md:hidden block left-[40%] w-[19px] md:w-[29px] absolute top-[5%] md:right-[44%]'}
			/>
			<Image
				src={ovalBlue}
				alt={'image'}
				width={17}
				height={17}
				className="md:hidden block absolute bottom-[19%] right-[20%]"
			/>
			<div className={'gap-3 lg:gap-4 flex flex-col lg:mt-12 lg:w-[45%] w-full'}>
				<div className="flex justify-center flex-col items-start relative">
					<Image
						src={ovalRed}
						alt="img"
						className="md:hidden block absolute right-0 top-0"
						width={12}
					/>
					<span className=" font-bold text-xs text-customBlue uppercase">Залишились питання?</span>
					<h4 className=" text-xl font-bold text-[#2A333C] mt-4 mb-6 text-center">Відповіді на питання</h4>
				</div>
				{items.map((item, index) => (
					<div key={index}>
						<div
							className={`gap-2 w-full md:gap-4 flex items-center justify-between bg-customLightGray rounded-[94px] h-[80px] px-[25px] ${
								index === activeIndex ? 'bg-customOrange' : 'opacity-80'
							}`}
							onClick={() => handleItemClick(index)}
						>
							<div className={'flex items-center justify-start gap-6 w-full'}>
								<div
									className={`w-[28px] h-[28px] lg:w-[48px] lg:h-[48px] rounded-[50%] flex items-center justify-center lg:text-2xl text-xl font-bold leading-none ${
										index === activeIndex ? 'bg-[#FFFFFF33] text-white' : 'bg-[#2A333C33] opacity-30 text-[#2A333C]'
									}`}
								></div>
								<span
									className={`lg:text-2xl md:text-xl text-base font-bold text-[#2A333C] ${
										index === activeIndex ? 'text-[#FAFAFA] transition-opacity' : 'opacity-30'
									}`}
								>
									{item.title}
								</span>
							</div>
							<Image
								src={index === activeIndex ? arrowUpWhileSmall : arrowUpGraySmall}
								alt={'icon'}
								className={`md:hidden block w-[18] h-[18]`}
							/>
							<Image
								src={index === activeIndex ? arrowUpWhile : arrowUpGray}
								alt={'icon'}
								className={`md:block hidden w-[18] h-[18] md:w-[32] md:h-[32]`}
							/>
						</div>
						<span
							className={`mt-4 block md:text-base text-xs font-normal text-[#2A333CB3] px-[25px] ${index === activeIndex ? 'block' : 'hidden'}`}
						>
							{item.description}
						</span>
					</div>
				))}
			</div>
			<div className={'w-full lg:w-2/4 relative flex justify-center mt-8 lg:mt-0 mb-[100px] lg:mb-0'}>
				<div className={'bg-radiant-orange absolute w-full h-full z-[-1] top-[0] lg:right-[-20%]'}></div>
				<Image
					src={childrenImage}
					alt={'img'}
					className={'lg:block hidden max-h-[578px]'}
				/>
				<Image
					src={childrenImageSmall}
					alt={'img'}
					className={'lg:hidden block object-cover md:max-h-[420px] md:max-w-[322px] max-h-[365px] max-w-[292px] -ml-[20px]'}
				/>
				<Image
					alt={'image'}
					src={ovalYellow}
					className="lg:hidden left-[30%] w-[19px] absolute bottom-[15%]"
				/>
				<Image
					src={ovalRed}
					alt="img"
					className="lg:hidden block absolute right-[10%] bottom-0"
					width={12}
				/>
			</div>
		</section>
	);
}
