'use client';

import { useEffect, useState } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';

import Image from 'next/image';
import Link from 'next/link';

import arrowUp from '@/public/image/icon/arrowUpRightOrange.svg';
import arrow from '@/public/image/icon/arrowDown.svg';
import arrowUpWhite from '@/public/image/icon/arrowUpWhite.svg';

export default function OtherServicesDropdown({ items, currentServiceId }) {
	const { width: screenWidth } = useWindowSize();
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		if (screenWidth < 1024 || !isOpen) {
			setIsOpen(!isOpen);
		}
	};

	useEffect(() => {
		setIsOpen(screenWidth >= 1024);
	}, [screenWidth]);

	if (!items || items.length === 0) return <></>;

	return (
		<div className={`w-full lg:max-w-[360px] bg-white rounded-[23px] lx:p-24 mt-6 mb-8 lg:mt-0`}>
			<div
				className={`lg:hidden px-3 text-sm flex items-center h-[48px] rounded-[84px] bg-white justify-between`}
				onClick={toggleDropdown}
			>
				<div className="flex gap-3 justify-center items-center">
					<div className="bg-customOrangeLight w-[24px] h-[24px] flex justify-center items-center rounded-[32px]">
						<Image
							src={arrowUp}
							alt="icon"
							className="object-center max-h-[343px] min-h-[230px] h-full"
						/>
					</div>
					<span className={`text-customOrange min-w-[268px] text-sm xl:text-base font-medium`}>
						{items ? `${items[currentServiceId].attributes?.titlle}` : 'Category Name'}
					</span>
				</div>
				<Image
					src={arrow}
					alt={'icon'}
					width={24}
					height={24}
				/>
			</div>
			{isOpen && (
				<ul className="flex gap-1 flex-col text-sm xl:text-base lg:p-6">
					{items.map((item, index) => (
						<li key={index}>
							<Link
								className={`gap-[10px] flex hover:bg-[#F3F6FA] hover:text-customOrange hover:font-medium rounded-[70px] h-[48px] pl-[10px] items-center text-[#2a3340] ${
									currentServiceId === item?.id ? 'bg-customOrangeLight' : ''
								}`}
								href={`/services/${item?.id}`}
							>
								<div
									className={`w-[24px] h-[24px] flex justify-center items-center rounded-[32px] ${
										currentServiceId === item?.id ? 'bg-customOrangeLight' : 'bg-[#00000019]'
									}`}
								>
									<Image
										src={currentServiceId === item?.id ? arrowUp : arrowUpWhite}
										alt="icon"
									/>
								</div>
								<span className={`${currentServiceId === item?.id ? 'text-customOrange bg-customOrangeLight' : 'text-[#2a333c99]'}`}>
									{item?.attributes.titlle}
								</span>
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
