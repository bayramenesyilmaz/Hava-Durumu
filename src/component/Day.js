function Day({ dayWeather, days, today }) {

    return (

        <div className={`day ${today === 0 ? "today" : null}`}>

            <h4>{days[new Date(dayWeather.dt * 1000).getDay()]}</h4>

            <img
                src={`https://openweathermap.org/img/wn/${dayWeather.weather[0].icon}@2x.png`}
                alt={dayWeather.weather[0].description}
                title={dayWeather.weather[0].description}
            />
            <div className='degContainer'>
                <span className='maxDeg'>{Math.round(dayWeather.temp['max'] - 273.15)}&deg;</span>
                <span className='minDeg'>{Math.round(dayWeather.temp['min'] - 273.15)}&deg;</span>
            </div>

        </div>

    )
}

export default Day