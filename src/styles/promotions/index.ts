import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box, letterSpacing, Theme } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/montez";
export const PromotionsContainer = styled(Box)(
  ({ theme }: { theme: Theme }) => ({
    [theme.breakpoints.up("md")]: {
      padding: "40px 0px 40px 0px",
    },

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0px 20px 0px",
    overflow: "hidden",
    background: Colors.secondary,
  })
);

export const MessageText = styled(Typography)(({ theme }) => ({
  fontFamily: "'Montez', 'cursive'",
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
  color: Colors.white,
  fontSize: "1.5rem",
}));
