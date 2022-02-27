import { Link } from "react-router-dom";
import "./SiteMap.scss";

/* <div className="between-list-item"/>
            <li className="site-list-item"><a href="/company">Company</a></li>
            <div className="between-list-item"/>
            <li className="site-list-item"><a href="/services">Services</a></li> */

const SiteMap = () => {
  return (
    <div id="click-container" className="site-map-container">
      <div className="site-list-container">
        <ul className="site-list">
          <li className="site-list-item">
            <Link
              className="site-list-link"
              to="/home"
              // onClick={window.scrollTo(0, 0)}
            >
              Home
            </Link>
          </li>
          <div className="between-list-item" />
          <li className="site-list-item">
            <Link
              className="site-list-link"
              to="/contact"
              // onClick={window.scrollTo(0, 0)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="contact-info">
        <p className="contact-name">Heidi Agostini, Ph.D., PMP</p>
        <p className="contact-title">Chief Operating Officer</p>
        <p className="contact-phone">(P) 240.818.8607 | (F) 240.356.2009</p>
        <a
          className="contact-email"
          href="mailto:Heidiagostini@sequoiaconsultgroup.com"
        >
          Heidiagostini@sequoiaconsultgroup.com
        </a>
      </div>
      <div className="sequoia-logo-container">
        <img
          className="sequoia-logo"
          src="/images/WhiteLogo-small.png"
          alt="Logo Sequoia"
        />
      </div>
    </div>
  );
};

export default SiteMap;
