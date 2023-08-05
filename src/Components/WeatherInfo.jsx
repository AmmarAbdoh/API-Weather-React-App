import Time from "./Time";
import Temperature from "./Temperature";
import Location from "./Location";
import "./Style/WeatherInfo.css";
import { useSelector } from "react-redux";
export const WeatherInfo = () => {
  const { cityName, countryName, temperature, weatherDescription } =
    useSelector((state) => state);

  return (
    <>
      {cityName && (
        <div className="weather-info">
          <Location cityName={cityName} countryName={countryName} />
          <Time />
          <Temperature
            temperature={temperature}
            weatherDescription={weatherDescription}
          />
        </div>
      )}
    </>
  );
};
