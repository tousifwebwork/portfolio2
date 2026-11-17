"use client";

import { TypeAnimation } from "react-type-animation";

// Defined outside the component so it is never recreated on re-render
// (a new array each render can restart the animation and cause flicker).
const SEQUENCE = [
  "", 1200, // wait for the hero fade-in before typing starts
  "Designer", 2000,
  "Developer", 2000,
  "Creator", 2000,
  "Mentor", 2000,
];

export default function TypedIntro({ className = "" }) {
  return (
    <TypeAnimation
      sequence={SEQUENCE}
      wrapper="span"
      speed={40}
      deletionSpeed={60}
      repeat={Infinity}
      cursor
      className={className}
      style={{ display: "inline-block", whiteSpace: "nowrap" }}
    />
  );
}