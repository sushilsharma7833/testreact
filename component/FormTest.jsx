import { useState } from "react";

function FunctionTest() {
  const [firstName, setFirstName] = useState("sushil");

  function updateValue() {
    setFirstName("abhisek");
  }

  return (
    <>
      <h1>Form</h1>
      <h1>{firstName}</h1>
      <button onClick={updateValue}>Change Value</button>
    </>
  );
}

export default FunctionTest;
