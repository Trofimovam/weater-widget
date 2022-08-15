import React from "react";
import { IWeather } from "src/components/types/weatherType";
import {
  City,
  Temperature,
  Wind,
  Pressure,
  Humidity,
  Visibility,
  Container,
} from "./styled";
import { windDirection } from "./windDirection";

interface IWeatherProps {
  weather: IWeather;
}

export default function Weather({ weather }: IWeatherProps) {
  if (typeof weather === "undefined") return null;

  return (
    <Container>
      <City>{weather.name}</City>
      <Temperature>{`Temperature: ${weather.main.temp}*C`}</Temperature>
      <Wind>{`Wind: ${weather.wind.speed}m/s ${windDirection(
        weather.wind.deg,
      )}`}</Wind>
      <Pressure>{`Pressure: ${weather.main.pressure}hPa`}</Pressure>
      <Humidity>{`Humidity: ${weather.main.humidity}%`}</Humidity>
      <Visibility>{`Visibility: ${weather.visibility / 1000}km`}</Visibility>
    </Container>
  );
}
