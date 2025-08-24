import React from "react";
import MusicRecordPlayer from "./MusicRecordPlayer";

export default function MyPlacePage() {
  // 오른쪽 패널 더미 박스 6개
  const boxes = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="background" style={{ gap: "40px" }}>
      {/* 메인 창: 좌측 레코드 + 우측 스크롤 패널 */}
      <div className="main-window">
        <div className="main-header">
          <div className="star">★</div>
          <div className="window-buttons" />
        </div>

        <div className="main-body">
          <h1 className="title">my place</h1>

          {/* 좌/우 배치 행 */}
          <div className="mrp-row">
            {/* 왼쪽: 기존 레코드 플레이어 */}
            <div className="mrp-left">
              <MusicRecordPlayer />
            </div>

            {/* 오른쪽: 스크롤 가능한 빈 박스 */}
            <aside className="queue-panel">
              {boxes.map((n) => (
                <div className="queue-item" key={n} />
              ))}
            </aside>
          </div>
        </div>
      </div>

      {/* 보조 창 */}
      <div className="login-window">
        <div className="login-header">
          <div className="star">★</div>
          <div className="window-buttons" />
        </div>
        <div className="login-body" style={{ textAlign: "center" }}>
          <img 
            src="/assets/annie.gif" 
            alt="My Place Gif"
            style={{
              width: "180px",
              height: "auto",
              marginTop: "12px",
              borderRadius: "12px"
            }}
          />
        </div>
      </div>
    </div>
  );
}
