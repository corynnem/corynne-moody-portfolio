"use client";
import { HomeSection } from "@/components/Home";
import { Box } from "@mui/material";
import useStyles from "./styles";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";

export default function App() {
  const { classes } = useStyles();

  return (
    <Box className={classes.body}>
      <Box className={classes.navSection}>
        <Navbar />
      </Box>
      <HomeSection />
      <About/>
    </Box>
  );
}
