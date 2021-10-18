import React, { useState } from "react";

import { gsap } from "gsap";
import Nav from "./components/Nav/Nav";
import NavMenu from "./components/NavMenu/NavMenu";
import Backdrop from "./components/Backdrop/Backdrop";
import Intro from "./components/Intro/Intro";
import About from "./components/Sections/About/About";
import Skills from "./components/Sections/Skills/Skills";
import Projects from "./components/Sections/Projects/Projects";
import Contact from "./components/Sections/Contact/Contact";
import Location from "./components/Sections/Location/Location";
import Footer from "./components/Sections/Footer/Footer";
import { Route } from "react-router-dom";

import "./App.scss";

const closeNavAnimation = ({ navTl, navLine1, navLine2, navLine3 }) => {
  navTl
    .to(navLine3.current, { rotate: 0 }, 0.05)
    .to(navLine1.current, { rotate: 0 }, "<")
    .to(navLine2.current, { opacity: 1 }, 0.5)
    .to(navLine3.current, { y: 0 })
    .to(navLine1.current, { y: 0 }, "<")
    .to(navLine1.current, { width: "50%" })
    .to(navLine3.current, { width: "50%" }, "<")
    .totalDuration(0.9);
};

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [wasClicked, setWasClicked] = useState(false);
  const [navAnimation, setNavAnimation] = useState({});
  const [hasNavigated, setHasNavigated] = useState();

  const navTl = gsap.timeline();

  const navClickAnimation = ({ pos, navLine1, navLine2, navLine3 }) => {
    setWasClicked(true);

    if (!isDrawerOpen) {
      navTl
        .fromTo(
          navLine1.current,
          { width: navLine1.current.style.width },
          { width: "100%" }
        )
        .fromTo(
          navLine3.current,
          { width: navLine3.current.style.width },
          { width: "100%" },
          "<"
        )
        .to(navLine1.current, { y: `${pos}rem` })
        .to(navLine3.current, { y: `${-pos}rem` }, "<")
        .to(navLine2.current, { opacity: 0 }, "-=0.8")
        .to(navLine1.current, { rotate: -43, transformOrigin: "center" }, 0.7)
        .to(navLine3.current, { rotate: 43, transformOrigin: "center" }, 0.7)
        .totalDuration(1);
    }

    if (isDrawerOpen) {
      closeNavAnimation({
        navTl,
        navLine1,
        navLine2,
        navLine3,
      });
      setWasClicked(false);
    }

    setNavAnimation({
      navTl,
      navLine1,
      navLine2,
      navLine3,
      pos,
    });
  };

  const drawerClickHandler = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const hasNavigatedHandler = (state) => {
    setHasNavigated(state);
  };

  return (
    <div className="app">
      <Nav
        onSaveDrawerState={drawerClickHandler}
        drawerState={isDrawerOpen}
        onAnimateNav={navClickAnimation}
        wasClicked={wasClicked}
        hasNavigated={hasNavigated}
      />
      <NavMenu
        navAnimationProps={navAnimation}
        onRevertNavAnimation={closeNavAnimation}
        onSaveDrawerState={drawerClickHandler}
        onSaveHasNavigatedState={hasNavigatedHandler}
        display={isDrawerOpen}
      />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
