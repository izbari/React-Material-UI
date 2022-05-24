import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box, letterSpacing, Theme } from "@mui/system";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  background: Colors.light_gray,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems:'center',
  maxWidth: 420,
  padding: "30px",
}));

export const BannerTitle = styled(Box)(({ theme }: { theme: Theme }) => ({
  lineHeight: 1.5,
  fontSize: "72px",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));

export const BannerDescription = styled(Typography)(
  ({ theme }: { theme: Theme }) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      lineHeight: 1.15,
      letterSpacing: 1.15,
      marginBottom: "1.5em",
    },
  })
);

export const BannerImage = styled("img")(
  ({ src, theme }: { src: string; theme: Theme }) => ({
    
    src: `url(${src})`,
    width: "500px",
    
    [theme.breakpoints.down("md")]: {
      width: "350px",
    },
    [theme.breakpoints.down("sm")]:{
      width: "320px",
      height:"300px"
    }
  })
);

export const BannerShopButton = styled(Button)(({ theme }: { theme: Theme }) => ({  
  width: "100%",
  background: Colors.secondary,
color:Colors.white,
fontWeight:"bold",
padding: "20px 0px",
fontSize: "16px",
"&:hover": {
  background: Colors.primary,
},
[theme.breakpoints.down("sm")]: {
padding:'10px 0px',
fontSize: "12px",
}
}))