import React from 'react';

const Weather = props => {

  return (
    
    <div className="weather-wrapper">

      { props.success && <div className="weather-box">
        <div className="weather-header">
          <div className="weather-header-left">
            <p className="day-text">CURRENT WEATHER FOR:</p>
            <h1 className="city-name">{props.city}, {props.country}</h1>
          </div>
          <div className="weather-header-right">
            {props.icon && <img src={require(`../img/icons/${props.icon}.svg`)} className="weather-icon-big" alt="weather-icon" />}
          </div>
        </div>
        <div className="weather-content">
          <div className="weather-content-left">
            <h1 className="weather-temp-big">{Math.round(props.temperature)}°</h1>
            <p className="weather-description">{props.description}</p>
          </div>
          <div className="weather-content-right">
            <p className="details-info">Details:</p>
            <p className="details-info">Humidity: <span>{props.humidity}%</span></p>
            <p className="details-info">Pressure: <span>{props.pressure} hpa</span></p>
            <p className="details-info">Wind speed: <span>{props.windSpeed} m/h</span></p>
            <p className="details-info">Wind degree: <span>{Math.round(props.windDeg)}</span></p>
          </div>
        </div>
      </div>}

    </div>

  );

}

export default Weather;
