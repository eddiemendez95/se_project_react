import { weatherOptions } from "../utils/constants";
import "../blocks/Weather.css";

const WeatherCard = ({ day, type, temp = "" }) => {
  const imageSrc = weatherOptions.filter((item) => {
    return item.day === day && item.type === type;
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
