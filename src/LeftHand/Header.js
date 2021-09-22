import React from "react";
import headshot from "../icons/headshot.png"
import Navigation from "./Navigation";

export default function Header({ about, projects, contact }) {
    return (
        <>
        <div className="beeg">
            <div>
                <h1 className="text-white slide-top">GeoffreyJarman</h1>
                <div className="d-flex slide-top-wait mb-4">
                    <div className="liner"></div>
                    <h3 className="ml-3 pt-4 text-white">SoftwareDeveloper</h3>
                </div>
            </div>
        </div>
        <div className="smol">
            <div>
                <h1 className="text-white slide-top">Geoffrey Jarman</h1>
                <div id="outer">
                    <div id="inner">
                        <img className="round fade slide-top-wait" src={headshot} alt="headshot"/>
                    </div>
                </div>
                <Navigation about={about} projects={projects} contact={contact} />
                <div className="d-flex slide-top-wait">
                    <div className="liner"></div>
                    <h3 ref={about} className="pt-4 ml-3 mr-3 text-white">SoftwareDeveloper</h3>
                    <div className="liner"></div>
                </div>
            </div>
        </div>
            
        </>
    )
}