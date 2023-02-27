import { Link, NavLink } from "react-router-dom";

//styles
import "./Navbar.scss";
import MainLogo from "../assets/SWlogo.png";
import { useUserContext } from "../hooks/useUserContext";
import { useLogout } from "../hooks/useLogout";

export default function Navbar() {
  const { user } = useUserContext();

  const { logout } = useLogout();

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
          {user ? null : (
            <NavLink to='signup' className='nav-link'>
              SIGN UP
            </NavLink>
          )}

          {user ? (
            <Link className='nav-link' onClick={() => logout()}>
              LOG OUT
            </Link>
          ) : (
            <NavLink to='login' className='nav-link'>
              LOG IN
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}
