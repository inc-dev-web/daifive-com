'use client';
import React, { useState } from 'react';
import ovalRed from '@/public/image/Oval-red.png';
import ovalBlue from '@/public/image/Oval-blue.png';
import ovalYellow from '@/public/image/Oval-yellow.png';
import Image from 'next/image';

export function Consultation() {
	const [phoneNumber, setPhoneNumber] = useState('');
	const formatPhoneNumber = (inputValue) => {
		const cleanedInput = inputValue.replace(/\D/g, '');

		if (cleanedInput.length < 3) {
			return `+380${cleanedInput}`;
		} else {
			return `+380 ${cleanedInput.slice(3, 6)} ${cleanedInput.slice(6, 9)} ${cleanedInput.slice(9, 12)}`;
		}
	};

	const handleInputChange = (e) => {
		const inputValue = e.target.value;
		setPhoneNumber(formatPhoneNumber(inputValue));
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Backspace' || e.key === 'Delete') {
			e.preventDefault();
			if (phoneNumber.length > 4) {
				setPhoneNumber(phoneNumber.slice(0, -1));
			}
		}
	};

	const handleInputFocus = () => {
		if (!phoneNumber) {
			setPhoneNumber('+380');
		}
	};

	return (
		<section
			id="consultation"
			className="flex h-[935px] md:h-[764px] px-4 lg:pl-[23px] xl:pl-[73px] items-center justify-start relative"
		>
			<div className="-z-10 lg:flex hidden bg-radiant-blue absolute rotate-[-120deg] top-[-30%] right-[0%] md:w-[700px] md:h-[700px]"></div>
			<div className="md:px-0 pb-[150px] md:pb-0 md:bg-childConsultant bg-childConsultantSmall relative h-full ms:w-[343px] w-full lg:w-[1267px] bg-contain bg-center bg-no-repeat flex md:flex-row flex-col items-center justify-center md:justify-start">
				<div className="max-w-[343px] md:max-w-max px-[40px] -mt-[100px] sm:-mt-[50px] md:px-0 md:-mt-0 md:w-[60%] flex items-start md:items-center justify-center flex-col md:pl-[100px] md:gap-[40px] md:mb-[-15px]">
					<h4 className="lg:text-5xl md:text-3xl text-xl lg:leading-[58px] font-bold text-white mb-4 lg:mb-0">Час записатися на консультацію!</h4>
					<p className="md:hidden flex text-sm text-[#FFFFFFB3] max-w-[195px] text-left mb-6">Текст який стисло описує організацію, та її цінності</p>
					<div className=" md:gap-4 gap-6 flex flex-col md:flex-row md:items-start items-center justify-start w-full">
						<input
							placeholder={'+38 0__ ___ __ __'}
							type="text"
							value={phoneNumber}
							onChange={handleInputChange}
							onKeyDown={handleKeyDown}
							onFocus={handleInputFocus}
							className="placeholder-[#FFFFFF80] outline-none text-white w-full lg:w-[318px] h-[46px] lg:h-[56px] flex rounded-[72px] bg-[#FFFFFF66] pl-[28px]"
						/>
						<button className="w-full lg:w-[231px] h-[48px] lg:h-[56px] text-white flex items-center justify-center bg-customOrange rounded-[92px]">
							Надіслати!
						</button>
					</div>
				</div>
				<Image
					src={ovalRed}
					alt={'img'}
					className="w-[11px] h-[11px] md:w-[21px] md:h-[21px] left-[46%] top-[8%] md:top-[18%] md:right-[55%] absolute"
				/>
				<Image
					src={ovalYellow}
					alt={'img'}
					className="w-[19px] h-[19px] md:w-[29px] md:h-[29px] top-[2%] left-[40%] md:left-[56%] md:top-[10%] md:right-[45%] absolute"
				/>
				<Image
					src={ovalBlue}
					alt={'img'}
					className="w-[17px] h-[17px] md:w-[27px] md:h-[27px] bottom-[10%] right-[38%] absolute"
				/>
			</div>
		</section>
	);
}
