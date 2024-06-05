'use client';
import Image from 'next/image';
import ovalRed from '@/public/image/Oval-red.png';
import ovalBlue from '@/public/image/Oval-blue.png';
import phone from '@/public/image/icon/phone.svg';
import email from '@/public/image/icon/email.svg';
import location from '@/public/image/icon/location-icon.svg';
import React, { useState } from 'react';
import background from '@/public/image/bgContactUs.png';
import background1 from '@/public/image/bg1ContactUs.png';
import { useRouter } from 'next/navigation';
import PhoneNumberInput from '@/components/UI/PhoneNumberInput';
import { Controller, useForm } from 'react-hook-form';

export default function ContactUs() {
	const router = useRouter();
	const [requestSent, setRequestSent] = useState(false);
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();
	const [phoneNumber, setPhoneNumber] = useState('');

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
		<>
			<button
				className="text-cyan-500 lg:pl-[100px] mt-4"
				onClick={() => router.back()}
			>
				назад
			</button>
			<div className="gap-2 flex flex-col md:flex-row items-center justify-center mt-20 mb-10 px-2 lg:px-0">
				<div className="relative h-[470px] lg:h-full py-14 px-9 lg:p-14">
					<div className="absolute inset-0 w-full h-full min-h-[300px] -z-10 px-2">
						<Image
							src={background1}
							alt="icon"
							layout="fill"
						/>
					</div>
					<div className="absolute -inset-10 w-full -z-20 min-h-[400px]">
						<Image
							src={background}
							alt="icon"
							layout="fill"
						/>
					</div>
					<Image
						src={ovalRed}
						alt={'img'}
						className="w-[11px] h-[11px] md:w-[21px] md:h-[21px] left-[30%] top-[-17%] md:top-[-8%] md:right-[55%] absolute"
					/>
					<Image
						src={ovalBlue}
						alt={'img'}
						className="w-[17px] h-[17px] top-[-10%] right-[25%] md:top-[0%] md:right-[-25%] absolute"
					/>
					{requestSent ? (
						<div className="w-full h-full text-center text-white flex items-center justify-center">
							<span>
								<span className="text-2xl font-bold">Дякуємо за запит!</span> <br />
								Ми звʼяжемось з вами за першої ж можливості!
							</span>
						</div>
					) : (
						<form onSubmit={handleSubmit(onSubmit)}>
							<h1 className="text-white text-2xl font-bold mb-4 sm:text-2xl">Зв’яжіться з нами!</h1>
							<div className="flex w-full gap-4 mb-4 flex-col sm:flex-row">
								<div className="w-full relative">
									<input
										{...register('name', {
											required: 'Це поле обов’язкове',
											minLength: { value: 3, message: 'Мінімум 3 символи' },
											maxLength: { value: 50, message: 'Максимум 50 символів' },
										})}
										placeholder={'Ваше імя'}
										type="text"
										className="placeholder-[#FFFFFF80] outline-none text-white w-full h-[46px] lg:h-[56px] flex rounded-[72px] bg-[#FFFFFF66] pl-[28px]"
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
												setPhoneNumber={setPhoneNumber}
												phoneNumber={phoneNumber}
												field={field}
											/>
										)}
									/>
									{errors.phone && <span className="text-red-500 absolute -bottom-5 ml-2 whitespace-nowrap">{errors.phone.message}</span>}
								</div>
							</div>
							<textarea
								{...register('message')}
								className="p-2 resize-none placeholder-[#FFFFFF80] outline-none text-white w-full h-[117px] flex rounded-[22px] bg-[#FFFFFF66] pl-[28px]"
								placeholder={'Напишіть ваше повідомлення'}
							/>
							<button className="mt-4 w-[220px] lg:w-[231px] h-[48px] lg:h-[56px] text-white flex items-center justify-center bg-customOrange rounded-[92px]">
								Надіслати!
							</button>
						</form>
					)}
				</div>
				<div className="md:w-1/2 hidden md:flex items-center justify-center relative">
					<Image
						src={ovalBlue}
						alt={'img'}
						className="w-[17px] h-[17px] md:w-[27px] md:h-[27px] top-[100%] right-[0%] absolute hidden md:block"
					/>
					<div className="flex flex-col space-y-4">
						<div className="flex items-center space-x-3">
							<div className="bg-slate-100 rounded-full w-20 h-20 mr-5 flex items-center justify-center">
								<Image
									src={email}
									alt="icon"
									width={40}
									height={40}
								/>
							</div>
							<a
								href="mailto:dai5pyatcentre@gmail.com"
								className="text-black text-xl hover:text-orange-500"
							>
								dai5pyatcentre@gmail.com
							</a>
						</div>
						<div className="flex items-center space-x-3">
							<div className="bg-slate-100 rounded-full w-20 h-20 mr-5 flex items-center justify-center">
								<Image
									src={phone}
									alt="icon"
									width={40}
									height={40}
								/>
							</div>
							<a
								href="tel:+380931487217"
								className="text-black text-xl hover:text-orange-500"
							>
								+38 093 148 72 17
							</a>
						</div>
						<div className="flex items-center space-x-3">
							<div className="bg-slate-100 rounded-full w-20 h-20 mr-5 flex items-center justify-center">
								<Image
									src={location}
									alt="icon"
									width={40}
									height={40}
								/>
							</div>
							<span className="text-xl">м. Ніжин, Богдана Хмельницкого 37</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
