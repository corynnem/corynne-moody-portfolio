import { Box, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";

export const Projects = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.body} id="projects">
      <Typography>Projects</Typography>
    </Box>
  );
};