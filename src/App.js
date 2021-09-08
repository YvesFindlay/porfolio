import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import SideDrawerNav from './components/SideDrawerNav/SideDrawerNav';
import Backdrop from './components/Backdrop/Backdrop';
import Intro from './components/Intro/Intro';
// import About from './components/Sections/About/About';
import AboutGrid from './components/Sections/About/AboutGrid';
import { gsap } from 'gsap';

import './App.scss';

const App = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [navAnimation, setNavAnimation] = useState({})

  const drawerClickHandler = () => {
    setIsDrawerOpen((prevState) => !prevState);
  }

  const backDropClickHandler = () => {
    setIsDrawerOpen(false);
  }

  let backDrop;

  if (isDrawerOpen) {
    backDrop = <Backdrop nav={navAnimation} onClickBackdrop={backDropClickHandler} />
  }
  
  const navClickAnimationTo = ({width, pos, navLine1, navLine2, navLine3}) => {
    if(!gsap) return;
    let navLn1Pos = pos;
    let navLn3Pos = pos + 1;
    
    const navTl = gsap.timeline({
      repeat: 0,
    });

    navTl.fromTo(navLine1.current, {width: navLine1.current.style.width}, {width: '100%'})
    .fromTo(navLine3.current,  {width: navLine3.current.style.width}, {width: '100%'}, "<")
    .to(navLine1.current, {y: navLn1Pos})
    .to(navLine3.current, {y: -navLn3Pos}, "<",)
    .to(navLine2.current, {opacity: 0}, "-=0.8") // -=0.58
    .to(navLine1.current, {rotate: -43, transformOrigin: 'center'}, 0.7)
    .to(navLine3.current, {rotate: 43, transformOrigin: 'center'}, 0.7).totalDuration(1);

    setNavAnimation({ 
      navTl,
      navLine1, 
      navLine2, 
      navLine3,
      width, 
      pos
    });
  }

 

  return (
    <div className="app"> 
      <Nav 
       onSaveDrawerState={drawerClickHandler} 
       drawerState={isDrawerOpen}
       onAnimateNav={navClickAnimationTo}
      />
      <SideDrawerNav display={isDrawerOpen} />
      {backDrop}
      <Intro />
      <AboutGrid />
    </div>

  );
}

export default App;
