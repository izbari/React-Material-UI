import React from "react";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCard,
  ProductFavButton,
  ProductImage,
} from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import { IProduct } from "./index";
import { theme } from "../../styles/theme";
import { Stack } from "@mui/material";
import { Favorite, FitScreen, Share } from "@mui/icons-material";
import ProductDetail from "../productDetail";
function SingleProduct({
  product,
  matches,
}: {
  product: IProduct;
  matches: boolean;
}) {
  const [open, setOpen] = React.useState(false)
  return (
   <>
    <Product>
      <ProductImage src={product.image}></ProductImage>
      <ProductMeta matches={matches} product={product} />
      <ProductActionsWrapper show={true} theme={theme}>
        <Stack direction="row">
          <ProductFavButton isFav={true} theme={theme}>
            <Favorite />
          </ProductFavButton>
          <ProductActionButton >
            <Share color='primary'/>
          </ProductActionButton>
          <ProductActionButton onClick={()=> setOpen(true)}>
            <FitScreen color='primary'/>
          </ProductActionButton>
        </Stack>
      </ProductActionsWrapper>
      <ProductAddToCard show={true} theme={theme}variant="contained">Add to Card</ProductAddToCard>
      <ProductDetail open={open} setOpen={setOpen} product={product}/>
    </Product> 
   </>
  );
}

export default SingleProduct;
