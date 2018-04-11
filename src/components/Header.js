import React from 'react';
import logo from '../logo.svg';

const Header = () => {

  return(
    <div className="app-header">
      <img src={logo} className="logo" alt="weather-icon"/>
      <h1 className="appTittle">FindWeatherApp</h1>
      <p className="appDescription">Find your local temperature, five day forecast, conditions and more information, fast, simple and easy!</p>
    </div>
  );

}

export default Header;