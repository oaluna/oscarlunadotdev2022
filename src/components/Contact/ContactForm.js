import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import "./ContactForm.css";

const ContactForm = () => (
  <div className="contact-form">
    <div className="contact-form-container">
      <div className="contact-cta">
        <div className="contact-header">
          <h2>Get In Touch</h2>
        </div>
        <div className="contact-form-text">
          Is your company hiring? Are you a client in need of a freelancer? Then
          feel free to fill out this form with your project’s details and I will
          get back to you in timely manner. Se habla español.
        </div>

        <div className="cta-write">
          <div
            style={{
              width: "48px",
              height: "48px",
              padding: "10px",
              borderRadius: "25px",
              backgroundColor: "rgba(255,255,255,0.3)"
            }}
          >
            {" "}
            <MailIcon />
          </div>
          <p style={{ float: "right" }}> oscar@oscarluna.dev </p>
        </div>
        <div className="cta-call">
          {" "}
          <div
            style={{
              width: "48px",
              height: "48px",
              padding: "10px",
              borderRadius: "25px",
              backgroundColor: "rgba(255,255,255,0.3)"
            }}
          >
            <PhoneIcon />
          </div>
          <p>(415) 508-7194</p>
        </div>
      </div>
      <form className="contactForm">
        <div className="form-header">
          <h2>Send A Message</h2>
        </div>
        <div className="form-group">
          <input type="text" id="name" name="name" placeholder="Name:" />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address:"
          />
        </div>

        <div className="form-group">
          <textarea
            id="message"
            cols="30"
            rows="5"
            name="message"
            placeholder="Your message:"
          ></textarea>
        </div>
        <button type="submit" className="sendbutton">
          Send
        </button>
      </form>
    </div>
  </div>
);

export default ContactForm;
