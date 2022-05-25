export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE"

export const toggleFavourite = (pokemon) => {

    return (dispatch) => {

        dispatch({
            type : TOGGLE_FAVOURITE,
            payload : pokemon
        })
    }
}

export const clearState = () => {

    return (dispatch) => {

        dispatch({
            type : "initializeState"
        })
    }
}