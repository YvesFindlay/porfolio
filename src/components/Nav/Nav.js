import React from 'react';

import ToggleNavButton from '../SideDrawerNav/ToggleNavButton';

import './Nav.scss';

const Nav = (props) => (
    <header className="nav">
        <nav className="nav__navigation">
        <div className="nav__logo"> <a href="/">YF</a> </div>
        <div className="nav__spacer"/>
            <div className="nav__hamburger">
                <ToggleNavButton onClick={props.onSaveDrawerState} />
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



export default Nav;