import React,{useState} from 'react'
import "./Display.css"


const Main = () => {
  const [cityName, setCityName] = useState('');
  const [isLightMode,changemode]=useState(false);
  const [clicked,setclicked]=useState(false);


  const [weatherData, setWeatherData] = useState({
    city: '',
    description: '',
    temperature: '',
    wind: '',
    humidity: '',
  });

  const apik = "3045dd712ffe6e702e3245525ac7fa38";

  const fetchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apik}`)
      .then(res => res.json())
      .then(data => {
        if (data.cod === 200) {
          setWeatherData({
            city: data.name,
            description: data.weather[0].description,
            temperature: (data.main.temp - 273.15).toFixed(2), // Kelvin to Celsius
            wind: data.wind.speed,
            humidity: data.main.humidity,
          });
          
          setclicked(true);

        } else {
          alert('You entered an incorrect city name');
          setclicked(false);
        }
      })
      .catch(err => alert('Error fetching data'));
  };

  const handletoggle=()=>{
    changemode(!isLightMode);
  }

  return (
    <section className="main" style={{ backgroundColor: isLightMode ? 'black' : 'rgb(207, 207, 227)' }} >

          {/* <!-- Rounded switch --> */}
          <label class="switch">
            <input type="checkbox" onChange={handletoggle}/>
            <span class="slider round"></span>
          </label> 


          {/* Input section */}
          <section className="inputs">
            <input
              type="text"
              placeholder="Enter any city or Zip code..."
              value={cityName}
              style={{ color: isLightMode ? '#16a864':'black' }}
              onChange={(e) => setCityName(e.target.value)}
              id="cityinput"
            />
            <input type="submit" style={{ color: isLightMode ? 'rgb(207, 207, 227)':'black' }} value="Submit"  onClick={fetchWeather} id="add" />
          </section>

          {/* Display section */}
        <section className="display" style={{ visibility: clicked ? 'visible' : 'hidden', color: isLightMode ? 'white' : 'black' }}>
        <div className="wrapper">
          <div className="weather-info">
            <div className="info-labels">
              <p style={{ borderBottom: isLightMode ?  '1.5px solid white':'1.5px solid black' }} >City:</p>
              <p style={{ borderBottom: isLightMode ?  '1.5px solid white':'1.5px solid black' }}>Conditions:</p>
              <p style={{ borderBottom: isLightMode ?  '1.5px solid white':'1.5px solid black' }}>Temperature:</p>
              <p style={{ borderBottom: isLightMode ?  '1.5px solid white':'1.5px solid black' }}>Wind Speed:</p>
              <p style={{ borderBottom: isLightMode ?  '1.5px solid white':'1.5px solid black' }}>Humidity:</p>
            </div>
            <div className="info-values">
              <p style={{ borderBottom: isLightMode ?  '1.5px solid white':'1.5px solid black' }} id="cityoutput">{weatherData.city}</p>
              <p style={{ borderBottom: isLightMode ?  '1.5px solid white':'1.5px solid black' }} id="description">{weatherData.description}</p>
              <p style={{ borderBottom: isLightMode ?  '1.5px solid white':'1.5px solid black' }} id="temp">{weatherData.temperature} °C</p>
              <p style={{ borderBottom: isLightMode ?  '1.5px solid white':'1.5px solid black' }} id="wind">{weatherData.wind} km/h</p>
              <p style={{ borderBottom: isLightMode ?  '1.5px solid white':'1.5px solid black' }}  id="humidity">{weatherData.humidity} %</p>
            </div>
          </div>
        </div>
      </section>

           

          
    </section>
  )
}

export default Main