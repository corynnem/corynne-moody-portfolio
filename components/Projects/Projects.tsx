import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Box, IconButton, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useStyles } from "./styles";
import { projects } from "./helpers";
import { IndividualCard } from "./ui/IndividualCard";

export const Projects = () => {
  const [autoplayDelay, setAutoplayDelay] = useState(3200);
  const [selected, setSelected] = useState(0);
  const { classes, cx } = useStyles();
  const autoplay = Autoplay({
    delay: autoplayDelay,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "end",
      dragFree: false,
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [autoplay]
  );

  const onSelect = () => {
    if (!emblaApi) return;
    const selectedProject = emblaApi.selectedScrollSnap();
    emblaApi.on("select", () => selectedProject);
    emblaApi.on("reInit", onSelect);
    setSelected(selectedProject);

    return selectedProject;
  };

  const selectOnClick = (index: number) => {
    const selectedProject = onSelect() ?? 0;
    // TODO cm 8/18/25: When on the last index, if you select the first index it kicks you back, 
    // to the first and vice versa. This needs to be sorted
    // console.log(index, projects.length - 1, selectedProject, index === 0 && selectedProject === projects.length - 1)
    // if(index === 0 && selectedProject === projects.length - 1) {
    //   handlePrev()
    // }

    if (index > selectedProject) {
      handleNext();
    }
    if (index < selectedProject) {
      handlePrev();
    }
  };

  const handleNext = () => {
    onSelect();
    setAutoplayDelay(10000);
    emblaApi?.scrollNext();
  };

  const handlePrev = () => {
    onSelect();
    setAutoplayDelay(10000);
    emblaApi?.scrollPrev();
  };

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("reInit", onSelect);
  }, [emblaApi]);

  return (
    <Box className={classes.body} id="projects">
      <Box className={classes.projectsSection}>
        <Typography className={classes.title}>Projects</Typography>
        <Box ref={emblaRef} className={classes.viewport}>
          <Box className={classes.container}>
            {projects.map((project, i) => {
              return (
                <IndividualCard
                  project={project}
                  key={project?.id}
                  onSelect={selectOnClick}
                  index={i}
                />
              );
            })}
          </Box>
        </Box>

        {/* Controls */}
        <Box className={classes.controls}>
          <IconButton
            aria-label="Previous"
            onClick={handlePrev}
            className={classes.arrowBtn}
          >
            <ChevronLeft />
          </IconButton>

          <Box className={classes.dots}>
            {projects.map((_, i) => (
              <span
                key={i}
                className={cx(classes.dot, i === selected && "isActive")}
              />
            ))}
          </Box>

          <IconButton
            aria-label="Next"
            onClick={handleNext}
            className={classes.arrowBtn}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
