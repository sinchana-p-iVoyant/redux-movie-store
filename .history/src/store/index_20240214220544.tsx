import { createStore } from "redux"; 

// InitialState
const initialState = {
    movies: [
      
  ],
  basket: [],
  likedMovies: []
}

// Reducers - Make Immutable Updates
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [...state.movies, action.payload]
      }
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.payload]
      }
    case 'ADD_TO_LIKED_MOVIE':
      return {
        ...state,
        likedMovies: [...state.likedMovies, action.payload]
      }
    default:
      return state
  }
}

// Store
const store = createStore(reducer)
export default store

// 1. State
// 2. Reducer
// 3. Store