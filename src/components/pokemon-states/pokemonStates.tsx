import { Box, LinearProgress, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

const PokemonStatesAndTabs = ({ stats }) => {
  return (
    <>
      <Box>
        <Typography variant="h6" gutterBottom>
          States
        </Typography>
        {stats.map((stat) => (
          <div key={stat.stat.name}>
            <Typography variant="body1" style={{ marginTop: "10px" }}>
              {" "}
              {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}
              : {stat.base_stat}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={stat.base_stat}
              style={{ marginBottom: "10px" }}
            />
          </div>
        ))}
      </Box>
    </>
  );
};

export default PokemonStatesAndTabs;
