import React from 'react';
import { BackButton } from '@/components/BackButton';
import Image from 'next/image';
import ovalRed from '@/public/image/Oval-red.png';
import ovalYellow from '@/public/image/Oval-yellow.png';
import ovalBlue from '@/public/image/Oval-blue.png';
import marker from '@/public/image/icon/marger-orange.svg';
import phone from '@/public/image/icon/phone.svg';
import email from '@/public/image/icon/email.svg';
import map from '@/public/image/map.png';

export default function Contact() {
	const items = [
		{ title: 'Адреса', description: 'м. Ніжин, вул Василя Стуса 54а', icon: marker },
		{ title: 'Телефон', description: '+380 96 123 45 67', icon: phone },
		{ title: 'Email', description: 'dobirka@gmail.com', icon: email },
	];
	return (
		<section className="relative px-4 pb-4 lg:pb-[23px] lg:pt-[50px] xl:px-[100px]">
			<Image
				src={ovalRed}
				alt="icon"
				className="absolute w-[14px] lg:w-[21px] lg:h-[21px] h-[14px] top-[44px] lg:top-[121px] right-[137px] lg:right-[164px] -z-10"
			/>
			<Image
				src={ovalBlue}
				alt="icon"
				className="lg:block hidden absolute w-[19px] h-[19px] top-[102px] right-[336px] -z-10"
			/>
			<Image
				src={ovalYellow}
				alt="icon"
				className="lg:hidden absolute w-[22px] h-[22px] top-[62px] right-[41px] -z-10"
			/>
			<BackButton />
			<div className="gap-3 lg:gap-4 my-4 mb-6 lg:mb-12">
				<h1 className="text-2xl lg:text-3xl xl:text-5xl font-bold text-[#2A333C]">Локація та контакти</h1>
			</div>
			<ul className="flex flex-col gap-3 lg:gap-6 mb-6 xl:flex-row lg:justify-start xl:gap-[93px]">
				{items.map((item) => (
					<li className="flex rounded-[60px] bg-[#FFF] lg:bg-inherit gap-[10px] lg:gap-[19px] p-3 lg:p-0 items-center">
						<div className="w-[32px] h-[32px] lg:w-[64px] lg:h-[64px] bg-[#F3F6FA] rounded-[41px] flex justify-center items-center">
							<Image
								src={item.icon}
								alt="icon"
								className="w-[17px] h-[17px] lg:w-[32px] lg:h-[32px]"
							/>
						</div>
						<div className="flex flex-col gap-[7px]">
							<span className="text-[#2A333C] text-xs lg:text-base">{item.title}</span>
							<span className="text-[#2A333C] text-base lg:text-xl 2xl:text-2xl lg:leading-[120%] lg:tracking-[-0.48px]">{item.description}</span>
						</div>
					</li>
				))}
			</ul>
			<div className="bg-[#FFF] rounded-[32px] p-4 lg:p-8 h-[520px]">
				<Image
					src={map}
					alt="map"
					className="rounded-[24px] lg:rounded-[32px] h-full object-cover"
				/>
			</div>
		</section>
	);
}
