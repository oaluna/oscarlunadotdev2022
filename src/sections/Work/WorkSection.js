import Carousel from "../../components/Carousel/Carousel";
const WorkSection = () => (
  <section id="work" className="work-section">
    <div className="work-section-header">
      <h1>My Recent Projects</h1>
    </div>
    <div section="work-section-cards">
      <Carousel />
    </div>
  </section>
);

export default WorkSection;
