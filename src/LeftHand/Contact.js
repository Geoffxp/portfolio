import React from "react";
import email from "../icons/sq-email.png"
import github from "../icons/sq-github.png";
import linkedin from "../icons/sq-linkedin.png";

import "./Contact.css";


export default function Contact({ contact }) {

    function sendEmail() {
        window.location = "mailto:geoffxp@gmail.com";
    }
    return (
        <div className="mt-4">
            <div className="beeg">
                <div className="fade">
                    <div className="d-flex">
                        <h2 className="mb-4 mr-3">Contact</h2>
                        <div className="liner"></div>
                    </div>
                    <div id="outer" className="container card dark d-flex flex-row"  onClick={sendEmail}>
                        <img src={email} alt="email" style={{filter: "grayscale(100) brightness(240%)"}}/>
                        <div id="inner">
                            <p className="lead">E M A I L</p>
                        </div>
                        <img src={email} alt="email" style={{filter: "grayscale(100) brightness(240%)"}}/>
                    </div>
                    <div id="outer" className="container card dark d-flex flex-row" onClick={() => window.open("https://github.com/Geoffxp", "_blank")}>
                        <img src={github} alt="github" style={{filter: "invert(1) brightness(40%)"}}/>
                        <div id="inner">
                            <p className="lead">G I T H U B</p>
                        </div>
                        <img src={github} alt="github" style={{filter: "invert(1) brightness(40%)"}}/>
                    </div>
                    <div id="outer" className="container card dark d-flex flex-row" onClick={() => window.open("https://www.linkedin.com/in/geoffrey-jarman/", "_blank")}>
                        <img src={linkedin} alt="linkedIn"/>
                        <div id="inner">
                            <p className="lead">L I N K E D I N</p>
                        </div>
                        <img src={linkedin} alt="linkedIn"/>
                    </div>
                </div>
            </div>
            <div ref={contact} className="smol">
                <div className="fade">
                    <div className="d-flex">
                        <div className="liner"></div>
                        <h2 className="mb-4 ml-3 mr-3">Contact</h2>
                        <div className="liner"></div>
                    </div>
                    <div id="outer" className="container card dark d-flex flex-row">
                        <div id="inner">
                            <img src={email} alt="email" style={{filter: "grayscale(100) brightness(240%)"}}/>
                        </div>
                    </div>
                    <div id="outer" className="container card dark d-flex flex-row">
                        <div id="inner">
                            <img src={github} alt="github" style={{filter: "invert(1) brightness(40%)"}}/>
                        </div>
                    </div>
                    <div id="outer" className="container card dark d-flex flex-row">
                        <div id="inner">
                            <img src={linkedin} alt="linkedIn"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}