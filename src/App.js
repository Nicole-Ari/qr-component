import "./App.css";
import logo from "./assets/image/QR Image.png";
function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="top-item">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="bottom-item">
          <h1>Improve your front-end skills by building projects</h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
