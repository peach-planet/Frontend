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
          <input className="glass-input" type="text" placeholder="id" />
          <input className="glass-input" type="password" placeholder="pw" />
        </div>
      </div>

      {/* 메인 소개 윈도우 */}
      <div className="main-window">
        <div className="main-header">
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
            <div className="nav-btn">◀</div>
            <div className="nav-btn"> </div>
            <div className="nav-btn">▶</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
