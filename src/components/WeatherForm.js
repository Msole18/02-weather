import React, {useState} from 'react';

const WeatherForm = ({onChangeCity}) => {
    const [city, setCity] = useState('')

    const handleChange = (e) => {
      const value = e.target.value;
      if (value !== '') {
        setCity(value); 
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      onChangeCity(city)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} />
        <h1>{city}</h1>
    </form>
  )
}

export default WeatherForm