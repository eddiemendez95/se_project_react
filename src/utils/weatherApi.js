// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

// 428e15f66fd95028ada95b6b6f1555d4

import { latitude, longitude, APIkey } from "./constants";
import { weatherDayCards, weatherNightCards } from "./constants";

export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processServerResponse);
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  return Math.ceil(temperature);
};

export const getWeatherCard = (data) => {
  if (Date.now() / 1000 > data.sys.sunrise) {
    if (data.weather[0].id >= 800 && data.weather[0].id <= 801) {
      return weatherDayCards.sunny;
    } else if (data.weather[0].id >= 802 && data.weather[0].id <= 804) {
      return weatherDayCards.cloudy;
    } else if (data.weather[0].id >= 701 && data.weather[0].id <= 781) {
      return weatherDayCards.fog;
    } else if (data.weather[0].id >= 600 && data.weather[0].id <= 622) {
      return weatherDayCards.snow;
    } else if (
      (data.weather[0].id >= 500 && data.weather[0].id <= 531) ||
      (data.weather[0].id >= 300 && data.weather[0].id <= 321)
    ) {
      return weatherDayCards.rain;
    } else if (data.weather[0].id >= 200 && data.weather[0].id <= 232) {
      return weatherDayCards.storm;
    }
  } else if (
    Date.now() / 1000 > data.sys.sunset ||
    Date.now() / 1000 < data.sys.sunrise
  ) {
    if (data.weather[0].id >= 800 && data.weather[0].id <= 801) {
      return weatherNightCards.sunny;
    } else if (data.weather[0].id >= 802 && data.weather[0].id <= 804) {
      return weatherNightCards.cloudy;
    } else if (data.weather[0].id >= 701 && data.weather[0].id <= 781) {
      return weatherNightCards.fog;
    } else if (data.weather[0].id >= 600 && data.weather[0].id <= 622) {
      return weatherNightCards.snow;
    } else if (
      (data.weather[0].id >= 500 && data.weather[0].id <= 531) ||
      (data.weather[0].id >= 300 && data.weather[0].id <= 321)
    ) {
      return weatherNightCards.rain;
    } else if (data.weather[0].id >= 200 && data.weather[0].id <= 232) {
      return weatherNightCards.storm;
    }
  }
};
