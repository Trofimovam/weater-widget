export const windDirection = (deg) => {
  if (deg > -1 && deg < 44) return "North";
  if (deg > 44 && deg < 89) return "Northeast";
  if (deg > 89 && deg < 134) return "East";
  if (deg > 134 && deg < 179) return "Southeast";
  if (deg > 179 && deg < 224) return "South";
  if (deg > 224 && deg < 269) return "Southwest";
  if (deg > 269 && deg < 314) return "West";
  return "Northwest";
};
