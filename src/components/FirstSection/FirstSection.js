import React, { useState, useEffect } from "react";

const FirstSection = () => {
  const [value, setValue] = useState(0);
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <main>
      <div className="container">
        <h3 className="temporary-h3">UseEffect Project:</h3>
        <h5 className="temporary-h5">
          This page width is currently:{" "}
          <span className="temporary-span">{size}px</span>
        </h5>
        <h3 className="temporary-h3">UseState Project:</h3>
        <h5 className="temporary-h5">
          You pressed the button:{" "}
          <span className="temporary-span">{value}</span> times
        </h5>
        <button
          onClick={() => {
            setValue(value + 1);
          }}
          className="btn"
          id="increase-value"
        >
          Increase Value
        </button>
      </div>
    </main>
  );
};

export default FirstSection;
