import React from 'react';
import Image from 'next/image';
import ovalRed from '@/public/image/Oval-red.png';
import ovalYellow from '@/public/image/Oval-yellow.png';
import { BackButton } from '@/components/BackButton';
import arrowOrange from '@/public/image/icon/light-orange-arrow.svg';
import service1 from '@/public/image/service/service1.png';
import service2 from '@/public/image/service/service2.png';
import service3 from '@/public/image/service/service3.png';
import service4 from '@/public/image/service/service4.png';
import service5 from '@/public/image/service/service5.png';
import service6 from '@/public/image/service/service6.png';
import ovalGreen from '@/public/image/OvalGreenish.svg';
import Link from 'next/link';

export default function Service() {
	const service = [
		{
			name: 'ABA терапія',
			image: service1,
		},
		{
			name: 'Психологія',
			image: service2,
		},
		{
			name: 'Логопед',
			image: service3,
		},
		{
			name: 'Масажист',
			image: service4,
		},
		{
			name: 'Сенсорний педагог',
			image: service5,
		},
		{
			name: 'Томатіс',
			image: service6,
		},
	];
	return (
		<section className="px-4 pt-[39px] lg:pt-[50px] pb-[56px] lg:px-[100px] relative">
			<Image
				src={ovalRed}
				alt="icon"
				className="md:hidden absolute w-[14px] h-[14px] top-[16px] lg:top-[66px] right-[144px] lg:right-[244px] -z-10"
			/>
			<Image
				src={ovalYellow}
				alt="icon"
				className="md:hidden absolute w-[22px] h-[22px] top-[34px] lg:top-[84px] right-[48px] lg:right-[148px] -z-10"
			/>
			<Image
				src={ovalRed}
				alt="icon"
				className="lg:block hidden absolute w-[18px] h-[18px] bottom-[390px] right-[40px] -z-10"
			/>
			<Image
				src={ovalRed}
				alt="icon"
				className="lg:block hidden absolute w-[29px] h-[29px] top-[73px] right-[200px] -z-10"
			/>
			<Image
				src={ovalGreen}
				alt="icon"
				className="lg:block hidden absolute w-[26px] h-[26px] top-[116px]  right-[472px] -z-10"
			/>
			<BackButton />
			<div className="gap-3 lg:gap-4 my-4 mb-6 lg:mb-12">
				<h1 className="text-2xl lg:text-3xl xl:text-5xl font-bold text-[#2A333C]">Послуги які ми надаємо</h1>
			</div>
			<div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:flex-wrap lg:justify-center xl:justify-start">
				{service.map((item, index) => (
					<div
						key={index}
						className="max-w-[392px] flex flex-col items-center"
					>
						<div className={`rounded-[32px] bg-white p-[16px]`}>
							<Image
								src={item.image}
								alt={'image'}
								className="object-contain rounded-[20px]"
							/>
							<div className="mt-4 md:mt-6 flex justify-center">
								<h4 className="text-[#2A333C] text-xl font-bold md:text-custom32">{item.name}</h4>
							</div>
						</div>
						<Link href={`/services/${index}`}>
							<button className="flex justify-center items-center gap-2 bg-customOrangeLight rounded-[92px] w-[270px] md:w-[316px] h-[48px] md:h-[56px] mt-4 md:mt-8 md:mb-2">
								<span className="text-customOrange font-bold text-sm md:text-base">Дізнатись більше</span>
								<Image
									src={arrowOrange}
									alt={'icon'}
									className="w-[18px] h-[18px] md:w-[22.333px] md:h-[22.333px]"
								/>
							</button>
						</Link>
					</div>
				))}
			</div>
		</section>
	);
}
