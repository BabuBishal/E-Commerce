import React from 'react'
import { Grid } from '@mui/material'
import Product from './Product'


const Products = ({products}) => {
  return (
    <main sx={{flexGrow: 1, }}>
        <Grid container justifyContent="center" spacing={4}>
            { products.map((product) => 
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                    <Product product={product} />
                </Grid>
            ) }
        </Grid>
    </main>
  )
}

export default Products