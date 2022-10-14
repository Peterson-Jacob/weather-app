import react, {useState} from "react";
import './App.css';

function App() {

  const [weather, setWeather] = useState();

  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=74745&days=3', options)
    .then(response => response.json())
    .then(response => setWeather(response))
  

  return (
    <div className="App">
        <h1>{weather.temp}</h1>
        <h2>{weather.town}</h2>
    </div>
  );
}

export default App;
