// Button.js

import React from "react";

function Button({name,disabled}) {
    return (
        <button className="button-text" disabled={disabled}>
            {name}
        </button>
    );
}

export default Button;