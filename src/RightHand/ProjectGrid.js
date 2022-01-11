import React, { useState } from "react";
import "./ProjectGrid.css";

export default function ProjectGrid({ songs }) {
    const play = (audio) => {
        if (audio) {
            audio.play();
        }
    }
    const stop = (audio) => {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    }
    const follow = (project) => {
        if (project.audio) {
            project.audio.pause();
            project.audio.currentTime = 0;
        }
        window.open(`${project.url}`, "_blank")
    }
    const projectList = [
        {
            name: "Plateau Motors Site Redesign",
            url: "https://plateau-motors.netlify.app",
            description: "Redesigned website for my uncles auto shop. The site is currently in development. Built with Nextjs and hosted with Netlify. Also makes use of Netlify's serverless form submission. I made all of designs and exported the assets with a combination of figma and photoshop."
        },
        {
            name: "Excel Carpet Cleaning (Figma)",
            url: "https://www.figma.com/proto/O2YxBcBemXb74ap7bHCJ4y/EXCEL-CARPET-CLEANING?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1",
            description: "Currently in design stage. This is a figma prototype for three of the pages. This app will be developed with Nextjs and deployed with Netlify."
        },
        {
            name: "myteam",
            url: "https://myteam-virid.vercel.app/",
            description: "Frontend Mentor coding challenge. This is the first serious frontend task I took on. I really like the design and the interactions. I learned a lot about mobile pullout menus during this as well!",

        },
        {
            name: "Periodic Tables",
            url: "https://polar-depths-52652.herokuapp.com/dashboard",
            description: "This full-stack application allows the users to create and store reservations, seat reservations at tables, and keep track of the status of everything in your restaurant.",

        },
        {
            name: "AstroDisastro",
            url: "https://astro-disatro-js.vercel.app/",
            description: "Survival game orginally coded in Java, translated to JavaScript. A very addicting work in progress with a lot of potential. My high score is 1400, I bet you can't beat me!",
        
        },
        {
            name: "Brick Breaker",
            url: "https://brick-breaker-iota.vercel.app/",
            description: "Javascript remake of the classic Atari game Breakout featuring a soundtrack created by my wife and me.",

        },
        {
            name: "Pomodoro Timer",
            url: "https://geoffxp.github.io/pomodoro-timer/",
            description: "This is a time managemet application made strictly with React and Twitter Bootstrap. Makes use of useState to manage time increments and timer section changes."
        },
        {
            name: "We Love Movies",
            url: "https://secret-everglades-27097.herokuapp.com/",
            description: "This is a full-stack application that uses a database to pull and store movie and theater titles. Makes use of tables with complex interactions and presents data in an understandable way."
        },
    ]
    const [currentList, setCurrentList] = useState(projectList);
    return (
        <>
            <div className="beeg">
            <ul style={{paddingRight:"40px", marginBottom:0}}>
                <li onClick={() => setCurrentList(projectList)}>DEVELOPMENT</li>
                <p>|</p>
                <li onClick={() => setCurrentList(songs)}>MUSIC</li>
            </ul>
                <div style={{ marginTop: "25px", marginRight: "0px"}}className="projects">
                    {currentList && currentList.map((project) => {
                        return (
                            <div key={project.name} id="outer" className="col-12 project-box grow mb-3"
                                onMouseOver={() => play(project.audio)}
                                onMouseLeave={() => stop(project.audio)}
                                onClick={() => follow(project)}>
                                <div id="inner" style={{position:"relative"}}>
                                    <h3 className="pb-4">{project.name}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="smol">
                <div>
                    {projectList && projectList.map((project) => {
                        return (
                            <div key={project.name} id="outer" className="col-12 project-box grow mb-3 mt-3"
                                
                                onClick={()=> window.open(`${project.url}`, "_blank")}>
                                <div id="inner">
                                    <h3 className="pb-4">{project.name}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        
        </>
        
    )
}