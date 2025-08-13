"use client";
import React from 'react'
import { HomeSection } from "@/components/Home";
import { Box, Divider } from "@mui/material";
import useStyles from "./styles";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'



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
