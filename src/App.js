import React, {useState} from 'react';
import Nav from './components/Nav/Nav';
import SideDrawerNav from './components/SideDrawerNav/SideDrawerNav';
import Backdrop from './components/Backdrop/Backdrop';

// import logo from './logo.svg'; - how to import svg's
import './App.scss';


const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const drawerClickHandler = () => {
    setIsDrawerOpen((prevState) => !prevState);
  }

  const backDropClickHandler = () => {
    setIsDrawerOpen(false);
  }

  return (
    <>
    <div className="app"> 
      <Nav onSaveDrawerState={drawerClickHandler} />
      <SideDrawerNav display={isDrawerOpen} /> 
      {isDrawerOpen && <Backdrop onClick={backDropClickHandler} /> }
      <main style={{paddingTop: '60px'}}>
      <p>Some content</p>
      </main>
        
        {/* <div className="circle"></div> */}
    </div>
    </>
  );
}

export default App;
