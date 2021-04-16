import axios from 'axios';
import React, { useState } from 'react'
import WeatherApp from './Weather';

function MyApp() {
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState({})
    
    const onKey = (e) => {
        if(e.key === 'Enter') {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=f81a225131b81dba99d6c46cc0023d66 `)
            .then(result => {
                setWeather(result);
                console.log(result)
            })
        }
    }

    return (
        <div>
            <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} onKeyPress={onKey} />
        </div>
    )
}

export default MyApp
