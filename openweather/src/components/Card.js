import React from "react";
import Spinner from "./Spinner";

const Card = ({loadingData, weather, showData, forecast}) => {

var today = new Date();
var day = today.getDate();
var month = today.getMonth() +1;
var year = today.getFullYear();
var date = day + "/" + month + "/" + year;


var url = "";
var iconUrl = "";

var iconUrl3 = "";
var iconUrl6 = "";

var foreCastDate3 = "";
var foreCastDate6 = "";




if(loadingData){
    return <Spinner />

}

if(showData){
    url = "https://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";

    iconUrl3 = url +forecast.list[1].weather[0].icon +".png";
    iconUrl6 = url +forecast.list[2].weather[0].icon +".png";
    
    foreCastDate3 = forecast.list[1].dt_txt.substring(8, 10) + "/" + forecast.list[1].dt_txt.substring(5, 7) + "/" + forecast.list[1].dt_txt.substring(0, 4) + " "  + forecast.list[1].dt_txt.substring(11, 13) + "h";
    foreCastDate6 = forecast.list[2].dt_txt.substring(8, 10) + "/" + forecast.list[2].dt_txt.substring(5, 7) + "/" + forecast.list[2].dt_txt.substring(0, 4) + " "  + forecast.list[2].dt_txt.substring(11, 13) + "h";
}
return(
    <div className="mt-5">
        {
            showData === true ? (
                <div className="container">
                    <div className="card mb-3 bg-dark mx-auto text-light">
                        <div className="row g-0"> 
                         <div className="col-md-7 ">
                            <h1 className="card-temp">{(weather.main.temp -273.15).toFixed(1)}°C</h1>
                            <h3 className="card-title">{weather.name}</h3>
                            <img src={iconUrl} alt="icon" className="iconT"/>
                            <p className="card-desc">{weather.weather[0].description}</p>
                            <p className="card-date">{date}</p>
                            <img src="https://images.pexels.com/photos/573863/pexels-photo-573863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="img-fluid rounded-start" alt=".."></img>

                             
                        </div>
                            <div className="col-md-5 px-5 bodyC">
                                    <div className="card-body text-start mt-2">
                                        <p className="h5">Weather Details </p>
                                        <hr></hr>
                                   <h5 className="card-text">Temperatura Máxima: {(weather.main.temp_max -273.15).toFixed(1)}°C </h5>
                                   <h5 className="card-text">Temperatura Minima: {(weather.main.temp_min -273.15).toFixed(1)}°C </h5>
                                   <h5 className="card-text">Sensación Térmica: {(weather.main.feels_like -273.15).toFixed(1)}°C </h5> 
                                   <h5 className="card-text">Humedad: {weather.main.humidity}% </h5>
                                   <h5 className="card-text">Velocidad del Viento: {weather.wind.speed}m/s </h5>
                            

                                    <p className="h5 pt-3">Weather Predictions </p>
                                        <hr></hr>

                                    <div className="row mt-4"> 
                                        <div className="col">
                                        <p className="card-text">{foreCastDate3}</p>
                                        <p className="card-text-D"><img src= {iconUrl3} alt="icon" className="iconP"/>{forecast.list[1].weather[0].description}</p>
                                        <p className="card-text">{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</p>
                                        </div>

                                        <div className="col">
                                        <p className="card-text">{foreCastDate6}</p>
                                        <p className="card-text-D"><img src= {iconUrl6} alt="icon" className="iconP"/>{forecast.list[2].weather[0].description}</p>
                                        <p className="card-text">{(forecast.list[2].main.temp - 273.15).toFixed(1)}°C</p>
                                        </div>
                                    </div>

                                    </div>
                                </div> 

                            </div>
                        </div>
                     </div>

            ):(
                <h2 className="text-light">Sin datos</h2>
            )
        }


    </div>


);

}

export default Card;