type Pokemon = {
    id: number;
    name: string;
    stats: {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
      };
    }[];
    types: {
        slot: number;
        effort: number;
        type: {
            name: string
        }
    }[];
  };
  
  type PokemonResponse = Pokemon[];