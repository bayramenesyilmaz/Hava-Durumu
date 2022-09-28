import React, { useContext } from 'react'
import { WeaterContext } from "../context/WeaterContext"
import cities from "../api/cities.json"

function Form() {

  const { setCity, city } = useContext(WeaterContext);

  function handleChange(e) {
    cities.find(cityPrev => e.target.value === cityPrev.name && setCity(cityPrev))

  }

  return (
    <div className='formdiv'>
      <form className='form'>
        <select value={city.name} onChange={handleChange}>

          {
            cities.map(prevCity => {

              return <option
                key={prevCity.id}
                value={prevCity.name}
              >
                {prevCity.name}
              </option>
            })
          }

        </select>
      </form>
    </div>
  )
}

export default Form