import { Outlet } from "react-router-dom";
import "./App.css";
import Search from "./components/Search/Search";
import { HeroesContextProvider } from "./components/Context/HeroesContext";

const App = () => {
  return (
    <HeroesContextProvider>
      <Search />
      <Outlet />
    </HeroesContextProvider>
  );
};

export default App;

// to do:
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
