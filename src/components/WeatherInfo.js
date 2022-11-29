import React from 'react';
import styles from './WeatherInfo.module.css';

const WeatherInfo = ({ weather }) => {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.city}>{weather?.location.name}</div>
      <div className={styles.country}>{weather?.location.country}</div>
      <div className={styles.row}>
        <div>
          <img src={`http:${weather?.current.condition.icon}`} width='128' alt={weather?.current.condition.text}/>
        </div>
        <div className={styles.weatherConditions}>
          <div>{weather?.current.condition.text}</div>
          <div className={styles.current}>{weather?.current.temp_c}º</div>
        </div>
      </div>
      <iframe 
          title='maps'
          src={`https://www.google.com/maps?q=${weather?.location.name}&z=15&output=embed`}
          width="100%" 
          height="450" 
          style={{border:0}}
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
      ></iframe> 
    </div>
  )
}

export default WeatherInfo;

