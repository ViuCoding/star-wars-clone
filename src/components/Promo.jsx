// styles
import "./Promo.scss";

export default function Promo({ src }) {
  return (
    <div className='promo container'>
      <img src={src} alt='Promotional image' />
      <button>GET THE GAME</button>
    </div>
  );
}
