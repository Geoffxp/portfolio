import React from "react";
import headshot from "../icons/headshot.png"
export default function About() {
    return (
        <>
        <div className="beeg">
            <div className="d-flex">
                <div className="slide-top-text col-8">
                    <p className="lead">I am a full stack web developer living in Austin, TX.
                                        I have been coding for many years and have loved
                                        every minute of it.
                                        My experience at Green River College and Thinkful have allowed me
                                        to work on many projects and develop many problem solving 
                                        skills.
                                        I am proficient in React, Node, Express, PostGres, and 
                                        Knex and with these tools I can make full-stack web 
                                        applications start to finish. I am currently learning TypeScript,
                                        Next.js, and Angular.</p>
                </div>
                <div id="outer" className="col-4">
                    <div id="inner" className="dark d-flex flex-row">
                        <img className="round fade" src={headshot} alt="headshot"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="smol">
            <div className="d-flex">
                <div className="slide-top-text">
                    <p className="lead">I am a full stack web developer living in Austin, TX.
                                        I have been coding for many years and have loved
                                        every minute of it.
                                        My experience at Green River College and Thinkful have allowed me
                                        to work on many projects and develop many problem solving 
                                        skills.
                                        I am proficient in React, Node, Express, PostGres, and 
                                        Knex and with these tools I can make full-stack web 
                                        applications start to finish. I am currently learning TypeScript,
                                        Next.js, and Angular</p>
                </div>
            </div>
        </div>
            
        </>
    )
}