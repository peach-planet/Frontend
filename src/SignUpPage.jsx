// src/SignUpPage.jsx
<div className="background">
  <div className="login-window signup-window">   {/* ← 클래스 추가 */}
    <div className="login-header">
      <div className="star">★</div>
      <div className="window-buttons" />
    </div>

    <div className="login-body signup-page">
      <div className="signup-body">
        <button className="back-btn" onClick={() => navigate("/")}>←</button>
        <h1 className="title">sign up</h1>

        <div className="form">
          <label className="input-label" htmlFor="su-id">id</label>
          <input className="glass-input" id="su-id" type="text" />

          <label className="input-label" htmlFor="su-pw">pw</label>
          <input className="glass-input" id="su-pw" type="password" />

          <button className="login-btn">join</button>
        </div>
      </div>
    </div>
  </div>
</div>
