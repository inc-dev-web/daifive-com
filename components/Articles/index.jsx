import Image from 'next/image';
import image from '@/public/image/faqImage.png';
import arrowBlue from '@/public/image/icon/ArrowRightBlue.svg';

export function Articles() {
	const articles = [
		{
			icon: image,
			title: 'Motor Skills Development',
			description: 'GThis article explores the importance of motor skills development in children and provides tips for paren...',
			link: '',
		},
		{
			icon: image,
			title: 'Family Environment',
			description: "The impact of the family environment on children's upbringing and well-being is the focus of this article...",
			link: '',
		},
		{
			icon: image,
			title: 'Technology and Kids',
			description: "Examining the advantages and disadvantages of technology's influence on children is the main theme of this article...",
			link: '',
		},
		{
			icon: image,
			title: 'Child Safety',
			description: 'Child safety is paramount, and this article discusses how parents can prepare their children for emergencies and ensure ...',
			link: '',
		},
	];
	return (
		<section className="px-4 bg-[#F3F6FA] rounded-[150px] flex justify-center flex-col pt-[100px] pb-[147px] lg:py-[150px] lg:px-[100px]">
			<div className={'lg:gap-4 gap-[14px] flex justify-center items-center flex-col'}>
				<span className="font-bold lg:text-base text-xs text-customBlue uppercase">Що почитати?</span>
				<h4 className="lg:text-custom32 text-xl font-bold text-[#2A333C] mt-4 mb-12">Ми написали для вас цікаві статті</h4>
			</div>
			<div className={'md:grid md:grid-cols-2 gap-8 flex flex-col items-center md:flex-none'}>
				{articles.map((item, index) => (
					<figure
						className={'flex flex-col md:flex-row gap-4'}
						key={index}
					>
						<div className={'bg-white p-4 rounded-3xl w-[343px] md:w-full'}>
							<Image
								src={item.icon}
								alt={'img'}
								className={'object-cover md:w-full md:h-full h-[258px] w-[319px]'}
							/>
						</div>
						<figcaption className={'flex justify-center items-start flex-col'}>
							<h6 className={'text-xl font-medium mb-3 text-[#2A333C]'}>{item.title}</h6>
							<p className={'lg:text-sm text-xs text-[#2A333C] opacity-70 max-w-[350px] lg:max-w-none'}>{item.description}</p>
							<button className={'h-[38px] bg-customBlueLight mt-6 w-full lg:w-[182px] flex items-center justify-center rounded-[65px] gap-3'}>
								<span className="text-customBlue text-sm">Read</span>
								<Image
									src={arrowBlue}
									width={18}
									height={18}
									alt={'icon'}
								/>
							</button>
						</figcaption>
					</figure>
				))}
			</div>
		</section>
	);
}
