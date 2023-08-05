import "./Style/SearchBar.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "../Actions/weatherActions";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(fetchWeatherData(city));
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search for a city"
        onChange={handleChange}
        value={city}
        onKeyPress={handleKeyPress}
        className="search-bar"
      />
    </>
  );
};

export default SearchBar;
