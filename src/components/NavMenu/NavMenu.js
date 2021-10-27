import React, { useRef } from "react";

import { Power1 } from "gsap";
import {
  createSplitText,
  splitText,
  splitTextTimeline,
} from "../../HelperFunctions/textRevealAnimation";

import "./NavMenu.scss";

const NavMenu = ({
  display,
  navAnimationProps,
  onRevertNavAnimation,
  onSaveDrawerState,
  // onSaveHasNavigatedState,
}) => {
  let drawerClasses = "side-drawer";
  const navMenuRef = useRef(null);

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

  const navigateToSection = (className, block) => {
    document.querySelector(className).scrollIntoView({
      scrollBehaviour: "smooth",
      block,
    });

    document.body.classList.remove("no-scroll");
    navMenuRef.current.classList.remove("side-drawer--open");

    onRevertNavAnimation({
      ...navAnimationProps,
    });

    const navBtn = document.querySelector(".toggle-button");
    navBtn.style.opacity = "0";

    onSaveDrawerState();

    setTimeout(() => {
      navBtn.style.opacity = "1";
    }, 200);
  };

  return (
    <nav ref={navMenuRef} className={drawerClasses}>
      <ul>
        <li>
          <a
            href="/"
            onClick={() => {
              navigateToSection(".intro", "center");
            }}
            className="nav__element"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/"
            onClick={(evt) => {
              evt.preventDefault();
              navigateToSection(".about__heading", "center");
              // onSaveHasNavigatedState(true);
            }}
            className="nav__element"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/"
            onClick={(evt) => {
              evt.preventDefault();
              navigateToSection(".skills__wrapper", "center");
            }}
            className="nav__element"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="/"
            onClick={(evt) => {
              evt.preventDefault();
              navigateToSection(".projects__title", "end");
            }}
            className="nav__element"
            to="/projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="/"
            onClick={(evt) => {
              evt.preventDefault();
              navigateToSection(".location", "center");
            }}
            className="nav__element"
          >
            Location
          </a>
        </li>
        <li>
          <a
            href="/"
            onClick={(evt) => {
              evt.preventDefault();
              navigateToSection(".contact__header", "end");
            }}
            className="nav__element"
          >
            Contact
          </a>
        </li>
        <div className="nav-line" />
        <div className="socials">
          <ul>
            <li>
              <a
                className="social__links"
                href="https://www.linkedin.com/in/yves-findlay"
              >
                IN
              </a>
            </li>
            <li>
              <a
                className="social__links"
                href="https://github.com/YvesFindlay/portfolio.git"
              >
                GH
              </a>
            </li>
            <li>
              <a
                className="social__links"
                href="https://twitter.com/FindlayYves"
              >
                TW
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
};

export default NavMenu;
