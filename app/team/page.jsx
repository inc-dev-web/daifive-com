'use client';
import React, { useEffect, useState } from 'react';
import { BackButton } from '@/components/BackButton';
import arrowOrange from '@/public/image/icon/light-orange-arrow.svg';
import Image from 'next/image';
import ovalRed from '@/public/image/Oval-red.png';
import ovalYellow from '@/public/image/Oval-yellow.png';
import Link from 'next/link';
import { GET } from '@/app/api/route';

export default function Specialist() {
	const baseUrl = process.env.URL;
	const [specialists, setSpecialists] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const response = await GET('specialists?populate=*');
			const data = await response.json();
			setSpecialists(data.data);
		}
		fetchData();
	}, []);
	console.log('@@@', specialists[1]?.attributes);
	return (
		<section className="px-4 pt-[39px] lg:pt-[50px] pb-[56px] lg:px-[100px] relative">
			<Image
				src={ovalRed}
				alt="icon"
				className="absolute w-[14px] h-[14px] top-[16px] lg:top-[66px] right-[144px] lg:right-[244px] -z-10"
			/>
			<Image
				src={ovalYellow}
				alt="icon"
				className="absolute w-[22px] h-[22px] top-[34px] lg:top-[84px] right-[48px] lg:right-[148px] -z-10"
			/>
			<BackButton />
			<div className="gap-3 lg:gap-4 my-4 mb-6 lg:mb-12">
				<h1 className="text-2xl lg:text-3xl xl:text-5xl font-bold text-[#2A333C]">Наші спеціалісти</h1>
			</div>
			<div className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:flex-wrap lg:justify-center xl:justify-start">
				{specialists.map((specialist, index) => (
					<div
						key={index}
						className="flex px-4 pt-[64px] pb-6 flex-col justify-center items-center bg-white rounded-[32px]"
					>
						<div
							className={`flex justify-center relative w-[313px] h-[313px] md:w-[344px] md:h-[394px] rounded-[24px] md:rounded-[29px] ${
								index % 2 !== 0 ? 'bg-customOrange' : 'bg-customBlue'
							}`}
						>
							<img
								src={`${baseUrl}${specialist.attributes.photoSpecialist?.data?.attributes.url}`}
								alt={'image'}
								className="absolute w-[258px] h-[351px] md:w-[308px] md:h-[442px] bottom-0"
							/>
						</div>
						<div className="flex flex-col items-center justify-center mt-4 md:mt-6 gap-[9px] w-full">
							<h4 className="text-[#2A333C] text-xl font-bold md:text-custom32">{specialist.attributes.name}</h4>
							<p className="text-base text-[#2A333C] md:text-2xl">{specialist.attributes.position}</p>
						</div>
						<Link href={`/team/${specialist.id}`}>
							<button className="flex justify-center items-center gap-2 bg-customOrangeLight rounded-[92px] w-[270px] md:w-[316px] h-[48px] md:h-[56px] mt-6 md:mt-8">
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
