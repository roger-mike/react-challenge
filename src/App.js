import React from "react";
import PokeCard from "./components/PokeCard";
import { mockPokemonData as charizardData } from "./mock/pokeData";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PokeCard {...charizardData} />
    </div>
  );
}
