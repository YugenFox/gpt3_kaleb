import { Article } from "../../components";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {

  const blogTitle = "Unleashing the Future: How Does GPT-3 Revolutionize OpenAI?"
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 26, 2021" title="Igniting Innovation: Exploring the Limitless Potential of GPT-3 and OpenAI"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="Sep 26, 2021" title="The Next Frontier: Unleashing the Power of GPT-3 and OpenAI"/>
          <Article imgUrl={blog03} date="Sep 26, 2021" title="Unlocking the Future: Harnessing the Brilliance of GPT-3 and OpenAI"/>
          <Article imgUrl={blog04} date="Sep 26, 2021" title="Beyond Imagination: Delving into the Wonders of GPT-3 and OpenAI"/>
          <Article imgUrl={blog05} date="Sep 26, 2021" title="Revolutionizing the World: A Journey into GPT-3 and OpenAI's Impact"/>
        </div>
      </div>
    </div>
  );
};
export default Blog;
