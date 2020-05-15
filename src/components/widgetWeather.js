'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class WeatherWidget extends React.Component {
  render() {
    const className = 'weather ' + this.props.weatherType;
    return (
      <div className={className}>
        <div className='weather-item icon'></div>
        <div className='weather-item city'>{this.props.city}</div>
        <div className='weather-item deg'>
          Температура: {this.props.deg}&deg;
        </div>
        <div className='weather-item wind'>Ветер: {this.props.windDir} {this.props.wind} м/с</div>
        <div className='weather-item humidity'>Влажность: {this.props.humidity}%</div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');

WeatherWidget.propTypes = {
   city: PropTypes.string.isRequired,
   deg: PropTypes.number.isRequired,
   wind: PropTypes.number.isRequired,
   windDir: PropTypes.string.isRequired,
   humidity: PropTypes.number.isRequired,
   weatherType: PropTypes.oneOf(['sun', 'rain', 'cloud']).isRequired
};


ReactDOM.render(
  <React.StrictMode>
<WeatherWidget 
  city={'Москва'}
  deg={18}
  wind={4}
  windDir={'ЮВ'}
  humidity={71}
  weatherType={'rain'}
/>
<WeatherWidget 
  city={'Москва'}
  deg={18}
  wind={4}
  windDir={'ЮВ'}
  humidity={71}
  weatherType={'sun'}
/>
<WeatherWidget 
  city={'Москва'}
  deg={18}
  wind={4}
  windDir={'ЮВ'}
  humidity={71}
  weatherType={'cloud'}
/>
</React.StrictMode>, domContainer);
