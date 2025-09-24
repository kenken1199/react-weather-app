import { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Rsults";

const App = () => {
  const [city, setCity] = useState("");
  const [results, setResults] = useState({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
  });
  const getWeather = (e) => {
    e.preventDefault();
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=fb248dc1fef4457385e204330252309&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) =>
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.conditionText,
          icon: data.current.condition.icon,
        })
      );
  };
  return (
    <div>
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results results={results} />
    </div>
  );
};

export default App;
