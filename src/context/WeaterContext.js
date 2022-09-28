import React, { useState, useEffect } from 'react'
import { createContext } from "react"
import axios from 'axios';
import cities from "../api/cities.json"

const firstCity = cities.find(cityPrev => cityPrev.id === 16)

export const WeaterContext = createContext();

function WeaterProvider({ children }) {

    const [city, setCity] = useState(firstCity);
    const [weather, setWeather] = useState();

    useEffect(() => {
        async function getWeather() {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude={part}&appid=a3b2f4740abf2ee79ee7f71b2f40543e`)
            const data = await response.data

            setWeather(data)
        }
        getWeather();
    }, [city, setCity]);

    const days = [
        'Pazar',
        'Pazartesi',
        'Salı',
        'Çarşamba',
        'Perşembe',
        'Cuma',
        'Cumartesi',
    ];

    return (
        <WeaterContext.Provider value={{ setCity, city, weather, days }}>
            {children}
        </WeaterContext.Provider>
    )
}

export default WeaterProvider

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3b2f4740abf2ee79ee7f71b2f40543e&units=metric&lang=tr`