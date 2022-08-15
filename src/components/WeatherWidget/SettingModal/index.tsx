import React, { useCallback, useState } from "react";
import update from "immutability-helper";

import { Container, CloseIcon, StyledButton, StyledInput } from "./styled";
import closeIcon from "./closeIcon.svg";

import CityCard from "./CityCard";

interface ISettingModal {
  openModal: boolean;
  handleClick: () => void;
  cities: string[];
  setCities: (cities: string[]) => void;
}

const { localStorage } = window;

export default function SettingModal({
  openModal,
  handleClick,
  cities,
  setCities,
}: ISettingModal) {
  const [newCity, setNewCity] = useState("");

  const handleSubmitAddCity = (event) => {
    event.preventDefault();
    const newCityIncludeFromCities = cities.includes(newCity);
    const newCitiesArray = [...cities, newCity];
    setNewCity("");
    if (!newCityIncludeFromCities) {
      localStorage.removeItem("city");
      setCities(newCitiesArray);
      localStorage.setItem("city", JSON.stringify(newCitiesArray));
    }
  };

  const handleClickDeleteCity = (event, city) => {
    event.preventDefault();
    const newCitiesArray = cities.filter((c) => c !== city);
    localStorage.removeItem("city");
    setCities(newCitiesArray);
    localStorage.setItem("city", JSON.stringify(newCitiesArray));
  };

  const handleChangeCity = (event) => {
    setNewCity(event.target.value);
  };

  const moveCity = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const newCitiesArray = update(cities, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, cities[dragIndex]],
        ],
      });
      localStorage.removeItem("city");
      setCities(newCitiesArray);
      localStorage.setItem("city", JSON.stringify(newCitiesArray));
    },
    [cities],
  );

  if (!openModal) return null;

  return (
    <Container>
      <CloseIcon src={closeIcon} onClick={handleClick} />
      {cities.map((city: string, index: number) => {
        return (
          <CityCard
            key={city}
            handleClickDeleteCity={handleClickDeleteCity}
            city={city}
            moveCity={moveCity}
            index={index}
          />
        );
      })}
      <form
        onSubmit={(event) => handleSubmitAddCity(event)}
        onReset={() => setNewCity("")}
      >
        <StyledInput
          type='text'
          onChange={(event) => handleChangeCity(event)}
          value={newCity}
          placeholder='Введите город'
        />
        <StyledButton type='submit'>Add City</StyledButton>
        <StyledButton type='reset'>Clear</StyledButton>
      </form>
    </Container>
  );
}
