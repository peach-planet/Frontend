import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

const characters = [
  { name: "Tommy", gif: "/assets/tommy.gif" },
  { name: "Charlos", gif: "/assets/charlos.gif" },
  { name: "Illia", gif: "/assets/illia.gif" },
  { name: "Rora", gif: "/assets/rora.gif" },
  { name: "Annie", gif: "/assets/annie.gif" }
];

export default function CharacterSelectPage() {
  const navigate = useNavigate();

  const handleSelect = (character) => {
    console.log(character + " 선택됨");
    navigate("/myplace");
  };

  return (
    <div className="character-bg">
      <div className="character-window glass">
        <h2 className="character-title">select your character</h2>
        <div className="character-list">
          {characters.map((c, i) => (
            <div className="character-card" key={i} onClick={() => handleSelect(c.name)}>
              <img src={c.gif} alt={c.name} className="character-img" />
              <p className="character-name">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
