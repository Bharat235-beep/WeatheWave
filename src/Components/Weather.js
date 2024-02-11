import React from 'react'

const Weather = (props) => {
    const{forecast}=props;
  return (
    <div>
       {
     forecast.map((forecast)=>{
        return(
   <p key={forecast.day}>Day:{forecast.day} Temperature:{forecast.temperature} Wind:{forecast.wind}</p>
        )
      })
     }
    </div>
  )
}

export default Weather
