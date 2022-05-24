import { Facebook, Instagram, Send, Twitter } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { FooterTitle, SubscribeTf } from "../../styles/footer";
import { Colors } from "../../styles/theme";

function Footer() {
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: "12px", md: "14px" },
      }}
    >
      <Grid container spacing={10} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About Us</FooterTitle>
          <Typography variant="subtitle2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            quisquam ut ipsa, quis culpa itaque rem tempore minima dicta dolorum
            repellat impedit libero porro minus ullam inventore voluptate magnam
            cupiditate?
          </Typography>
          <Box sx={{ mt: 4, color: Colors.dove_gray }}>
            <Instagram sx={{ mr: 1 }} />
            <Twitter sx={{ mr: 1 }} />
            <Facebook />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="subtitle2">
                Contact Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="subtitle2">
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="subtitle2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="subtitle2">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">My Account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="subtitle2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="subtitle2">
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="subtitle2">
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="subtitle2">
                Wishlist
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">Newsletter</FooterTitle>
          <Stack>
            <SubscribeTf
              color="primary"
              label="Email address"
              variant="standard"
            />
            <Button
              sx={{
                mt: 4,
                mb: 4,
              }}
              startIcon={<Send />}
              variant="contained"
              color="primary"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
