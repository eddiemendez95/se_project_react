const weatherOptions = [
  { url: "/images/day/sunny-day.svg", day: true, type: "sunny" },
  { url: "/images/day/cloud-day.svg", day: true, type: "cloudy" },
  { url: "/images/night/sunny-night.svg", day: false, type: "sunny" },
  { url: "/images/night/cloudy-night.svg", day: false, type: "cloudy" },
];

const WeatherCard = ({ day, type }) => {
  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
  });
  console.log(imageSrc);

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section id="weather" className="weather">
      <div className="weather_info"> 78F </div>
      <img src={imageSrcUrl} alt="weather" className="weather_image" />
    </section>
  );
};

export default WeatherCard;
