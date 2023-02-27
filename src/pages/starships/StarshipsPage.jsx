import { Navigate } from "react-router-dom";

// components
import Hero from "../../components/Hero";
import StarshipsList from "../../components/StarshipsList";

// images
import HeroBg6 from "../../assets/bg6.jpg";

// context
import { useUserContext } from "../../hooks/useUserContext";

export default function StarshipsPage() {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to='/login' replace />;
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
