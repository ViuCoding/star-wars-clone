// components
import Hero from "../../components/Hero";
import StarshipsList from "../../components/StarshipsList";

import HeroBg6 from "../../assets/bg6.jpg";

export default function StarshipsPage() {
  return (
    <div className='starships-page container'>
      <Hero
        src={HeroBg6}
        message='“I’m a Mandalorian. Weapons are part of my religion.”'
        text='Mando, The Mandalorian'
      />
      <StarshipsList />
    </div>
  );
}
