import ContactForm from "../../components/Contact/ContactForm";

import cheering from "../../assets/cheering.svg";
import planet from "../../assets/planet.svg";
import crystals from "../../assets/crystals.svg";

import "./ContactSection.css";

const ContactSection = () => (
  <section id="contact" className="contact-section">
    <ContactForm />
    <img
      src={cheering}
      alt="cheering"
      className="cheering"
      style={{
        position: "absolute",
        width: "436px",
        height: "925px",
        left: "3rem",
        top: "-41px",
        zIndex: 1
      }}
    />
    <img
      src={planet}
      alt="planet"
      className="planet"
      style={{
        position: "absolute",
        width: "800px",
        height: "auto",
        top: "50vh",
        left: "0vw"
      }}
    />
    <img
    className="crystals"
      src={crystals}
      alt="crystals"
      style={{
        position: "absolute",
        top: "-10vh",
        left: "40vw",
        zIndex: 1
      }}
    />
  </section>
);

export default ContactSection;
