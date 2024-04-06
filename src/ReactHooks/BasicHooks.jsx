import React, { useState } from "react";

const BasicHooks = () => {
  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
  };

  return (
    <div id="Counter">
      <button type="button" className="btn" onClick={handleClick2}>
        Sub
      </button>
      <h1>{counter}</h1>
      <button type="button" className="btn" onClick={handleClick1}>
        Add
      </button>
    </div>
  );
};

export default BasicHooks;
