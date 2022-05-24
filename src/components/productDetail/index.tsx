import { Close } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { IProduct } from "../../components/product";
import { Product, ProductImage } from "../../styles/Products";
import { Colors } from "../../styles/theme";
import IncDec from "../ui";

function ProductDetail({
  product,
  open,
  setOpen,
}: {
  product: IProduct;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const ProductDetailWrapper = styled(Box)(({ theme }) => ({
    display: "flex",

    padding: theme.spacing(2),
  }));
  const ProductDetailsInfoWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    lineHeight: 1.5,
  }));
  function SlideTransition(props: any) {
    return <Slide direction="down" {...props} />;
  }

  if (!open) return null;

  return (
    <Dialog TransitionComponent={SlideTransition} open={open} fullScreen>
      <DialogTitle sx={{ background: Colors.secondary }}>
        {product.name}
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            sx={{
              borderRadius: 0,
              background: Colors.secondary,
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
            onClick={() => setOpen(false)}
          >
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <ProductDetailWrapper flexDirection={matches ? "column" : "row"}>
          <Product sx={{ mr: 4 }}>
            <ProductImage src={product.image} />
          </Product>
          <ProductDetailsInfoWrapper>
            <Typography variant="subtitle1">Sku 123</Typography>
            <Typography variant="subtitle1">
              Availability : 5 in stock
            </Typography>
            <Typography variant="subtitle1">Sku 123</Typography>
            <Typography sx={{ lineHeight: 2 }} variant="h4">
              {product.name}
            </Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <IncDec />
          </ProductDetailsInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDetail;
