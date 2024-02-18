import React from "react";
import PokemonList from "../components/pokemon-list/pokemonList";

const HomePage = async () => {
  const pokemonRes = await fetch("http://localhost:3000/api/pokemon");
  const pokemons: PokemonResponse = await pokemonRes.json();

  return (
    <main>
      <div
        style={{ background: "#121212", minHeight: "100vh", padding: "20px" }}
      >
        <h1 style={{ textAlign: "center", color: "white" }}>Pokemons</h1>
        <PokemonList pokemons={pokemons} />
      </div>
    </main>
  );
};

export default HomePage;
