'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import background4 from '@/public/image/public-organization/background4.png';
import heart from '@/public/image/public-organization/heart.png';
import Link from 'next/link';
import download from '@/public/image/icon/download.svg';
import { fetchDocument } from '@/app/strapi';
import { usePathname } from 'next/navigation';

const HelpCenter = ({ style }) => {
	const baseUrl = process.env.URL;
	const pathname = usePathname();
	const [fileUrl, setFileUrl] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const getDoc = await fetchDocument();
			const fileUrl = getDoc?.attributes.document.data.attributes.url;
			const fullUrl = `${baseUrl}${fileUrl}`;
			setFileUrl(fullUrl);
		};
		fetchData();
	}, []);

	const handleDownload = async (e) => {
		e.preventDefault();
		const response = await fetch(fileUrl);
		const blob = await response.blob();
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute('download', 'document.pdf');
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className={`${style} mx-2`}>
			<section className="relative w-full min-h-[586px] lg:min-h-[658px] mt-14 lg:mt-14 flex items-center justify-center">
				<div className="absolute inset-0 w-full h-full -z-10 ">
					<Image
						src={background4}
						alt="icon"
						layout="fill"
						className="object-cover rounded-xl"
					/>
				</div>
				<div className="gap-4 relative flex flex-col items-center text-center bg-opacity-70 bg-blue-400 backdrop-blur-sm rounded-2xl mx-2 max-w-[812px]">
					<div className="absolute bg-white rounded-full w-20 h-20 p-5 -top-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
						<Image
							src={heart}
							alt="icon"
							width={40}
							height={40}
						/>
					</div>
					<h4 className="text-white font-bold text-2xl mt-14">Ви можете допомогти нашому центру</h4>
					<div className="bg-blue-400 rounded-3xl text-white text-xs max-w-[90%] lg:max-w-[50%] p-4">
						Подаруйте світло майбутньому наших дітей. Ваша пожертва - це ключ до їхнього щасливого та успішного життя. Приєднуйтеся до нас, щоб
						разом забезпечити їм необхідну підтримку та можливість розвитку в суспільстві. З деталями допомоги ви можете ознайомитись нижче у
						презентації.
					</div>
					<button className="mx-5 flex justify-center items-center bg-customOrange rounded-[60px] text-base h-[56px] w-[226px] lg:w-[286px] text-[#FAFAFA] customBoxShadowOrange">
						<Link href={pathname === '/public-organization' ? '#payments' : '/public-organization'}>Підтримати організацію</Link>
					</button>
					<a
						href="#"
						onClick={handleDownload}
						className="mb-10 gap-2 flex items-center"
					>
						<Image
							src={download}
							alt={'icon'}
							className={'inline-block'}
						/>
						<span className="inline-block text-white">Завантажити деталі</span>
					</a>
				</div>
			</section>
		</div>
	);
};

export default HelpCenter;
