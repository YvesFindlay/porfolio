import React from "react";

import { Power1 } from "gsap";
import {
  createSplitText,
  splitText,
  splitTextTimeline,
} from "../../HelperFunctions/textRevealAnimation";
import "./NavMenu.scss";

const NavMenu = ({ display }) => {
  let drawerClasses = "side-drawer";

  if (display) {
    drawerClasses += " side-drawer--open";
    document.body.classList.add("no-scroll");

    const navElSplit = createSplitText({
      el: ".nav__element",
      type: "lines",
      linesClass: "split-child",
    });

    createSplitText({
      el: ".nav__element",
      type: "lines",
      linesClass: "split-parent",
    });

    const textRevealTl = splitTextTimeline({
      el: navElSplit.lines,
      trigger: ".side-drawer",
      endTrigger: "side-drawer",
      delay: 0.7,
    });

    textRevealTl.fromTo(
      ".nav-line",
      { scaleX: 0 },
      {
        delay: 0.1,
        duration: 0.7,
        ease: Power1.easeOut,
        scaleX: 1,
        transformOrigin: "right",
      }
    );

    const navSocialsSplit = createSplitText({
      el: ".social__links",
      type: "lines",
      linesClass: "split-child",
    });

    createSplitText({
      el: ".social__links",
      type: "lines",
      linesClass: "split-parent",
    });

    splitText({
      el: navSocialsSplit.lines,
      trigger: ".side-drawer",
      endTrigger: "side-drawer",
      duration: 0.5,
      delay: 1.2,
    });
  }

  if (!display) document.body.classList.remove("no-scroll");

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a className="nav__element" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="nav__element" href="/">
            About
          </a>
        </li>
        <li>
          <a className="nav__element" href="/">
            Projects
          </a>
        </li>
        <li>
          <a className="nav__element" href="/">
            Location
          </a>
        </li>
        <li>
          <a className="nav__element" href="/">
            Contact
          </a>
        </li>
        <div className="nav-line" />
        <div className="socials">
          <ul>
            <li>
              <a className="social__links" href="/">
                In
              </a>
            </li>
            <li>
              <a className="social__links" href="/">
                Gh
              </a>
            </li>
            <li>
              <a className="social__links" href="/">
                Tw
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
};

export default NavMenu;
