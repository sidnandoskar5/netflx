import { createContext, useReducer } from "react";

export const AppContext = createContext()

const appReducer = (state, action) => {
    switch(action.type){
        case 'CHANGE_USER':
            return {...state, user: action.payload}
        case 'ADD_FAV_MOVIES':
            return {...state, favMovies: [...state['favMovies'],action.payload]}
        case 'REMOVE_FAV_MOVIES':
            const movieList = state['favMovies'].filter(movie => {
                return movie.title !== action.payload.title 
            })
            return {...state, favMovies: movieList}
        default:
            return state
    }
}

export const AppProvider = ({children}) => {

    const [ state, dispatch ] = useReducer(appReducer,{
        user: null,
        favMovies: []
    })

    const changeUser = (user) => {
        dispatch({type: 'CHANGE_USER', payload:user})
    }

    const addFavMovies = (movie) => {
        dispatch({type: 'ADD_FAV_MOVIES', payload:movie})
    }

    const removeFavMovies = (movie) => {
        dispatch({type: 'REMOVE_FAV_MOVIES', payload:movie})
    }

    const providerValue = {...state, changeUser, addFavMovies, removeFavMovies}

    return (
        <AppContext.Provider value={providerValue}>
        {children}
        </AppContext.Provider>
    )
}