type Pokemon = {
    id: number;
    name: string;
    stats: {
      base_stat: number;
      stat: {
        name: string;
      };
    }[];
    types: {
        slot: number;
        type: {
            name: string
        }
    }[];
  };
  
  type PokemonResponse = Pokemon[];