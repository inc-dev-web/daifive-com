'use client';
import Image from 'next/image';
import ovalYellow from '@/public/image/Oval-yellow.png';
import ovalRed from '@/public/image/Oval-red.png';
import highlight from '@/public/image/public-organization/h1-highlight.svg';
import background from '@/public/image/public-organization/background.svg';
import background2 from '@/public/image/public-organization/background2.svg';
import background3 from '@/public/image/public-organization/background3.svg';
import background4 from '@/public/image/public-organization/background4.png';
import download from '@/public/image/icon/download.svg';
import copy from '@/public/image/icon/copy.svg';
import heart from '@/public/image/public-organization/heart.png';
import star from '@/public/image/public-organization/star.png';
import target from '@/public/image/public-organization/target.png';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useRef, useState } from 'react';

export default function publicOrganization() {
	const router = useRouter();
	const [status, setStatus] = useState('');

	const onCopyText = (e) => {
		console.log('text', e.target.innerText);
		navigator.clipboard
			.writeText(e.target.innerText)
			.catch(() => {
				document.execCommand(true);
			})
			.finally(() => {
				setStatus(false);
				setTimeout(() => setStatus(''), 1000);
			});
	};

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
			<div className="flex lg:flex-col flex-col-reverse">
				<div className=" mt-10 lg:mt-0 flex justify-between items-center flex-col lg:flex-row pb-12 mx-36 lg:border-b-2 gap-12">
					<div className="flex-1 text-center relative ">
						<Image
							src={ovalRed}
							width={20}
							alt="icon"
							className="absolute left-[140%] top-[105%] -z-10 lg:hidden"
						/>
						<Image
							src={ovalYellow}
							alt="icon"
							className="absolute left-[4%] top-[-15%] -z-10 lg:hidden"
							width={19}
						/>
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

				<div className="relative w-full min-h-[586px] lg:min-h-[658px] mt-14 lg:mt-14 flex items-center justify-center">
					<div className="absolute inset-0 w-full h-full -z-10 ">
						<Image
							src={background4}
							alt="icon"
							layout="fill"
							className="object-cover rounded-xl"
						/>
					</div>
					<div className="gap-4 relative flex flex-col items-center text-center bg-opacity-70 bg-blue-400 backdrop-blur-sm rounded-2xl mx-44 max-w-[812px]">
						<div className="absolute bg-white rounded-full w-20 h-20 p-5 -top-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
							<Image
								src={heart}
								alt="icon"
								width={40}
								height={40}
							/>
						</div>
						<div className="text-white font-bold text-2xl mt-14">Ви можете допомогти нашому центр</div>
						<div className="bg-blue-400 rounded-3xl text-white text-xs max-w-[90%] lg:max-w-[50%] p-4">
							Good specialists are those who are professional, warm and able to promote children's development through a creative and empathetic
							approach.Good spe
						</div>
						<button className="mx-5 flex justify-center items-center bg-customOrange rounded-[60px] text-base h-[56px] w-[226px] lg:w-[286px] text-[#FAFAFA] customBoxShadowOrange">
							<Link href="/">Підтримати організацію</Link>
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
				</div>
			</div>
			<div className="flex flex-col items-center justify-center my-12 gap-5">
				<div className="text-xl font-bold">На рахунок ГО «ДАЙ ПʼЯТЬ»</div>
				<div className="bg-slate-200 rounded-2xl w-[303px] lg:w-[675px] flex flex-col items-center gap-4 py-4">
					<div className="font-bold">Код отримувача:</div>
					<button
						onClick={onCopyText}
						className="bg-blue-400 rounded-sm text-white w-[90%] h-12"
					>
						<span className="mr-2">45044247</span>
						<Image
							src={copy}
							alt={'icon'}
							className={'inline-block'}
						/>
					</button>
				</div>

				<div className="bg-slate-200 rounded-2xl w-[303px] lg:w-[675px] flex flex-col items-center gap-4 py-4">
					<div className="font-bold">Рахунок в форматі IBAN:</div>
					<button
						onClick={onCopyText}
						className="bg-blue-400 rounded-sm text-white w-[90%] h-12 px-5 text-wrap"
					>
						<span className="mr-2 break-words w-full">UA543052990000026006026306398</span>
						<Image
							src={copy}
							alt={'icon'}
							className={'inline-block'}
						/>
					</button>
				</div>

				<div className="bg-slate-200 rounded-2xl w-[303px] lg:w-[675px] flex flex-col items-center gap-4 py-4">
					<div className="font-bold">Назва Банку</div>
					<button
						className="bg-blue-400 rounded-sm text-white w-[90%] h-12"
						onClick={onCopyText}
					>
						<span className="mr-2">АТ КБ «ПРИВАТБАНК»</span>
						<Image
							src={copy}
							alt={'icon'}
							className={'inline-block'}
						/>
					</button>
				</div>

				<div>ДОБРОВІЛЬНЕ ПОЖЕРТВУВАННЯ</div>
			</div>
		</section>
	);
}
