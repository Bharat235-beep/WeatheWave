
import { useState } from 'react';
import './App.css';
import Search from './Components/Search';
import Weather from './Components/Weather';

function App() {
const [forecast,setforecast]= useState([]);
  return (
    <>
    <Search   setforecast={setforecast} />
   <Weather forecast={forecast}/>
    </>
  );
}

export default App;
