import React from "react";

export default function Navigation({ about, projects, contact }) {
    const executeScroll = (ref) => {
        console.log("here")
        ref.current.scrollIntoView({
            behavior: "smooth"
        })
    }
    return (
        <>
            <ul >
                <li style={{zIndex:"2"}} key="about" onClick={() => executeScroll(about)}>ABOUT</li>
                <p>|</p>
                <li style={{zIndex:"2"}} key="projects" onClick={() => executeScroll(projects)}>PROJECTS</li>
                <p>|</p>
                <li style={{zIndex:"2"}} key="contact" onClick={() => executeScroll(contact)}>CONTACT</li>
            </ul>
        </>
    )
}