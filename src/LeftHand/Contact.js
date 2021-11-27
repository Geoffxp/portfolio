import React, { useRef } from "react";
import headshot from "../icons/headshot.png";
import headshotOutline from "../icons/TtDZdu01.svg";

import "./Contact.css";


export default function Contact({ contact }) {
    const cover = useRef();
    const outline = useRef();
    const fill = useRef();
    const show = () => {
        outline.current.style.opacity = 0;
        fill.current.style.opacity = 1;
        cover.current.style.width = "250px";
    }
    const hide = () => {
        outline.current.style.opacity = 1;
        fill.current.style.opacity = 0;
        cover.current.style.width = "0px";
    }
    function sendEmail() {
        window.location = "mailto:geoffxp@gmail.com";
    }
    return (
        <div className="mt-4">
            <div className="beeg">
                <div className="fade" style={{width: "100%", position: "absolute", bottom: 0, left: 0}}>
                    <div className="d-flex" style={{ alignItems: "center", height: "100px"}} onMouseLeave={hide}>
                        <div id="outer">
                            <div id="inner" className="dark d-flex flex-row" onMouseEnter={show}>
                                <img id="fill-image" ref={fill} style={{color: "white", border: "2px solid white"}} className="round" src={headshot} alt="headshot"/>
                            </div>
                            <div id="inner" className="dark d-flex flex-row" onMouseEnter={show}>
                                <img id="outline-image" ref={outline} style={{color: "white", border: "2px solid white"}} className="round" src={headshotOutline} alt="headshot"/>
                            </div>
                        </div>
                        <div ref={cover} style={{ marginLeft: "calc(5% + 105px)", display: "flex", alignItems: "center", width: "0px", overflow: "hidden", transition: "all 0.5s"}}>
                            <div class="lines">
                                <div class="up-line"></div>
                                <div class="side-line"></div>
                                <div class="down-line"></div>
                            </div>
                            <div style={{marginBottom: "8px", marginLeft: "-10px", textAlign: "right"}}>
                                <p style={{cursor:"pointer"}} class="underline" onClick={sendEmail}>Email</p>
                                <p style={{cursor:"pointer"}}  class="underline" onClick={() => window.open("https://github.com/Geoffxp", "_blank")}>Github</p>
                                <p style={{cursor:"pointer"}}  class="underline" onClick={() => window.open("https://www.linkedin.com/in/geoffrey-jarman/", "_blank")}>LinkedIn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}