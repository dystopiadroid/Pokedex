import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from '../components/PokemonCard'
import { IMAGE_URL } from '../config'

const useStyles = makeStyles((theme) => ({
    mainGrid : {
        backgroundColor : "#594f4f",
        height : "100vh",
        marginTop : "60px",
        paddingTop : "10px",
        paddingLeft : "5px"
    },
    favGrids : {
        fontSize : "20px",
        color : "white",
        height : "100px",
        width : "100px"
    }
}))

export default function Favourites() {

    const styleClass = useStyles()
    const pokemonState = useSelector(state => state.favourites) 
    console.log("POKEMON STATE -->", pokemonState)

  return (
      <Box>
          <Grid container spacing={2} className={styleClass.mainGrid}>
                {pokemonState.map(
                    (pokemon, index) => (
                        <PokemonCard key={index++} pokemon={pokemon} image={`${IMAGE_URL}${pokemon.id}.png`}/>
                    )
                )}
          </Grid>
      </Box>
  )
}
