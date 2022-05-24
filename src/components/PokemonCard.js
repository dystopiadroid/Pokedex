import { Card, Grid, CardContent, Typography, CardMedia, makeStyles} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    CardContent : {
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        justifyContent : "center"
    },
    CardMedia : {
        width : "130px",
        height : "110px",
    },
    Card : {
        backgroundColor : "black",
        cursor : "pointer",
        "&:hover" : {
            backgroundColor : "#3a3a3a"
        }
    },
    PokemonName : {
        color : "white"
    }
}))

export default function PokemonCard(props) {

    const styleClass = useStyles()
    const {pokemon, image} = props
    const {id, name} = pokemon

  return (
      <Grid item xs={12} sm={3} md={2}>
        <Card className={styleClass.Card}>
            <CardContent className={styleClass.CardContent}>
                <CardMedia image={image} className={styleClass.CardMedia}></CardMedia>
                <Typography className={styleClass.PokemonName}>
                    {name}
                </Typography>
            </CardContent>
        </Card>
      </Grid>
  )
}
