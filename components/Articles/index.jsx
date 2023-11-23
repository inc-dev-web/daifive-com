import Image from 'next/image';
import image from '../../public/image/faqImage.png';

export default function Articles() {
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
		<section className="bg-[#F3F6FA] rounded-[150px] flex justify-center flex-col">
			<div className={'gap-4 flex justify-center items-center flex-col'}>
				<span className="font-bold text-base text-customBlue">Що почитати?</span>
				<h4 className="text-custom32 font-bold text-[#2A333C] mt-4 mb-12">Ми написали для вас цікаві статті</h4>
			</div>
			<div className={'flex flex-wrap'}>
				{articles.map((item, index) => (
					<figure
						className={'flex'}
						key={index}
					>
						<Image
							src={item.icon}
							alt={'img'}
							height={'215'}
						/>
						<figcaption>
							<h6>{item.title}</h6>
							<p>{item.description}</p>
							<button>Read</button>
						</figcaption>
					</figure>
				))}
			</div>
		</section>
	);
}
