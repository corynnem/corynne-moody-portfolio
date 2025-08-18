import React, { useState } from "react";
import { Box, Button } from "@mui/material";

import { useMediaQuery } from "@mui/material";
import useStyles from "./styles";
import { navItems, NavItems } from "./helpers";
import { theme } from "@/theme";

export const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState(NavItems.Home);
  const { classes } = useStyles();
  const isBelowSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className={`${classes.nav} `}>
      {navItems.map((navItem) => {
        const { label, icon, link, key } = navItem;
        const isActiveNavItem = activeNavItem === key;
        return (
          <Button
            className={classes.navButton}
            disableRipple
            href={link}
            key={key}
            variant={isActiveNavItem ? "contained" : "text"}
            sx={
              isActiveNavItem
                ? { backgroundColor: "#4F000B" }
                : { backgroundColor: "transparent" }
            }
            onClick={() => setActiveNavItem(key)}
          >
            {isBelowSm ? icon : label}
          </Button>
        );
      })}
    </Box>
  );
};
