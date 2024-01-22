import { getTotalPower } from "./getTotalPower";

describe("getTotalPower", () => {
  test('should calculate total power with "null" values', () => {
    const powerstats = {
      intelligence: "null",
      strength: "16",
      speed: "null",
      durability: "20",
      power: "null",
      combat: "null",
    };

    const result = getTotalPower(powerstats);
    expect(result).toBe(36);
  });

  test("should calculate total power with numeric values", () => {
    const powerstats = {
      intelligence: "50",
      strength: "75",
      speed: "90",
      durability: "60",
      power: "80",
      combat: "70",
    };

    const result = getTotalPower(powerstats);
    expect(result).toBe(425);
  });

  test('should handle "null" values and non-numeric strings', () => {
    const powerstats = {
      intelligence: "null",
      strength: "abc",
      speed: "null",
      durability: "30",
      power: "null",
      combat: "xyz",
    };

    const result = getTotalPower(powerstats);
    expect(result).toBe(30);
  });
});
