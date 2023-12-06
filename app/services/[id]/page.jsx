import React from 'react';
import { BackButton } from '@/components/BackButton';
import Image from 'next/image';
import ovalYellow from '@/public/image/Oval-yellow.png';
import ovalRed from '@/public/image/Oval-red.png';
import ovalGreen from '@/public/image/OvalGreenish.svg';
import child from '@/public/image/service/child.png';
import arrowCheck from '@/public/image/icon/arrowChek.svg';
import { fetchAllServices, fetchServiceById } from '@/app/strapi';
import OtherServicesDropdown from '@/app/services/[id]/other-services-dropdown';

export default async function Page({ params }) {
	const baseUrl = process.env.URL;

	const [currentService, otherServices] = await Promise.all([
		fetchServiceById(params.id),
		fetchAllServices()
	])

	return (
		<section className="pt-[39px] pb-[59px] px-4 relative xl:px-[100px] lg:pt-[50px] lg:pb-[150px]">
			<Image
				src={ovalYellow}
				alt="icon"
				className="absolute w-[18px] h-[18px] lg:w-[29px] lg:h-[29px] lg:top-[32px] top-0 right-[115px] -z-10"
			/>
			<Image
				src={ovalRed}
				alt="icon"
				className="lg:block hidden absolute w-[32px] h-[32px] bottom-[215px] left-[178px] -z-10"
			/>
			<Image
				src={ovalGreen}
				alt="icon"
				className="lg:block hidden absolute w-[26px] h-[26px] bottom-[317px] left-[302px] -z-10"
			/>
			<BackButton />
			{
				currentService?.attributes.imageTop?.data?.attributes.url &&
					<div className="block rounded-[16px] bg-[#F3F6FA] w-full mt-8">
						<img
							src={`${baseUrl}${currentService?.attributes.imageTop?.data?.attributes.url}`}
							alt={'img'}
							className="object-cover w-full rounded-[16px]"
						/>
					</div>
			}
			<div className="flex flex-col lg:flex-row lg:gap-8 lg:mt-8">
				<div className="flex flex-col lg:w-[286px]">
					{/* <div className="lg:flex hidden flex-col bg-white rounded-[32px] p-6">
						<div className="relative h-[210px] flex mb-[22px] items-start">
							<Image
								src={child}
								alt="icon"
								className="absolute w-[295px] object-contain z-10"
							/>
						</div>
						<div className="flex flex-col lg:justify-center gap-[14px]">
							<h4 className="text-xl font-bold text-customOrange mb-[10px]">Кому підійде?</h4>
							<>
								<div
									className="gap-[14px]"
								>
									<div className="flex-1 flex flex-row justify-start">
										<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
											<span className="text-[#2A333C] text-[11px] opacity-30">Назва</span>
										</div>
										<Image
											src={arrowCheck}
											alt="icon"
											className="mx-4"
										/>
										<span className="text-[#2A333C] text-xs flex w-full">{currentService?.attributes.titlle}</span>
									</div>
									<div className="flex-1 flex flex-row justify-start">
										<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
											<span className="text-[#2A333C] text-[11px] opacity-30">Назва</span>
										</div>
										<Image
											src={arrowCheck}
											alt="icon"
											className="mx-4"
										/>
										<span className="text-[#2A333C] text-xs flex w-full">{currentService?.attributes.detailsCategorySmallDescription}</span>
									</div>
									<div className="flex-1 flex flex-row justify-start">
										<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
											<span className="text-[#2A333C] text-[11px] opacity-30">Вік</span>
										</div>
										<Image
											src={arrowCheck}
											alt="icon"
											className="mx-4"
										/>
										<span className="text-[#2A333C] text-xs flex w-full">{currentService?.attributes.categoryAge}</span>
									</div>
									<div className="flex-1 flex flex-row justify-start">
										<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
											<span className="text-[#2A333C] text-[11px] opacity-30">Тривалість</span>
										</div>
										<Image
											src={arrowCheck}
											alt="icon"
											className="mx-4"
										/>
										<span className="text-[#2A333C] text-xs flex w-full">{currentService?.attributes.durationLesson}</span>
									</div>
									<div className="flex-1 flex flex-row justify-start">
										<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
											<span className="text-[#2A333C] text-[11px] opacity-30">К-ть занять</span>
										</div>
										<Image
											src={arrowCheck}
											alt="icon"
											className="mx-4"
										/>
										<span className="text-[#2A333C] text-xs flex w-full">{currentService?.attributes.countLessons}</span>
									</div>
								</div>
							</>
						</div>
					</div> */}
					<OtherServicesDropdown currentServiceId={currentService.id} items={otherServices}/>
				</div>
				<div className="flex gap-8 flex-col w-full flex-1">
					{/* <div className="lg:hidden rounded-[16px] bg-[#F3F6FA] min-h-[160px] min-w-[343px] w-full h-full"></div> */}
					<>
						<div
							className="flex flex-col bg-white rounded-[32px] px-4 py-6 xl:p-8"
						>
							<h4 className="text-[#2A333C] text-xl lg:text-2xl mb-6 font-bold">{currentService?.attributes.titlle}</h4>
							<p className="opacity-70 text-sm text-[#2A333C] lg:text-base">{currentService?.attributes.descriptionOne}</p>
							{currentService?.attributes.image?.data?.attributes?.url && (
								<img
									src={`${baseUrl}${currentService?.attributes.image.data.attributes.url}`}
									alt="Image"
									className="w-full my-8"
								/>
							)}
							<p className="opacity-70 text-sm text-[#2A333C] lg:text-base">{currentService?.attributes.descriptionTwo}</p>
						</div>
					</>
				</div>
				<div className="lg:hidden flex flex-col bg-white rounded-[32px] p-6">
					<div className="relative h-[210px] flex mb-[22px] items-start">
						<Image
							src={child}
							alt="icon"
							className="absolute w-[295px] object-contain z-10"
						/>
					</div>
					<div className="flex flex-col lg:justify-center gap-[14px]">
						<h4 className="text-xl font-bold text-customOrange mb-[10px]">Кому підійде?</h4>
						<>
							<div
								className="gap-[14px]"
							>
								<div className="flex-1 flex flex-row justify-start">
									<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
										<span className="text-[#2A333C] text-[11px] opacity-30">Назва</span>
									</div>
									<Image
										src={arrowCheck}
										alt="icon"
										className="mx-4"
									/>
									<span className="text-[#2A333C] text-xs flex w-full">{currentService?.attributes.titlle}</span>
								</div>
								<div className="flex-1 flex flex-row justify-start">
									<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
										<span className="text-[#2A333C] text-[11px] opacity-30">Назва</span>
									</div>
									<Image
										src={arrowCheck}
										alt="icon"
										className="mx-4"
									/>
									<span className="text-[#2A333C] text-xs flex w-full">{currentService?.attributes.detailsCategorySmallDescription}</span>
								</div>
								<div className="flex-1 flex flex-row justify-start">
									<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
										<span className="text-[#2A333C] text-[11px] opacity-30">Вік</span>
									</div>
									<Image
										src={arrowCheck}
										alt="icon"
										className="mx-4"
									/>
									<span className="text-[#2A333C] text-xs flex w-full">{currentService?.attributes.categoryAge}</span>
								</div>
								<div className="flex-1 flex flex-row justify-start">
									<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
										<span className="text-[#2A333C] text-[11px] opacity-30">Тривалість</span>
									</div>
									<Image
										src={arrowCheck}
										alt="icon"
										className="mx-4"
									/>
									<span className="text-[#2A333C] text-xs flex w-full">{currentService?.attributes.durationLesson}</span>
								</div>
								<div className="flex-1 flex flex-row justify-start">
									<div className="gap-3 flex items-center w-[120px] lg:w-[50%] justify-between">
										<span className="text-[#2A333C] text-[11px] opacity-30">К-ть занять</span>
									</div>
									<Image
										src={arrowCheck}
										alt="icon"
										className="mx-4"
									/>
									<span className="text-[#2A333C] text-xs flex w-full">{currentService?.attributes.countLessons}</span>
								</div>
							</div>
						</>
					</div>
				</div>
			</div>
		</section>
	);
}
