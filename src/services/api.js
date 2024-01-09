import { getRandomId } from "../utils/getRandomId";
const url = `https://superheroapi.com/api.php/${process.env.REACT_APP_ACCESS_TOKEN}`;

export const fetchRandomHeroes = async () => {
  try {
    const randomId = getRandomId();
    const response = await fetch(`${url}/${randomId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchByName = async (name) => {
  try {
    const response = await fetch(`${url}/search/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// "This is a Superhero card generator, please enter the name of your favorite character or refresh the page."
// "We can't find the hero you were looking for. Please try again."
