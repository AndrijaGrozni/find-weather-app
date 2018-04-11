import React from 'react';

const Forecast = props => {

  const getDay = (x) => {
    const d = new Date(x);
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const n = weekday[d.getDay()];
    return n;
  }
    const d1 = props.dayOne;
    const d2 = props.dayTwoo;
    const d3 = props.dayThree;
    const d4 = props.dayFour;

  return (
    <div className="weather-wrapper">
      
    { props.success && 
      <div className="forecast-box">
        <div className="forecast-left-col">
          {d1 && <p className="forecast-text">{getDay(d1)}</p>}
          <p className="forecast-description">{props.dayOneDesc}</p>
        </div>
        <div className="forecast-right-col">
          {props.dayOneIcon && <img src={require(`../img/icons/${props.dayOneIcon}.svg`)} className="weather-icon-small" alt="weather-icon" />}
          {props.dayOneTemp && <h1 className="weather-temp-small">{Math.round(props.dayOneTemp)}°</h1>}
        </div>
      </div> 
    }

    { props.success &&
      <div className="forecast-box">
        <div className="forecast-left-col">
        {d2 && <p className="forecast-text">{getDay(d2)}</p>}
        <p className="forecast-description">{props.dayTwooDesc}</p>
        </div>
        <div className="forecast-right-col">
          {props.dayTwooIcon && <img src={require(`../img/icons/${props.dayTwooIcon}.svg`)} className="weather-icon-small" alt="weather-icon" />}
          {props.dayTwooTemp && <h1 className="weather-temp-small">{Math.round(props.dayTwooTemp)}°</h1>}
        </div>
      </div>
    }

    { props.success &&
      <div className="forecast-box">
        <div className="forecast-left-col">
          {d3 && <p className="forecast-text">{getDay(d3)}</p>}
          <p className="forecast-description">{props.dayThreeDesc}</p>
        </div>
        <div className="forecast-right-col">
          {props.dayThreeIcon && <img src={require(`../img/icons/${props.dayThreeIcon}.svg`)} className="weather-icon-small" alt="weather-icon" />}
          {props.dayThreeTemp && <h1 className="weather-temp-small">{Math.round(props.dayThreeTemp)}°</h1>}
        </div>
      </div>
    }

    { props.success && 
      <div className="forecast-box">
        <div className="forecast-left-col">
          {d4 && <p className="forecast-text">{getDay(d4)}</p>}
          <p className="forecast-description">{props.dayFourDesc}</p>
        </div>
        <div className="forecast-right-col">
          {props.dayFourIcon && <img src={require(`../img/icons/${props.dayFourIcon}.svg`)} className="weather-icon-small" alt="weather-icon" />}
          {props.dayFourTemp && <h1 className="weather-temp-small">{Math.round(props.dayFourTemp)}°</h1>}
        </div>
      </div>
    }
    
    </div>
  );

}

export default Forecast;