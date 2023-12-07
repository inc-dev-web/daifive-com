'use client';
import Image from 'next/image';
import arrowBlue from '@/public/image/icon/ArrowRightBlue.svg';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { GET } from '@/app/api/route';

export function Articles() {
	const baseUrl = process.env.URL;
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const response = await GET('articles?populate=*');
			const data = await response.json();
			setArticles(data.data);
		}
		fetchData();
	}, []);
	return (
		<section className="px-4 bg-[#F3F6FA] rounded-[150px] flex justify-center flex-col pt-[100px] pb-[147px] lg:py-[150px] lg:px-[100px]">
			<div className={'lg:gap-4 gap-[14px] flex justify-center items-center flex-col'}>
				<span className="font-bold lg:text-base text-xs text-customBlue uppercase">Що почитати?</span>
				<h4 className="lg:text-custom32 text-xl font-bold text-[#2A333C] mt-4 mb-12">Ми написали для вас цікаві статті</h4>
			</div>
			<div className="mt-4 flex flex-col lg:flex-row lg:flex-wrap gap-8 lg:mt-0 items-start lg:justify-center">
				{articles.map((item, index) => (
					<div
						className="flex flex-col xl:flex-row items-start xl:w-[calc(50%-32px)] xl:max-h-[247px]"
						key={index}
					>
						<picture className="accent-amber-800 bg-white p-3 rounded-[24px] h-[282px] max-w-[286px] lg:h-[247px]">
							<img
								src={`${baseUrl}${item?.attributes.preview?.data.attributes.url}`}
								alt="img"
								className="object-cover rounded-[16px] w-[319px] h-[258px] lg:w-[255px] lg:h-[215px]"
							/>
						</picture>
						<div className="flex flex-col px-5 lg:px-0 lg:pl-5 gap-3 flex-1 xl:h-[247px] xl:pt-[25px] w-[303px]">
							<div className="mt-6 xl:mt-0 flex flex-col gap-3 h-full min-h-[85px]">
								<h4 className="text-[#2A333C] text-xl xl:text-3xl font-medium lg:font-bold">{item.attributes.title}</h4>
								<p className="opacity-70 text-[#2A333C] text-xs xl:text-base line-clamp-2 xl:line-clamp-3">{item.attributes.description}</p>
							</div>
							<div className="w-full flex items-start lg:justify-start">
								<button className="bg-customBlueLight w-[270px] xl:w-[182px] h-[48px] mt-3 rounded-[72px] flex items-center justify-center gap-2">
									<Link
										key={index}
										href={`blog/${item.id}`}
										className="flex items-center justify-center gap-2"
									>
										<span className="text-customBlue text-sm xl:text-lg">Read</span>
										<Image
											src={arrowBlue}
											width={18}
											height={18}
											alt={'icon'}
										/>
									</Link>
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
