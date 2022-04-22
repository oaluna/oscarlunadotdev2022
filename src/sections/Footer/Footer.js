import React from "react";
import "./Footer.css";
// For styling any nested component, Overlay use the styled method.
// This method works perfectly on all of your any third-party component, as long as they attach the passed className prop to a DOM element.
// Here an example: https://gist.github.com/Miniplop/80b042d1b44293329ef7332fd47b770c

// Nested component imports
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";
import SearchIcon from "@mui/icons-material/Search";

const Footer = () => {
  return (
    <footer>
      <div className="footer-menu">
        <div className="home-three">
          <div className="frame-3537"></div>
          <div className="frame-3537">
            <HomeIcon />
            <div className="home-two">Home</div>
          </div>
        </div>
        <div className="home-three">
          <div className="frame-3537"></div>
          <div className="frame-3537">
            <PersonIcon />
            <div className="home-two">About me</div>
          </div>
        </div>
        <div className="home-three">
          <div className="frame-3537"></div>
          <div className="frame-3537">
            <WorkIcon />
            <div className="home-two">Work</div>
          </div>
        </div>
        <div className="home-three">
          <div className="frame-3537"></div>
          <div className="frame-3537">
            <PhoneIcon />
            <div className="home-two">Contact</div>
          </div>
        </div>
        <div className="home-three">
          <div className="frame-3537"></div>
          <div className="frame-3537">
            <SearchIcon />
            <div className="home-two">Search</div>
          </div>
        </div>
      </div>
      <div className="social-media">
        <div className="icons">
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/e5ec421e-6f8e-4d82-a080-bbe112013777.png"
          />
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/674ab348-621b-4d40-b2eb-b50886ee2dc0.png"
          />
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/1ec4f2b4-4da9-4391-ad13-97d398bbf1ed.png"
          />
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/5719a54f-2cf4-45b6-9161-7dad86b3fab0.png"
          />

          <img
            alt=""
            src="https://static.overlay-tech.com/assets/f72a9a76-a351-4c94-8f9f-5d4d7d0e7800.svg"
          />

          <img
            alt=""
            src="https://static.overlay-tech.com/assets/7c4cc6ff-d232-4f80-ac20-f13e7bf29cfd.svg"
          />
        </div>
      </div>
      <span className="separator" />
      <div className="footer-terms">Terms of Service - Privacy Policy</div>
    </footer>
  );
};

export default Footer;
