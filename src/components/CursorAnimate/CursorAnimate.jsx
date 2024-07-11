"use client";
//Import react fictions
import {useEffect, useState} from "react";
//Import react-animated-cursor
import AnimatedCursor from "react-animated-cursor";
export default function CursorAnimate() {
  const [validatorCursor, setValidatorCursor] = useState("");

  useEffect(() => {
    if (window.innerWidth < 768) {
      setValidatorCursor("none");
    }
  }, []);
  return (
    <AnimatedCursor
      className={"hidden"}
      innerStyle={{
        display: `${validatorCursor ? validatorCursor : ""}`,
        backgroundColor: "#000",
      }}
      outerStyle={{
        display: `${validatorCursor ? validatorCursor : ""}`,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      }}
      clickables={[
        "a",
        "img",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}
