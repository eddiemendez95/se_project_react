import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import { defaultClothingItems } from "../utils/constants";

function Main({ onSelectCard, temp }) {
  const getWeatherType = () => {
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  };
  const weatherType = getWeatherType();

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="cloudy" temp={temp} />
      <section className="card_section" id="cards-section">
        <h2 className="main__heading">
          Today is {temp}°F / You may want to wear
        </h2>
        <div className="card_items">
          {filteredCards.map((item) => (
            <ItemCard key={item.id} item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;