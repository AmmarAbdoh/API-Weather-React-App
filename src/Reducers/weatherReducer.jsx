const initialState = {
  cityName: "",
  countryName: "",
  temperature: null,
  weatherDescription: "",
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WEATHER_DATA":
      return {
        ...state,
        cityName: action.payload.name,
        countryName: action.payload.sys.country,
        temperature: action.payload.main.temp,
        weatherDescription: action.payload.weather[0].description,
      };
    default:
      return state;
  }
};

export default weatherReducer;
