// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

// 428e15f66fd95028ada95b6b6f1555d4

const latitude = "44.34";
const longitude = "10.99";
const APIkey = "428e15f66fd95028ada95b6b6f1555d4";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error" ${res.status}`);
    }
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  return Math.ceil(temperature);
};
