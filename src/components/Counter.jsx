import { useState } from "react";
import "../App.css";
import "./Counter.css"

function Counter() {
  const [count, setcount] = useState(0);
  const [alert, setalert] = useState("");

  function icount() {
    setcount(count + 1);
    setalert("")
  }
  function dcount() {
    if (count != 0) {
      setcount(count - 1);
    } else {
      setalert("Minimum value reached !!!");
    }
  }
  function reset(){
    setcount(0);
  }
  return (
    <>
      <div className="counter-card">
        <div className="counter-display">
          <h1 className="counter-title">Counter</h1>
          <h2 className="counter-value">{count}</h2>
          <h4 className="counter-alert">{alert}</h4>
        </div>
        <div className="counter-buttons">
          <button className="counter-increment-button" onClick={icount}>
            +
          </button>
          <button className="counter-decrement-button" onClick={dcount}>
            - 
          </button>
          <button className="counter-reset-button" onClick={reset}>↻</button>
        </div>
      </div>
    </>
  );
}

export default Counter;
