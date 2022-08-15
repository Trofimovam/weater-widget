import axios from "axios";
import { API_KEY_OPEN_WEATHER_MAP } from "./constants";

export const axiosGetWeatherByCity = async (city: string) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?",
    { params: { q: city, units: "metric", appid: API_KEY_OPEN_WEATHER_MAP } },
  );
  return response.data;
};
