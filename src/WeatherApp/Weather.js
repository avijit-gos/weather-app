import React, {useState, useEffect, useRef} from 'react';
import { BiLocationPlus } from "react-icons/bi";

function WeatherApp() {
    const [input, setInput] = useState('');
    const [error, setError] = useState('')
    const [weather, setWeather] = useState({});

    //focus input field...
    const inputRef = useRef(null);
    const changeInput = (e) => {
        setInput(e.target.value)
    };
    useEffect(()=>{
        inputRef.current.focus();
    },[]);

    //getting Date info....
    const getDateDetails = (d) => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day}, ${date} ${month} ${year}`
    }

    //fetching data from API...
    const keyPress = (e) => {
        if(e.key === 'Enter') {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&APPID=f81a225131b81dba99d6c46cc0023d66`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setInput('');
                console.log(result)
            } )
            .catch(err => {
                setError('Invalid Location')
            })
        }
    };


    return (
        <div className="main warm">
        <div className='conatiner'>
            <p className="header">Weather forecast</p>
            {/** Input field **/}
            <div className="input-box">
               <input type="text" placeholder="search your location..." className="input-field" value={input} onChange={changeInput} ref={inputRef} onKeyPress={keyPress} />
            </div>

            {/** Weather Information **/}
            {typeof weather.main !== 'undefined' ? <div className="weather-info">
            
                {/** LOCATION INFO **/}
                <div className="location-info">
                   <p className="city"><BiLocationPlus className="location-icon" />{weather.name}, <span className="country">{weather.sys.country}</span></p>
                </div>

                {/** DATE INFO **/}
                <div className="date-info">
                   <p className="date">{getDateDetails(new Date())}</p>
                </div>

                {/** TEMPERATURE INFO **/}
                <div className="temp-info">
                    <p className="temp-info">{Math.round(weather.main.temp)} <span className="unit">°c</span></p>
                </div>

                {/** CLOUD INFO **/}
                <div className="cloud">{weather.weather[0].main}</div>

                {/** CLOUD icons **/}
                <div className=
                {
                    ((weather.weather[0].main === 'Clear') ? 'weather-icon sun-icon' : 'weather-icon cloud-icon')
                }
                ></div>

                {/** WIND INFO **/}
                <div className="wind-info">
                   <span className="wind-speed">Wind-Speed: {weather.wind.speed}</span> || <span className="wind-deg">Wind-Deg: {weather.wind.deg}</span>
                </div>

                {/** MAX and MIN TEMPERATUE **/}
                <div className="max-min-temp">
                    <span className="max-temp">Max-temp: {Math.round(weather.main.temp_max)}°c</span>,  <span className="min-temp">Min-temp: {Math.round(weather.main.temp_min)}°c</span>
                </div>
            </div> : null}
            {
                weather.length<=0 ? <p>{error}</p> : null
            }
        </div>
        </div>
    )
}

export default WeatherApp
