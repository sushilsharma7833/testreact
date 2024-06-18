import { useState } from "react";

function Counter() {
  const [num, setNum] = useState(0);

  function handleIncrement() {
    setNum(num + 1);
  }

  function handleDecrement() {
    if (num > 0) {
      setNum(num - 1);
    }
  }

  return (
    <>
      <div>
        <div>
          <button onClick={handleIncrement}>Increment</button>
          <p>{num}</p>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default Counter;
