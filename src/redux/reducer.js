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
                return (favPokemon === pokemon)
            })

            console.log(pokemonFromFavList)

            return {
                ...state,
                favourites : pokemonFromFavList ? [
                    ...state.favourites.filter(
                        (favPokemon) => favPokemon !== pokemonFromFavList
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