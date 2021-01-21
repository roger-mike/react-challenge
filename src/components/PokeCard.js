import React, { useState } from "react";
const SHINY_LABEL = "shiny";
const DEFAULT_LABEL = "default";

const PokeCard = ({ name, sprites, video }) => {
  const [isShiny, setIsShiny] = useState(false);

  const getPokemonImage = () =>
    isShiny ? sprites.front_shiny : sprites.front_default;

  return (
    <div className="card">
      <h1>{name}</h1>
      <div className="button-row">
        <button onClick={() => setIsShiny(false)}>{DEFAULT_LABEL}</button>
        <button onClick={() => setIsShiny(true)}>{SHINY_LABEL}</button>
      </div>
      <a href={video}>
        <img className="card-img" src={getPokemonImage()} alt="default" />
      </a>
    </div>
  );
};

export default PokeCard;
