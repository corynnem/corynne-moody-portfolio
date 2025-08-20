import { Box, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import { corynne,  } from "@/public/images";
import { useMediaQuery } from "@mui/material";
import { theme } from "@/theme";
import Image from "next/image";

export const About = () => {
  const isBelowSm = useMediaQuery(theme.breakpoints.down('sm'))
  const { classes } = useStyles();
  return (
    <Box className={classes.body} id="about">

      <Box className={classes.bodyText}>
        <Typography className={classes.title}>About</Typography>
        <Typography className={classes.subtitle}>
          I’m a front-end focused developer with a deep appreciation for clean,
          scalable, and user-centered design. I specialize in building engaging
          interfaces with React, Next.js, TypeScript, and Material UI, while
          also working confidently with backend services using GraphQL and
          MongoDB. My approach thrives in collaborative spaces where
          problem-solving, curiosity, and teamwork are part of the daily rhythm.
          <br />
          <br />
          Outside of code, I’m equally driven by creativity. I’m a drummer in a
          band, and when I’m not on stage, I’m often drawing, painting, making
          clothes, or teaching music. These creative outlets fuel the same
          energy I bring to development—blending structure and imagination to
          make ideas come alive.
        </Typography>
      </Box>
      {!isBelowSm && (
        <Box>
          <Image
            height={400}
            width={400}
            className={classes.headshot}
            alt="A girl in a blue shirt and tan pants standing in front of pink fluffy flowers"
            src={corynne.src}
          />
        </Box>
      )}
    </Box>
  );
};
