'use client';
import React, { useState } from 'react';
import ovalRed from '@/public/image/Oval-red.png';
import ovalBlue from '@/public/image/Oval-blue.png';
import ovalYellow from '@/public/image/Oval-yellow.png';
import Image from 'next/image';
import PhoneNumberInput from '@/components/UI/PhoneNumberInput';
import background1 from '@/public/image/backgroundConsultation1.png';
import background from '@/public/image/backgroundConsultation.png';
import backgroundMob from '@/public/image/backgroundConsultationMob.png';
import { Controller, useForm } from 'react-hook-form';
import telegram from '@/public/image/icon/telegram.svg';
import instagram from '@/public/image/icon/instagram.svg';
import youtube from '@/public/image/icon/youtube.svg';

export function Consultation() {
	const [requestSent, setRequestSent] = useState(false);
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		await fetch('/api/contact-form', {
			method: 'POST',
			body: JSON.stringify({
				name: data.name,
				phoneNumber: data.phone,
				message: data.message,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		setRequestSent(true);
	};

	return (
		<section id="consultation">
			<div className="relative h-full lg:h-[638px] mx-3 mb-20 lg:mb:0 lg:m-20 flex items-center justify-center">
				<div className="absolute inset-0 w-full h-full -z-10">
					<Image
						src={background}
						alt="icon"
						layout="fill"
						className="hidden lg:block"
					/>
					<Image
						src={backgroundMob}
						alt="icon"
						layout="fill"
						className="block lg:hidden"
					/>
				</div>
				<div className="absolute -inset-10 w-full -z-20 min-h-[400px]">
					<Image
						src={background1}
						alt="icon"
						layout="fill"
					/>
				</div>
				<Image
					src={ovalRed}
					alt={'img'}
					className="w-[11px] h-[11px] md:w-[21px] md:h-[21px] left-[50%] top-[0%] md:top-[-8%] md:right-[55%] absolute z-10"
				/>
				<Image
					src={ovalBlue}
					alt={'img'}
					className="w-[17px] h-[17px] top-[100%] right-[20%] absolute hidden lg:block"
				/>
				<Image
					src={ovalYellow}
					alt={'img'}
					className="w-[11px] h-[11px] md:w-[21px] md:h-[21px] left-[80%] top-[-9%] md:top-[-11%] md:right-[55%] absolute"
				/>
				<div className="flex flex-col lg:flex-row items-center justify-center px-3 lg:px-6 ">
					<div className="w-full text-white hidden lg:block">
						<h4 className="font-bold text-2xl lg:text-5xl md:text-3xl lg:text-start text-center">Час записатися на консультацію!</h4>
						<a
							href="tel:+380682390389"
							className="text-xl block mt-20 hover:text-red-400 transition-colors duration-200"
						>
							+38 093 148 72 17
						</a>
						<a
							className="block text-xl hover:text-red-400 transition-colors duration-200"
							href="mailto:dai5pyatcentre@gmail.com"
						>
							dai5pyatcentre@gmail.com
						</a>
						<div className="flex space-x-4 mt-12 -ml-2">
							<a
								href="https://t.me/abatherapistM"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
							>
								<span>Telegram</span>
								<Image
									src={telegram}
									alt="icon"
								/>
							</a>
							<a
								href="https://www.instagram.com/dai5pyat/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
							>
								<span>Instagram</span>
								<Image
									src={instagram}
									alt="icon"
								/>
							</a>
							<a
								href="https://www.youtube.com/@ABAtherapistM"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
							>
								<span>YouTube</span>
								<Image
									src={youtube}
									alt="icon"
								/>
							</a>
						</div>
					</div>
					{requestSent ? (
						<div className="w-full text-white text-center py-20">
							<span className="">
								<span className="text-2xl font-bold">Дякуємо за запит!</span> <br />
								Ми звʼяжемось з вами за першої ж можливості!
							</span>
						</div>
					) : (
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="w-full flex gap-4 mb-4 flex-col text-white"
						>
							<h4 className="mt-20 font-bold text-2xl lg:text-5xl md:text-3xl lg:text-start text-center block lg:hidden">
								Час записатися на консультацію!
							</h4>
							<div className="w-full relative">
								<input
									{...register('name', {
										required: 'Це поле обов’язкове',
										minLength: { value: 3, message: 'Мінімум 3 символи' },
										maxLength: { value: 50, message: 'Максимум 50 символів' },
									})}
									placeholder={'Ваше імя'}
									type="text"
									className="placeholder-[#FFFFFF80] outline-none text-white w-full h-[46px] lg:h-[56px] flex rounded-xl bg-[#FFFFFF66] pl-[28px]"
								/>
								{errors.name && <span className="text-red-500 absolute -bottom-5 ml-2">{errors.name.message}</span>}
							</div>
							<div className="w-full relative">
								<Controller
									name="phone"
									control={control}
									rules={{
										required: 'Це поле обов’язкове',
										pattern: {
											value: /^\+380 \d{2} \d{3} \d{4}$/,
											message: 'Невірний формат телефону',
										},
									}}
									render={({ field }) => (
										<PhoneNumberInput
											field={field}
											style={'rounded-xl'}
										/>
									)}
								/>
								{errors.phone && <span className="text-red-500 absolute -bottom-5 ml-2 whitespace-nowrap">{errors.phone.message}</span>}
							</div>
							<textarea
								{...register('message')}
								className="p-2 resize-none placeholder-[#FFFFFF80] outline-none text-white w-full h-[117px] flex rounded-xl bg-[#FFFFFF66] pl-[28px]"
								placeholder={'Напишіть ваше повідомлення'}
							/>
							<button className="mt-0 lg:mt-4 mb-8 w-full lg:w-[231px] h-[48px] lg:h-[56px] bg-[#5B40FF] text-white flex items-center justify-center rounded-xl">
								Надіслати!
							</button>
						</form>
					)}
					<div className="w-full text-white block lg:hidden text-center">
						<a
							href="tel:+380682390389"
							className="text-xl block hover:text-red-400 transition-colors duration-200"
						>
							+380682390389
						</a>
						<a
							className="block text-xl hover:text-red-400 transition-colors duration-200"
							href="dai5pyatcentre@gmail.com"
						>
							dai5pyatcentre@gmail.com
						</a>
						<div className="mt-4 flex flex-col items-center mb-10 opacity-70">
							<a
								href="https://t.me/abatherapistM"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
							>
								<span>Telegram</span>
								<Image
									src={telegram}
									alt="icon"
								/>
							</a>
							<a
								href="https://www.instagram.com/dai5pyat/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
							>
								<span>Instagram</span>
								<Image
									src={instagram}
									alt="icon"
								/>
							</a>
							<a
								href="https://www.youtube.com/@ABAtherapistM"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
							>
								<span>YouTube</span>
								<Image
									src={youtube}
									alt="icon"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
