'use client';
import { Header } from '@/components/Header';
import { AboutUs } from '@/components/AboutUs';
import { Directions } from '@/components/Directions';
import { ServiceCards } from 'components/ServiceCards';
import { Footer } from '@/components/Footer';
import { Articles } from '@/components/Articles';
import { RemainingQuestions } from '@/components/RemainingQuestions';
import { Specialists } from '@/components/Specialists';
import { Consultation } from '@/components/Consultation';
// import { useEffect, useState } from 'react';
// import { GET } from '@/app/api/route';

// async function getData() {
// 	const res = await fetchServices;
// 	if (!res.ok) throw new Error('Failed to fetch data');
// 	return res.json();
// }

export default function Home() {
	return (
		<main>
			<Header />
			<AboutUs />
			<ServiceCards />
			<Directions />
			<Consultation />
			<Specialists />
			<RemainingQuestions />
			<Articles />
			<Footer />
		</main>
	);
}
