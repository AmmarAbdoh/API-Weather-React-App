const Temperature = ({ temperature, weatherDescription }) => {
  const getTemperatureCategory = (temperature) => {
    if (temperature < 15) {
      return "cold";
    } else if (temperature >= 15 && temperature < 30) {
      return "warm";
    } else {
      return "hot";
    }
  };

  const temperatureCategory = getTemperatureCategory(temperature);

  document.body.style.backgroundImage = `url('${temperatureCategory}.jpg')`;
  return (
    <div className="temperature-container">
      <p className="temperature">{temperature}° C</p>
      <p className="description">{weatherDescription}</p>
    </div>
  );
};
export default Temperature;
