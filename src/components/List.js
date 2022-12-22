import Button from "./Button";
// import Country from "./Country";
import "../App.css";

const List = (props) => {
  const selectedCountry = [];
  const handleClick = (country) => {
    selectedCountry.push(country);
    props.setSearchedCountries(selectedCountry);
  };

  return props.searchedCountries.map((searchedCountry) => (
    <li key={searchedCountry.ccn3} className="countries-item">
      <span className="country-name">{searchedCountry.name.common} </span>
      <Button onClick={() => handleClick(searchedCountry)} text="SHOW MORE" />
    </li>
  ));
};

export default List;
