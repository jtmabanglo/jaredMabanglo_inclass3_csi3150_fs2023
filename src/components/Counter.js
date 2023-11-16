import React from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = React.useState({ counterVal: 0 });
  //   function to handle subtraction to counter
  function subtract() {
    const newCounterValue = counter.counterVal - 1;
    setCounter((prevCounter) => ({
      counterVal: newCounterValue,
    }));
    console.log(counter);
  }

  //   function to handle addition to counter
  function add(e) {
    const newCounterValue = counter.counterVal + 1;
    setCounter((prevCounter) => ({
      counterVal: newCounterValue,
    }));
    console.log(counter);
  }

  return (
    <div className="counterContainer">
      <button
        type="button"
        id="minusButton"
        name="minusButton"
        onClick={subtract}
      >
        -
      </button>
      <input
        type="text"
        className="counterText"
        value={counter.counterVal}
      ></input>
      <button type="button" id="addButton" name="addButton" onClick={add}>
        +
      </button>
    </div>
  );
};

export default Counter;
