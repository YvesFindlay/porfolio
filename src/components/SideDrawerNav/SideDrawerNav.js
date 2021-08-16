import React from 'react';

import './SideDrawerNav.scss';

const SideDrawerNav = (props) => {
    let drawerClasses = 'side-drawer';

    if(props.display) drawerClasses += ' side-drawer--open';

    return(
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    )
} 

export default SideDrawerNav;