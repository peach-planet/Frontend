// src/WritePage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WritePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  const handleSave = () => {
    const t = title.trim();
    const s = story.trim();
    if (!t || !s) {
      alert("title과 story를 입력해줘!");
      return;
    }

    const key = "mp_notes";
    const prev = JSON.parse(localStorage.getItem(key) || "[]");
    const next = [{ title: t, content: s, createdAt: Date.now() }, ...prev];
    localStorage.setItem(key, JSON.stringify(next));

    navigate("/myplace");
  };

  return (
    <div className="background">
      <div className="main-window">
        <div className="main-header">
          <div className="star">★</div>
          <div className="window-buttons" />
        </div>

        <div className="main-body" style={{ textAlign: "center" }}>
          <div className="write-body" style={{ maxWidth: 620, margin: "0 auto" }}>
            <input
              type="text"
              placeholder="title"
              className="glass-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="story time..."
              className="glass-input"
              style={{ marginTop: 12, minHeight: 220, resize: "vertical" }}
              value={story}
              onChange={(e) => setStory(e.target.value)}
            />

            <button className="save-btn login-btn" onClick={handleSave} style={{ marginTop: 18 }}>
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
