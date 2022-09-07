import React from "react";
import '../Stylesheets/Counter.css';

function Counter ({ clickCount }) {
    return (
        <div className= 'counter' >
            {clickCount}
        </div>
    );
}

export default Counter;