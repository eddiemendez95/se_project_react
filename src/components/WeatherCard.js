import { weatherOptions } from "../utils/constants";
import "../blocks/Weather.css";
import React from "react";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperaturUnitContext";

const WeatherCard = ({ weatherCard, weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <section className="weather" id="weather">
      <div className="weather__info">
        {weatherTemp && weatherTemp.temp[currentTemperatureUnit]}
      </div>
      <img
        src={weatherCard}
        alt="weatherinfo-card"
        className="weather__image"
      />
    </section>
  );
};

export default WeatherCard;
