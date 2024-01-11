import { useParams, redirect } from "react-router-dom";

const HeroDetails = () => {
  const { id } = useParams();
  redirect("/heroes-list");
  return (
    <div>
      <h1>Hero name</h1>
      <h1>Details for Hero {id}</h1>
      {/* <button onClick={() => removeHero(hero.id)}>Usuń</button> */}
    </div>
  );
};

export default HeroDetails;
