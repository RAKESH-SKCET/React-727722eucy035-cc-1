import React, { useState } from "react";

function Font() {
  const [font, setfont] = useState(16);

  const [variable, setvar] = useState({ fontSize: "16px" });
  const Decrement = () => {
    setfont(font - 10);
    setvar({
      fontSize: font + "px",
    });
  };
  const Increment = () => {
    setfont(font + 10);
    setvar({
      fontSize: font + "px",
    });
  };
  return (
    <div className="C">
      <button className="A" onClick={Increment}>Increase</button><tab>  </tab>
      <button className="B" onClick={Decrement}>Decrease</button>
      <p style={variable}>text</p>
    </div>
  );
}

export default Font;