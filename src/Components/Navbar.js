import React, { useState } from 'react';
import './Navbar.css'; //tell the page that we're using the Navbar.css stylesheet

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('a search value was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar-container">
                    <a href="https://www.microstrategy.com">
                        <img src="ms-logo.png" alt="MicroStrategy Logo" name="navbar-logo" />
                    </a>
                    <form id="search" target="__blank">
                    </form>
                    <button onClick={function () { window.location = "https://www.microstrategy.com/en/support?now=expert" }} className="button">
                        Talk to an expert
                    </button>
                </div>
            </div>
        );
    }
}

// function Navbar() {
//     return (
//             <div className="navbar">
//                 <div className="navbar-container">
//                     <a href="https://www.microstrategy.com">
//                         <img src="ms-logo.png" alt="MicroStrategy Logo" name="navbar-logo" />
//                     </a>
//                     <form id="search" target="__blank">
//                     </form>
//                     <button onClick={function() {window.location = "https://www.microstrategy.com/en/support?now=expert"}} className="button">
//                             Talk to an expert
//                         </button>
//                 </div>
//             </div>
//     )
// }

export default Navbar
