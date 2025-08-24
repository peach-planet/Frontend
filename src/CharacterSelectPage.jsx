import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const characters = [
  { name: "Tommy",   gif: "/assets/tommy.gif" },
  { name: "Charlos", gif: "/assets/charlos.gif" },
  { name: "Illia",   gif: "/assets/illia.gif" },
  { name: "Rora",    gif: "/assets/rora.gif" },
  { name: "Annie",   gif: "/assets/annie.gif" }
];

export default function CharacterSelectPage() {
  const navigate = useNavigate();

  const handleSelect = (c) => {
    // ✅ 저장 없이 이름만 state로 전달
    navigate("/myplace", { state: { characterName: c.name } });
  };

  return (
    <div className="character-bg">
      <div className="character-window glass">
        <h2 className="character-title">select your character</h2>
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
