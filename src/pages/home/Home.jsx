import Hero from "../../components/Hero";

import HeroBg2 from "../../assets/bg2.jpg";

export default function Home() {
  return (
    <div className='home-page container'>
      <h1>HOME PAGE</h1>
      <Hero
        src={HeroBg2}
        message='“In a dark place we find ourselves and a little more knowledge lights our way.”'
        text='Yoda, Star Wars Episode III: Revenge Of The Sith'
      />
    </div>
  );
}
