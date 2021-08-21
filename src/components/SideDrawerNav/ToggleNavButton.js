import React from 'react';

import './ToggleNavButton.scss';

const ToggleNavButton = (props) => {
    return(
        <button onClick={props.onClick} className="toggle-button">
           <div className="toggle-button__line" />
        </button>
    )
}

export default ToggleNavButton;