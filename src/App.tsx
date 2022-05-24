import React from "react";
import "./App.css";
import { Box, Button, Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { theme } from "./styles/theme";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Product from "./components/product";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import { UIContextProvider } from "./context/ui";
import Search from "./components/search";

function App() {
  React.useEffect(() => {
    document.title = "React Material UI - Home";
  });
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
       <UIContextProvider>
       <Appbar />
        <AppDrawer />
        <Search />
        <Banner />
        <Promotions />
        <Box>
          <Typography textAlign='center' p={4} variant="h4">Our Products</Typography>
        </Box>
        <Product />
       </UIContextProvider>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
