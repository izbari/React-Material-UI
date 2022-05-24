import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerTitle,
  BannerImage,
  BannerShopButton,
} from "../../styles/banner";

function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerImage src="/images/banner/banner.png" theme={theme} />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle>New Bags</BannerTitle>
        <BannerDescription variant="h6">
          lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </BannerDescription>
        <BannerShopButton  color="primary">Shop Now</BannerShopButton>
      </BannerContent>
      
    </BannerContainer>
  );
}

export default Banner;
