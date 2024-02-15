import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { fetchPokemon } from "../../../vendor/pokemon/pokemon-client";

export async function GET(req: NextApiRequest, res:NextApiResponse) {
    try{
        const pokemonData = await fetchPokemon();
        return NextResponse.json(pokemonData);    
    }catch(error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}