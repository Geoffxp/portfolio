import React from "react";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";

export default function LeftHand({ about, projects, contact }) {
    
    return (
        <>
            <div style={{height: "100vh", position: "sticky", top: 0, padding: "5%", paddingTop: "25%"}} className="beeg">
                <div style={{ height: "100%" }} className="container col-12">
                    <div>
                    <Header />
                    <About />
                    </div>
                    
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