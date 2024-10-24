import logo from './logo.svg'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Current from './Components/Current'
import Forecast from './Components/Forecast'
import '../node_modules/bootstrap/dist/js/bootstrap'
function App () {
  const [city, setCity] = useState()
  const [clickedCity, setClickedCity] = useState()
  const [citySuggestion, setCitySuggestion] = useState([])
  const [currentWeather, setcurrent] = useState()
  const [forecastWeather, setforecast] = useState()
  const [location, setlocation] = useState()

  const autoCompURL =
    'https://api.weatherapi.com/v1/search.json?key=83c0b17cb2774eac95723527231501&q='
  const weatherURL = city =>
    `https://api.weatherapi.com/v1/forecast.json?key=83c0b17cb2774eac95723527231501&q=${city}&days=7&aqi=no&alerts=no`

  useEffect(() => {
    if (city && city.length > 3) {
      fetchCompAPI()
    }
  }, [city])

  const fetchCompAPI = async () => {
    try {
      const response = await axios.get(autoCompURL + city)
      const resp = response.data
      console.log(resp)
      const cityData = resp.map(data => {
        return `${data.name},${data.region},${data.country}`
      })
      setCitySuggestion(cityData)
    } catch (e) {
      console.log('error', e)
    }
  }
  const handleSelectedCity = city => {
    console.log('clicked City', city)
    setClickedCity(city)
    FetchweatherAPI(city)
    setCitySuggestion([])
  }
  const FetchweatherAPI = async city => {
    try {
      const response = axios.get(weatherURL(city))
      const resp = (await response).data
      //console.log(resp);
      setcurrent(resp.current)
      setforecast(resp.forecast)
      setlocation(resp.location)
      console.log('Current', resp.current)
      console.log('Forecast', resp.forecast)
      console.log('Location', resp.location)
    } catch (e) {
      console.log('Weather API Error', e)
    }
  }

  return (
    <div className='container bg-primary p-5 rounded mt-5'>
      <input
        type='text'
        value={clickedCity}
        placeholder='Enter City Name'
        className='form-control'
        onChange={e => {
          setCity(e.target.value)
          if (e.target.value === '') {
            setcurrent()
            setforecast()
            setlocation()
            setClickedCity()
          }
        }}
      />
      {/* {city &&<h4>{city}</h4>} */}
      {citySuggestion &&
        citySuggestion.map((city, index) => {
          return (
            <div
              key={index}
              className='text-center bg-info rounded p-1 bg-opacity-10 border border-info border-opacity-25 text-white'
              style={{ cursor: 'pointer' }}
              onClick={() => handleSelectedCity(city)}
            >
              {city}
            </div>
          )
        })}
      {currentWeather && (
        <Current currentWeather={currentWeather} location={location} />
      )}
      {forecastWeather && (
        <Forecast forecastWeather={forecastWeather} location={location} />
      )}
    </div>
  )
}

export default App
