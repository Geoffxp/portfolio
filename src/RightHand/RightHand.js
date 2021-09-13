import React from "react";
import Contact from "../LeftHand/Contact";
import ProjectGrid from "./ProjectGrid";

export default function LeftHand() {
    return (
        <>
        <div className="beeg">
            <div className="container col-md-8 offset-md-2 slide-top-text">
                <ProjectGrid />
            </div>
        </div>
        <div className="smol">
            <div className="container mt-5 slide-top-text">
                <div className="d-flex">
                    <div className="liner"></div>
                    <h2 className="ml-3 mr-3 text-white">Projects</h2>
                    <div className="liner"></div>
                </div>
                <ProjectGrid />
                <Contact />
            </div>
        </div>
        
        </>
    )
}