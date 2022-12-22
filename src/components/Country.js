import axios from "axios";
import { useEffect, useState } from "react";

import Weather from "./Weather";
import "../App.css";

const Country = (props) => {
  console.log("", props);
  const lang = props.country[0].languages;
  const languages = Object.values(lang);

  const [weather, setWeather] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;
  const api_call = `https://api.openweathermap.org/data/2.5/weather?q=${props.country[0].capital}&&appid=${api_key}`;

  useEffect(() => {
    axios.get(api_call).then((response) => {
      console.log(response.data);
      setWeather(response.data);
    });
  }, []);

  const displayWeather =
    Object.keys(weather).length === 0 ? "" : <Weather weatherData={weather} />;

  return (
    <div className="country--container">
      <div className="flex">
        <div className="country--content">
          <h1>{props.country[0].name.common}</h1>
          <div className="country-detail">
            <table>
              <tr>
                <td>Capital</td>
                <td>{props.country[0].capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {props.country[0].area} km<sup>2</sup>
                </td>
              </tr>
            </table>
          </div>
          <h3>Languages</h3>
          <table className="language-list">
            {languages.map((language) => (
              <tr key={language}>
                <td className="languages">{language}</td>
              </tr>
            ))}
          </table>
          {displayWeather}
        </div>
        <div className="flag--container">
          <img src={props.country[0].flags.png} className="flag" />
        </div>
      </div>
    </div>
  );
};

export default Country;
