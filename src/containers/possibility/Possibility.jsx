import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">Unleash the Unimaginable Possibilities</h1>
        <p>Explore a world of boundless opportunities that go beyond the limits of your imagination. Leave behind any constraints and embark on a journey of indulgence, joy, and transformation. Embrace the freedom to pursue your desires and make every moment count.</p>
        <h4>Request Early Access to Get Started</h4>

      </div>
    </div>
  );
};
export default Possibility;
