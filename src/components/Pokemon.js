import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const Pokemon = ({ pokemonInfo }) => {
  // we destructure the params memberName from the object return from the useParams hook
  const { id } = useParams();
  console.log(id);
  console.log(pokemonInfo);
  const pokemonOfInterest = pokemonInfo.find(
    (pokemon) => pokemon.id === Number(id)
  );
  console.log(pokemonOfInterest);
  const { name, type, base } = pokemonOfInterest;
  return (
    <div>
      <h2>
        Information About The Pokemon {name.english}
      </h2>
      <ul>
        <Link key={id} to="name">
          <li>Names</li>
        </Link>
        <Link key={id} to="type">
          <li>Types</li>
        </Link>
        <Link key={id} to="base">
          <li>Bases</li>
        </Link>
      </ul>
      <Outlet />
    </div>
  );
};

export default Pokemon;
