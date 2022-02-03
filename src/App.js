import "./style.css";
import SearchForm from "./search";
import Heading from "./heading";
function App() {
  return (
    <div className="App">
      <div className="container">
        <br />
        <Heading />
        <SearchForm />
        <br />

        <div></div>
        <hr />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/Tem-Tech/weather-app-React"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leanne Oyeyemi
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
