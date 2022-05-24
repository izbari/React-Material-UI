import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { products } from "../../data";
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";
export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}
function Product() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const renderProduct = products.map((product, index) => (
    <Grid
      item
      key={product.id}
      display="flex"
      xs={2}
      sm={4}
      md={4}
      flexDirection="column"
      alignItems="center"
    >
     {matches ?  <SingleProduct matches={matches} product={product} /> :  <SingleProductDesktop matches={matches} product={product} />}
    </Grid>
  ));
  return (
    <Container>
      <Grid
      columns={{xs:4,sm:8,md:12}}
        spacing={{xs:2,md:4}}
        container
        justifyContent="center"
        sx={{ margin: "20px 4px 10px 4px" }}
      >
        {renderProduct}
      </Grid>
    </Container>
  );
}

export default Product;
