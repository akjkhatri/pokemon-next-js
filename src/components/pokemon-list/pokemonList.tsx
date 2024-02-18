"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import PokemonStatesAndTabs from "../pokemon-states/pokemonStates";
import PokemonTypes from "../pokemon-types/pokemonTypes";

interface PokemonListProp {
  pokemons: PokemonResponse;
}

const PokemonList = ({ pokemons }: PokemonListProp) => {
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);
    filterPokemonnIfPossible(searchText, sortBy);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    filterPokemonnIfPossible(searchText, sortBy);
  };

  const filterPokemonnIfPossible = (searchText, sortBy) => {
    let filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (sortBy === "states") {
      filtered = filtered.sort(
        (a, b) => a.stats[0].base_stat - b.stats[0].base_stat
      );
    } else {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    setFilteredPokemons(filtered);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <TextField
        label="Search Pokemon"
        variant="outlined"
        value={searchText}
        onChange={handleSearchChange}
        style={{
          marginBottom: "15px",
          maxWidth: 500,
          color: "white",
          background: "#424242",
          width: "100%",
        }}
        InputLabelProps={{ style: { color: "white" } }}
        InputProps={{
          style: {
            color: "white",
          },
          inputProps: { style: { color: "white" } },
        }}
      />
      <Select
        value={sortBy}
        onChange={handleSortChange}
        variant="outlined"
        style={{ color: "white", minWidth: 120, background: "#424242" }}
      >
        <MenuItem value="name">Sort by Name</MenuItem>
        <MenuItem value="states">Sort by States</MenuItem>
      </Select>
      <Grid container spacing={2} justifyContent="center">
        {filteredPokemons.map((pokemon) => (
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
    </div>
  );
};

export default PokemonList;
