import React, { useEffect, useState } from 'react'

const Search = (props) => {
  const {setforecast}=props
  const [city,setcity]=useState("chandigarh")
  const [weather,setweather]=useState({})
  
  const update = async () => {
    const response = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
    const result = await response.json()
    props.setforecast(result)
    console.log(result)
    setweather(result)
     setforecast(result.forecast)
  }
  const handleChange=(e)=>{

    setcity(e.target.value)
   
  }
  const handleCLick=()=>{
    update()
  }
  
  useEffect(() => {
    update()
    // eslint-disable-next-line
  },[])
  return (
    <div>
      <h2>Searching</h2>
      
        <input value={city} onChange={handleChange}/>
        <button onClick={handleCLick}>Search</button>
      <p>Current:{weather.temperature} {weather.wind}</p>
    </div>
  )
}

export default Search
