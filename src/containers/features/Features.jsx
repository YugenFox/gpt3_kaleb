import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Embrace Your Active Journey",
    text: "Step into a world of possibilities and unlock your full potential. Our solutions empower you to take action and achieve extraordinary results.",
  },
  {
    title: "Unleash the Power of Trust",
    text: "Instantly build trust and strengthen relationships with our cutting-edge solutions. Experience the transformative impact on your business.",
  },
  {
    title: "Master the Art of Effective Messaging",
    text: "Craft compelling messages that resonate and leave a lasting impact. Our tools and techniques will help you deliver your message with precision and clarity.",
  },
  {
    title: "Unleash Your Inner Innovator",
    text: "Embrace the future with confidence and drive change. Our solutions provide the foundation for growth and success in an ever-evolving world.",
  },
];
const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          Unleash the Power of Tomorrow: Ignite Your Vision, Create Your Future
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            key={item.title + index}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};
export default Features;
