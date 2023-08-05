const Location = ({ cityName, countryName }) => {
  return (
    <div>
      <p className="location">
        {cityName}, {countryName}
      </p>
    </div>
  );
};
export default Location;
