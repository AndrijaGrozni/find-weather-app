import React from 'react';

const Form = props => {

  return(

    <div className="form-block">

      <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="Search City..." />
        <button>GET WEATHER</button>
      </form>

      <div className="error-box">
        { props.error && <p>{props.error}</p> }
      </div>
      
    </div>

  );

}

export default Form;