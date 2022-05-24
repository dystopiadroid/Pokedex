import { Box, CircularProgress, Grid, makeStyles } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import { IMAGE_URL, POKEMON_API_URL } from '../config'

const useStyles = makeStyles((theme) => ({
  loading : {
    display : "block",
    margin : "auto",
    position : "relative",
    top : "50vh"
  },
  pokeGrid : {
    backgroundColor : "#594f4f",
    marginTop : "4rem",
  }
}))

export default function Pokedex() {

    const styleClass = useStyles()
    const [pokemonList, setPokemonList] = useState(null)

    useEffect(() => {
      async function getPokemons(){
      const pokemons = await axios.get(POKEMON_API_URL + "?limit=100")

        if(pokemons.data != null){
          const {results} = pokemons.data
          let newPokemonData = []
          results.forEach((pokemon, index) => {
            index++
            let pokemonObject = {
              id : index,
              name : pokemon.name,
              imgUrl : IMAGE_URL + index + ".png"
            }
            newPokemonData.push(pokemonObject)
          })
            setPokemonList(newPokemonData)
        }

        else{
          console.log("Error in retriving the data")
        }
    }
      setTimeout(() => {
        getPokemons()
      }, 1000);
    }, [])

  return (
    <Box>
      {pokemonList ?
        <Grid container spacing={3} className={styleClass.pokeGrid}>
          {pokemonList.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} image={pokemon.imgUrl}/>
          ))}
        </Grid>
      : <CircularProgress className={styleClass.loading}/>}
    </Box>
  )
}
