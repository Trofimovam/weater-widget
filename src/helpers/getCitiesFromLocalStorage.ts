export const getCitiesFromLocalStorage = () => {
  const cities = window.localStorage.getItem("city");
  if (!cities) return null;
  return JSON.parse(cities);
};
