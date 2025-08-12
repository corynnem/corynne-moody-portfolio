import React from "react";
import { Box, Typography, Button } from "@mui/material";
import useStyles from "./styles";
import { ParticleBackground } from "./ui/Particles";

const RESUME_URL = "https://drive.google.com/file/d/10OPCj_eNCQS5opKsOtaKsewGcn31BUdY/view?usp=sharing"

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
        <Box className={classes.buttonContainer}>
          <Button className={classes.resumeButton} onClick={() => window.open(RESUME_URL, '_blank')}>Download Resume</Button>
          <Button className={classes.contactButton} href="#contact">Contact Me</Button>
        </Box>
      </Box>
      {/* Interactive background  */}
      <ParticleBackground />
    </Box>
  );
};
