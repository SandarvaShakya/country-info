import { useState, useEffect } from "react";
import axios from "axios";

import Country from "./components/Country";
import List from "./components/List";

import "./App.css";

const App = () => {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);
  const [searchedCountries, setSearchedCountries] = useState([]);

  useEffect(() => {
    const getData = setTimeout(() => {
      axios.get("https://restcountries.com/v3.1/all").then((response) => {
        setCountries(response.data);
        // setSearchedCountries(response.data);
      });
    }, 200);

    // return () => clearTimeout(getData)
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    if (event.target.value === "") {
      return setSearchedCountries([]);
    }
    if (!event.target.value) {
      return setSearchedCountries(countries);
    }

    const searchList = countries.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setSearchedCountries(searchList);
  };

  const filterCountries = () => {
    if (searchedCountries.length === 0) {
      console.log("0");
    } else if (searchedCountries.length === 1) {
      console.log("1");
      return <Country country={searchedCountries} />;
    } else if (searchedCountries.length < 10) {
      console.log(10);
      return (
        <ul className="countries-list">
          <List
            searchedCountries={searchedCountries}
            setSearchedCountries={setSearchedCountries}
          />
        </ul>
      );
    } else if (searchedCountries.length > 10) {
      console.log(">10");
      return <p className="alert">Too many countries to display</p>;
    }
  };

  return (
    <div className="main-wrapper">
      <h1 className="heading">Countries Detail</h1>
      <div className="search--container">
        <label className="label">Find Countries</label>
        <input
          onChange={handleFilterChange}
          value={filter}
          className="search-bar"
          placeholder="EG: Nepal"
        />
      </div>
      {filterCountries()}
    </div>
  );
};

export default App;
