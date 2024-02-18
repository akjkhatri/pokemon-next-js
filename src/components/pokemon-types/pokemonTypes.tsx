import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const PokemonTypes = ({ types }) => {
  return (
    <Grid item xs={12} md={6}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Types
        </Typography>
        <ul>
          {types.map((type, index) => (
            <li key={index}>
              <Typography variant="body1">
                {type.type.name.charAt(0).toUpperCase() +
                  type.type.name.slice(1)}
              </Typography>
            </li>
          ))}
        </ul>
      </Box>
    </Grid>
  );
};

export default PokemonTypes;
