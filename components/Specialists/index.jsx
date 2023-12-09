import Link from 'next/link';
import { fetchLastSpecialists } from '@/app/strapi';

export async function Specialists() {
	const baseUrl = process.env.URL;
	const specialists = await fetchLastSpecialists(3);

	return (
		<section className={'pb-[108px] md:pb-[150px] md:pl-[100px] md:pt-[125px] px-4 md:px-0'}>
			<div className={'flex flex-col md:pr-[243px]'}>
				<span className={'font-bold md:text-base text-xs text-customBlue uppercase'}>Довіряй найкращим</span>
				<div className={'flex flex-col md:flex-row md:gap-[70px] gap-4 md:mt-[25px] mt-3 mb-20 md:mb-0'}>
					<h4 className="md:text-custom32 text-xl font-bold text-[#2A333C] flex-1">
						Наші спеціалісти <br /> майстри cвоєї справи
					</h4>
					<p className={'text-[#2A333CB2] font-normal md:leading-6 md:text-base text-sx flex-1'}>
						Наші фахівці - це не просто експерти у своїй справі; вони - серце нашого центру. З високим рівнем професіоналізму, глибокою емпатією та інноваційними підходами, вони створюють особливе середовище для розвитку кожної дитини.
					</p>
				</div>
			</div>
			<div className="flex gap-6 md:gap-8 flex-row flex-wrap justify-between">
				{specialists.map((specialistData, index) => (
					<div
						key={index}
						className={`flex-1 flex px-4 pt-[84px] flex-col justify-center items-center rounded-[32px] ${
							index % 2 === 0 ? 'xl:mt-[145px]' : 'mt-0'
						}`}
					>
						{JSON.stringify(specialistData)}
						<Link href={`/team/${specialistData.id}`}>
							<div
								className={`flex justify-center relative w-[270px] h-[313px] md:w-[305px] md:h-[394px] rounded-[24px] md:rounded-[29px] ${
									specialistData.id % 2 !== 0 ? 'bg-customOrange' : 'bg-customBlue'
								}`}
							>
								<img
									loading="lazy"
									src={`${baseUrl}${specialistData.attributes.photoSpecialist?.data?.attributes.url}`}
									alt={'image'}
									className="absolute w-full h-[380px] md:w-[308px] md:h-[442px] bottom-0 object-cover rounded-[24px]"
								/>
								<div className="bottom-[16px] right-[16px] w-[20px] h-[20px] flex justify-center items-center absolute rounded-[70px] bg-[#FFFFFF1A] z-20">
									<svg
										width="34"
										height="35"
										viewBox="0 0 34 35"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.7125 24.3041L23.3297 10.2912M23.3297 10.2912L12.6777 10.8495M23.3297 10.2912L23.888 20.9432"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							</div>
						</Link>
						<div className="flex flex-col items-center justify-center mt-4 md:mt-6 gap-[9px] xl:w-full md:w-[305px]">
							<h4 className="text-[#2A333C] text-xl font-bold md:text-custom32">{specialistData.attributes.name}</h4>
							<p className="text-base text-[#2A333C] md:text-2xl line-clamp-1">{specialistData.attributes.position}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
