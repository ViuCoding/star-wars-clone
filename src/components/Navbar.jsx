import { Link, NavLink } from "react-router-dom";

//styles
import "./Navbar.scss";
import MainLogo from "../assets/SWlogo.png";

export default function Navbar() {
  return (
    <header>
      <nav className='navbar'>
        <div className='navbar-logo-container container'>
          <img src={MainLogo} alt='Star Wars Logo' className='navbar-logo' />

        </div>

        <div className='navbar-menu'>
          <NavLink to='/' className='nav-link'>
            HOME
          </NavLink>
          <NavLink to='starships' className='nav-link'>
            STARSHIPS
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
