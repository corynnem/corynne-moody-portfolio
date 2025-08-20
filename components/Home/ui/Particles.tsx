import React from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import { useMediaQuery } from "@mui/material";
import { theme } from "@/theme";
import useStyles from "../styles";

export const ParticleBackground = () => {
    const { classes }= useStyles()
    const isBelowSm = useMediaQuery(theme.breakpoints.down('sm'))
  // const particlesLoaded = useCallback(
  //   async (container: Container | undefined) => {
  //      await console.log(container);
  //   },
  //   []
  // );

  const particlesInit = useCallback(async (engine: Engine) => {
    // NOTE FROM tsParticles DEV:
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      // loaded={particlesLoaded}
      className={classes.particles}
      options={{
        background: {
          color: {
            value: "#4F000B",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: isBelowSm ? 100 : 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#FF9B54",
          },
          links: {
            color: "#FF9B54",
            distance: 0,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: isBelowSm ? 250 : 300,
            },
            value: 80,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "triangle",
          },
          size: {
            value: { min: 3, max: 7 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};