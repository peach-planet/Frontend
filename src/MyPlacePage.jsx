import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MusicRecordPlayer from "./MusicRecordPlayer";

export default function MyPlacePage() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  // ✅ 페이지 열릴 때 localStorage에서 불러오기
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("mp_notes") || "[]");
    setNotes(saved);
  }, []);

  // ✅ 삭제 함수
  const handleDelete = (createdAt) => {
    const updated = notes.filter((n) => n.createdAt !== createdAt);
    setNotes(updated);
    localStorage.setItem("mp_notes", JSON.stringify(updated));
  };

  // ✅ 전체 내용 보기
  const handleView = (note) => {
    alert(`📌 ${note.title}\n\n${note.content}`);
  };

  // 6칸 맞추기
  const filled = [...notes.slice(0, 6), ...Array.from({ length: Math.max(0, 6 - notes.length) }, () => null)];

  return (
    <div className="background" style={{ gap: "40px" }}>
      {/* 메인 창 */}
      <div className="main-window">
        <div className="main-header">
          <div className="star">★</div>
          <div className="window-buttons" />
        </div>

        <div className="main-body">
          <h1 className="title">my place</h1>
          <div className="mrp-row">
            {/* 왼쪽 레코드 */}
            <div className="mrp-left">
              <MusicRecordPlayer />
            </div>

            {/* 오른쪽 메모 박스 */}
            <aside className="queue-panel">
              {filled.map((n, i) =>
                n ? (
                  <div className="queue-item qi" key={i}>
                    <div className="qi-title">{n.title}</div>
                    <div className="qi-snippet">{n.content}</div>
                    <div className="qi-actions">
                      <button onClick={() => handleView(n)}>View</button>
                      <button onClick={() => handleDelete(n.createdAt)}>Delete</button>
                    </div>
                  </div>
                ) : (
                  <div className="queue-item" key={i} />
                )
              )}
            </aside>
          </div>
        </div>
      </div>

      {/* 보조 창 (캐릭터) */}
      <div className="login-window">
        <div className="login-header">
          <div className="star">★</div>
          <div className="window-buttons" />
        </div>
        <div className="login-body" style={{ textAlign: "center" }}>
          <img
            src="/assets/tommy.gif"
            alt="My Place Gif"
            style={{
              width: "170px",
              height: "auto",
              marginTop: "12px",
              borderRadius: "12px",
            }}
          />
        </div>
      </div>

      {/* 폴더 도크 */}
      <div className="folder-dock">
        <button className="folder-btn" onClick={() => navigate("/write")} title="write">
          <svg viewBox="0 0 24 24">
            <path d="M10 4l2 2h8a2 2 0 012 2v9a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h5z" fill="currentColor" />
          </svg>
          <span>write</span>
        </button>
        <button className="folder-btn" onClick={() => navigate("/character-select")} title="character">
          <svg viewBox="0 0 24 24">
            <path d="M10 4l2 2h8a2 2 0 012 2v9a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h5z" fill="currentColor" />
          </svg>
          <span>character</span>
        </button>
        <button className="folder-btn" onClick={() => navigate("/expression-select")} title="express">
          <svg viewBox="0 0 24 24">
            <path d="M10 4l2 2h8a2 2 0 012 2v9a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h5z" fill="currentColor" />
          </svg>
          <span>express</span>
        </button>
      </div>
    </div>
  );
}
