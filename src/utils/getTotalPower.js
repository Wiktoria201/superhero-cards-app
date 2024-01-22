export const getTotalPower = (powerstats) => {
  const { intelligence, strength, speed, durability, power, combat } =
    powerstats;

  const parsePowerStat = (value) =>
    value === "null" ? 0 : parseInt(value) || 0;

  const sum =
    parsePowerStat(intelligence) +
    parsePowerStat(strength) +
    parsePowerStat(speed) +
    parsePowerStat(durability) +
    parsePowerStat(power) +
    parsePowerStat(combat);

  return sum;
};
