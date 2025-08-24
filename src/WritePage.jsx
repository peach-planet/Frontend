// src/WritePage.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ 추가

export default function WritePage() {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ 받기
  const currentChar = location.state?.characterName || "Tommy"; // 없으면 기본

  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  const handleSave = () => {
    const t = title.trim();
    const s = story.trim();
    if (!t || !s) return alert("title과 story를 입력해줘!");

    const key = "mp_notes";
    const prev = JSON.parse(localStorage.getItem(key) || "[]");
    const next = [{ title: t, content: s, createdAt: Date.now() }, ...prev];
    localStorage.setItem(key, JSON.stringify(next));

    // ✅ 돌아갈 때도 캐릭터 이름을 그대로 실어서 보냄
    navigate("/myplace", { state: { characterName: currentChar } });
  };

  return (
    <div className="background">
      <div className="main-window">
        <div className="main-header">
          <div className="star">★</div>
          <div className="window-buttons" />
        </div>

        <div className="main-body" style={{ textAlign: "center" }}>
          <div className="write-body">
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
              style={{ marginTop: 12, minHeight: 220 }}
              value={story}
              onChange={(e) => setStory(e.target.value)}
            />
            <button className="save-btn" onClick={handleSave}>save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
