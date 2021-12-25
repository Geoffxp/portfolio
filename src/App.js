import { useEffect, useState, useRef } from 'react';
import LeftHand from './LeftHand/LeftHand';
import RightHand from "./RightHand/RightHand";
import Particle from './Particle';
import Input from './InputHandler';

function App() {
  const [XMLsongList, setXMLSongList] = useState([]);

  const dot = new OffscreenCanvas(2,2)
  const dtx = dot.getContext("2d");
  dtx.width=2;
  dtx.height=2;
  dtx.fillStyle = "white"
  dtx.beginPath();
  dtx.arc(0,0,2,0,Math.PI*2);
  dtx.fill();

  const about = useRef();
  const projects = useRef();
  const contact = useRef();
  
  useEffect(() => {
    const body = document.querySelector("body");
    const canvas = document.getElementById("canvas");
    
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
    const ctx = canvas.getContext("2d");
    const guys = [];
    const limit = window.innerWidth > 1280 ? 3000 : 500;
    for (let i = 0; i < limit; i++) {
      const randx = Math.random() * document.body.clientWidth;
      const randy = Math.random() * document.body.clientHeight;
      const randAngle = Math.random() * 360;
      guys.push(new Particle(randx,randy,randAngle, dot));
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
    });

    const RSS_URL = `https://shrouded-cove-47004.herokuapp.com/https://feeds.soundcloud.com/users/soundcloud:users:7235285/sounds.rss`;
        const xml = new XMLHttpRequest();
        const temp = [];
        xml.open("GET", RSS_URL, true);
        xml.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xml.onload = () => {
            const songs = xml.responseXML.getElementsByTagName("item");
            for (let song of songs) {
                const tempSong = {};
                for (let child of song.children) {
                    if (child.tagName === "enclosure") {
                        tempSong["audio"] = new Audio(child.attributes.url.nodeValue);
                    }
                    if (child.tagName === "title" && child.innerHTML !== "Geoff Jarman") {
                        tempSong["name"] = child.innerHTML;
                    }
                    if (child.tagName === "link") {
                        tempSong["url"] = child.innerHTML;
                    }
                }
                
                temp.push(tempSong);
                setXMLSongList(temp);
            }
        };
        xml.onerror = function (e) {
            console.error(xml.statusText);
          };
          xml.send(null);
  }, [])


  
  
  return (
    <>
      <div className="beeg">
        <div className="row">
          <div className="col-6 text-white">
            <LeftHand />
          </div>
          <div className="col-6 text-center text-white">
            <RightHand songs={XMLsongList} />
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
