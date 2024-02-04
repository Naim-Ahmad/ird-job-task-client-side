"use client"
import { useState } from "react";

export default function Tooltip({ children, content }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
       <div className={`tooltip -top-5 ${showTooltip ? "block" : "hidden"}`}>{content}</div>
      {children}
    </div>
  );
}