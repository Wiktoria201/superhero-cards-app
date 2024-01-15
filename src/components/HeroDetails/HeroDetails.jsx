import { useParams, redirect } from "react-router-dom";
import { useContext } from "react";
import { HeroesContext } from "../Context/HeroesContext";

const HeroDetails = () => {
  const { id } = useParams();
  const { heroes } = useContext(HeroesContext);
  const hero = heroes.find((hero) => hero.id === id);
  redirect("/heroes-list");
  return (
    <div>
      <h1>{hero.name}</h1>
      <h1>Details for Hero {id}</h1>
    </div>
  );
};

export default HeroDetails;
