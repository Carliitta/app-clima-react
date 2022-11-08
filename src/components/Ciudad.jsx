import React from "react";
import { useParams } from "react-router-dom";
import  "./ciudad.css";

function Ciudad({onFilter}) {
    const { id } = useParams()
   /*  console.log(id) */
    let city = onFilter(id)
    return (
        <div className="ciudad">
           <div className="container">
          
                <div className="info">
                <h2>{city.name}</h2>
                <div>Temperatura: {city.temp} ºC</div>
                <div>Clima: {city.weather}</div>
                <div>Viento: {city.wind} km/h</div>
                <div>Cantidad de nubes: {city.clouds}</div>
                <div>Latitud: {city.latitud}º</div>
                <div>Longitud: {city.longitud}º</div>
                </div>
            </div>
        </div>
    )
}

export default Ciudad