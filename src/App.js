import { useEffect, useRef } from 'react';
import LeftHand from './LeftHand/LeftHand';
import RightHand from "./RightHand/RightHand";
import Particle from './Particle';
import Input from './InputHandler';

function App() {
  const about = useRef();
  const projects = useRef();
  const contact = useRef();
  
  useEffect(() => {
    const body = document.querySelector("body");
    const canvas = document.getElementById("canvas");
    
    window.addEventListener("load", () => {
      if (window.innerWidth > 1280) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position = "fixed";
        canvas.style.backgroundColor = "transparent";
      } else {
        canvas.width = document.body.scrollWidth;
        canvas.height = document.body.scrollHeight;
        canvas.style.position = "absolute";
        canvas.style.backgroundColor = "transparent";
      }
    })
    const ctx = canvas.getContext("2d");
    const guys = [];
    for (let i = 0; i < 3000; i++) {
      const randx = Math.random() * document.body.clientWidth;
      const randy = Math.random() * document.body.clientHeight;
      const randAngle = Math.random() * 360;
      guys.push(new Particle(randx,randy,randAngle));
    }
    guys.forEach(guy => new Input(guy));
    body.style.backgroundImage = `radial-gradient(at 0px 0px, rgba(0, 0, 0, 0.8), transparent`;
    setInterval(() => {
      ctx.clearRect(0,0,document.body.clientWidth, document.body.clientHeight);
      guys.forEach(part => {
        part.update()
        part.draw(ctx)
      })
    }, 10)
    setInterval(() => {
      const rand1 = Math.random() * 255;
      const rand2 = Math.random() * 255;
      const rand3 = Math.random() * 255;
      body.style.backgroundColor = `rgb(${rand1}, ${rand2}, ${rand3})`;
    }, 1000)
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      body.style.backgroundImage = `radial-gradient(at ${x}px ${y}px, rgba(${x / window.screen.width * 255}, ${y / window.screen.width * 255}, ${y / window.screen.width *5}, 0.8), transparent`;
    })
  }, [])
  
  
  return (
    <>
      <div className="beeg">
        <div className="row">
          <div className="col-6 text-white">
            <LeftHand />
          </div>
          <div className="col-6 text-center text-white">
            <RightHand />
          </div>
        </div>
      </div>
      <div className="smol">
        <div className="text-white text-center">
          <LeftHand about={about} projects={projects} contact={contact} />
        </div>
        <div className="text-center text-white">
          <RightHand projects={projects} contact={contact}  />
        </div>
        <div className="spacer"><p className="text-white lead">Thank you</p></div>
      </div>
      
      
    </>
  );
}

export default App;
