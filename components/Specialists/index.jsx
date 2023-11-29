import React from 'react';
import teacherImg from '@/public/image/teacher.png';
import arrowWhite from '@/public/image/icon/Arrow-Right-While.svg';
import Image from 'next/image';

export function Specialists({ prop }) {
	const { titleSpan = 'Довіряй найкращим', isPage = false } = prop || {};

	const teacher = [
		{
			name: 'Ігор Обоссиш',
			position: 'Дефектолог',
		},
		{
			name: 'Ігор Обоссиш',
			position: 'Дефектолог',
		},
		{
			name: 'Ігор Обоссиш',
			position: 'Дефектолог',
		},
		{
			name: 'Ігор Обоссиш',
			position: 'Дефектолог',
		},
		{
			name: 'Ігор Обоссиш',
			position: 'Дефектолог',
		},
		{
			name: 'Ігор Обоссиш',
			position: 'Дефектолог',
		},
	];
	return (
		<section className={'pb-[108px] md:pb-[150px] md:pl-[100px] md:pt-[125px] px-4 md:px-0'}>
			<div className={'flex flex-col md:pr-[243px]'}>
				<span className={'font-bold md:text-base text-xs text-customBlue uppercase'}>{titleSpan}</span>
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
				{teacher.slice(0, isPage ? teacher.length : 3).map((item, index) => (
					<div
						key={index}
						className={`flex h-[382px] md:h-[480px] lg:h-[580px] md:flex-1 w-[343px] md:w-full flex-col ${
							index % 2 === 0 && !isPage ? 'md:mt-[145px] mt-0' : ''
						}`}
					>
						<div
							className={`relative w-full h-[313px] md:h-[475px] lg:h-[475px] rounded-[36px] flex ${
								index % 2 !== 0 ? 'bg-customOrange' : 'bg-customBlue'
							}`}
							// className={`relative w-full md:min-h-[250px] min-h-[313px] max-h-[474px] lg:h-[474px] rounded-[36px] flex ${
							// 	index % 2 !== 0 ? 'bg-customOrange' : 'bg-customBlue'
							// }`}
						>
							<Image
								src={teacherImg}
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
						<h4 className="md:mt-6 mt-4 md:mb-4 mb-3 text-[#2A333C] md:text-3xl text-xl font-bold">{item.name}</h4>
						<span className="text-[#2A333C] md:text-2xl text-base font-normal leading-none">{item.position}</span>
						{/*{isPage && (*/}
						{/*	<button className="h-[56px] w-[316px] text-base leading-none bg-customOrangeLight flex items-center justify-center rounded-[92px] gap-3">*/}
						{/*		<span className="text-customOrange">Дізнатись більше</span>*/}
						{/*		<Image*/}
						{/*			src={arrowOrange}*/}
						{/*			alt={'icon'}*/}
						{/*			className={`hidden`}*/}
						{/*		/>*/}
						{/*	</button>*/}
						{/*)}*/}
					</div>
				))}
			</div>
		</section>
	);
}
