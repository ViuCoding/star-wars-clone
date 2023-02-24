// components
import Hero from "../../components/Hero";
import StarshipsList from "../../components/StarshipsList";

import HeroBg1 from "../../assets/bg1.jpg";

export default function StarshipsPage() {
  return (
    <div className='starships-page container'>
      <Hero
        src={HeroBg1}
        message='“I’m a Mandalorian. Weapons are part of my religion.”'
        text='Mando, The Mandalorian'
      />
      <StarshipsList />
    </div>
  );
}
