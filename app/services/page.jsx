import React from 'react';
import Image from 'next/image';
import ovalRed from '@/public/image/Oval-red.png';
import ovalYellow from '@/public/image/Oval-yellow.png';
import arrowOrange from '@/public/image/icon/light-orange-arrow.svg';
import ovalGreen from '@/public/image/Oval-greenish.png';
import Link from 'next/link';
import { fetchAllServices } from '@/app/strapi';

export default async function Service() {
	const baseUrl = process.env.URL; 
	const services = await fetchAllServices()

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
			<div className="gap-3 lg:gap-4 my-4 mb-6 lg:mb-12">
				<h1 className="text-2xl lg:text-3xl xl:text-5xl font-bold text-[#2A333C]">Послуги які ми надаємо</h1>
			</div>
			<div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:flex-wrap lg:justify-center xl:justify-start px-4 md:px-6 lg:px-0">
				{services.map((item, index) => (
					<div
						key={index}
						className="w-[343px] lg:w-[392px] flex flex-col items-center "
					>
						<div className={`px-4 md:px-6 pt-4 md:pt-6 rounded-[32px] bg-white md:w-[392px] md:h-[416px] w-full`}>
							<img
								loading='lazy'
								src={`${baseUrl}${item?.attributes.preview.data?.attributes.url}`}
								alt={'image'}
								className="object-cover rounded-[20px] h-[260px] w-[311px] md:w-[343px] md:h-[300px]"
							/>
							<div className="mt-4 md:mt-6 flex justify-center">
								<h4 className="text-[#2A333C] text-xl font-bold md:text-custom32">{item.attributes.titlle}</h4>
							</div>
						</div>
						<Link href={`/services/${item.id}`}>
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
