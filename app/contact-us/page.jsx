'use client';
import Image from 'next/image';
import ovalRed from '@/public/image/Oval-red.png';
import ovalYellow from '@/public/image/Oval-yellow.png';
import ovalBlue from '@/public/image/Oval-blue.png';
import phone from '@/public/image/icon/phone.svg';
import email from '@/public/image/icon/email.svg';
import location from '@/public/image/icon/location-icon.svg';

export default function ContactUs() {
	return (
		<div className="flex flex-col md:flex-row">
			<div className="md:bg-bgContactUs bg-bg1MbContactUs md:w-1/2 h-full bg-no-repeat bg-center">
				<div className="flex h-[935px] md:h-[764px] px-4 lg:pl-[23px] xl:pl-[73px] items-center justify-start relative">
					<div className="md:px-0 pb-[150px] md:pb-0 md:bg-bg1ContactUs bg-bgMbContactUs h-full ms:w-[343px] w-full lg:w-[1267px] bg-contain bg-center bg-no-repeat flex md:flex-row flex-col items-center justify-center md:justify-start">
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
				</div>
			</div>
			<div className="md:w-1/2 hidden md:flex items-center justify-center ">
				<div className="flex flex-col space-y-4">
					<div className="flex items-center space-x-3">
						<div className="bg-slate-100 rounded-full w-20 h-20 p-5 -top-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
							<Image
								src={email}
								alt="icon"
								width={40}
								height={40}
							/>
						</div>
						<a
							href="mailto:demo@gmail.com"
							className="text-black text-xl hover:text-orange-500"
						>
							demo@gmail.com
						</a>
					</div>
					<div className="flex items-center space-x-3">
						<div className="bg-slate-100 rounded-full w-20 h-20 p-5 -top-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
							<Image
								src={phone}
								alt="icon"
								width={40}
								height={40}
							/>
						</div>
						<a
							href="tel:+380668262415"
							className="text-black text-xl hover:text-orange-500"
						>
							+38 066 826 24 15
						</a>
					</div>
					<div className="flex items-center space-x-3">
						<div className="bg-slate-100 rounded-full w-20 h-20 p-5 -top-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
							<Image
								src={location}
								alt="icon"
								width={40}
								height={40}
							/>
						</div>
						<span className="text-xl">м. Ніжин, вул Василя Стуса 54а, каб 15</span>
					</div>
				</div>
			</div>
		</div>
	);
}
