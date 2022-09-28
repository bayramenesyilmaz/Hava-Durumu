import Day from './Day'
import { useContext } from "react"
import { WeaterContext } from "../context/WeaterContext"

function Durum() {

  const { weather, days } = useContext(WeaterContext);

  return (

    <div className='durum'>
    
      {
        weather ?
        weather.daily.map((day,i) => {
          return <Day key={i} today={i} dayWeather={day} days={days} />
        })
        :
        null
      }

    </div>
  )
}

export default Durum