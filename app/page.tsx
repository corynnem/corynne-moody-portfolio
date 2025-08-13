"use client";
import React from 'react'
import { HomeSection, About, Navbar, Projects, Contact } from '@/components';
import { Box, Divider } from "@mui/material";
import useStyles from "./styles";




export default function App() {
  const { classes } = useStyles();
  return (
    <Box className={classes.body}>
      <Box className={classes.navSection}>
        <Navbar />
      </Box>
      <HomeSection />
      <About />
      <Divider className={classes.divider} />
      <Projects />
      <Contact />
    </Box>
  );
}
