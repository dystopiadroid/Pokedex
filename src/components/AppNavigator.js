import { AppBar, makeStyles, Toolbar, Typography} from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    AppBar : {
        backgroundColor : "black",
    },
    link : {
        textDecoration : "none",
    },
    favLink : {
        marginLeft : "30px"
    },
    navTitle : {
        color : "white",
        cursor : "pointer"
    }
}))

export default function AppNavigator() {

    const classes = useStyles()

  return (
        <AppBar className={classes.AppBar} position='fixed'>
            <Toolbar >
                <Link to="/" className={classes.link}>
                    <Typography className={classes.navTitle}>Pokedex</Typography> 
                </Link>
                <Link to="/favourites" className={`${classes.link} ${classes.favLink}`}>
                    <Typography className={classes.navTitle}>Favourites</Typography> 
                </Link>
            </Toolbar>
        </AppBar>
  )
}
