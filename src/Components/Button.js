import React from 'react';
import '../Stylesheets/Button.css';

function Button({text, isClickButton, doClick}) {
    return (
        <button
        className={ isClickButton ?  'click-button' : 'reset-button' }
        onClick={doClick}>
        {text}
        </button>
    );
}

export default Button;