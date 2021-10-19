import React, { useEffect } from "react";

import ScrollDown from "../../ScrollDown/ScrollDown";
import imgScrollAnimation from "../../../HelperFunctions/imgScrollAnimation";
import {
  createSplitText,
  splitText,
} from "../../../HelperFunctions/textRevealAnimation";

import "./About.scss";

const About = () => {
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
      trigger: ".about__heading",
      endTrigger: ".about__heading",
      start: "top center",
      end: "bottom center",
    });

    imgScrollAnimation({
      delay: 0.4,
      trigger: ".about__content",
      endTrigger: ".section__about",
      star: "top center",
      end: "bottom+=300px center",
    });
  }, []);

  return (
    <section className="about">
      <ScrollDown />
      <div className="about__content">
        <h2 className="about__heading">
          Frontend development is my domain, crafting designs and bringing them
          to life is where you'll find me.
        </h2>

        <div className="about__wrapper">
          <div className="about__img-container">
            <img
              src="about-img.jpg"
              alt="Yves Findlay | Frontend Developer"
              data-img-speed="0.2"
              className="about__img img1"
            />
          </div>
          <div className="about__text-container">
            <p className="about__text">
              {" "}
              Linking the world of design and technology, I aim to create an
              immersive experience for users to interact with. Effiency and
              scalability is at the heart of my development approach.
            </p>
            <p className="about__text">
              {" "}
              Drawing on my creative license I strive to produce the best
              results I possibly can. Challenging myself constantly to enhance
              my skillset as an aspiring frontend developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
