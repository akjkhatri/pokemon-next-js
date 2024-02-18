import { env } from "process";

export const POKEMON_URL =
  env.POKEMON_URL || "https://pokeapi.co/api/v2/pokemon?limit=151";

export const DEFAULT_DATA_PROVIDER = env.DEFAULT_DATA_PROVIDER || "LOCAL_DB";

export const LOCAL_POKEMON_API =
  env.LOCAL_POKEMON_API || "http://localhost:3000/api/pokemon";
