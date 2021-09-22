import React from "react";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";

export default function LeftHand({ about, projects, contact }) {
    
    return (
        <>
            <div className="beeg">
                <div className="container col-12 offset-md-2">
                    <Header />
                    <About />
                    <Contact />
                </div>
            </div>
        <div className="smol">
            <div className="container">
                    <Header about={about} projects={projects} contact={contact} />
                    <About />
                </div>
        </div>
        
        </>
    )
}