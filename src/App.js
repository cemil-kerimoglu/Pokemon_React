import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Pokemons from "./components/Pokemons";
import Pokemon from "./components/Pokemon";
import Info from "./components/Info";

const App = () => {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await fetch("https://pokemonserver.onrender.com/pokemon");
      const result = await res.json();
      console.log(result);
      setPokemons(result);
    };
    fetchPokemons();
  }, []);
    
  
  /* <Route path="/" element={<Instructions />} /> */

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pokemons myPokemons={pokemons} />} />
        <Route path="pokemon/:id" element={<Pokemon pokemonInfo={pokemons} />} />
        <Route path="pokemon/:id/:info" element={<Info detailedInfo={pokemons} />} />
      </Routes>
      {/*console.log(pokemons)*/}
    </div>
  );



};


export default App;
