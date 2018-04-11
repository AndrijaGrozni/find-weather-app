import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import Footer from './components/Footer';

const API_KEY = '3b74f09e6dd1ebf2775a1b1f8774bddc';

class App extends Component {
  
  state = {
    success: false,
    today: {
      display: undefined,
      city: undefined,
      country: undefined,
      temperature: undefined,
      description: undefined,
      humidity: undefined,
      pressure: undefined,
      icon: undefined,
      windSpeed: undefined,
      windDeg: undefined
    },
    dayOne: {
      day: undefined,
      icon: undefined,
      temperature: undefined,
      description: undefined
    },
    dayTwoo: {
      day: undefined,
      icon: undefined,
      temperature: undefined,
      description: undefined
    },
    dayThree: {
      day: undefined,
      icon: undefined,
      temperature: undefined,
      description: undefined
    },
    dayFour: {
      day: undefined,
      icon: undefined,
      temperature: undefined,
      description: undefined
    },
    error: undefined
  }
  
  getWeather = async (e) => {
    e.preventDefault();
    //get form inputs
    const city = e.target.elements.city.value;
    //fetch api
    const current_api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const forecast_api = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&appid=${API_KEY}&units=metric`);
    const current = await current_api.json();
    const forecast = await forecast_api.json();
    console.log(current);
    console.log(forecast);
    
    //if city is not found
    if (current.cod === '404'){
      this.setState({
        error: 'City not found'
      });
    }
    //if city is found
    else if(city) {
      this.setState({
        success: true,
        today: {
          display: current.cod,
          city: current.name,
          country: current.sys.country,
          temperature: current.main.temp,
          description: current.weather[0].description,
          humidity: current.main.humidity,
          pressure: current.main.pressure,
          icon: current.weather[0].icon,
          windSpeed: current.wind.speed,
          windDeg: current.wind.deg,
        },
        dayOne: {
          day: forecast.list[8].dt_txt,
          icon: forecast.list[8].weather[0].icon,
          temperature: forecast.list[8].main.temp,
          description: forecast.list[8].weather[0].description
        },
        dayTwoo: {
          day: forecast.list[16].dt_txt,
          icon: forecast.list[16].weather[0].icon,
          temperature: forecast.list[16].main.temp,
          description: forecast.list[16].weather[0].description
        },
        dayThree: {
          day: forecast.list[24].dt_txt,
          icon: forecast.list[24].weather[0].icon,
          temperature: forecast.list[24].main.temp,
          description: forecast.list[24].weather[0].description
        },
        dayFour: {
          day: forecast.list[32].dt_txt,
          icon: forecast.list[32].weather[0].icon,
          temperature: forecast.list[32].main.temp,
          description: forecast.list[32].weather[0].description
        },
        error: undefined
      });
      const headerTransofm = () => {
        const appLogo = document.querySelector('.logo');
        const appTittle = document.querySelector('.appTittle');
        const appDescription = document.querySelector('.appDescription');
        appLogo.classList.add('active');
        appTittle.classList.add('active');
        appDescription.classList.add('hide');
      };
      headerTransofm();
    }
    //if imput is empty 
    else {
      this.setState({
        error: 'Please enter City name'
      });
    }
  }
  

  render() {
    
    return (
      <div className="App">
        <Header />
        <Form 
          getWeather={this.getWeather}
          error={this.state.error}
          />
        <Weather 
          success={this.state.success}
          display={this.state.today.display}
          city={this.state.today.city}
          country={this.state.today.country}
          temperature={this.state.today.temperature}
          description={this.state.today.description}
          humidity={this.state.today.humidity}
          pressure={this.state.today.pressure}
          icon={this.state.today.icon}
          windSpeed={this.state.today.windSpeed}
          windDeg={this.state.today.windDeg}
          />
        <Forecast
          success={this.state.success}
          //forecast for day one
          dayOne={this.state.dayOne.day}
          dayOneTemp={this.state.dayOne.temperature}
          dayOneIcon={this.state.dayOne.icon}
          dayOneDesc={this.state.dayOne.description}
          //forecast for day two
          dayTwoo={this.state.dayTwoo.day}
          dayTwooTemp={this.state.dayTwoo.temperature}
          dayTwooIcon={this.state.dayTwoo.icon}
          dayTwooDesc={this.state.dayTwoo.description}
          //forecast for day three
          dayThree={this.state.dayThree.day}
          dayThreeTemp={this.state.dayThree.temperature}
          dayThreeIcon={this.state.dayThree.icon}
          dayThreeDesc={this.state.dayThree.description}
          //forecast for day four
          dayFour={this.state.dayFour.day}
          dayFourTemp={this.state.dayFour.temperature}
          dayFourIcon={this.state.dayFour.icon}
          dayFourDesc={this.state.dayFour.description}
        />
        <Footer />
      </div>
    );
  }

}

export default App;