import Navbar from './Navbar';
import Image from 'next/image';
import market from '../../public/image/icon/market-icon.svg';
import childrenImage from '../../public/image/childrenImage.png';

export default function Header() {
	return (
		<section className="pt-10 pl-[100px]">
			<Navbar />
			<div className="flex mb-8 relative">
				<div className="flex mt-[100px] flex-col w-[40%]">
					<h1 className="text-6xl text-[#2A333C]">
						Забезпечте своїй дитині <span className="text-customBottomLine">успішне</span> майбутнє
					</h1>
					<p className="mt-6 mb-12 text-[#2A333CB2]">
						The child development centre provides the following educational programmes for children: developmental classes for
						young children
					</p>
					<button className="bg-customOrange rounded-[60px] text-base h-14 w-64 text-[#FAFAFA] mb-[91.5px] customBoxShadowOrange">
						Почати
					</button>
					<figure className="flex items-center">
						<Image
							src={market}
							alt="icon"
							width={24}
							height={24}
							className="mr-4"
						/>
						<figcaption className="text-sm text-[#2A333C] opacity-70">Ніжин, вул Василя Стуса 54а, каб 15</figcaption>
					</figure>
				</div>
				<div>
					<Image
						src={childrenImage}
						alt="image"
						height={607}
					/>
				</div>
			</div>
		</section>
	);
}
