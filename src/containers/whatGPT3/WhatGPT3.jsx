import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="(Generative Pre-trained Transformer 3) is a state-of-the-art AI model developed by OpenAI. It is one of the most powerful language models to date, capable of generating human-like text, understanding natural language, and performing a wide range of tasks, including translation, question answering, and text completion."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="Streamline customer support, handling inquiries, and delivering personalized assistance, improving customer satisfaction and reducing workload for agents."/>
        <Feature title="Knowledgebase" text="Efficiently organize and retrieve information, empowering users with easy access to vast amounts of data, promoting knowledge sharing and self-service capabilities."/>
        <Feature title="Education" text="Systems offer personalized and adaptive learning experiences, tailoring content and assessments to individual needs, enhancing engagement, comprehension, and knowledge retention."/>
      </div>
    </div>
  );
};
export default WhatGPT3;
