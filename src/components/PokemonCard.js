import { Card, Grid, CardContent, Typography, CardMedia, makeStyles} from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

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
        padding : "20px 5px",
        "&:hover" : {
            backgroundColor : "#3a3a3a",
            boxShadow : "2px 6px"
        }
    },
    PokemonName : {
        color : "white"
    },
    Link : {
        textDecoration : "none"
    }
}))

export default function PokemonCard(props) {

    const styleClass = useStyles()
    const {pokemon, image} = props
    const {id, name} = pokemon

  return (
      <Grid item xs={12} sm={3} md={2}>
        <Link to={`/pokemon/${id}`} className={styleClass.Link}>
            <Card className={styleClass.Card}>
                <CardContent className={styleClass.CardContent}>
                    <CardMedia image={image} className={styleClass.CardMedia}></CardMedia>
                    <Typography className={styleClass.PokemonName}>
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
      </Grid>
  )
}
