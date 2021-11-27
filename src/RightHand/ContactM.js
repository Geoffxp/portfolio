import React, { useRef } from "react";
import headshot from "../icons/headshot.png";
import headshotOutline from "../icons/TtDZdu01.svg";

export default function ContactM({ contact }) {
    const coverM = useRef();
    const outlineM = useRef();
    const fillM = useRef();

    const show = () => {
        outlineM.current.style.opacity = 0;
        fillM.current.style.opacity = 1;
    }
    const hide = () => {
        outlineM.current.style.opacity = 1;
        fillM.current.style.opacity = 0;
    }
    function sendEmail() {
        window.location = "mailto:geoffxp@gmail.com";
    }
    return (
        <div ref={contact} className="smol" style={{position:"relative", display:"flex",marginLeft:"calc(50% - 115px", marginTop:"100px"}}>
            <div className="fade" style={{width:"230px"}}>
                <div className="d-flex" style={{ alignItems: "center", height: "100px"}} onMouseLeave={hide}>
                    <div id="outer">
                        <div id="inner" className="dark d-flex flex-row" onClick={show}>
                            <img id="fill-image" ref={fillM} style={{color: "white", border: "2px solid white"}} className="round" src={headshot} alt="headshot"/>
                        </div>
                        <div id="inner" className="dark d-flex flex-row" onClick={show}>
                            <img id="outline-image" ref={outlineM} style={{color: "white", border: "2px solid white"}} className="round" src={headshotOutline} alt="headshot"/>
                        </div>
                    </div>
                    <div ref={coverM} style={{position: "absolute", marginLeft: "calc(105px)", display: "flex", alignItems: "center", overflow: "hidden", transition: "all 0.5s"}}>
                        <div class="lines">
                            <div class="up-line"></div>
                            <div class="side-line"></div>
                            <div class="down-line"></div>
                        </div>
                        <div style={{marginBottom: "9px", marginLeft: "-10px", textAlign: "right"}}>
                            <p style={{cursor:"pointer"}} class="underline" onClick={sendEmail}>Email</p>
                            <p style={{cursor:"pointer"}}  class="underline" onClick={() => window.open("https://github.com/Geoffxp", "_blank")}>Github</p>
                            <p style={{cursor:"pointer"}}  class="underline" onClick={() => window.open("https://www.linkedin.com/in/geoffrey-jarman/", "_blank")}>LinkedIn</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}