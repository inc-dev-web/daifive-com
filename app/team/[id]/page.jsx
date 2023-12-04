'use client';
export const runtime = 'edge';

import React, { useEffect, useState } from 'react';
import { BackButton } from '@/components/BackButton';
import ovalYellow from '@/public/image/Oval-yellow.png';
import Image from 'next/image';
import arrowCheck from '@/public/image/icon/arrowChek.svg';
import Link from 'next/link';
import { GET } from '@/app/api/route';

export default function Resume({ params }) {
	const baseUrl = process.env.URL;
	const [specialists, setSpecialists] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await GET('specialists?populate=*');
			const data = await response.json();
			setSpecialists(data.data);
		};

		fetchData();
	}, []);

	const idSpecialist = params.id;
	const singleSpecialist = [specialists[idSpecialist - 1]];
	const itemSlider = [{}, {}, {}];
	const itemPersonalDetails = [{}, {}, {}, {}];

	return (
		<section className="relative pt-[39px] px-4 lg:px-[50px] xl:px-[100px] xl:pb-[118px]">
			<Image
				src={ovalYellow}
				alt="icon"
				className="absolute w-[18px] h-[18px] -z-10 top-0 md:top-[32px] right-[115px] lg:right-[174px]"
			/>
			<BackButton />
			<div className="lg:mt-8 flex flex-col-reverse desktop:flex-row desktop:gap-8">
				<div className="flex flex-col gap-10 lg:gap-[34px] lg:w-full md:flex-row md:flex-wrap desktop:flex-col desktop:flex-nowrap lg:items-center mt-6 desktop:max-h-[1200px] desktop:overflow-y-scroll">
					{specialists.map((people, key) => (
						<Link
							key={key}
							href={`/team/${people.id}`}
						>
							<div
								key={key}
								className="flex flex-col rounded-[32px] items-start px-4 lg:px-6 pb-6 pt-[60px] lg:bg-white lg:rounded-[32px]"
							>
								<div
									className={`bg-customBlue relative w-[311px] h-[244px] lg:w-[238px] lg:h-[222px] flex justify-center rounded-[20px] ${
										key % 2 !== 0 ? 'bg-customOrange' : 'bg-customBlue'
									}`}
								>
									<img
										src={`${baseUrl}${people?.attributes.photoSpecialist?.data?.attributes.url}`}
										alt={'image'}
										className="lg:hidden absolute w-[238px] h-[280px] bottom-0"
									/>
									<img
										src={`${baseUrl}${people?.attributes.photoSpecialist?.data?.attributes.url}`}
										alt={'image'}
										className="lg:block hidden absolute w-[185px] h-[249px] bottom-0"
									/>
								</div>
								<div className="mt-4 flex justify-start flex-col gap-3">
									<h4 className="text-[#2A333C] text-xl font-bold">{people?.attributes.name}</h4>
									<span className="text-[#2A333C] text-base">{people?.attributes.position}</span>
								</div>
							</div>
						</Link>
					))}
				</div>
				<div>
					{singleSpecialist.map((items, key) => (
						<div key={key} className="flex flex-col md:flex-row px-4 md:px-6 pb-6 pt-[60px] mt-6 bg-white rounded-[32px] items-center md:gap-8">
							<div
								className={`relative w-[311px] md:w-[344px] h-[244px] md:h-[390px] flex justify-center rounded-[20px] ${
									idSpecialist % 2 === 0 ? 'bg-customOrange' : 'bg-customBlue'
								}`}
							>
								<img
									src={`${baseUrl}${items?.attributes.photoSpecialist?.data?.attributes.url}`}
									alt={'image'}
									className="md:hidden absolute w-[238px] h-[280px] lg:w-[308px] lg:h-[412px] bottom-0"
								/>
								<img
									src={`${baseUrl}${items?.attributes.photoSpecialist?.data?.attributes.url}`}
									alt={'image'}
									className="md:block hidden absolute w-[238px] h-[280px] md:w-[308px] md:h-[412px] bottom-0"
								/>
							</div>
							<div className="mt-6 flex flex-col md:flex-1">
								<div
									key={key}
									className="flex flex-col"
								>
									<span className="text-customBlue text-sm lg:text-base">{items?.attributes.position}</span>
									<h4 className="text-[#2A333C] text-xl font-bold my-[6px] lg:my-[8px] lg:text-3xl xl:text-custom40">
										{items?.attributes.name}
									</h4>
									<span className="opacity-70 text-sm lg:text-base text-[#2A333C]">2I’m always trying to them always trying</span>
									<p className="opacity-70 text-sm lg:text-base  text-[#2A333C] mt-4 lg:mt-8">{items?.attributes.description}</p>
								</div>
								<button className="mt-8 lg:mt-10 rounded-[92px] w-[270px] lg:w-[286px] h-[48px] lg:h-[56px] items-center justify-center font-bold text-sm lg:text-base text-white bg-customOrange customBoxShadowOrange">
									Записатися
								</button>
							</div>
						</div>
					))}
					<div className="lg:overflow-visible overflow-x-scroll h-[280px] md:h-[261px] flex my-10 md:my-8 lg: gap-4 items-center">
						<div className="flex gap-8 px-4 md:px-0">
							{itemSlider.map((item, key) => (
								<div
									key={key}
									className="p-4 md:p-4 lg:p-6 rounded-[16px] md:rounded-[24px] flex h-[200px] md:h-[261px] w-[200px] md:w-[286px] md:bg-white relative"
								>
									<div className="rounded-[16px] object-contain bg-[#F3F6FA] w-full h-full"></div>
								</div>
							))}
						</div>
					</div>
					<div className="px-4 md:px-6 py-6 flex flex-col gap-8 lg:gap-10 bg-white rounded-[32px]">
						<div>
							<span className="text-customBlue text-sm lg:text-base">Освіта</span>
							<h4 className="text-[#2A333C] text-xl font-bold mt-[6px] lg:text-custom32">Важлива інформейшн</h4>
							<p className="opacity-70 text-sm text-[#2A333C] mt-[14px] lg:text-base">
								I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas I’m always trying to
								think of new and interesting business ideas. I generally try to come up with ideas.
							</p>
						</div>
						<div className="gap-8 flex flex-col md:flex-row-reverse md:items-center md:justify-end">
							<div className="flex flex-col lg:justify-center gap-[14px] flex-1">
								<h4 className="text-[#2A333C] text-xl font-bold mb-[18px] lg:text-2xl">Персональні деталі</h4>
								{singleSpecialist.map((items, categoryIndex) => (
									<React.Fragment key={categoryIndex}>
										<div className="flex-1 flex flex-row justify-start">
											<div className="gap-3 flex items-center w-[120px] lg:max-w-[196px] lg:w-full">
												<div className="bg-[#007EFF1A] w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] rounded-[32px]"></div>
												<span className="text-[#2A333C] text-[11px] opacity-30 lg:text-base">Освіта</span>
											</div>
											<Image
												src={arrowCheck}
												alt="icon"
												className="mx-4"
											/>
											<span className="text-[#2A333C] text-xs lg:text-base">{items?.attributes.education}</span>
										</div>
										<div className="flex-1 flex flex-row justify-start">
											<div className="gap-3 flex items-center w-[120px] lg:max-w-[196px] lg:w-full">
												<div className="bg-[#007EFF1A] w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] rounded-[32px]"></div>
												<span className="text-[#2A333C] text-[11px] opacity-30 lg:text-base">Вік</span>
											</div>
											<Image
												src={arrowCheck}
												alt="icon"
												className="mx-4"
											/>
											<span className="text-[#2A333C] text-xs lg:text-base">{items?.attributes.age}</span>
										</div>
										<div className="flex-1 flex flex-row justify-start">
											<div className="gap-3 flex items-center w-[120px] lg:max-w-[196px] lg:w-full">
												<div className="bg-[#007EFF1A] w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] rounded-[32px]"></div>
												<span className="text-[#2A333C] text-[11px] opacity-30 lg:text-base">Досвід</span>
											</div>
											<Image
												src={arrowCheck}
												alt="icon"
												className="mx-4"
											/>
											<span className="text-[#2A333C] text-xs lg:text-base">{items?.attributes.experience}</span>
										</div>
									</React.Fragment>
								))}
							</div>
							<div className="grid grid-cols-2 md:max-w-[368px] gap-4 flex-1">
								{itemPersonalDetails.map((item, key) => (
									<div
										key={key}
										className="min-h-[168px] max-h-[176px] bg-[#F3F6FA] w-full rounded-[16px] max-w-[176px]"
									></div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
