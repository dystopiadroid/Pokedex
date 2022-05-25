import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core'
import { FavoriteRounded } from '@material-ui/icons'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { POKEMON_API_URL } from '../config'
import { toggleFavourite } from '../redux/action'

const useStyles = makeStyles((theme) => ({
    mainContainer : {
        display : "flex",
        flexDirection : "column",
        marginTop : "9vh",
        backgroundColor : "black",
        borderRadius : "10px",
        height : "90vh"
    },
    mainBox : {
        display : "flex",
        flex : "0.55",
        flexDirection : "column",
        alignItems : "center",
        // height : "88vh",
        padding : "10px 0px"
    },
    properties : {
        display : "flex",
        flex : "0.45",
        alignItems : "center",
        // justifyContent : "center",
        // width : "107vw"
        // marginLeft : "40px"
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
        // marginBottom : "170px"
    },
    seperator : {
        color : "white",
        width : "98.8%",
        height : "3px",
        backgroundColor : "gray",
        position : "absolute",
        top : "460px"
        // marginBottom : "50px"
    },
    like : {
        color : "white",
        fontSize : "45px",
        cursor : "pointer",
        "&:hover" : {
            color : "red"
        },
        // marginLeft : "15px",
        marginBottom : "1vh"
    },
    responsiveLike : {
        color : "white",
        fontSize : "40px",
        [theme.breakpoints.up("xs")] : {
            display : "none"
        },
        [theme.breakpoints.down("xs")] : {
            display : "block"
        }
    },
    likeContainer : {
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        [theme.breakpoints.down("sm")] : {
            display : "none"
        },
        [theme.breakpoints.up("sm")] : {
            display : "flex"
        }
    },
    attributes : {
        display : "flex",
        flexDirection : "column",
        color : "white",
        justifyContent : "center",
        alignItems : "center"
    }
}))

export default function PokemonDetails(props) {

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
            let weight = ""
            let height = ""
            let types = []
            let abilities = []
            if(pokemon){
                name = pokemon.name
                img = pokemon.sprites.front_default
                weight = pokemon.weight
                height = pokemon.height
                pokemon.types.forEach((type) => {
                    types.push(type.type.name)
                })
                pokemon.abilities.forEach((ability) => {
                    abilities.push(ability.ability.name)
                })
            }

   return (
          <Box className={styleClass.mainContainer} >
            <Box className={styleClass.mainBox} >
              <Typography className={styleClass.pokeName}>{name} </Typography>
              <img src={img} className={styleClass.pokeImg}/>
                    <Button>
                        <FavoriteRounded className={styleClass.responsiveLike}/>
                    </Button>
              <hr className={styleClass.seperator}/>
            </Box>
            <Grid container spacing={1} className={styleClass.properties}>
                <Grid item md={2} sm={2} xs={6} className={styleClass.likeContainer}>
                    <Button>
                        <FavoriteRounded className={styleClass.like}/>
                    </Button>
                </Grid>
                <Grid item md={2} sm={2} xs={12} className={styleClass.attributes}>
                    <Typography variant='h5'>Weight</Typography>
                    <Typography>{`${weight} kg`}</Typography>
                </Grid>
                 <Grid item md={2} sm={2} xs={6} className={styleClass.attributes}>
                    <Typography variant='h5'>Height</Typography>
                    <Typography>{`${height} m`}</Typography>
                </Grid>
                  <Grid item md={2} sm={2} xs={6} className={styleClass.attributes}>
                    <Typography variant='h5'>Types</Typography>
                    {types.map((type) => {
                        return (<Typography>{type}</Typography>)
                    })}
                </Grid>
                   <Grid item md={2} sm={2} xs={6} className={styleClass.attributes}>
                    <Typography variant='h5'>Ability 1</Typography>
                    <Typography>{abilities[0]}</Typography>
                </Grid>
                    <Grid item md={2} sm={2} xs={6} className={styleClass.attributes}>
                    <Typography variant='h5'>Ability 2</Typography>
                    {abilities[1] ? (
                    <Typography>{abilities[1]}</Typography>
                    ) :
                    <Typography>none</Typography>
                    }

                </Grid>
     
            </Grid>
          </Box>
  )
}

const mapDispatchToProps = (dispatch) => ({
    toggleFavourite: (pokemon) => dispatch(toggleFavourite(pokemon))
})

const mapStateToProps = (state) => ({
    favourites : state.favourites
})
