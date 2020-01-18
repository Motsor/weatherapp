import React from 'react';
import moment from 'moment';

export default function WeatherCard(props) {
  const weatherData = props.weatherData;

  return (
    <div>
      <h2>{ weatherData.location }</h2>
      <p>{moment.unix(weatherData.dt).clone().format('dddd HH:mm')}</p>
      <p>{weatherData.weather.description}</p>
      <p>{weatherData.main.temp} &#8451;</p>
      <img src={`/img/${weatherData.weather.icon.slice(0, -1)}.svg`} alt="A icon describing the current weather" />
    </div>
  );
}
