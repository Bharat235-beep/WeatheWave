import React from 'react'

const WeatherForecast = (props) => {
    const{forecast}=props;
   
  
  // Function to add days to a date
  function addDays( days) {
  
    const result = new Date();
    result.setDate(result.getDate() + parseInt(days));
    const year = result.getFullYear();
    const month = String(result.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(result.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
}
  
  return (
    <div className=' text-green-800 '>
      <table  className=' font-semibold w-2/3 font-mono md:text-2xl sm:text-xs' cellSpacing={10} cellPadding={10}  align='center'>
        <thead>
        <tr>
        <th>Day</th>
        <th>Temperature <i className="fa-solid fa-temperature-three-quarters"></i></th>
        <th>Wind <i className="fa-solid fa-wind"></i></th>
        </tr>
        </thead>
        <tbody>
       {
     forecast.map((forecast)=>{
        return(
          <tr key={forecast.day}>
            <td>{addDays(forecast.day)}</td>
            <td>{forecast.temperature}</td>
            <td>{forecast.wind}</td>
               {/* <p key={forecast.day}>Day:{forecast.day} Temperature:{forecast.temperature} Wind:{forecast.wind}</p> */}
          </tr>

        )
      })
     }
     </tbody>
     </table>
    </div>
  )
}

export default WeatherForecast
