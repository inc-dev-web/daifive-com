'use client';
import Image from 'next/image';
import ovalYellow from '@/public/image/Oval-yellow.png';
import ovalRed from '@/public/image/Oval-red.png';
import highlight from '@/public/image/public-organization/h1-highlight.svg';
import background from '@/public/image/public-organization/background.svg';
import background2 from '@/public/image/public-organization/background2.svg';
import background3 from '@/public/image/public-organization/background3.svg';
import star from '@/public/image/public-organization/star.png';
import target from '@/public/image/public-organization/target.png';
import { useRouter } from 'next/navigation';

export default async function publicOrganization() {
	const router = useRouter();

	return (
		<section className="px-2">
			<button
				className="text-cyan-500 lg:pl-[100px] mt-4"
				onClick={() => router.back()}
			>
				назад
			</button>
			<div className="relative h-9 flex flex-col items-center justify-center mt-20">
				<h1 className="max-w-2xl text-3xl font-semibold text-center relative">
					Ми хочемо щоб{' '}
					<span className="relative inline-block">
						діти з аутизмом
						<Image
							src={highlight}
							width={329}
							height={50}
							alt="icon"
							className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-2 -ml-2"
						/>
					</span>{' '}
					жили так само як і діти без нього
				</h1>
			</div>

			<div className="relative w-full min-h-[531px] mt-20 lg:mt-0 flex items-center justify-center">
				<Image
					src={ovalRed}
					width={19}
					alt="icon"
					className="absolute top-[-18%] right-[44%] z-10 lg:right-[14%] lg:top-[-6%]"
				/>
				<Image
					src={ovalYellow}
					alt="icon"
					className="absolute left-[91%] top-[-15%] z-10 lg:left-[3%] lg:top-[90%]"
					width={29}
				/>
				<div className="absolute inset-0 w-full h-full hidden lg:block">
					<Image
						src={background}
						alt="icon"
						layout="fill"
					/>
				</div>
				<div className="h-full flex lg:px-[100px] lg:flex-row flex-col justify-between items-center">
					<div className="lg:mb-0 mb-8">
						<Image
							style={{ transform: 'perspective(1000px) rotateY(20deg)' }}
							height={295}
							width={321}
							src={'/image/public-organization/publicOrganization.png'}
							className="object-fill h-[295px] w-[321px] rounded-lg"
							alt={''}
						/>
						<div className="mt-8 lg:mt-14 text-center text-lg font-semibold ">
							Вчасне<span className="text-orange-400"> вступлення</span> в школу
						</div>
					</div>

					<div className="lg:mb-0 mb-14">
						<Image
							height={237}
							width={321}
							className="object-fill h-[295px] w-[321px] rounded-lg scale-100 lg:scale-90"
							src={'/image/public-organization/publicOrganization-2.png'}
							alt={''}
						/>
						<div className="mt-2 lg:mt-14 text-center text-lg font-semibold ">
							Відвідування<span className="text-orange-400"> секцій</span>
						</div>
					</div>

					<div className="lg:mb-0 mb-8">
						<Image
							height={237}
							width={321}
							src={'/image/public-organization/publicOrganization-1.png'}
							className="object-fill h-[295px] w-[321px] rounded-lg"
							alt={''}
							style={{ transform: 'perspective(1000px) rotateY(-20deg)' }}
						/>
						<div className="mt-8 lg:mt-14 text-center text-lg font-semibold ">
							Активна участь в дитячих
							<span className="text-orange-400"> заходах</span>
						</div>
					</div>
				</div>
			</div>
			<div className="relative w-full min-h-[1275px] lg:min-h-[636px] mt-14 lg:mt-14 flex items-center">
				<div className="absolute inset-0 w-full h-full hidden lg:block">
					<Image
						src={background2}
						alt="icon"
						layout="fill"
					/>
				</div>
				<div className="absolute inset-0 w-full h-full block lg:hidden">
					<Image
						src={background3}
						alt="icon"
						layout="fill"
					/>
				</div>
				<div className="px-2 lg:px-28 w-full flex justify-around items-center flex-col lg:flex-row gap-3">
					<div className="relative flex flex-col items-center w-full max-w-[310px] lg:max-w-[530px]">
						<Image
							src={star}
							alt="Star Icon"
							className="absolute -top-24"
						/>
						<div className="bg-white rounded-lg flex items-center justify-center flex-col h-[265px] pt-20 lg:pt-0">
							<h2 className="text-3xl font-bold mb-4">Візія</h2>
							<p className="text-center mb-6 opacity-30 px-12">
								В дорослому житті всі наші підопічні успішні та реалізовані у соціумі, мають роботу та сім'ю.
							</p>
						</div>
						<div className="w-full flex justify-between mt-2 lg:mt-8 flex-col lg:flex-row items-center gap-2">
							<div className="w-full flex items-center justify-center px-8 rounded-lg h-16 bg-yellow-300 text-center py-2 text-black font-bold">
								Емпатія та повага до кожної дитини
							</div>
							<div className="w-full flex items-center justify-center px-8 rounded-lg h-16 bg-red-500 text-center py-2 text-white font-bold">
								Інклюзія та рівні можливості
							</div>
						</div>
					</div>
					<div className="relative flex flex-col items-center w-full mt-24 lg:mt-0 max-w-[310px] lg:max-w-[530px]">
						<Image
							src={target}
							alt="target Icon"
							className="absolute -top-24"
						/>
						<div className="bg-white rounded-lg flex items-center justify-center flex-col h-[265px] pt-20 lg:pt-0">
							<h2 className="text-3xl font-bold mb-4">Місія</h2>
							<p className="text-center mb-6 opacity-30 px-12">
								Надати кожній дитині рівні можливості для відновлення психічного здоров'я та розвитку.
							</p>
						</div>
						<div className="w-full flex justify-between mt-2 lg:mt-8 flex-col lg:flex-row items-center gap-2">
							<div className="w-full flex items-center justify-center px-8 rounded-lg h-16 bg-lime-300 text-center py-2 text-black font-bold">
								Комплексний підхід
							</div>
							<div className="w-full flex items-center justify-center px-8 rounded-lg h-16 bg-orange-400 text-center py-2 text-white font-bold">
								Партнерство з родинами
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-10 lg:mt-0 flex justify-between items-center flex-col lg:flex-row pb-12 mx-36 lg:border-b-2 gap-12">
				<div className="flex-1 text-center">
					<h2 className="text-4xl font-bold mb-4">700 +</h2>
					<p className="text-gray-600 opacity-70 w-40 mx-auto">Дітей та батьків що відвідали наш центр</p>
				</div>
				<div className="flex-1 text-center">
					<h2 className="text-4xl font-bold mb-4">200 +</h2>
					<p className="text-gray-600 opacity-70 w-60 mx-auto">Щасливих діток які пройшли нашу реабілітацію</p>
				</div>
				<div className="flex-1 text-center">
					<h2 className="text-4xl font-bold mb-4">450 +</h2>
					<p className="text-gray-600 opacity-70 w-40 mx-auto">Дітей та батьків що відвідали наш центр</p>
				</div>
			</div>
		</section>
	);
}
