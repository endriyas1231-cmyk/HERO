import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Services from '../components/Services';
import Stats from '../components/Stats';
import WhyChooseUs from '../components/WhyChooseUs';

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Services />
      <Stats />
      <WhyChooseUs />
    </main>
  );
}
