import "./Hero.scss";

export default function Hero({ src, message, text }) {
  return (
    <section className='hero'>
      <img src={src} alt='Hero background image' />
      <div className='overlay'>
        <div className='overlay-content'>
          <h3 className='content-message'>{message}</h3>
          <p className='content-text'>{text}</p>
        </div>
      </div>
    </section>
  );
}
