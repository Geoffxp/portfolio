import React from "react";
import ContactM from "../RightHand/ContactM";
import ProjectGrid from "./ProjectGrid";

export default function RightHand({ projects, contact, songs }) {
    return (
        <>
        <div className="beeg">
            <div className="slide-top-text">
                <ProjectGrid songs={songs} />
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
                <ContactM contact={contact} />
            </div>
        </div>
        </>
    )
}