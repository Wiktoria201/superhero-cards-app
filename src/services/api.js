import { getRandomId } from "../utils/getRandomId";
const url = `https://superheroapi.com/api.php/${process.env.REACT_APP_ACCESS_TOKEN}`;

export const fetchRandomHero = async () => {
  try {
    const randomId = getRandomId();
    const response = await fetch(`${url}/${randomId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const searchByName = async (name) => {
  try {
    const response = await fetch(`${url}/search/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
