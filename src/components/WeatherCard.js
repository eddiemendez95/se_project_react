const weatherOptions = [
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
    url: require("../images/night/sunny-night.svg").default,
    day: false,
    type: "sunny",
  },
  {
    url: require("../images/night/cloudy-night.svg").default,
    day: false,
    type: "cloudy",
  },
];

const WeatherCard = ({ day, type, temp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section id="weather" className="weather">
      <div className="weather_info"> {temp}°F </div>
      <img src={imageSrcUrl} alt="weather" className="weather_image" />
    </section>
  );
};

export default WeatherCard;
