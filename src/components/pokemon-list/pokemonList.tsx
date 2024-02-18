import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import PokemonStatesAndTabs from "../pokemon-states/pokemonStates";
import PokemonTypes from "../pokemon-types/pokemonTypes";

interface PokemonListProp {
  pokemons: PokemonResponse;
}

const PokemonList = ({ pokemons }: PokemonListProp) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {pokemons.map((pokemon) => (
        <Grid item key={pokemon.id} xs={12} sm={6} md={4}>
          <Card style={{ background: "#424242", color: "white" }}>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </Typography>
                  <img
                    src={`/sprites/${pokemon.id}.svg`}
                    alt={pokemon.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: 200,
                      marginBottom: "10px",
                    }}
                  />
                </Grid>
                <PokemonTypes types={pokemon.types} />
              </Grid>
              <PokemonStatesAndTabs stats={pokemon.stats} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PokemonList;
