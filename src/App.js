
import { useState } from 'react';
import './App.css';
import Search from './Components/Search';
import WeatherForecast from './Components/WeatherForecast';
import WeatherCurrent from './Components/WeatherCurrent';


function App() {
const [forecast,setforecast]= useState([ {
  "day": "1",
  "temperature": " °C",
  "wind": "km/h"
},
{
  "day": "2",
  "temperature": " °C",
  "wind": " km/h"
},
{
  "day": "3",
  "temperature": " °C",
  "wind": "km/h"
}]);
const [weather,setweather]=useState({ "temperature": "",
"wind": "",
"description": ""})
const [loading,setLoading]=useState(false)
  return (
    <div className=' place-content-center' >
    <div className='bg-gradient-to-r from-sky-500 to-black flex flex-row justify-center p-10 font-bold font text-4xl rounded-br-full  top-0 '>
    <p className=' text-cyan-400 italic items-stretch'>WeatherWave<br/><span className='text-xl text-red-300  uppercase italic font-serif'>Your Daily Weather Guide</span></p><br/>
   
    </div> 
    <Search setLoading={setLoading}  setforecast={setforecast}  setweather={setweather} />
    <WeatherCurrent loading={loading} weather={weather}/>
   <WeatherForecast loading={loading} forecast={forecast}/>
    </div>
  );
}

export default App;
