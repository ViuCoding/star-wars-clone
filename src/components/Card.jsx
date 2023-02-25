import "./Card.scss";
export default function Card({ src, title }) {
  return (
    <div className='card'>
      <div
        className='card-thumbnail'
        style={{ background: `url(${src}) center/cover` }}></div>

      <div className='card-text-content'>
        <h4>{title}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sit
          distinctio quae ipsum eaque, explicabo totam sunt, error voluptates
          impedit ipsam.
        </p>
      </div>
    </div>
  );
}
