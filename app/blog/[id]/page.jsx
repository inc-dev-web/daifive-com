'use client';
import React, { useEffect, useState } from 'react';
import { BackButton } from '@/components/BackButton';
import ovalRed from '@/public/image/Oval-red.png';
import ovalYellow from '@/public/image/Oval-yellow.png';
import Image from 'next/image';
import arrowBlue from '@/public/image/icon/ArrowRightBlue.svg';
import Link from 'next/link';
import FormattedText from 'components/FormattedText';
import { GET } from '@/app/api/route';

export default function Articles({ params }) {
	const baseUrl = process.env.URL;

	const articleId = params.id;
	const [itemsArticles, setItemsArticles] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await GET(`articles?populate=*`);
			const data = await response.json();
			setItemsArticles(data.data);
		};

		fetchData();
	}, []);

	const singleArticle = [itemsArticles[articleId]];

	return (
		<section className="px-4 pt-[39px] pb-[16px] relative lg:px-[50px] lg:pb-[50px] xl:px-[100px]">
			<Image
				src={ovalYellow}
				alt="icon"
				className="w-[18px] h-[18px] lg:w-[29px] lg:h-[29px] absolute top-0 lg:top-[32px] right-[115px] lg:right-[174px] -z-10"
			/>
			<Image
				src={ovalRed}
				alt="icon"
				className="lg:block hidden w-[32px] h-[32px] absolute bottom-[105px] left-[93px] -z-10"
			/>
			<BackButton />
			<div className="flex flex-col pt-4 lg:flex-row-reverse gap-8">
				{singleArticle.map((items, key) => (
					<div key={key} className="flex flex-col flex-1">
						<img
							src={`${baseUrl}${items?.attributes.imagePageTop?.data.attributes.url}`}
							alt="img"
							className="object-cover min-h-[160px] max-h-[228px] mb-6 rounded-[16px] lg:rounded-[24px]"
						/>
						<div
							key={key}
							className="flex-col flex rounded-[32px] px-4 py-6 lg:p-8 bg-white gap-8"
						>
							<div className="flex flex-col gap-[20px] px-4 lg:flex-row lg: items-start justify-between">
								<div className="flex flex-row opacity-30 text-xs lg:text-base text-[#2A333C] gap-4">
									<span>{items?.attributes.dataCreate}</span>
									<span>автор:</span>
								</div>
								<figure className="flex flex-row items-center gap-[6px] lg:gap-[16px] lg:mr-[270px] max-w-[253px]">
									<img
										src={`${baseUrl}${items?.attributes.authorIcon?.data?.attributes.url}`}
										alt="img"
										className="object-cover rounded-[32px] w-[32px] h-[32px] lg:w-[50px] lg:h-[50px]"
									/>
									<figcaption className="text-[#2A333C] flex flex-col opacity-30 gap-1">
										<span className="text-xs lg:text-base font-medium">{items?.attributes.author}</span>
										<span className="text-[10px] lg:text-xs">{items?.attributes.authorTitle}</span>
									</figcaption>
								</figure>
							</div>
							<div>
								<h4 className="text-[#2A333C] font-bold text-xl lg:text-custom32l mb-6">{items?.attributes.title}</h4>
								{/*<FormattedText*/}
								{/*	text={items?.attributes.content}*/}
								{/*	style={`text-[#2A333C] text-sm opacity-70 lg:text-base`}*/}
								{/*/>*/}
								<p className={`text-[#2A333C] text-sm opacity-70 lg:text-base`}>{items?.attributes.content}</p>
								<img
									src={`${baseUrl}${items?.attributes.imageText?.data.attributes.url}`}
									alt="img"
									className="mt-6 min-h-[230px] max-h-[504px] h-full w-full"
								/>
							</div>
						</div>
					</div>
				))}

				<div className="flex flex-row flex-wrap gap-10 mt-10 lg:mt-0 lg:flex-col lg:flex-nowrap lg:h-[1200px] overflow-y-scroll">
					{itemsArticles.map((items, key) => (
						<Link
							key={key}
							href={`${items.id}`}
						>
							<div
								key={key}
								className="flex-col gap-6 max-w-[243px] lg:max-w-[297px]"
							>
								<picture className="flex p-3 bg-white rounded-[24px]">
									<img
										src={`${baseUrl}${items?.attributes.preview?.data.attributes.url}`}
										alt="icon"
										className="max-h-[258px] lg:max-h-[224px] object-cover"
									/>
								</picture>

								<div className="text-[#2A333C] mt-6 px-[20px]">
									<h4 className="text-xl mb-3 font-medium">{items?.attributes.title}</h4>
									<p className="opacity-70 text-xs h-[60px] line-clamp-4 leading-[16px]">{items?.attributes.description}</p>
									<button
										className={'lg:hidden h-[38px] bg-customBlueLight mt-6 w-[270px] flex items-center justify-center rounded-[65px] gap-3'}
									>
										<span className="text-customBlue text-sm">Читати</span>
										<Image
											src={arrowBlue}
											width={18}
											height={18}
											alt={'icon'}
										/>
									</button>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
