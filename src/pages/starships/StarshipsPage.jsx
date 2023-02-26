// styles
import "./StarshipsPage.scss";

// components
import Hero from "../../components/Hero";
import StarshipsList from "../../components/StarshipsList";

// images
import LogoYellow from "../../assets/SWlogoYellow.png";
import HeroBg6 from "../../assets/bg6.jpg";

// context
import { useUserContext } from "../../hooks/useUserContext";
import { Link } from "react-router-dom";

export default function StarshipsPage() {
  const { user } = useUserContext();

  if (!user) {
    return (
      <div className='no-user container'>
        {" "}
        <h1>PLEASE LOG IN, YOUNG PADAWAN</h1>
        <div className='image-container'>
          <img src={LogoYellow} alt='' />
        </div>
        <div className='redirects'>
          <Link to='/login' className='user-btn'>
            LOGIN
          </Link>
          <Link to='/signup' className='user-btn'>
            SIGN UP
          </Link>
        </div>
      </div>
    );
  }

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
