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
  const [wasClicked, setWasClicked] = useState(false);
  const [navAnimation, setNavAnimation] = useState({})

  const navClickAnimation = ({pos, navLine1, navLine2, navLine3}) => {
    setWasClicked(true);
    
    const navTl = gsap.timeline({
      repeat: 0,
    });

    if(!isDrawerOpen){
      navTl.fromTo(navLine1.current, {width: navLine1.current.style.width}, {width: '100%'})
      .fromTo(navLine3.current,  {width: navLine3.current.style.width}, {width: '100%'}, "<")
      .to(navLine1.current, {y: `${pos}rem`}) 
      .to(navLine3.current, {y: `${-pos}rem` }, "<")
      .to(navLine2.current, {opacity: 0}, "-=0.8")  //-=0.58
      .to(navLine1.current, {rotate: -43, transformOrigin: 'center'}, 0.7)
      .to(navLine3.current, {rotate: 43, transformOrigin: 'center'}, 0.7).totalDuration(1);
    }

    if(isDrawerOpen){
      navTl.to(navLine3.current, {rotate: 0}, 0.05)
      .to(navLine1.current, {rotate: 0}, "<")
      .to(navLine2.current, {opacity: 1}, 0.5)
      .to(navLine3.current, {y: 0})
      .to(navLine1.current, {y: 0}, "<")
      .to(navLine1.current, {width: '50%'})
      .to(navLine3.current, {width: '50%'}, "<").totalDuration(0.9);
      setWasClicked(false);
    }
     
    setNavAnimation({ 
      navTl,
      navLine1, 
      navLine2, 
      navLine3,
      pos,
    });
  }
  
  const drawerClickHandler = () => {
    setIsDrawerOpen((prevState) => !prevState);
  }

  const backDropClickHandler = () => {
    navClickAnimation({...navAnimation});
    setIsDrawerOpen(false);
  }

  let backDrop;

  if (isDrawerOpen) {
    backDrop = <Backdrop nav={navAnimation} onClickBackdrop={backDropClickHandler} />
  }

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
      <AboutGrid />
    </div>

  );
}

export default App;
