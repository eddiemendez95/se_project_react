import dayCloudy from "../images/day/cloud-day.svg";
import dayFog from "../images/day/fog-day.svg";
import dayRain from "../images/day/rain-day.svg";
import daySnow from "../images/day/snow-day.svg";
import dayStorm from "../images/day/storm-day.svg";
import daySunny from "../images/day/sunny-day.svg";
import nightCloudy from "../images/night/cloudy-night.svg";
import nightFog from "../images/night/fog-night.svg";
import nightRain from "../images/night/rain-night.svg";
import nightSnow from "../images/night/snow-night.svg";
import nightStorm from "../images/night/storm-night.svg";
import nightSunny from "../images/night/sunny-night.svg";

export const weatherDayCards = {
  cloudy: dayCloudy,
  fog: dayFog,
  rain: dayRain,
  snow: daySnow,
  storm: dayStorm,
  sunny: daySunny,
};

export const weatherNightCards = {
  cloudy: nightCloudy,
  fog: nightFog,
  rain: nightRain,
  snow: nightSnow,
  storm: nightStorm,
  sunny: nightSunny,
};

export const weatherOptions = [
  {
    url: require("../images/day/sunny-day.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../images/day/cloud-day.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../images/day/rain-day.svg").default,
    day: true,
    type: "rain",
  },
  {
    url: require("../images/day/storm-day.svg").default,
    day: true,
    type: "storm",
  },
  {
    url: require("../images/day/snow-day.svg").default,
    day: true,
    type: "snow",
  },
  { url: require("../images/day/fog-day.svg").default, day: true, type: "fog" },
  {
    url: require("../images/night/sunny-night.svg").default,
    day: false,
    type: "sunny",
  },
  {
    url: require("../images/night/cloudy-night.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../images/night/rain-night.svg").default,
    day: false,
    type: "rain",
  },
  {
    url: require("../images/night/storm-night.svg").default,
    day: false,
    type: "storm",
  },
  {
    url: require("../images/night/snow-night.svg").default,
    day: false,
    type: "snow",
  },
  {
    url: require("../images/night/fog-night.svg").default,
    day: false,
    type: "fog",
  },
];

export const latitude = "44.34";
export const longitude = "10.99";
export const APIkey = "428e15f66fd95028ada95b6b6f1555d4";
