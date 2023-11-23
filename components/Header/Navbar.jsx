import Image from 'next/image';
import logo from '../../public/image/logoBlack.png';
import iconPhone from '../../public/image/icon/phone.svg';

export default function Navbar() {
	return (
		<nav className="flex flex-row justify-between items-center h-[48px] pr-[100px]">
			<Image
				src={logo}
				alt="logo"
				height={38}
			/>
			<ul className="flex gap-10 items-center h-[48px]">
				<li className="text-customStyleHover">
					<a
						href="#"
						title="Головна"
					>
						Головна
					</a>
				</li>
				<li className="text-customStyleHover">
					<a
						href="#"
						title="Послуги"
					>
						Послуги
					</a>
				</li>
				<li className="text-customStyleHover">
					<a
						href="#"
						title="Спеціалісти"
					>
						Спеціалісти
					</a>
				</li>
				<li className="text-customStyleHover">
					<a
						href="#"
						title="Блог"
					>
						Блог
					</a>
				</li>
			</ul>
			<div className="h-[48px] flex flex-row items-center w-[213px] justify-between py-[16px] px-[32px] text-sm bg-customOrangeLight rounded-[60px]">
				<Image
					src={iconPhone}
					alt="phone"
				/>
				<span className="text-customOrange">+38 066 826 24 15</span>
			</div>
		</nav>
	);
}
