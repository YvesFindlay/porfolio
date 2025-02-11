import React, { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import {
  createSplitText,
  splitText,
} from "../../../HelperFunctions/textRevealAnimation";

import "./Footer.scss";

const Footer = () => {
  gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

  useEffect(() => {
    const footerTextSplit = createSplitText({
      el: ".footer__animate-item",
      type: "lines",
      linesClass: "split-child",
    });

    createSplitText({
      el: ".footer__animate-item",
      type: "lines",
      linesClass: "split-parent",
    });

    splitText({
      el: footerTextSplit.lines,
      stagger: 0.3,
      trigger: ".footer__content",
      endTrigger: ".footer__content",
      start: "top-=200px center",
      end: "bottom center",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer__content",
        endTrigger: ".footer__content",
        start: "top-=200px center",
        end: "bottom center",
      },
    });

    tl.fromTo(
      ".footer-line",
      { scaleX: 0 },
      {
        delay: 0.5,
        ease: "none",
        scaleX: 1,
        transformOrigin: "left",
      }
    );

    const copyTextSplit = createSplitText({
      el: ".footer__bottom span",
      type: "lines",
      linesClass: "split-child",
    });

    createSplitText({
      el: ".footer__bottom span",
      type: "lines",
      linesClass: "split-parent",
    });

    splitText({
      delay: 0.6,
      el: copyTextSplit.lines,
      trigger: "footer",
      endTrigger: ".footer__content",
      start: "top center",
      end: "bottom center",
    });
  }, []);

  return (
    <footer>
      <div className="footer__content">
        <div className="footer__main">
          <div className="footer__contact">
            <span className="footer__animate-item">Say hey!</span>
            <ul className="footer__contact-list">
              <li className="footer__animate-item">
                <a href="mailto:yves.findlay@gmail.com">
                  yves.findlay@gmail.com
                </a>
              </li>
              <li className="footer__animate-item">
                <a href="https://t.me/yves_findlay">t.me/yves_findlay</a>
              </li>
              <li className="footer__animate-item">
                <a href="live:yves.findlay_1">Skype</a>
              </li>
            </ul>
          </div>
          <ul className="footer__works">
            <li className="footer__animate-item">Resumé</li>
            <li className="footer__animate-item">Blog (Coming Soon)</li>
          </ul>
        </div>
        <ul className="footer__socials">
          <li className="footer__animate-item">
            {" "}
            <a href="https://www.linkedin.com/in/yves-findlay">LN</a>
          </li>
          <li className="footer__animate-item">
            <a href="https://github.com/YvesFindlay">GH </a>
          </li>
          <li className="footer__animate-item">
            {" "}
            <a href="https://twitter.com/FindlayYves">TW</a>
          </li>
        </ul>
        <div className="footer__bottom">
          <div className="footer-line" />
          <div className="footer__bottom-text">
            <span>&copy; Yves Findlay 2021</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
