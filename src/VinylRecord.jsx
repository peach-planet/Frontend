import React, { useState } from "react";
import "./App.css";

export default function VinylRecord({
  src = "/assets/vinyl.png", // 기본값은 문자열/숫자 그대로
  size = 220,
  speed = 7,
  playing = true,
  onToggle,
}) {
  const [hover, setHover] = useState(false);

  return (
    <div className="record-wrap">
      <div
        className={`record ${playing ? "spin" : ""} ${hover ? "hovered" : ""}`}
        style={{
          width: size,
          height: size,
          animationDuration: `${speed}s`,
          backgroundImage: `url(${src})`,
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => onToggle?.()}
        aria-label="vinyl record"
      />
    </div>
  );
}
