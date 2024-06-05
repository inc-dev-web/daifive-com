import React from 'react';
import Image from 'next/image';
import background4 from '@/public/image/public-organization/background4.png';
import heart from '@/public/image/public-organization/heart.png';
import Link from 'next/link';
import download from '@/public/image/icon/download.svg';

const HelpCenter = ({ style }) => {
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
					<h4 className="text-white font-bold text-2xl mt-14">Ви можете допомогти нашому центр</h4>
					<div className="bg-blue-400 rounded-3xl text-white text-xs max-w-[90%] lg:max-w-[50%] p-4">
						Подаруйте світло майбутньому наших дітей. Ваша пожертва - це ключ до їхнього щасливого та успішного життя. Приєднуйтеся до нас, щоб
						разом забезпечити їм необхідну підтримку та можливість розвитку в суспільстві. З деталями допомоги ви можете ознайомитись нижче у
						презентації.
					</div>
					<button className="mx-5 flex justify-center items-center bg-customOrange rounded-[60px] text-base h-[56px] w-[226px] lg:w-[286px] text-[#FAFAFA] customBoxShadowOrange">
						<Link href="#payments">Підтримати організацію</Link>
					</button>
					<button className="mb-10 gap-2 flex">
						<Image
							src={download}
							alt={'icon'}
							className={'inline-block'}
						/>
						<span className="inline-block text-white">Завантажити деталі</span>
					</button>
				</div>
			</section>
		</div>
	);
};

export default HelpCenter;
