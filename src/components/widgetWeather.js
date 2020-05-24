'use strict';
import React from 'react';
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



WeatherWidget.propTypes = {
   city: PropTypes.string.isRequired,
   deg: PropTypes.number.isRequired,
   wind: PropTypes.number.isRequired,
   windDir: PropTypes.string.isRequired,
   humidity: PropTypes.number.isRequired,
   weatherType: PropTypes.oneOf(['sun', 'rain', 'cloud']).isRequired
};
export {WeatherWidget};