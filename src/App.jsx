// src/App.jsx
import './App.css';

function App() {
  return (
    <div className="background">
      {/* 로그인 윈도우 */}
      <div className="login-window">
        <div className="login-header">
          <div className="star">★</div>
          <div className="window-buttons">
            <div className="btn red" />
            <div className="btn yellow" />
            <div className="btn green" />
          </div>
        </div>

        <div className="login-body">
          <h1 className="title">peach<br />planet</h1>

          <div className="form">
            <label className="input-label" htmlFor="id-input">id</label>
            <input className="glass-input" type="text" id="id-input" placeholder="" />

            <label className="input-label" htmlFor="pw-input">pw</label>
            <input className="glass-input" type="password" id="pw-input" placeholder="" />

            <button className="login-btn">log in</button>
          </div>
        </div>
      </div>

      {/* 메인 소개 윈도우 */}
      <div className="main-window">
        <div className="main-header">
          <div className="star">★</div>
          <div className="window-buttons">
            <div className="btn red" />
            <div className="btn yellow" />
            <div className="btn green" />
          </div>
        </div>

        <div className="main-body">
          <button className="aboutus-button">aboutus</button>

          <p className="desc">
            welcome to peachplanet<br />
            this is a diary you can record your day<br />
            with 3D characters<br />
            click to make your own emotion character
          </p>

          <div className="nav-buttons">
            <div className="nav-item">
              <div className="nav-btn">◀</div>
              <span className="nav-label">&nbsp;</span> {/* 빈 라벨로 높이 맞춤 */}
            </div>

            <div className="nav-item">
              <div className="nav-btn login-btn">♡</div>
              <span className="nav-label">sign in</span>
            </div>

            <div className="nav-item">
              <div className="nav-btn">▶</div>
              <span className="nav-label">&nbsp;</span> {/* 빈 라벨로 높이 맞춤 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
