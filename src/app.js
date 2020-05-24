import { WeatherWidget } from './components/widgetWeather.js';
import './style.css';
import ReactDOM from 'react-dom';

const domContainer = document.querySelector('#root');

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
