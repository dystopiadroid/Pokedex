import { Box, Button, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core'
import { FavoriteRounded } from '@material-ui/icons'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { POKEMON_API_URL } from '../config'

const useStyles = makeStyles((theme) => ({
    mainBox : {
        marginTop : "4.5rem",
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        backgroundColor : "black",
        height : "88vh",
        borderRadius : "10px",
        padding : "10px 0px"
    },
    pokeName : {
        textTransform : "uppercase",
        fontFamily : "Comic Sans",
        [theme.breakpoints.down('xs')] : {
            display : "none"
        },
        [theme.breakpoints.up('xs')] : {
            fontSize : "65px"
        },
        color : "white",
        fontWeight : "lighter",
        marginBottom : "15px"
    },
    pokeImg : {
        height : "150px",
        width : "150px",
        marginBottom : "170px"
    },
    seperator : {
        color : "white",
        width : "98.8%",
        height : "3px",
        backgroundColor : "gray",
        marginBottom : "50px"
    },
    like : {
        color : "white",
        fontSize : "40px",
        cursor : "pointer",
        "&:hover" : {
            color : "red"
        },
        marginLeft : "15px"
    }
}))

export default function PokemonDetails() {

    const {id} = useParams()
    const styleClass = useStyles()
    const [pokeDetails, setPokeDetails] = useState({})

    useEffect(() => {
        async function getPokemonDetails(){
            const response = await axios.get(POKEMON_API_URL + "/" + id )
            if(response != null){
                setPokeDetails({
                    pokemon : response.data
                })
            }
            else{
                console.log("Response in null")
            }
        }
        getPokemonDetails()
    }, [])

            const {pokemon} = pokeDetails
            let name = ""
            let img = ""
            if(pokemon){
                name = pokemon.name
                img = pokemon.sprites.front_default
            }

   return (
          <Box >
            <Box className={styleClass.mainBox}>
              <Typography className={styleClass.pokeName}>{name} </Typography>
              <img src={img} className={styleClass.pokeImg}/>
              <hr className={styleClass.seperator}/>
                <Grid container spacing={2}>
                    <Grid item md={1}>
                        <Button>
                            <FavoriteRounded className={styleClass.like}/>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
          </Box>
  )
}
