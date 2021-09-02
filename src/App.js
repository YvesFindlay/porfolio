import React, {useState} from 'react';
import Nav from './components/Nav/Nav';
import SideDrawerNav from './components/SideDrawerNav/SideDrawerNav';
import Backdrop from './components/Backdrop/Backdrop';
import Intro from './components/Intro/Intro'

import './App.scss';


const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerClickHandler = () => {
    setIsDrawerOpen((prevState) => !prevState);
  }

  const backDropClickHandler = () => {
    setIsDrawerOpen(false);
  }

  let backDrop;

  if(isDrawerOpen){
    backDrop = <Backdrop onClick={backDropClickHandler} />;
  }

  return (
    <div className="app"> 
      <Nav onSaveDrawerState={drawerClickHandler} drawerState={isDrawerOpen}/>
      <SideDrawerNav display={isDrawerOpen} />
      {backDrop}
      <Intro />
    </div>

  );
}

export default App;
