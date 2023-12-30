import React from "react";
import { TypeAnimation } from "react-type-animation";
let width = window.screen.width;
let textSize = "24px";
if (width > 640) textSize = "42px";
function Type(props) {
  return (
    <TypeAnimation
      sequence={[
        "RESTAURANT", // Types 'One'
        3000, // Waits 1s
        "CAFE", // Deletes 'One' and types 'Two'
        3000, // Waits 2s
        "BAR", // Types 'Three' without deleting 'Two'
        3000,
        "FOR PARTIES",
        3000,
        () => {},
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: {textSize}, fontWeight: 400 }}
    />
  );
}

export default Type;
