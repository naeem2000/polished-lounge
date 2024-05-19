import PriceList from './components/Price-List/PriceList';
import Services from './components/Services/Services';
import Reviews from './components/Reviews/Reviews';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Visit from './components/Visit/Visit';
import Hero from './components/Hero/Hero';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Services />
			<PriceList />
			<Visit />
			<Reviews />
			<Footer />
		</>
	);
}
