import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { fetchPokemon } from "../../../vendor/pokemon/pokemon-client";
import { DEFAULT_DATA_PROVIDER, POKEMON_URL } from "../../../config/config";
import { fetchPokemonData } from "../../../db/databaseClient";
import { url } from "inspector";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (DEFAULT_DATA_PROVIDER == "POKEMON_PARTNER") {
      const pokemonData = await fetchPokemon();
      return NextResponse.json(pokemonData);
    } else if (DEFAULT_DATA_PROVIDER == "LOCAL_DB") {
      const pokemonData = await fetchPokemonData(POKEMON_URL); // POKEMON_URL is unique_key
      return NextResponse.json(pokemonData);
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
