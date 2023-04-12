export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

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
