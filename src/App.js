import { useRef } from 'react';
import LeftHand from './LeftHand/LeftHand';
import RightHand from "./RightHand/RightHand";

function App() {
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  return (
    <>
      <div className="beeg">
        <div className="row pt-5">
          <div className="col-6 text-white">
            <LeftHand />
          </div>
          <div className="col-6 pt-5 text-center text-white">
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
        <div id="outer" className="spacer"><p id="inner"className="text-white lead">Thank you</p></div>
      </div>
      
      
    </>
  );
}

export default App;
