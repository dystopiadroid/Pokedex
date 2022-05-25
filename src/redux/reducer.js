import { toggleFavourite, TOGGLE_FAVOURITE } from "./action"

const initialData = {
    favourites : []
}

const pokemonReducer = (state = initialData, action) => {
    switch(action.type){
        case TOGGLE_FAVOURITE:
            let pokemonFromFavList = ""
            let pokemon = action.payload
            pokemonFromFavList = state.favourites.find(
                (favPokemon) => favPokemon.id === pokemon.id 
            )

            return {
                ...state,
                favourites : pokemonFromFavList ? [
                    ...state.favourites.filter(
                        (favPokemon) => favPokemon.id != pokemon.id
                    )
                ] : [...state.favourites, pokemon]
            }

    }
}

export default pokemonReducer