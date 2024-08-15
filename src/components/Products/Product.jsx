import React from 'react'
import { Card, CardContent, CardMedia, CardActions, IconButton, Typography } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
// import useStyles from './styles'

const Product = ({product}) => {

    // const classes = useStyles();

  return (
    <Card sx={{maxWidth: "100%"}}>
        <CardMedia image={product.image} title={product.name} sx={{
            height: 0, paddingTop: "56.25%"
        }}/>
        <CardContent sx={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
            <div  style={{display: "flex", justifyContent: "space-between"}}>
                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant="h5" >
                    {product.price}
                </Typography>
            </div>
            <Typography variant="body2" color="textSecondary">
                {product.description}
            </Typography>
        </CardContent>
        <CardActions disableSpacing  sx={{display: "flex", justifyContent: "flex-end"}}>
            <IconButton aria-label='Add to cart'>
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product