import React from "react";
import { Link, Outlet } from "react-router-dom";

const Pokemons = ({ myPokemons }) => {
  console.log(myPokemons);
  return (
    <div>
      <h2> POKEMONS </h2>
      <ul>
        {myPokemons?.map((pokemon, i) => {
          return (
            <Link key={i} to={`pokemon/${pokemon.id}`}>
              <li>
                {pokemon.name.english}
              </li>
            </Link>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};

export default Pokemons;
