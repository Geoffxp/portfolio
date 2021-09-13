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
          <div className="col-6 text-center text-white">
            <RightHand />
          </div>
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
