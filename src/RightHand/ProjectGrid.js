import React, { useRef, useState } from "react";
import "./ProjectGrid.css";
import SC from "soundcloud";

export default function ProjectGrid() {
    const RSS_URL = `https://feeds.soundcloud.com/users/soundcloud:users:7235285/sounds.rss`;
    const xml = new XMLHttpRequest();
    xml.open("GET", RSS_URL);
    xml.send('');
    xml.onload = () => console.log(xml.responseXML);

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
    const songList = [
        {
            name: "Take It Easy With me",
            url: "https://myteam-virid.vercel.app/",
            audio: new Audio("https://feeds.soundcloud.com/stream/807558739-elg30f-take-it-easy-with-me.mp3")
        },
    ]
    const projectList = [
        {
            name: "myteam",
            url: "https://myteam-virid.vercel.app/",
            description: "Frontend Mentor coding challenge. This is the first serious frontend task I took on. I really like the design and the interactions. I learned a lot about mobile pullout menus during this as well!",

        },
        {
            name: "Brick Breaker",
            url: "https://brick-breaker-iota.vercel.app/",
            description: "Javascript remake of the classic Atari game Breakout featuring a soundtrack created by my wife and me.",

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
            {/* <ul style={{paddingRight:"40px", marginBottom:0}}>
                <li onClick={() => setCurrentList(projectList)}>DEVELOPMENT</li>
                <p>|</p>
                <li onClick={() => setCurrentList(songList)}>MUSIC</li>
            </ul> */}
                <div style={{ marginTop: "25px", marginRight: "0px"}}className="projects">
                    {currentList && currentList.map((project) => {
                        return (
                            <div key={project.name} id="outer" className="col-12 project-box grow mb-3"
                                onMouseOver={() => play(project.audio)}
                                onMouseLeave={() => stop(project.audio)}
                                onClick={()=> window.open(`${project.url}`, "_blank")}>
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