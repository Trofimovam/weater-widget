import React, { useEffect, useState } from "react";
import { ContainerWeatherWidget, SettingButton } from "./styled";
import Weather from "./Weather";
import SettingIcon from "./assets/settingIcon.svg";
import SettingModal from "./SettingModal";
import { axiosGetWeatherByCity } from "src/helpers/axiosGetWeatherByCity";
import { IWeather } from "../types/weatherType";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getCitiesFromLocalStorage } from "src/helpers/getCitiesFromLocalStorage";

export default function WeatherWidget() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [cities, setCities] = useState<string[]>(getCitiesFromLocalStorage());
  const [weathers, setWeathers] = useState<{}>({});

  const handleClickOpenSettings = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    const newWeather = {};
    cities.map(async (city, key) => {
      await axiosGetWeatherByCity(city).then((weather: IWeather) => {
        newWeather[city] = weather;
        cities.length === Object.keys(newWeather).length &&
          setWeathers(newWeather);
      });
    });
  }, [cities]);

  const WeatherByCities = cities.map((city, key) => (
    <Weather weather={weathers[city]} key={key} />
  ));

  return (
    <ContainerWeatherWidget>
      <DndProvider backend={HTML5Backend}>
        <SettingButton src={SettingIcon} onClick={handleClickOpenSettings} />
        <SettingModal
          openModal={openModal}
          handleClick={handleClickOpenSettings}
          cities={cities}
          setCities={setCities}
        />
        {WeatherByCities}
      </DndProvider>
    </ContainerWeatherWidget>
  );
}
