import React, { useEffect } from "react";

import ScrollDown from "../../ScrollDown/ScrollDown";
import UseWindowSize from "../../../HelperFunctions/UseWindowSize";
import imgScrollAnimation from "../../../HelperFunctions/imgScrollAnimation";
import {
  createSplitText,
  splitText,
} from "../../../HelperFunctions/textRevealAnimation";

import "./About.scss";

const About = () => {
  let dimensions = UseWindowSize(600);

  // const [isMobile, setIsMobile] = useState(dimensions.isMobile);

  useEffect(() => {
    const h1Split = createSplitText({
      el: ".about__heading",
      type: "lines",
      linesClass: "split-child",
    });

    createSplitText({
      el: ".about__heading",
      type: "lines",
      linesClass: "split-parent",
    });

    splitText({
      el: h1Split.lines,
      // duration: 1,
      trigger: ".about__heading",
      endTrigger: ".about__heading",
      start: "top center",
      end: "bottom center",
      // markers:true,
    });

    imgScrollAnimation({
      delay: 0.4,
      trigger: ".about__header",
      endTrigger: ".section__about",
      star: "top center",
      end: "bottom+=300px center",
    });
  }, []);

  return (
    <section className="about">
      <ScrollDown />
      <div className="about__header">
        <h2 className="about__heading">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, saepe
          voluptatem veniam asperiores voluptate.
        </h2>
        <div className="about__img-container">
          <img
            src="about-img2.jpg"
            data-img-speed="0.2"
            className="about__img img1"
          />
        </div>
        <div className="about__text-container">
          <p className="about__text">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            nihil ullam molestiae quam, sequi minus repellendus tenetur commodi
            accusamus ipsa eligendi, autem facere illo vitae provident rem optio
            cumque nemo.
          </p>
          <p className="about__text">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            nihil ullam molestiae quam, sequi minus repellendus tenetur commodi
            accusamus ipsa eligendi, autem facere illo vitae provident rem optio
            cumque nemo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
