import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const { REACT_APP_API_KEY } = process.env;

const Weather = () => {
    const [weather, setWeather] = useState();
    const currentDisplay = useSelector(selectDisplay);

    const latitude = currentDisplay.latlng[0];
    const longitude = currentDisplay.latlng[1];

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: { q: `${latitude},${longitude}` },
            headers: {
                'X-RapidAPI-Key': REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        axios.request(options).then(response => {
            setWeather(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <div>
            {weather ? (<table className="overview-table">
                <tbody>
                    <tr>
                        <td>Conditions: {weather.current.condition.text}</td>
                    </tr>
                    <tr>
                        <td>Temperature: {weather.current.temp_c} C / {weather.current.temp_f} F</td>
                    </tr>
                    <tr>
                        <td>Feels Like: {weather.current.feelslike_c} C / {weather.current.feelslike_f} F</td>
                    </tr>
                    <tr>
                        <td>Humidity: {weather.current.humidity}%</td>
                    </tr>
                    <tr>
                        <td>Wind Speed: {weather.current.wind_mph} mph / {weather.current.wind_kph} kph</td>
                    </tr>
                </tbody>
            </table>) : (<p>No data</p>)}
        </div >
    );
};

export default Weather;
