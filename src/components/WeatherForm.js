import React, {useState} from 'react';

const WeatherForm = (citySelection) => {
    const [city, setCity] = useState(null)
    const handleChange = (e) => {
        setCity(e.taret.value);
        citySelection(city);
    }

  return (
    <div>
        <input type='text' onChange={handleChange} />
    </div>
  )
}

export default WeatherForm