import "../blocks/Main.css";
import React from "react";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

function Main({ cards, weatherTemp, onSelectCard, weatherCard }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const currentTemp = weatherTemp[currentTemperatureUnit];
  const getWeatherType = () => {
    if (currentTemp >= 86) {
      return "hot";
    } else if (currentTemp >= 66 && currentTemp <= 85) {
      return "warm";
    } else if (currentTemp <= 65) {
      return "cold";
    }
  };
  const weatherType = getWeatherType();

  const filteredCards = cards?.filter((item) => {
    return item.weather?.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard weatherCard={weatherCard} weatherTemp={currentTemp} />
      <section className="card_section" id="cards-section">
        <h2 className="main__heading">
          Today is {currentTemp} {currentTemperatureUnit} / You may want to wear
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
