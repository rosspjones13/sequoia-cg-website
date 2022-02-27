import { Link, Element } from "react-scroll";
import Particles from "react-tsparticles";
import { particlesOptions } from "./particlesOptions";
import "./WelcomeScreen.scss";
import "./LearnMore.scss";

const WelcomeScreen = () => {
  return (
    <>
      <div id="click-container" className="welcome-screen">
        <Particles
          id="tsparticles"
          options={particlesOptions}
          // init={particlesInit}
          // loaded={particlesLoaded}
        />
        <div className="title-container">
          <img
            className="welcome-logo"
            src="/images/WhiteGoldBorderLogo-small.png"
            alt="Logo Sequoia"
          />
          <h1 className="company-intro intro-1">
            White Paper & Proposal Development,
          </h1>
          <h1 className="company-intro intro-2">Strategic Advice and</h1>
          <h1 className="company-intro intro-3">
            Government Program Management
          </h1>
          <h1 className="company-intro intro-4">for DOD, BARDA and NIH</h1>
          <div className="more-info">
            <Link
              activeClass="active"
              className=""
              to="learn"
              offset={-64}
              spy={true}
              smooth={true}
              duration={500}
            >
              <button className="learn-more">Learn More</button>
            </Link>
            <Link
              activeClass="active"
              className=""
              to="learn"
              offset={-64}
              spy={true}
              smooth={true}
              duration={500}
            >
              <i className="arrow down"></i>
            </Link>
          </div>
        </div>
      </div>

      <Element name="learn" className="learn-more-container">
        <div className="learn-title-container">
          <h2 className="learn-title">About Us</h2>
          <div className="learn-title-underline"></div>
        </div>
        {/* <div className="learn-profile-container"> */}
        <div className="learn-profile-card">
          <img
            className="learn-profile-photo"
            src="/images/Heidi-Agostini-mobile.jpg"
            alt="Heidi Agostini"
          />
          <h2 className="learn-profile-name">Heidi Agostini, Ph.D., PMP</h2>
          <h2 className="learn-profile-title">Chief Operating Officer</h2>
          <p className="learn-profile-about">
            With a combined experience of over 40 years in the biomedical and
            biodefense areas and greater than $7 Billion in total funding
            awarded our group has extensive experience in obtaining and managing
            numerous large and small US government grants and contracts.
          </p>
        </div>

        {/* <div className="learn-profile-card">
              <img className="learn-profile-photo" src="/images/blank-profile.jpg" alt="Trevor Agostini-Broadt"/>
              <h2 className="learn-profile-name"></h2>
              <h3 className="learn-profile-title">President</h3>
              <p className="learn-profile-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut aliquam purus sit amet luctus. Massa tincidunt dui ut ornare.</p>
            </div> */}
        {/* </div> */}

        <div className="learn-title-container">
          <h2 className="learn-title">Why Sequoia Consulting?</h2>
          <div className="learn-title-underline"></div>
        </div>

        <div className="learn-paragraph-container">
          <p className="learn-about-paragraph">
            We can help your company navigate the proposal process for whichever
            agency you are interested in applying for funding. We constantly
            monitor agency announcements and websites for new funding
            opportunities.
            <br />
            <br />
            Whatever the size of your project, whether it’s a white paper or a
            full proposal, we can help you reach your funding and business
            development goals. We will give you an honest assessment of your
            project’s potential for funding based on the current open Broad
            Agency Announcements and grants.
            <br />
            <br />
            US government funding is available for your project. Let us help you
            find it. Call us today.
          </p>
          <div className="learn-about-photo-container">
            <img
              className="learn-about-photo"
              src="/images/ConferenceStock-small.jpg"
              alt="stock conference"
            />
          </div>
        </div>

        <div className="learn-list-container">
          <ul className="learn-list">
            <div className="learn-list-item-container">
              <img
                className="learn-list-icon"
                src="/images/eco-24px.svg"
                alt="conference icon"
              />
              <li className="learn-list-item">
                Expertise in BARDA, DOD and NIH government funding opportunities
              </li>
            </div>

            <div className="learn-list-item-container">
              <img
                className="learn-list-icon"
                src="/images/eco-24px.svg"
                alt="schedule icon"
              />
              <li className="learn-list-item">
                Skilled white paper and proposal developers
              </li>
            </div>

            <div className="learn-list-item-container">
              <img
                className="learn-list-icon"
                src="/images/eco-24px.svg"
                alt="collaboration icon"
              />
              <li className="learn-list-item">
                Strategic advice through the entire proposal process
              </li>
            </div>

            <div className="learn-list-item-container">
              <img
                className="learn-list-icon"
                src="/images/eco-24px.svg"
                alt="todo-list icon"
              />
              <li className="learn-list-item">
                CMC professional writing expertise and expert knowledge in:
                <br />
                Infectious Diseases, Vaccines, Cancer, Cell, and Gene Therapy
                areas
              </li>
            </div>

            <div className="learn-list-item-container">
              <img
                className="learn-list-icon"
                src="/images/eco-24px.svg"
                alt="goal icon"
              />
              <li className="learn-list-item">Projects large and small</li>
            </div>

            <div className="learn-list-item-container">
              <img
                className="learn-list-icon"
                src="/images/eco-24px.svg"
                alt="account icon"
              />
              <li className="learn-list-item">
                Program management and financial management services
              </li>
            </div>
          </ul>
        </div>
      </Element>
    </>
  );
};

export default WelcomeScreen;
