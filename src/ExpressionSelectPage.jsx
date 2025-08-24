import React from "react";

export default function ExpressionSelectPage() {
  const items = ["😀", "🥲", "😠", "🤩", "😴", "😭", "🤗", "😎"];

  return (
    <div className="background">
      <div className="main-window" style={{ width: 820 }}>
        <div className="main-header">
          <div className="star">★</div>
          <div className="window-buttons" />
        </div>
        <div className="main-body">
          <h1 className="title">expression select</h1>

          <div className="expr-grid">
            {items.map((e, i) => (
              <button className="expr-card" key={i}>{e}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
