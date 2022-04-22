import React from "react";
import HeroSection from "./sections/Hero/HeroSection";
import AboutMeSection from "./sections/AboutMe/AboutMeSection";
import WorkSection from "./sections/Work/WorkSection";
import ContactSection from "./sections/Contact/ContactSection";
import Footer from "./sections/Footer/Footer";
import Background from "./assets/Background.svg";
import IllustrationTop from "./assets/illustrationTop.svg";
import IllustrationBottom from "./assets/illustrationBottom.svg";
import frameTwo from "./assets/frameTwo.svg";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutMeSection />
      <WorkSection />
      <ContactSection />
      <Footer />
      <img className="illustration-top" src={IllustrationTop} alt="spheres" />
      <img
        className="illustration-btm"
        src={IllustrationBottom}
        alt="spheres"
      />
      <img
        src={Background}
        className="illustration-background"
        alt="background"
      />
      <img className="frame-two" src={frameTwo} alt="illustration" />
    </div>
  );
}
