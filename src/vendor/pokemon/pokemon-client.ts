import { POKEMON_URL } from "../../config/config";
import {
  fetchPokemonData,
  updateOfflinePokemonData,
} from "../../db/databaseClient";

export const fetchPokemon = async (): Promise<Pokemon[]> => {
  const url = POKEMON_URL;
  try {
    const pokemonParentAPIResponse = await fetch(url);
    const expectedPokemonData = await pokemonParentAPIResponse.json();

    const pokemonDetails = await Promise.all(
      expectedPokemonData.results.map(async (pokemon: { url: string }) => {
        const pokemonDetailResponse = await fetch(pokemon.url);
        const pokemonDetailsExpectedData = await pokemonDetailResponse.json();
        return {
          id: pokemonDetailsExpectedData.id,
          name: pokemonDetailsExpectedData.name,
          stats: pokemonDetailsExpectedData.stats,
          types: pokemonDetailsExpectedData.types,
        };
      })
    );

    if (pokemonDetails) {
      await updateOfflinePokemonData("pokemon-list", url, pokemonDetails);
    }

    return pokemonDetails;
  } catch (error) {
    console.error(`Error fetching Pokémon data from API: ${error}`);
    return await fetchPokemonData(url);
  }
};
