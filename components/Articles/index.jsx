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
			<div className={'md:grid md:grid-cols-2 gap-8 flex flex-col items-center md:flex-none'}>
				{articles.slice(0, 4).map((item, index) => (
					<figure
						className={'flex flex-col md:flex-row gap-4'}
						key={index}
					>
						<div className={'bg-white p-4 rounded-3xl w-[343px] md:w-full'}>
							<img
								src={`${baseUrl}${item?.attributes.preview?.data?.attributes.url}`}
								alt={'img'}
								className={'object-cover md:w-full md:h-full h-[258px] w-[319px]'}
							/>
						</div>
						<figcaption className={'flex justify-center items-start flex-col max-w-[300px]'}>
							<h6 className={'text-xl font-medium mb-3 text-[#2A333C]'}>{item.attributes.title}</h6>
							<p className={'lg:text-sm text-xs text-[#2A333C] opacity-70 max-w-[350px] lg:max-w-none h-[60px] line-clamp-3'}>
								{item.attributes.description}
							</p>
							<Link href={`/blog/${item.id}`}>
								<button
									className={'h-[38px] bg-customBlueLight mt-6 w-[270px] md:w-[182px] flex items-center justify-center rounded-[65px] gap-3'}
								>
									<span className="text-customBlue text-sm">Read</span>
									<Image
										src={arrowBlue}
										width={18}
										height={18}
										alt={'icon'}
									/>
								</button>
							</Link>
						</figcaption>
					</figure>
				))}
			</div>
		</section>
	);
}
