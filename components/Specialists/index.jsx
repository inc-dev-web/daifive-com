'use client';
import React, { useEffect, useState } from 'react';
import arrowWhite from '@/public/image/icon/Arrow-Right-While.svg';
import Image from 'next/image';
import { GET } from '@/app/api/route';
import Link from 'next/link';

export function Specialists() {
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
	console.log('specialists', specialists);
	return (
		<section className={'pb-[108px] md:pb-[150px] md:pl-[100px] md:pt-[125px] px-4 md:px-0'}>
			<div className={'flex flex-col md:pr-[243px]'}>
				<span className={'font-bold md:text-base text-xs text-customBlue uppercase'}>Довіряй найкращим</span>
				<div className={'flex flex-col md:flex-row md:gap-[70px] gap-4 md:mt-[25px] mt-3 mb-20 md:mb-0'}>
					<h4 className="md:text-custom32 text-xl font-bold text-[#2A333C] flex-1">
						Наші спеціалісти <br /> майстри cвоєї справи
					</h4>
					<p className={'text-[#2A333CB2] font-normal md:leading-6 md:text-base text-sx flex-1'}>
						Good specialists are those who are professional, warm and <br /> able to promote children&apos;s development through a creative <br />
						and empathetic approach.
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center md:items-start md:flex-row gap-[78px] md:gap-[34px] md:pl-[23px] md:pr-[73px] h-full md:pt-[60px] lg:pt-[160px]">
				{specialists.slice(0, 3).map((items, index) => (
					<div
						key={index}
						className={`flex h-[382px] md:h-[480px] lg:h-[580px] md:flex-1 w-[343px] md:w-full flex-col ${
							index % 2 === 0 ? 'md:mt-[145px] mt-0' : ''
						}`}
					>
						<Link href={`/team/${items.id}`}>
							<div
								className={`relative w-full h-[313px] xl:h-[475px] rounded-[36px] flex justify-center ${
									index % 2 !== 0 ? 'bg-customOrange' : 'bg-customBlue'
								}`}
							>
								<img
									src={`${baseUrl}${items.attributes.photoSpecialist?.data?.attributes.url}`}
									alt={'image'}
									className="absolute md:w-[392px] bottom-0 object-contain h-[350px] md:h-auto"
								/>
								<div className="bottom-[16px] right-[16px] w-[20px] h-[20px] flex justify-center items-center absolute rounded-[70px] bg-[#FFFFFF1A]">
									<Image
										src={arrowWhite}
										alt={'image'}
										className="md:hidden block w-[20px] h-[20px]"
									/>
								</div>
							</div>
						</Link>
						<h4 className="md:mt-6 mt-4 md:mb-4 mb-3 text-[#2A333C] md:text-3xl text-xl font-bold">{items.attributes.name}</h4>
						<span className="text-[#2A333C] md:text-2xl text-base font-normal leading-none">{items.attributes.position}</span>
					</div>
				))}
			</div>
		</section>
	);
}
