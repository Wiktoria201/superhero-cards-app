import { getRandomId } from "./getRandomId";

describe("getRandomId function", () => {
  test("should generate a random ID within the specified range", () => {
    const result = getRandomId();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(731);
  });
});
