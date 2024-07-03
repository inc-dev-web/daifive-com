import { Header } from '@/components/Header';
import { AboutUs } from '@/components/AboutUs';
import { Directions } from '@/components/Directions';
import { ServiceCards } from 'components/ServiceCards';
import { Articles } from '@/components/Articles';
import { RemainingQuestions } from '@/components/RemainingQuestions';
import { Specialists } from '@/components/Specialists';
import { Consultation } from '@/components/Consultation';
import HelpCenter from '@/components/HelpCenter';

export default function Home() {
	return (
		<main>
			<Header />
			<AboutUs />
			<ServiceCards />
			<Directions />
			<HelpCenter style={'mx-2'} />
			<Consultation />
			<Specialists />
			<RemainingQuestions />
			<Articles />
		</main>
	);
}
