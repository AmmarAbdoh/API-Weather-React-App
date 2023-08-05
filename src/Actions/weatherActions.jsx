export const fetchWeatherData = (cityName) => {
  return (dispatch) => {
    const api = {
      key: "ce971055b17c288bc3c01e8ff188f986",
      base: "https://api.openweathermap.org/data/2.5/",
    };
    fetch(`${api.base}weather?q=${cityName}&units=metric&appid=${api.key}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setWeatherData(data));
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };
};

export const setWeatherData = (data) => {
  return {
    type: "SET_WEATHER_DATA",
    payload: data,
  };
};
