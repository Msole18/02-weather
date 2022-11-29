import React, { useState, useEffect } from 'react';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';
import LoadingCircule from '../UI/LoagingCircule'

import styles from './WeatherApp.module.css';

const WheaterApp = ({onChangeCity}) => {
  const [weather, setWeather] = useState(null);

  useEffect(()=> { // this effect load a default info when the app start
    loadingInfo()
  }, []);

  useEffect(()=> {  // this effect changes the document title when the user changes the city
    document.title = `Weather | ${weather?.location.name ?? ''}`
  }, [weather]);

  async function loadingInfo(city = 'Buenos Aires') {
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
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleCity}/>
      {weather ? <WeatherInfo weather={weather}/> : <LoadingCircule />}
      
    </div>
    
  )
}

export default WheaterApp