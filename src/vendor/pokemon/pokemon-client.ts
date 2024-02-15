export const fetchPokemon = async (): Promise<Pokemon[]> => {
    try {
      const pokemonParentAPIResponse = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=151'
      );
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
      return pokemonDetails;
    } catch (error) {
      throw error;
    }
  };