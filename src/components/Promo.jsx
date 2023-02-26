// styles
import "./Promo.scss";

export default function Promo({ src, isGame }) {
  return (
    <div className='promo container'>
      <img src={src} alt='Promotional image' />
      {isGame && <button>GET THE GAME</button>}
    </div>
  );
}
