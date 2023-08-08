import React, { useState } from "react";

const Upload = (props) => {
  const [valueInputs, setValueInputs] = useState("");
  const handleChange = (event) => {
    console.log(event);
    event.preventDefault();
    let num = "";
    if (event.target.value !== "") {
      num = Number(event.target.value);
    }

    setValueInputs(num);
    // props.handleQuantity(num, event.target.id);
  };
  return (
    <>
      <div className="uploadDetails">
        <h1>Modelo</h1>
        <input type="file" />
        <input
          type="number"
          onWheel={(e) => e.target.blur()}
          value={valueInputs}
          onChange={handleChange}
          placeholder="0"
        />
      </div>
    </>
  );
};

export default Upload;
