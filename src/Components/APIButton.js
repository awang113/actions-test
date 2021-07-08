import React from 'react';
import "./APIButton.css";

function APIButton(props) {
    return (
        <button className="apiref-button" onClick={function() {window.location = props.link;}}>
            <h2 class="apiref-name">{props.name}</h2>
        </button>
    )
}

export default APIButton
