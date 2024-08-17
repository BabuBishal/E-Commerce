import React from 'react'
import { Typography, AppBar, Toolbar, IconButton, Badge, MenuItem, Menu } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import logo from '../../assets/favicon.ico'

const drawerWidth = 0;

const Navbar = () => {
  return (
    <>
        <AppBar position='fixed'  color='inherit' sx={{boxShadow: "none", borderBottom: "1px solid rgba(0, 0, 0, 0.12", 
           
        }}>
            <Toolbar>
                <Typography variant='h6' color='inherit' sx={{
                    flexGrow: 1,
                    alignItems: "center",
                    display: "flex",
                    textDecoration: "none"

                }}>
                    <img src={logo} alt="B3" height='35px' />
                </Typography>
                <div style={{flexGrow: 1}}/>
                <div button>
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={2} color="secondary" >
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>

            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar