import React, {useState} from "react";
import Form from './Form.js';
import Card from "./Card.js";

const WeatherPanel = () => {

    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?&appid=f7546908a31311365f161f4b8ffd31bc&lange=es";
    let cityUrl = "&q=";

    let urlForeCast ="https://api.openweathermap.org/data/2.5/forecast?&appid=f7546908a31311365f161f4b8ffd31bc&lange=es";
  
    const [weather, setWeather] = useState([]);
    const [foreCast, setForeCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);

        //Weather
        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw (response)
            return response.json();


        }).then((weatherData) => {
            console.log(weatherData);
            setWeather(weatherData);
                
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        //forecast

        urlForeCast = urlForeCast +cityUrl + loc;
        await fetch(urlForeCast).then((response) =>{
            if(!response.ok) throw (response)
        return response.json();


        }).then((forecastData) => {
            console.log(forecastData);
            setForeCast(forecastData);

            setLoading(false);
            setShow(true);    

        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });

    }

    return (
        <React.Fragment>
            <Form
                newLocation = {getLocation}
            />

            <Card
                showData = {show}
                loadingData = {loading}
                weather = {weather}
                forecast = {foreCast}

            />
        </React.Fragment>
    );
}

export default WeatherPanel;