import "../blocks/App.css";
import Header from "./Header";
import WeatherCard from "./WeatherCard";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <WeatherCard day={true} type="cloudy" />
        <section id="cards-section">
          <img src="" alt="weather" />
        </section>
      </main>
    </div>
  );
}

export default App;
