import React from "react";
import { Box, Card, Chip, Stack, Typography, Button } from "@mui/material";
import { Launch, Warning , Code} from "@mui/icons-material";
import { useStyles } from "./styles";
import { Project } from "../helpers";

interface IndividualCardProps {
  project: Project;
  onSelect: (index: number) => void
  index: number
}




export const IndividualCard = ({ project, onSelect, index }: IndividualCardProps) => {
  const { classes, cx } = useStyles();
  const { id, image, name, description, tech, projectLink, codeLink, inProgress } = project ?? {};

  return (
    <Box
      key={id}
      className={`${classes.slide} embla__slide`}
      onClick={() => onSelect(index)}
    >
      <Card elevation={0} className={cx(classes.card, classes.hoverable)}>
        <Box
          className={classes.heroImage}
          sx={{ backgroundImage: `url(${image ?? ""})` }}
        />
        <Typography className={classes.titleChip} component="div">
          {name}
        </Typography>
        <Box className={classes.infoLayer} />
        <Box className={classes.infoWrap}>
          {/* <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            About this project
          </Typography> */}
          <Typography className={classes.desc}>{description}</Typography>

          <Stack direction="row" className={classes.chipRow}>
            {tech.map((t) => (
              <Chip key={t} size="small" label={t} className={classes.chip} />
            ))}
          </Stack>

          <Stack direction="row" className={classes.navToProject}>
            {projectLink && (
              <Button
                variant="outlined"
                size="small"
                endIcon={<Launch fontSize="small" />}
                className={classes.ghostBtn}
                href={projectLink}
                target="_blank"
              >
                View project
              </Button>
            )}
            {codeLink && (
              <Button
                variant="outlined"
                size="small"
                endIcon={<Code fontSize="small" />}
                className={classes.ghostBtn}
                href={codeLink}
                target="_blank"
              >
                View Code
              </Button>
            )}
              {inProgress && (
              <Button
                variant="outlined"
                size="small"
                endIcon={<Warning fontSize="small" sx={{color: 'white'}} />}
                className={classes.ghostBtn}
               >
                Under Construction
               </Button>
            )}
          </Stack>
        </Box>
      </Card>
    </Box>
  );
};
