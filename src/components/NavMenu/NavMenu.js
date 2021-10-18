import React, { useRef } from "react";

import { Power1 } from "gsap";
import {
  createSplitText,
  splitText,
  splitTextTimeline,
} from "../../HelperFunctions/textRevealAnimation";
import { NavLink } from "react-router-dom";

import "./NavMenu.scss";

const NavMenu = ({
  display,
  navAnimationProps,
  onRevertNavAnimation,
  onSaveDrawerState,
  onSaveHasNavigatedState,
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
          <NavLink
            onClick={() => {
              navigateToSection(".intro");
            }}
            className="nav__element"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              navigateToSection(".about__heading", "center");
              onSaveHasNavigatedState(true);
            }}
            className="nav__element"
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              navigateToSection(".skills__wrapper", "center");
            }}
            className="nav__element"
            to="/skills"
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              navigateToSection(".projects__title", "end");
            }}
            className="nav__element"
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              navigateToSection(".location", "center");
            }}
            className="nav__element"
            to="/location"
          >
            Location
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              navigateToSection(".contact__header", "end");
            }}
            className="nav__element"
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <div className="nav-line" />
        <div className="socials">
          <ul>
            <li>
              <a
                className="social__links"
                href="www.linkedin.com/in/yves-findlay"
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
