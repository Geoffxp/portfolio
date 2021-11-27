import React from "react";
import Contact from "../LeftHand/Contact";
import ProjectGrid from "./ProjectGrid";

export default function RightHand({ projects, contact }) {
    return (
        <>
        <div className="beeg">
            <div className="slide-top-text">
                <ProjectGrid />
            </div>
        </div>
        <div className="smol" >
            <div className="container mt-5 slide-top-text">
                <div className="d-flex">
                    <div className="liner"></div>
                    <h2 ref={projects} className="ml-3 mr-3 text-white">Projects</h2>
                    <div className="liner"></div>
                </div>
                <ProjectGrid />
                <Contact contact={contact} />
            </div>
        </div>
        </>
    )
}