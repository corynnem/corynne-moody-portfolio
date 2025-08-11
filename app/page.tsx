"use client";
import { HomeSection } from "@/components/Home";
import { Box } from "@mui/material";
import useStyles from "./styles";

export default function App() {
  const { classes } = useStyles();

  return (
    <Box className={classes.body}>
      <HomeSection />
    </Box>
  );
}
