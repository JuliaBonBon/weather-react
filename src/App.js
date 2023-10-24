import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/JuliaBonBon/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code {""}
          </a>
          {""}
          by Yuliia Drivinska
        </footer>
      </div>
    </div>
  );
}
