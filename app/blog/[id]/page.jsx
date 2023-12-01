'use client';
import React, { useState } from 'react';
import { BackButton } from '@/components/BackButton';
import imageArticles from '@/public/image/faqImage.png';
import ovalRed from '@/public/image/Oval-red.png';
import ovalYellow from '@/public/image/Oval-yellow.png';
import articleImg from '@/public/image/articles/articleTop.png';
import whale from '@/public/image/whale.png';
import author from '@/public/image/articles/author.png';
import Image from 'next/image';
import arrowBlue from '@/public/image/icon/ArrowRightBlue.svg';
import Link from 'next/link';

function ArticleText({ text, style }) {
	const formatText = (paragraph) => {
		const boldStart = '<b>';
		const boldEnd = '</b>';
		const boldIndexStart = paragraph.indexOf(boldStart);
		const boldIndexEnd = paragraph.indexOf(boldEnd);

		if (boldIndexStart !== -1 && boldIndexEnd !== -1) {
			const boldText = paragraph.substring(boldIndexStart + boldStart.length, boldIndexEnd);
			return (
				<span>
					<strong>{boldText}</strong>
					{paragraph.substring(boldIndexEnd + boldEnd.length)}
					<br />
				</span>
			);
		} else {
			return (
				<span>
					{paragraph}
					<br />
				</span>
			);
		}
	};
	return (
		<p className={`${style}`}>
			{text.split('\n').map((paragraph, index) => (
				<span key={index}>{formatText(paragraph)}</span>
			))}
		</p>
	);
}

export default function Articles({ params }) {
	const articleId = params.id || 0;
	const articles = [
		{
			imageLink: imageArticles,
			id: 1,
			title: 'Аутостимуляція',
			description: 'Get all your ducks in a row good optics close the loop and zeitgeist so manage quarterly sales are great to hear for me.',
			article: `Страшне слово для багатьох батьків. Відоме також під назвами «стіми» і «стімінг».

				Аутостимуляція це специфічна поведінка дітей з РАС яка підкріплюється зсередини організму - за рахунок того що вона приносить дитині задоволення, заспокоює її, знімає напругу. Звучить ніби добре - для наших діток. Але ззовні стіми можуть приймати зовсім різноманітні форми - це і махи руками, і стрибки на місці, і вокалізації, а також такі неприємні як облизування предметів, обгризання нігтів, колупання в носі і т.д.
				
				Тобто дуже часто стіми залишаються табуйованими лише через те, що виглядать соціально неприйнятно.
				
				<b>В якому випадку можна зупиняти/корегувати стіми?</b> На мою думку це:- якщо аутостимуляція заважає благополуччю дитини - тобто поведінка виглядає дуже неприйнятно і шанси налагодити соціальні контакти падають, дитина стає «ізгоєм»- коли стіми заважають якійсь діяльності - навчанню, самообслуговуванню, і тд- коли стіми напряму загрожують безпеці дитини - наприклад облизування брудних речей на вулиці призводить до частих кишкових інфекцій. В інших випадках - на мою думку - стіми треба залишити, як одне з небагатьох речей що дійсно заспокоюють/радують дитину.
				
				В самих стінах нема нічого поганого, як би вони нас не дратували 😄 Поки вони не заважають життю дитини.`,
			imageTitle: whale,
			company: 'Company 1',
			details: [
				{
					author: 'Марія Лежньова',
					authorImage: author,
					authorTitle: 'Засновник центру Дай Пʼять  АБА Терапевт',
					dataCreate: '01.08.2000',
				},
			],
		},
		{
			imageLink: imageArticles,
			id: 2,
			title: 'Аутостимуляція',
			description: 'Get all your ducks in a row good optics close the loop and zeitgeist so manage quarterly sales are great to hear for me.',
			article: `Страшне слово для багатьох батьків. Відоме також під назвами «стіми» і «стімінг».

				Аутостимуляція це специфічна поведінка дітей з РАС яка підкріплюється зсередини організму - за рахунок того що вона приносить дитині задоволення, заспокоює її, знімає напругу. Звучить ніби добре - для наших діток. Але ззовні стіми можуть приймати зовсім різноманітні форми - це і махи руками, і стрибки на місці, і вокалізації, а також такі неприємні як облизування предметів, обгризання нігтів, колупання в носі і т.д.
				
				Тобто дуже часто стіми залишаються табуйованими лише через те, що виглядать соціально неприйнятно.
				
				<b>В якому випадку можна зупиняти/корегувати стіми?</b> На мою думку це:- якщо аутостимуляція заважає благополуччю дитини - тобто поведінка виглядає дуже неприйнятно і шанси налагодити соціальні контакти падають, дитина стає «ізгоєм»- коли стіми заважають якійсь діяльності - навчанню, самообслуговуванню, і тд- коли стіми напряму загрожують безпеці дитини - наприклад облизування брудних речей на вулиці призводить до частих кишкових інфекцій. В інших випадках - на мою думку - стіми треба залишити, як одне з небагатьох речей що дійсно заспокоюють/радують дитину.
				
				В самих стінах нема нічого поганого, як би вони нас не дратували 😄 Поки вони не заважають життю дитини.`,
			imageTitle: whale,
			company: 'Company 1',
			details: [
				{
					author: 'Марія Лежньова',
					authorImage: author,
					authorTitle: 'Засновник центру Дай Пʼять  АБА Терапевт',
					dataCreate: '01.08.2000',
				},
			],
		},
		{
			imageLink: imageArticles,
			id: 3,
			title: 'Аутостимуляція',
			description:
				'I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas...',
			article: `Страшне слово для багатьох батьків. Відоме також під назвами «стіми» і «стімінг».

				Аутостимуляція це специфічна поведінка дітей з РАС яка підкріплюється зсередини організму - за рахунок того що вона приносить дитині задоволення, заспокоює її, знімає напругу. Звучить ніби добре - для наших діток. Але ззовні стіми можуть приймати зовсім різноманітні форми - це і махи руками, і стрибки на місці, і вокалізації, а також такі неприємні як облизування предметів, обгризання нігтів, колупання в носі і т.д.
				
				Тобто дуже часто стіми залишаються табуйованими лише через те, що виглядать соціально неприйнятно.
				
				<b>В якому випадку можна зупиняти/корегувати стіми?</b> На мою думку це:- якщо аутостимуляція заважає благополуччю дитини - тобто поведінка виглядає дуже неприйнятно і шанси налагодити соціальні контакти падають, дитина стає «ізгоєм»- коли стіми заважають якійсь діяльності - навчанню, самообслуговуванню, і тд- коли стіми напряму загрожують безпеці дитини - наприклад облизування брудних речей на вулиці призводить до частих кишкових інфекцій. В інших випадках - на мою думку - стіми треба залишити, як одне з небагатьох речей що дійсно заспокоюють/радують дитину.
				
				В самих стінах нема нічого поганого, як би вони нас не дратували 😄 Поки вони не заважають життю дитини.`,
			imageTitle: whale,
			company: 'Company 1',
			details: [
				{
					author: 'Марія Лежньова',
					authorImage: author,
					authorTitle: 'Засновник центру Дай Пʼять  АБА Терапевт',
					dataCreate: '01.08.2000',
				},
			],
		},
		{
			imageLink: imageArticles,
			id: 4,
			title: 'Аутостимуляція',
			description:
				'I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas...',
			article: `Страшне слово для багатьох батьків. Відоме також під назвами «стіми» і «стімінг».

				Аутостимуляція це специфічна поведінка дітей з РАС яка підкріплюється зсередини організму - за рахунок того що вона приносить дитині задоволення, заспокоює її, знімає напругу. Звучить ніби добре - для наших діток. Але ззовні стіми можуть приймати зовсім різноманітні форми - це і махи руками, і стрибки на місці, і вокалізації, а також такі неприємні як облизування предметів, обгризання нігтів, колупання в носі і т.д.
				
				Тобто дуже часто стіми залишаються табуйованими лише через те, що виглядать соціально неприйнятно.
				
				<b>В якому випадку можна зупиняти/корегувати стіми?</b> На мою думку це:- якщо аутостимуляція заважає благополуччю дитини - тобто поведінка виглядає дуже неприйнятно і шанси налагодити соціальні контакти падають, дитина стає «ізгоєм»- коли стіми заважають якійсь діяльності - навчанню, самообслуговуванню, і тд- коли стіми напряму загрожують безпеці дитини - наприклад облизування брудних речей на вулиці призводить до частих кишкових інфекцій. В інших випадках - на мою думку - стіми треба залишити, як одне з небагатьох речей що дійсно заспокоюють/радують дитину.
				
				В самих стінах нема нічого поганого, як би вони нас не дратували 😄 Поки вони не заважають життю дитини.`,
			imageTitle: whale,
			company: 'Company 2',
			details: [
				{
					author: 'Марія Лежньова',
					authorImage: author,
					authorTitle: 'Засновник центру Дай Пʼять  АБА Терапевт',
					dataCreate: '01.08.2000',
				},
			],
		},
		{
			imageLink: imageArticles,
			id: 5,
			title: 'Аутостимуляція',
			description:
				'I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas...',
			article: `Страшне слово для багатьох батьків. Відоме також під назвами «стіми» і «стімінг».

				Аутостимуляція це специфічна поведінка дітей з РАС яка підкріплюється зсередини організму - за рахунок того що вона приносить дитині задоволення, заспокоює її, знімає напругу. Звучить ніби добре - для наших діток. Але ззовні стіми можуть приймати зовсім різноманітні форми - це і махи руками, і стрибки на місці, і вокалізації, а також такі неприємні як облизування предметів, обгризання нігтів, колупання в носі і т.д.
				
				Тобто дуже часто стіми залишаються табуйованими лише через те, що виглядать соціально неприйнятно.
				
				<b>В якому випадку можна зупиняти/корегувати стіми?</b> На мою думку це:- якщо аутостимуляція заважає благополуччю дитини - тобто поведінка виглядає дуже неприйнятно і шанси налагодити соціальні контакти падають, дитина стає «ізгоєм»- коли стіми заважають якійсь діяльності - навчанню, самообслуговуванню, і тд- коли стіми напряму загрожують безпеці дитини - наприклад облизування брудних речей на вулиці призводить до частих кишкових інфекцій. В інших випадках - на мою думку - стіми треба залишити, як одне з небагатьох речей що дійсно заспокоюють/радують дитину.
				
				В самих стінах нема нічого поганого, як би вони нас не дратували 😄 Поки вони не заважають життю дитини.`,
			imageTitle: whale,
			company: 'Company 2',
			details: [
				{
					author: 'Марія Лежньова',
					authorImage: author,
					authorTitle: 'Засновник центру Дай Пʼять  АБА Терапевт',
					dataCreate: '01.08.2000',
				},
			],
		},
		{
			imageLink: imageArticles,
			id: 6,
			title: 'Аутостимуляція',
			description:
				'I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas...',
			article: `Страшне слово для багатьох батьків. Відоме також під назвами «стіми» і «стімінг».

				Аутостимуляція це специфічна поведінка дітей з РАС яка підкріплюється зсередини організму - за рахунок того що вона приносить дитині задоволення, заспокоює її, знімає напругу. Звучить ніби добре - для наших діток. Але ззовні стіми можуть приймати зовсім різноманітні форми - це і махи руками, і стрибки на місці, і вокалізації, а також такі неприємні як облизування предметів, обгризання нігтів, колупання в носі і т.д.
				
				Тобто дуже часто стіми залишаються табуйованими лише через те, що виглядать соціально неприйнятно.
				
				<b>В якому випадку можна зупиняти/корегувати стіми?</b> На мою думку це:- якщо аутостимуляція заважає благополуччю дитини - тобто поведінка виглядає дуже неприйнятно і шанси налагодити соціальні контакти падають, дитина стає «ізгоєм»- коли стіми заважають якійсь діяльності - навчанню, самообслуговуванню, і тд- коли стіми напряму загрожують безпеці дитини - наприклад облизування брудних речей на вулиці призводить до частих кишкових інфекцій. В інших випадках - на мою думку - стіми треба залишити, як одне з небагатьох речей що дійсно заспокоюють/радують дитину.
				
				В самих стінах нема нічого поганого, як би вони нас не дратували 😄 Поки вони не заважають життю дитини.`,
			imageTitle: whale,
			company: 'Company 3',
			details: [
				{
					author: 'Марія Лежньова',
					authorImage: author,
					authorTitle: 'Засновник центру Дай Пʼять  АБА Терапевт',
					dataCreate: '01.08.2000',
				},
			],
		},
		{
			imageLink: imageArticles,
			id: 7,
			title: 'Аутостимуляція',
			description:
				'I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas...',
			article: `Страшне слово для багатьох батьків. Відоме також під назвами «стіми» і «стімінг».

				Аутостимуляція це специфічна поведінка дітей з РАС яка підкріплюється зсередини організму - за рахунок того що вона приносить дитині задоволення, заспокоює її, знімає напругу. Звучить ніби добре - для наших діток. Але ззовні стіми можуть приймати зовсім різноманітні форми - це і махи руками, і стрибки на місці, і вокалізації, а також такі неприємні як облизування предметів, обгризання нігтів, колупання в носі і т.д.
				
				Тобто дуже часто стіми залишаються табуйованими лише через те, що виглядать соціально неприйнятно.
				
				<b>В якому випадку можна зупиняти/корегувати стіми?</b> На мою думку це:- якщо аутостимуляція заважає благополуччю дитини - тобто поведінка виглядає дуже неприйнятно і шанси налагодити соціальні контакти падають, дитина стає «ізгоєм»- коли стіми заважають якійсь діяльності - навчанню, самообслуговуванню, і тд- коли стіми напряму загрожують безпеці дитини - наприклад облизування брудних речей на вулиці призводить до частих кишкових інфекцій. В інших випадках - на мою думку - стіми треба залишити, як одне з небагатьох речей що дійсно заспокоюють/радують дитину.
				
				В самих стінах нема нічого поганого, як би вони нас не дратували 😄 Поки вони не заважають життю дитини.`,
			imageTitle: whale,
			company: 'Company 4',
			details: [
				{
					author: 'Марія Лежньова',
					authorImage: author,
					authorTitle: 'Засновник центру Дай Пʼять  АБА Терапевт',
					dataCreate: '01.08.2000',
				},
			],
		},
		{
			imageLink: imageArticles,
			title: 'Аутостимуляція',
			description:
				'I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas I’m always trying to think of new and interesting business ideas. I generally try to come up with ideas...',
			article: `Страшне слово для багатьох батьків. Відоме також під назвами «стіми» і «стімінг».

				Аутостимуляція це специфічна поведінка дітей з РАС яка підкріплюється зсередини організму - за рахунок того що вона приносить дитині задоволення, заспокоює її, знімає напругу. Звучить ніби добре - для наших діток. Але ззовні стіми можуть приймати зовсім різноманітні форми - це і махи руками, і стрибки на місці, і вокалізації, а також такі неприємні як облизування предметів, обгризання нігтів, колупання в носі і т.д.
				
				Тобто дуже часто стіми залишаються табуйованими лише через те, що виглядать соціально неприйнятно.
				
				<b>В якому випадку можна зупиняти/корегувати стіми?</b> На мою думку це:- якщо аутостимуляція заважає благополуччю дитини - тобто поведінка виглядає дуже неприйнятно і шанси налагодити соціальні контакти падають, дитина стає «ізгоєм»- коли стіми заважають якійсь діяльності - навчанню, самообслуговуванню, і тд- коли стіми напряму загрожують безпеці дитини - наприклад облизування брудних речей на вулиці призводить до частих кишкових інфекцій. В інших випадках - на мою думку - стіми треба залишити, як одне з небагатьох речей що дійсно заспокоюють/радують дитину.
				
				В самих стінах нема нічого поганого, як би вони нас не дратували 😄 Поки вони не заважають життю дитини.`,
			imageTitle: whale,
			company: 'Company 1',
			details: [
				{
					author: 'Марія Лежньова',
					authorImage: author,
					authorTitle: 'Засновник центру Дай Пʼять  АБА Терапевт',
					dataCreate: '01.08.2000',
				},
			],
		},
	];
	let singleArticle = [articles[articleId]];

	return (
		<section className="px-4 pt-[39px] pb-[16px] relative lg:px-[50px] lg:pb-[50px] xl:px-[100px]">
			<Image
				src={ovalYellow}
				alt="icon"
				className="w-[18px] h-[18px] lg:w-[29px] lg:h-[29px] absolute top-0 lg:top-[32px] right-[115px] lg:right-[174px] -z-10"
			/>
			<Image
				src={ovalRed}
				alt="icon"
				className="lg:block hidden w-[32px] h-[32px] absolute bottom-[105px] left-[93px] -z-10"
			/>
			<BackButton />
			<div className="flex flex-col pt-4 lg:flex-row-reverse gap-8">
				<div className="flex flex-col flex-1">
					<Image
						src={articleImg}
						alt="img"
						className="object-cover min-h-[160px] max-h-[228px] mb-6 rounded-[16px] lg:rounded-[24px]"
					/>
					{singleArticle.map((items, key) => (
						<div
							key={key}
							className="flex-col flex rounded-[32px] px-4 py-6 lg:p-8 bg-white gap-8"
						>
							{items.details.map((item, index) => (
								<div
									key={index}
									className="flex flex-col gap-[20px] px-4 lg:flex-row lg: items-start justify-between"
								>
									<div className="flex flex-row opacity-30 text-xs lg:text-base text-[#2A333C] gap-4">
										<span>{item.dataCreate}</span>
										<span>автор:</span>
									</div>
									<figure className="flex flex-row items-center gap-[6px] lg:gap-[16px] lg:mr-[270px] max-w-[253px]">
										<Image
											src={item.authorImage}
											alt="img"
											className="object-cover rounded-[32px] w-[32px] h-[32px] lg:w-[50px] lg:h-[50px]"
										/>
										<figcaption className="text-[#2A333C] flex flex-col opacity-30 gap-1">
											<span className="text-xs lg:text-base font-medium">{item.author}</span>
											<span className="text-[10px] lg:text-xs">{item.authorTitle}</span>
										</figcaption>
									</figure>
								</div>
							))}
							<div>
								<h4 className="text-[#2A333C] font-bold text-xl lg:text-custom32l mb-6">{items.title}</h4>
								<ArticleText
									text={items.article}
									style={`text-[#2A333C] text-sm opacity-70 lg:text-base`}
								/>
								<Image
									src={items.imageTitle}
									alt="img"
									className="mt-6 min-h-[230px] max-h-[504px] h-full"
								/>
							</div>
						</div>
					))}
				</div>
				<div className="flex flex-row flex-wrap gap-10 mt-10 lg:mt-0 lg:flex-col lg:flex-nowrap lg:h-[1200px] overflow-y-scroll">
					{articles.map((items, key) => (
						<Link href={`${items.id}`}>
							<div
								key={key}
								className="flex-col gap-6 max-w-[243px] lg:max-w-[297px]"
							>
								<picture className="flex p-3 bg-white rounded-[24px]">
									<Image
										src={items.imageLink}
										alt="icon"
										className="max-h-[258px] lg:max-h-[224px] object-contain"
									/>
								</picture>

								<div className="text-[#2A333C] mt-6 px-[20px]">
									<h4 className="text-xl mb-3 font-medium">{items.title}</h4>
									<p className="opacity-70 text-xs h-[60px] line-clamp-4 leading-[16px]">{items.description}</p>
									<button
										className={'lg:hidden h-[38px] bg-customBlueLight mt-6 w-[270px] flex items-center justify-center rounded-[65px] gap-3'}
									>
										<span className="text-customBlue text-sm">Читати</span>
										<Image
											src={arrowBlue}
											width={18}
											height={18}
											alt={'icon'}
										/>
									</button>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
