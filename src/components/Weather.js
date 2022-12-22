import "../App.css";

const Weather = ({ weatherData }) => {
  const toCelsius = (temp) => {
    return Math.round(((temp - 273.15) * 10) / 10);
  };

  return (
    <div>
      <h3>Weather in {weatherData.name}</h3>
      <div className="weather--content">
        <table className="weather--info">
          <tr>
            <td>Temperature</td>
            <td>{toCelsius(weatherData.main.temp)}ºC</td>
          </tr>
          <tr>
            <td>Wind</td>
            <td>{weatherData.wind.speed} m/s</td>
          </tr>
        </table>
        <div className="weather-img">
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt="weather"
          />
        </div>
      </div>
    </div>
  );
};

export default Weather;
