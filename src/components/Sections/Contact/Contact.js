import React, { useEffect } from "react";

import Form from "../../Form/Form";
import {
  createSplitText,
  splitText,
} from "../../../HelperFunctions/textRevealAnimation";

import "./Contact.scss";

const Contact = () => {
  useEffect(() => {
    const h2Split = createSplitText({
      el: ".contact__header",
      type: "lines",
      linesClass: "split-child",
    });

    createSplitText({
      el: ".contact__header",
      type: "lines",
      linesClass: "split-parent",
    });

    splitText({
      el: h2Split.lines,
      trigger: ".contact",
      endTrigger: ".contact",
      start: "top center",
      end: "bottom center",
    });
  }, []);

  return (
    <section className="contact">
      <div className="contact__content">
        <h2 className="contact__header"> Something in mind?</h2>
        <h2 className="contact__header"> Get in touch </h2>
        <p className="contact__message">
          Feel free to reach out if you wanna collaborate with me, or simply
          have a chat
        </p>
      </div>
      <Form />
    </section>
  );
};

export default Contact;
