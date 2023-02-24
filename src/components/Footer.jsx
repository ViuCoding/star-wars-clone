// styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className='footer container'>
        <p>More From Clone Wars:</p>

        <div className='social-icons'>
          <a href='#' className='icon'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href='#' className='icon'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='#' className='icon'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href='#' className='icon'>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>

        <div className='extra-links'>
          <p>TM &amp; © CloneWars Ltd. All Rights Reserved</p>
          <a href='#'>Terms of Use</a> |
          <a href='#'>Additional Content Information</a> |
          <a href='#'>Privacy Policy</a> |<a href='#'>Clone Wars Helpdesk</a> |
          <a href='#'>Cookies Policy</a> |
        </div>
      </div>
    </footer>
  );
}
