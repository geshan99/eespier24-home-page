import React from "react";
import "./Section1.css"; // Import CSS for styling
import eespireLogo from "../assets/EE-spire-logo 1.svg";

function Section1() {
    return (
        <div className="section1" id="section1">
            <div className="left">
                <img src={eespireLogo} alt="Logo" className="logo" />
            </div>
            <div className="right">
                <h2>Elevate Your Future Where Careers Ignite!</h2>
                <p>
                    Welcome to EESpire 2024, the pinnacle of career exploration!
                    As the annual career fair hosted by EESoc, it's the bridge
                    connecting our talented final-year undergraduates with
                    dynamic companies seeking exceptional talents. Join us for a
                    day of possibilities, networking, and opportunities that
                    will shape the trajectory of promising careers.
                </p>
                <div className="button-container">
                    <button className="section-button">See More</button>
                </div>
            </div>
        </div>
    );
}

export default Section1;
