import Menu from "../../components/Menu/Menu";
import HeroCta from "../../components/cta/HeroCta";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";

import "./HeroSection.css";

const HeroSection = () => (
  <section id="#" className="hero-section">
    <div className="App-header">
      <Header />
    </div>
    <div className="App-hero">
      <Hero />
    </div>
    <div>
      <Menu />
    </div>
    <div>
      <HeroCta />
    </div>
  </section>
);

export default HeroSection;
