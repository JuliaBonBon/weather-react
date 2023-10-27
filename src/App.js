import Weather from "./Weather";
import FormattedDate from "./FormattedDate";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
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
