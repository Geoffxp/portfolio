import React from "react";
import email from "../icons/sq-email.png"
import github from "../icons/sq-github.png";
import linkedin from "../icons/sq-linkedin.png";
import "./Contact.css";

export default function Contact() {
    function sendEmail() {
        window.location = "mailto:geoffxp@gmail.com";
    }
    return (
        <div className="mt-5">
            <div className="beeg">
                <div className="fade">
                    <div className="d-flex">
                        <h2 className="mb-4 mr-3">Contact</h2>
                        <div className="liner"></div>
                    </div>
                    <div id="outer" className="container card dark d-flex flex-row"  onClick={sendEmail}>
                        <img src={email} alt="email"/>
                        <div id="inner">
                            <p className="lead">geoffxp@gmail.com</p>
                        </div>
                        <img src={email} alt="email"/>
                    </div>
                    <div id="outer" className="container card dark d-flex flex-row" onClick={() => window.open("https://github.com/Geoffxp", "_blank")}>
                        <img src={github} alt="github"/>
                        <div id="inner">
                            <p className="lead">github.com/Geoffxp</p>
                        </div>
                        <img src={github} alt="github"/>
                    </div>
                    <div id="outer" className="container card dark d-flex flex-row" onClick={() => window.open("https://www.linkedin.com/in/geoffrey-jarman/", "_blank")}>
                        <img src={linkedin} alt="linkedIn"/>
                        <div id="inner">
                            <p className="lead">linkedin.com/in/geoffrey-jarman</p>
                        </div>
                        <img src={linkedin} alt="linkedIn"/>
                    </div>
                </div>
            </div>
            <div className="smol">
                <div className="fade">
                    <h2 className="mb-4">Contact</h2>
                    <div id="outer" className="container card dark d-flex flex-row">
                        <div id="inner">
                            <img src={email} alt="email"/>
                        </div>
                    </div>
                    <div id="outer" className="container card dark d-flex flex-row">
                        <div id="inner">
                            <img src={github} alt="github"/>
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