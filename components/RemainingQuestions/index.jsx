'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import childrenImage from '@/public/image/childrenTeacher.png';
import childrenImageSmall from '@/public/image/childrenTeacherSmall.png';
import ovalYellow from '@/public/image/Oval-yellow.png';
import ovalBlue from '@/public/image/Oval-blue.png';
import ovalRed from '@/public/image/Oval-red.png';

export function RemainingQuestions() {
	const items = [
		{
			title: 'З якого віку можна займатися? ',
			description: 'Ми займаємося з дітьми з 1.5 до 18 років.',
		},
		{
			title: 'Дитина не розмовляє, з чого краще почати? ',
			description: 'В першу чергу, ви маєте звернутись на загальну діагностичну консультацію до куратора Центру, на якій вас зорієнтують с чого вам почати взалежності від хароактеру порушень, та особлиовстей дитини.',
		},
		{
			title: 'Яка терапія краще?',
			description: 'Найкращим для вашої дитини, буде відвідування різних спеціалістів. Тобто системне там мультидисциплінарне втручання яке допоможе компенсувати та виправити всі дефіцити її розвитку. Тобто найркращим буде відвідувати різні терапії одночасно.',
		},
		{
			title: 'У вас групові чи індивідуальні зайняття?',
			description: 'Більшість наших занятть проходить індивідуально, але ми маємо і групові зайняття для дошкільнят, групп раннього розвитку і школярів.',
		},
		{
			title: 'До вас ходять тільки діти з аутизмом? ',
			description: 'Ні. До нас звертаються діти з різними порушеннями психічного і мовленнєвого розвитку:\n\n- аутизм (всі різновидності)\n- РДУГ\n- Синдром Дауна\n- ДЦП\n- ЗМР\n- ЗПР\n- всі види логопедичних порушень (такі як діспраксія, \n- Діти які маюсть проблеми з навчанням, соціалізацією, і тд.',
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);

	const handleItemClick = (index) => {
		setActiveIndex(index);
	};
	return (
		<section className="pt-[93px] px-4 lg:h-[764px] lg:px-[50px] lg:py-[100px] xl:px-[100px] xl:py-[150px] flex flex-col lg:flex-row items-center lg:justify-between relative">
			<Image
				alt={'image'}
				src={ovalYellow}
				className={'md:hidden block left-[40%] w-[19px] md:w-[29px] absolute top-[5%] md:right-[44%]'}
			/>
			<Image
				src={ovalBlue}
				alt={'image'}
				width={17}
				height={17}
				className="md:hidden block absolute bottom-[19%] right-[20%]"
			/>
			<div className={'gap-3 lg:gap-4 flex flex-col lg:mt-12 lg:w-[45%] w-full'}>
				<div className="flex justify-center flex-col items-start relative">
					<Image
						src={ovalRed}
						alt="img"
						className="md:hidden block absolute right-0 top-0"
						width={12}
					/>
					<span className="font-bold text-xs text-customBlue uppercase">Залишились питання?</span>
					<h4 className="text-xl font-bold text-[#2A333C] mt-4 mb-6 text-center">Відповіді на питання</h4>
				</div>
				{items.map((item, index) => (
					<div
						key={index}
						className={'lg:max-w-[498px]'}
					>
						<div
							className={`customHover cursor-pointer hover:bg-customOrange gap-2 w-full md:gap-4 flex items-center justify-between bg-customLightGray rounded-[94px] h-[80px] px-[25px] ${
								index === activeIndex ? 'bg-customOrange' : 'opacity-80'
							}`}
							onClick={() => handleItemClick(index)}
						>
							<div className={'flex items-center justify-start gap-6 w-full'}>
								<div
									className={`w-[28px] h-[28px] lg:w-[48px] lg:h-[48px] rounded-[50%] flex items-center justify-center lg:text-2xl text-xl font-bold leading-none ${
										index === activeIndex ? 'bg-[#FFFFFF33] text-white' : 'bg-[#2A333C33] opacity-30 text-[#2A333C]'
									}`}
								></div>
								<span
									className={`lg:text-2xl md:text-xl text-base font-bold text-[#2A333C] ${
										index === activeIndex ? 'text-[#FAFAFA] transition-opacity' : 'opacity-30'
									}`}
								>
									{item.title}
								</span>
							</div>
							<div className={'flex justify-center items-center w-[18px] h-[18px] md:w-[32px] md:h-[32px] '}>
								<svg
									viewBox="0 0 32 32"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									className={` ${index === activeIndex ? 'opacity-100 stroke-[#FAFAFA]' : 'stroke-[#2A333C] opacity-30'}`}
								>
									<path
										d="M9.33203 22.6668L22.6654 9.3335M22.6654 9.3335H11.9987M22.6654 9.3335V20.0002"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</div>
						<div className={`mt-4 md:text-base text-xs font-normal text-[#2A333CB3] px-[25px] ${index === activeIndex ? 'flex' : 'hidden'}`}>
							{item.description}
						</div>
					</div>
				))}
			</div>
			<div className={'w-full lg:w-2/4 relative flex justify-center mt-8 lg:mt-0 mb-[100px] lg:mb-0'}>
				<div className={'bg-radiant-orange absolute w-full h-full z-[-1] top-[0] lg:right-[-20%]'}></div>
				<Image
					src={childrenImage}
					alt={'img'}
					className={'lg:block hidden max-h-[578px]'}
				/>
				<Image
					src={childrenImageSmall}
					alt={'img'}
					className={'lg:hidden block object-cover md:max-h-[420px] md:max-w-[322px] max-h-[365px] max-w-[292px] -ml-[20px]'}
				/>
				<Image
					alt={'image'}
					src={ovalYellow}
					className="lg:hidden left-[30%] w-[19px] absolute bottom-[15%]"
				/>
				<Image
					src={ovalRed}
					alt="img"
					className="lg:hidden block absolute right-[10%] bottom-0"
					width={12}
				/>
			</div>
		</section>
	);
}
