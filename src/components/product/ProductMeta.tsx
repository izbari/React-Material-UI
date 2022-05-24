import { Typography } from '@mui/material'
import React from 'react'
import { ProductMetaWrapper } from '../../styles/Products'
import { IProduct } from './index'

function ProductMeta({product,matches}:{product:IProduct,matches:boolean}) {
  return (
    <ProductMetaWrapper>
        <Typography variant={matches ? 'h6' : 'h5'} lineHeight={2} >{product.name}</Typography>
        <Typography variant={matches ? 'caption' : 'body1'}>{product.price}</Typography>
    </ProductMetaWrapper>


    )
}

export default ProductMeta