import React, { useState } from "react";
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
import ProductDetail from "../productDetail";
import { Favorite, FitScreen, Share } from "@mui/icons-material";
function SingleProductDesktop({
  product,
  matches,
}: {
  product: IProduct;
  matches: boolean;
}) {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  const [open, setOpen] = useState(false)
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isFav={true} theme={theme}>
          <Favorite />
        </ProductFavButton>
        {showOptions && (
          <ProductAddToCard
            theme={theme}
            show={showOptions}
            variant="contained"
          >
            Add to Card
          </ProductAddToCard>
        )}
        <ProductActionsWrapper show={showOptions} theme={theme}>
          <Stack direction="column">
            <ProductActionButton>
              <Share color="primary" />
            </ProductActionButton>
            <ProductActionButton onClick={()=>setOpen(true)}>
              <FitScreen  color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductDetail open={open} setOpen={setOpen} product={product}/>
      <ProductMeta matches={matches} product={product} />
    </>
  );
}

export default SingleProductDesktop;
