import React, { useState } from "react";
import "./style.css";
export default function (props) {
  let [minTemp, setminTemp] = useState(props.minTemp);
  let [maxTemp, setmaxTemp] = useState(props.maxTemp);

  return (
    <div>
      <h1>
        {props.data.city}, {props.data.country}
      </h1>
      <ul className="stats">
        <li>
          <img
            src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
            alt={props.data.description}
          />
        </li>
        <div className="weather-data">
          <span id="temperature-high">{Math.round(props.data.minTemp)}</span>
          <span>°| </span>
          <span id="temperature-low">
            <strong>{Math.round(props.data.maxTemp)}</strong>
          </span>
          <span>°</span>
        </div>
        <li>Description: {props.data.description}</li>

        <li>Feels like: {Math.round(props.data.temperature)}°C</li>

        <li>Humidity: {props.data.humidity}%</li>

        <li>Windsped: {Math.round(props.data.wind)}km/hr</li>
      </ul>
    </div>
  );
}
