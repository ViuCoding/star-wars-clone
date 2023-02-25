// components
import Hero from "../../components/Hero";
import Promo from "../../components/Promo";
import Card from "../../components/Card";

// styles
import "./Home.scss";

// images
import HeroBg2 from "../../assets/bg2.jpg";
import PromoSrc from "../../assets/gamebg.jpg";
import Poster1 from "../../assets/poster1.jpg";
import Poster2 from "../../assets/poster2.jpg";
import Poster3 from "../../assets/poster3.jpg";

export default function Home() {
  return (
    <div className='home-page container'>
      <Hero
        src={HeroBg2}
        message='“In a dark place we find ourselves and a little more knowledge lights our way.”'
        text='Yoda, Star Wars Episode III: Revenge Of The Sith'
      />

      <p className='home-page-text'>
        Welcome to the world of Star Wars and the Clone Wars era! Our Clone Wars
        page, built using React, is the perfect place for fans of the legendary
        franchise to explore the exciting battles and conflicts between the
        Galactic Republic and the Separatist Alliance. With React's powerful
        capabilities, our page is designed to offer an immersive experience for
        users as they navigate through a vast collection of characters,
        vehicles, planets, and battles that defined the Clone Wars era. Get
        ready to dive into the action-packed world of Star Wars with our
        React-powered Clone Wars page!
      </p>

      <Promo src={PromoSrc} />

      <h3 className='section-title'>More CloneWars Video Series</h3>

      <Card src={Poster1} title='Revenge of the Sith' />
      <Card src={Poster2} title='Star Wars: Galaxy of Heroes' />
      <Card src={Poster3} title='Lego Star Wars: Episode III' />
    </div>
  );
}
