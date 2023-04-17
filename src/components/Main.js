import "../blocks/Main.css";
import React from "react";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperaturUnitContext";
import { useContext } from "react";

function Main({ cards, weatherTemp, onSelectCard, weatherCard }) {
  const { CurrentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const getWeatherType = () => {
    if (weatherTemp?.temp?.main >= 86) {
      return "hot";
    } else if (weatherTemp?.main >= 66 && weatherTemp?.temp?.main <= 85) {
      return "warm";
    } else if (weatherTemp?.temp?.main <= 65) {
      return "cold";
    }
  };
  const weatherType = getWeatherType();

  const filteredCards = cards.filter((item) => {
    return item.weather?.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard weatherCard={weatherCard} weatherTemp={weatherTemp} />
      <section className="card_section" id="cards-section">
        <h2 className="main__heading">
          Today is {weatherTemp && weatherTemp.temp[CurrentTemperatureUnit]} /
          You may want to wear
        </h2>
        <div className="card_items">
          {Array.isArray(filteredCards) &&
            filteredCards.map((item) => (
              <ItemCard key={item.id} item={item} onSelectCard={onSelectCard} />
            ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
