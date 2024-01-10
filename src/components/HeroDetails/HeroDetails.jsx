import { useParams, redirect } from "react-router-dom";
// import { useContext } from "react";
// import { HeroesContext } from "../Context/HeroesContext";

const HeroDetails = () => {
  // const { hero, removeHero } = useContext(HeroesContext);
  const { id } = useParams();
  redirect("/heroes-list");
  return (
    <div>
      <h1>Details for Hero {id}</h1>
      {/* <button onClick={() => removeHero(hero.id)}>Usuń</button> */}
    </div>
  );
};

export default HeroDetails;
