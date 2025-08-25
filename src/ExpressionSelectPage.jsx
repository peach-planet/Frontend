import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const characters = [
  { name: "Wink",   gif: "/assets/wink.gif" },
  { name: "Charlos", gif: "/assets/charlos.gif" },
  { name: "Happy",   gif: "/assets/happy.gif" },
  { name: "Sparkle",    gif: "/assets/sparkle.gif" },
  { name: "Love",   gif: "/assets/love.gif" }
];

export default function ExpressionSelectPage() {
  const navigate = useNavigate();
  const handleSelect = (c) => {
    navigate("/myplace", { state: { characterName: c.name } });
  };

  return (
    <div className="character-bg">
      <div className="character-window glass">
        <h2 className="character-title">select your emotion</h2>
        <div className="character-list">
          {characters.map((c) => (
            <button
              key={c.name}
              className="character-card"
              onClick={() => handleSelect(c)}
              style={{ background: "transparent", border: "none", cursor: "pointer" }}
            >
              <img src={c.gif} alt={c.name} className="character-img" />
              <p className="character-name">{c.name}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}