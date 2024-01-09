import { Outlet } from "react-router-dom";
import "./App.css";
import Search from "./components/Search/Search";

function App() {
  return (
    <div>
      <Search />
      <Outlet />
    </div>
  );
}

export default App;

// to do:
// -after the user searched his card, the others are deleted
// -button generate random cards next to search that generates 3 cards again
// -cards need to have a second side that shows the details of a character it needs to be done by react-router(cardsdetails)
// -the chosen cards should be stored in an array in local storage, and have an icon that after clicking shows a list of cards img name total points

// -each card when clicked needs to have a button accept decline
// after accept -> adding a card into an array that will be stored
// in another component, decline -> the card clicked should be removed and
// it should fetch another card
// -the array with chosen cards should have a max limit of 6 cards, they should be stored in local storage,
// when clicked it should display mini images of the chosen cards on the left and the total points of each stat on the right
// -after adding 6 cards the player will have an alert enemies, fight or run and abbandon/leave your heroes then the computer is math.random between the total numbers
// deck component that is on 1 of the corners (stores all chosen cards

// to fix:
// not displaying card with no properties/no image

// animation after clicking on the card like heartstone

/*
function App() {
  return (
    <div>
      <HerosesContextProvider>
        <Search />
        <Outlet />
      <HerosesContextProvider>
    </div>
  );
}
*/

/*
w Search:
  import {redirect} from 'react-router-dom'
  const { addHero  } = useContext(HerosesContext)

 const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await searchByName(userInput);
      const usersHero = data.results[0];

      if (usersHero) {
        isDuplicate = newHeroes.find((hero) => hero.id === usersHero.id);

        if (!isDuplicate) {
          -------  setNewHeroes([...newHeroes, usersHero]); // usuwamy z kodu
          addHero(usersHero) // to dodajemy
          redirect('/heroses-list') // przenosimy usera na komponent HerosesList
        }
      }
    } catch (error) {
      console.error(error);
    }
    setUserInput("");
  };

*/

/*
w HerosesList:

const {heroses, removeHero} = useContext(HerosesContext)

<div>
 {heroses.map(hero => <div>
    <p>{hero.title}</p>
    <button onClick={() => removeHero(hero.id)}>Usuń</button>
  </div>)}
</div>

*/
