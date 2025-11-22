import React from "react";
import logo from "../images/logo-1.png"

function Home() {
    return (
        <div className="home-container">
            <div className="home-logo">
                <img src={logo} alt="logo" width="13%"/>
            </div> 
            <div className="home-text-container">
                <h1 className="home-h1">Seafreight Quote Generator</h1>
                <p className="home-p">Get a quick and simple seafreight quote from anywhere in the world!</p>
                <p className="home-p">Get a quick and simple seafreight quote from anywhere in the world!</p>
                <p className="home-p">Get a quick and simple seafreight quote from anywhere in the world!</p>
                <button className="home-button">Get Quote</button>
            </div>
        </div>
    )
};

export default Home;