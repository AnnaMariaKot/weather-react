import React from "react";
import axios from 'axios';


export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
    }
    let apiKey = "34f1c513b53f57aa71f2dd7697c02049";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (<h2>Hello from Weather</h2>)
    
   
}