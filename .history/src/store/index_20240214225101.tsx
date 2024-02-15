import { createStore } from "redux"; 

// InitialState
const initialState = {
    movies: [
      {title: 'The GodFather', inBasket: false, liked: false},
      {title: 'The Righteous', inBasket: false, liked: false},
      {title: 'The Spiderman', inBasket: false, liked: false},
      {title: 'The Professional', inBasket: false, liked: false},
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
        likedMovies: state.likedMovies.includes(action.payload) ? state.likedMovies.filer(movie => movie !=== ) :  [...state.likedMovies, action.payload]
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