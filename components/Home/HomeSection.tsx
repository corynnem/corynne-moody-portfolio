import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./styles";
import { ParticleBackground } from "./ui/Particles";

export const HomeSection = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.body} id="home">
      {/* Home Page Section */}
      <Box className={classes.homeSection}>
        <Typography className={classes.title}>
          Hello, I&apos;m Corynne.
        </Typography>
        <Typography className={classes.subtitle}>
          A Creative, Passionate, Software Engineer
        </Typography>
      </Box>
      {/* Interactive background  */}
      <ParticleBackground />
    </Box>
  );
};
