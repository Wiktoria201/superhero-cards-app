// import { useParams, redirect } from "react-router-dom";
// import { HeroesContext } from "../Context/HeroesContext";
// import { useContext } from "react";

// const HeroDetails = () => {
//   const { id } = useParams();
//   const { heroes } = useContext(HeroesContext);
//   redirect("/heroes-list");
//   const hero = heroes.find((hero) => hero.id === parseInt(id));
//   return (
//     <div>
//       <h1>{hero.name}</h1>
//       <h1>Hero name</h1>
//       <h1>Details for Hero {id}</h1>
//       <p>Power: {hero.powerstats.power}</p>
//       <p>Speed: {hero.powerstats.speed}</p>
//       <p>Strength: {hero.powerstats.strength}</p>
//       {/* <button onClick={() => removeHero(hero.id)}>Usuń</button> */}
//     </div>
//   );
// };

// export default HeroDetails;

// ----------------------
import { useParams, redirect } from "react-router-dom";
import { HeroesContext } from "../Context/HeroesContext";
import { useContext } from "react";

const HeroDetails = () => {
  const { id } = useParams();
  const { heroes } = useContext(HeroesContext);

  const heroExists = heroes.some((hero) => hero.id === parseInt(id));

  if (!heroExists) {
    return <redirect to="/heroes-list" />;
  }

  const hero = heroes.find((hero) => hero.id === parseInt(id));

  return (
    <div>
      <h1>{hero.name}</h1>
      <h2>Details for Hero {id}</h2>
      <p>Power: {hero.powerstats.power}</p>
      <p>Speed: {hero.powerstats.speed}</p>
      <p>Strength: {hero.powerstats.strength}</p>
      {/* <button onClick={() => removeHero(hero.id)}>Usuń</button> */}
    </div>
  );
};

export default HeroDetails;
