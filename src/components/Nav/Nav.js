import React, { useState, useEffect } from "react";

import ToggleNavButton from "../NavMenu/ToggleNavButton";

import "./Nav.scss";

const Nav = (props) => {
  let navClasses = "nav";
  navClasses += props.drawerState ? " nav--transparent" : " nav--dark-bg";

  const [isScrollYZero, setisScrollYZero] = useState(true);

  const displayNav = () => navClasses.replace("hidden", "");
  const hideNav = () => (navClasses += " hidden");

  useEffect(() => {
    window.onscroll = () => {
      const windowScroll = window.scrollY;
      windowScroll !== 0 && windowScroll < 650
        ? setisScrollYZero(false)
        : setisScrollYZero(true);
    };
  }, [!props.drawerState]);

  isScrollYZero ? displayNav() : hideNav();

  return (
    <header className={navClasses}>
      <nav className="nav__navigation">
        <div className="nav__logo">
          <a href="/">YF</a>
        </div>
        <div className="nav__spacer" />
        <div className="nav__hamburger">
          <ToggleNavButton
            onClick={props.onSaveDrawerState}
            onAnimateNav={props.onAnimateNav}
            drawerState={props.drawerState}
            wasClicked={props.wasClicked}
            hasNavigated={props.hasNavigated}
          />
        </div>

        {/* <div className="nav__navigation-items">
                    <ul> 
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div> */}
      </nav>
    </header>
  );
};

export default Nav;
