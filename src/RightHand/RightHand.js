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
                <h2 className="mb-5">Projects</h2>
                <ProjectGrid />
                <Contact />
            </div>
        </div>
        
        </>
    )
}