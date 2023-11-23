'use client';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Directions from '../components/Directions';
import Section3 from '../components/Section3';
import Footer from '../components/Footer';
import Articles from '@/components/Articles';

export default function Home() {
	return (
		<main className="flex justify-center w-[1440px] m-auto flex-col">
			<Header />
			<AboutUs />
			<Section3 />
			<Directions />
			{/*<Articles />*/}
			<Footer />
		</main>
	);
}
