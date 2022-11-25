import React, { useState, useEffect } from 'react';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';

const WheaterApp = ({onChangeCity}) => {
  const [weather, setWeather] = useState(null);
  useEffect(()=> {
    loadingInfo()
  }, []);

  useEffect(()=> {
    document.title = `Weather | ${weather?.location.name ?? ''}`
  }, [weather]);

  async function loadingInfo(city = 'London') {
    try {
      const request = await fetch(`${process.env.REACT_APP_URL}key=${process.env.REACT_APP_KEY}&q=${city}&aqi=no`);
      const json = await request.json();
      console.log(json)
      setWeather(json)
    } catch (error) {}
  }
  const handleCity = (city) => {
    setWeather(null)
    loadingInfo(city);
  }

  return (
    <div>
      <WeatherForm onChangeCity={handleCity}/>
      <div>city: {weather?.current.temp_c}</div>
      <WeatherInfo />
    </div>
    
  )
}

export default WheaterApp