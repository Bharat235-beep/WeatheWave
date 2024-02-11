
import './App.css';

function App() {
const weather= {
    "temperature": "13 °C",
    "wind": "7 km/h",
    "description": "Clear",
    "forecast": [
        {
            "day": "1",
            "temperature": "21 °C",
            "wind": "7 km/h"
        },
        {
            "day": "2",
            "temperature": "23 °C",
            "wind": "13 km/h"
        },
        {
            "day": "3",
            "temperature": "16 °C",
            "wind": "5 km/h"
        }
    ]
}
  return (
    <div className="App">
     {
      weather.forecast.map((weather)=>{
        return(
   <p> {weather.day}</p>
        )
      })
     }
    </div>
  );
}

export default App;
