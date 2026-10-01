import { useState } from "react";
import "../App.css";
import "./RandomNumber.css";

function RandomNumber() {
  const [value, setvalue] = useState(null);

  function generator() {
    const val = Math.floor(Math.random() * 100) + 1;
    setvalue(val);
  }

  return (
    <>
      <div className="RandomNumber-card">
        <div className="RandomNumber-display">
          <h1 className="RandomNumber-title">RANDOM NUMBER</h1>
          {value === null ? (
            <p className="RandomNumber-message">No number generated yet</p>
          ) : (
            <h2 className="RandomNumber-value">{value}</h2>
          )}
        </div>
        <div className="RandomNumber-button">
          <button className="RandomNumber-generate-button" onClick={generator}>
            GENERATE
          </button>
        </div>
      </div>
    </>
  );
}

export default RandomNumber;
