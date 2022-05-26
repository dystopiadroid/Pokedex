import { TOGGLE_FAVOURITE } from "./action"

const initialData = {
    favourites : []
}

const INITIAL_STATE = {
    favourites : []
}

const pokemonReducer = (state = initialData, action) => {
    switch(action.type){
        case TOGGLE_FAVOURITE:
            let pokemon = action.payload
            let pokemonFromFavList = state.favourites.find((favPokemon) => {
                return (favPokemon.id === pokemon.id)
            })

            console.log("pokemonFromFavList -->", pokemonFromFavList)
            console.log("pokemon -->", pokemon)

            return {
                ...state,
                favourites : pokemonFromFavList ? [
                    ...state.favourites.filter(
                        (favPokemon) => favPokemon.id !== pokemonFromFavList.id
                    )
                ] : [...state.favourites, pokemon]
            }

        case "initializeState":
            return INITIAL_STATE

        default:
            return state    

    }
}

export default pokemonReducer