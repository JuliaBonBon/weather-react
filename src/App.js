import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Search />
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
