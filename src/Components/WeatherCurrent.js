import React from 'react'

export default function WeatherCurrent(props) {
    const {weather}=props
  return (<>    
    <div className='flex-col justify-center text-center text-2xl  font-serif my-2'>
          {/* <p className=''>Current:{weather.temperature} {weather.wind} {weather.description}</p> */}
   <p>Temperature:<i className="fa-solid fa-temperature-three-quarters"></i><br></br>{weather.temperature}</p>
   <br/>
   <p>Wind:<i className="fa-solid fa-wind"></i><br></br>{weather.wind}</p>
   <br/>
   <p>Weather:<br/>{weather.description}</p>
   <br/>
    </div>
    </>

  )
}
