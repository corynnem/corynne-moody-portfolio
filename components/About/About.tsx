import { Box, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";

export const About = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.body} id="about">
        <Box className={classes.bodyText}>
        <Typography className={classes.title}>About</Typography>
      <Typography className={classes.subtitle}>
        Front-end focused developer with a deep appreciation for clean,
        scalable, and user-focused development. Specialized in frontend
        development utilizing React, Next.js, Typescript, and Material UI, and
        proficient in backend services using GraphQL and MongoDB - my main focus
        is maintaining a curious and collaborative environment. I work best in
        environments where problem-solving, learning, and teamwork are part of
        the daily rhythm.
      </Typography>
        </Box>
      
    </Box>
  );
};
