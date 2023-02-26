import { Link } from "react-router-dom";
import "./Redirect.scss";

export default function Redirect({ src }) {
  return (
    <div className='no-user container'>
      {" "}
      <h1>PLEASE LOG IN, YOUNG PADAWAN</h1>
      <div className='image-container'>
        <img src={src} alt='' />
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
