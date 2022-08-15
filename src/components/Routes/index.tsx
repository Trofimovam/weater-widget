import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import WeatherWidget from "../WeatherWidget";

function Routes() {
  return (
    <Switch>
      <Route path='/weather-widget' element={<WeatherWidget />} />

      <Route path='*' element={<div>Нет Такого Виджета</div>} />
    </Switch>
  );
}

export default Routes;
