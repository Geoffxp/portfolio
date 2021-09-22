import React from "react";

export default function Navigation({ about, projects, contact }) {
    const executeScroll = (ref) => ref.current.scrollIntoView({
        behavior: "smooth"
    });
    return (
        <>
            <ul>
                <li onClick={() => executeScroll(about)}>ABOUT</li>
                <p>|</p>
                <li onClick={() => executeScroll(projects)}>PROJECTS</li>
                <p>|</p>
                <li onClick={() => executeScroll(contact)}>CONTACT</li>
            </ul>
        </>
    )
}