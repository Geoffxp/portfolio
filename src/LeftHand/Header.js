import React from "react";
import Navigation from "./Navigation";

export default function Header({ about, projects, contact }) {
    return (
        <>
        <div className="beeg">
            <div>
                <h1 className="text-white slide-top">Hi.</h1>
            </div>
        </div>
        <div className="smol">
            <div>
                <h1 className="text-white slide-top">Hi.</h1>
                <h3 className="text-white slide-top">I'm Geoff.</h3>
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