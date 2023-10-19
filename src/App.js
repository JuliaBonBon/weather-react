import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <small>
        <a
          href="https://github.com/JuliaBonBon/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
      </small>{" "}
      by Yuliia Drivinska
    </div>
  );
}
