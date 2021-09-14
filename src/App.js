import LeftHand from './LeftHand/LeftHand';
import RightHand from "./RightHand/RightHand";

function App() {
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
        <div className="col-6 offset-1 text-white">
          <h1>&#125;</h1>
        </div>
      </div>
      <div className="smol">
        <div className="text-white text-center">
          <LeftHand />
        </div>
        <div className="text-center text-white">
          <RightHand />
        </div>
      </div>
      
      
    </>
  );
}

export default App;
