import React, { useState } from "react";

import Nav from "./components/Nav/Nav";
import SideDrawerNav from "./components/NavMenu/NavMenu";
import Backdrop from "./components/Backdrop/Backdrop";
import Intro from "./components/Intro/Intro";
import About from "./components/Sections/About/About";
import Skills from "./components/Sections/Skills/Skills";
import Projects from "./components/Sections/Projects/Projects";
import Contact from "./components/Sections/Contact/Contact";
import Location from "./components/Sections/Location/Location";
import Footer from "./components/Sections/Footer/Footer";
import { gsap } from "gsap";

import "./App.scss";

const App = () => {
  // const getInnerWidth = (width) => {
  //   return window.innerWidth < width;
  // }
  // const imgDisplayFlag = getInnerWidth.bind(this, 600);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [wasClicked, setWasClicked] = useState(false);
  const [navAnimation, setNavAnimation] = useState({});

  const navClickAnimation = ({ pos, navLine1, navLine2, navLine3 }) => {
    setWasClicked(true);

    const navTl = gsap.timeline();

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
      navTl
        .to(navLine3.current, { rotate: 0 }, 0.05)
        .to(navLine1.current, { rotate: 0 }, "<")
        .to(navLine2.current, { opacity: 1 }, 0.5)
        .to(navLine3.current, { y: 0 })
        .to(navLine1.current, { y: 0 }, "<")
        .to(navLine1.current, { width: "50%" })
        .to(navLine3.current, { width: "50%" }, "<")
        .totalDuration(0.9);
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

  const backDropClickHandler = () => {
    navClickAnimation({ ...navAnimation });
    setIsDrawerOpen(false);
  };

  let backDrop;

  if (isDrawerOpen) {
    backDrop = (
      <Backdrop nav={navAnimation} onClickBackdrop={backDropClickHandler} />
    );
  }

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(
  //       imgDisplayFlag()
  //     );
  //   }

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   }

  // });

  // console.log(imgDisplayFlag());

  return (
    <div className="app">
      <Nav
        onSaveDrawerState={drawerClickHandler}
        drawerState={isDrawerOpen}
        onAnimateNav={navClickAnimation}
        wasClicked={wasClicked}
      />
      <SideDrawerNav display={isDrawerOpen} />
      {backDrop}
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
