import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MusicRecordPlayer from "./MusicRecordPlayer";

export default function MyPlacePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [notes, setNotes] = useState([]);

  const currentChar = location.state?.characterName || "Tommy";

  const CHAR_GIF = {
    Tommy:  "/assets/tommy.gif",
    Charlos:"/assets/charlos.gif",
    Illia:  "/assets/illia.gif",
    Rora:   "/assets/rora.gif",
    Annie:  "/assets/annie.gif",
    Sparkle: "/assets/sparkle.gif",
    Happy: "/assets/happy.gif",
    Wink: "/assets/wink.gif",
    Love: "/assets/love.gif",
  };
  const gifSrc = CHAR_GIF[currentChar];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("mp_notes") || "[]");
    setNotes(saved);
  }, []);

  const handleDelete = (createdAt) => {
    const updated = notes.filter((n) => n.createdAt !== createdAt);
    setNotes(updated);
    localStorage.setItem("mp_notes", JSON.stringify(updated));
  };

  const handleView = (note) => {
    alert(`📌 ${note.title}\n\n${note.content}`);
  };

  const filled = [...notes.slice(0, 6), ...Array.from({ length: Math.max(0, 6 - notes.length) }, () => null)];

  return (
    <div className="background" style={{ gap: "40px" }}>
      <div className="main-window">
        <div className="main-header"><div className="star">★</div><div className="window-buttons" /></div>
        <div className="main-body">
          <h1 className="title">my place</h1>
          <div className="mrp-row">
            <div className="mrp-left">
              <MusicRecordPlayer />
            </div>
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
                ) : (<div className="queue-item" key={i} />)
              )}
            </aside>
          </div>
        </div>
      </div>

      <div className="login-window">
        <div className="login-header"><div className="star">★</div><div className="window-buttons" /></div>
        <div className="login-body" style={{ textAlign: "center" }}>
          <img src={gifSrc} alt={currentChar} style={{ width: 170, marginTop: 12, borderRadius: 12 }} />
        </div>
      </div>

      <div className="folder-dock">
        <button className="folder-btn" onClick={() => navigate("/write", { state: { characterName: currentChar } })} title="write">
          <svg viewBox="0 0 24 24"><path d="M10 4l2 2h8a2 2 0 012 2v9a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h5z" fill="currentColor"/></svg>
          <span>write</span>
        </button>
        <button className="folder-btn" onClick={() => navigate("/character-select")} title="character">
          <svg viewBox="0 0 24 24"><path d="M10 4l2 2h8a2 2 0 012 2v9a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h5z" fill="currentColor"/></svg>
          <span>character</span>
        </button>
        <button className="folder-btn" onClick={() => navigate("/expression-select", { state: { characterName: currentChar } })} title="express">
          <svg viewBox="0 0 24 24"><path d="M10 4l2 2h8a2 2 0 012 2v9a3 3 0 01-3 3H5a3 3 0 01-3-3V7a3 3 0 013-3h5z" fill="currentColor"/></svg>
          <span>emotion</span>
        </button>
      </div>
    </div>
  );
}
