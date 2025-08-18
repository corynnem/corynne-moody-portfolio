import { makeStyles } from "tss-react/mui";
import { alpha, darken } from "@mui/material/styles";

export const useStyles = makeStyles()((theme) => ({
  slide: {
    flex: "0 0 auto",
    width: "100%",
    [theme.breakpoints.up("sm")]: { width: "70%" },
    [theme.breakpoints.up("md")]: { width: "48%" },
    [theme.breakpoints.up("lg")]: { width: "38%" },
  },
  /* bigger cards; always fixed width to let Embla snap correctly */
  card: {
    maxWidth: 500,
    height: 420,
    borderRadius: 28,
    overflow: "hidden",
    position: "relative",
    background: theme.palette.background.default,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.35)}`,
    boxShadow: `0 18px 40px -16px ${alpha(theme.palette.secondary.main, 0.35)}`,
    transition: "transform 220ms ease, box-shadow 220ms ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: `0 22px 46px -16px ${alpha(
        theme.palette.secondary.main,
        0.45
      )}`,
    },
  },
  hoverable: {
    "&:hover $infoLayer": { opacity: 0 },
    "&:hover $infoWrap": { transform: "translateY(-6px)" },
  },
  infoLayer: {
    height: '400px',
    position: "absolute",
    inset: 0,
    background: `linear-gradient(180deg, ${alpha(
      theme.palette.background.default,
      0
    )} 0%, ${alpha(theme.palette.background.default, 0.35)} 20%, ${alpha(
      theme.palette.background.default,
      0.75
    )} 85%, ${theme.palette.background.default})`,
    transition: "opacity 240ms ease",
    pointerEvents: "none",
  },
  heroImage: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "saturate(1.05) ",
    opacity: '50%',
  },

  titleChip: {
    position: "absolute",
    top: 16,
    left: 16,
    padding: theme.spacing(1, 2),
    borderRadius: 999,
    backdropFilter: "blur(6px)",
    backgroundColor: alpha(theme.palette.background.paper, 0.65),
    border: `1px solid ${alpha(theme.palette.primary.main, 0.35)}`,
    color: darken(theme.palette.text.primary, 0.02),
    [theme.breakpoints.down('sm')]: {

      padding: theme.spacing(1, 2),
      textAlign: 'center',
      maxWidth: '80%'
    }
  },
  infoWrap: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: theme.spacing(2),
    color:  theme.palette.background.paper,
    background: `linear-gradient(180deg, ${alpha(
      theme.palette.background.default,
      0
    )} 0%, ${alpha(theme.palette.background.default, 0.85)} 20%, ${
      theme.palette.background.default
    } 100%)`,
    transform: "translateY(0)",
    transition: "transform 240ms ease",
  },

  desc: {
    marginTop: theme.spacing(0.5),
    lineHeight: 1.35,
    color: theme.palette.background.paper,
  },

  chipRow: {
    marginTop: theme.spacing(1.5),
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(1),
  },
  chip: {
    backgroundColor: alpha(theme.palette.secondary.main, 0.18),
    color: theme.palette.background.paper,
    fontWeight: 700,
    borderRadius: 999,
    "& .MuiChip-label": { paddingInline: theme.spacing(1.5) },
  },
  navToProject: {
    marginTop: theme.spacing(1.5),
    gap: theme.spacing(1),
  },
  ghostBtn: {
    color: theme.palette.background.paper,
    borderColor: alpha( theme.palette.background.paper, 0.6),
    textTransform: "none",
    fontWeight: 700,
    borderRadius: 999,
    "&:hover": {
      borderColor: theme.palette.text.primary,
      backgroundColor: alpha(theme.palette.text.primary, 0.08),
    },
  },

}));