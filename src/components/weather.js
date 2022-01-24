import React from "react";

const WeatherComponent = props =>(
    < div >
                { props.state.city ?
                    <div>
                        <p>Местоположение : {props.state.city}, {props.country}</p>
                        <p>Температура : {props.state.temp}℃</p>
                        <p>Восход солнца : {props.state.sunrise}</p>
                        <p>Заход солнца : {props.state.sunset}</p>
                    </div>
                : <p>{props.state.error}</p>}
            </div> 
);

export default WeatherComponent;