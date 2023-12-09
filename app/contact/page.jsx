import React from 'react';
import Image from 'next/image';
import ovalRed from '@/public/image/Oval-red.png';
import ovalYellow from '@/public/image/Oval-yellow.png';
import ovalBlue from '@/public/image/Oval-blue.png';
import marker from '@/public/image/icon/point-orange.svg';
import phone from '@/public/image/icon/phone.svg';
import email from '@/public/image/icon/email.svg';

export default function Contact() {
	const items = [
		{ title: 'Адреса', description: 'м. Ніжин, Богдана Хмельницкого 37', icon: marker },
		{ title: 'Телефон', description: '+380931487217', icon: phone },
		{ title: 'Email', description: 'dai5pyatcentre@gmail.com', icon: email },
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
			<div className="gap-3 lg:gap-4 my-4 mb-6 lg:mb-12">
				<h1 className="text-2xl lg:text-3xl xl:text-5xl font-bold text-[#2A333C]">Локація та контакти</h1>
			</div>
			<ul className="flex flex-col gap-3 lg:gap-6 mb-6 xl:flex-row lg:justify-start xl:gap-[93px]">
				{items.map((item, key) => (
					<li
						key={key}
						className="flex rounded-[60px] bg-[#FFF] lg:bg-inherit gap-[10px] lg:gap-[19px] p-3 lg:p-0 items-center"
					>
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
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d156.78366024268573!2d31.8932594!3d51.0431427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac0c9ebd2620461b%3A0x46809f62d86246ec!2z0KbQtdC90YLRgCDRgNC-0LfQstC40YLQutGDINC00ZbRgtC10Lkg0JTQsNC5INC_4oCZ0Y_RgtGM!5e0!3m2!1suk!2sua!4v1702143976116!5m2!1suk!2sua"
					style={{ border: '0' }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="w-full h-full rounded-[24px] lg:rounded-[32px]"
				></iframe>
			</div>
		</section>
	);
}
