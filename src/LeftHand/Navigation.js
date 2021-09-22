import React from "react";

export default function Navigation({ about, projects, contact }) {
    const executeScroll = (ref) => ref.current.scrollIntoView({
        behavior: "smooth"
    });
    return (
        <>
            <ul>
                <li key="about" onClick={() => executeScroll(about)}>ABOUT</li>
                <p>|</p>
                <li key="projects" onClick={() => executeScroll(projects)}>PROJECTS</li>
                <p>|</p>
                <li key="contact" onClick={() => executeScroll(contact)}>CONTACT</li>
            </ul>
        </>
    )
}