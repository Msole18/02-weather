import React, { useState } from 'react'
import WeatherForm from './WeatherForm'
import WeatherInfo from './WeatherInfo'

const WheaterApp = (onChange) => {
    const [city, setCity] = useState(null)
    const handleChange = (e) => {
        setCity(e.taret.value)
    }
  return (
    <div>
      <WeatherForm citySelection={handleCity}/>
      <WeatherInfo />
    </div>
    
  )
}

export default WheaterApp