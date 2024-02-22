// import { createStore } from "redux"; 
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit"; 

// export type Movie = {
//     title: string,
//     inBasket: boolean,
//     liked: boolean
// }

// export type State = {
//     movies: Movie[],
//     basket: string[],
//     likedMovies: string[]
// }

export interface Movie {
  title: string,
  inBasket: boolean,
  liked: boolean
}

export interface MovieState {
  movies: Movie[],
  basket: string[],
  likedMovies: string[]
}

// type Action =
//   | { type: "ADD_MOVIE"; payload: Movie } |
//     { type: 'ADD_TO_BASKET', payload: string } |
//     { type: "ADD_TO_LIKED_MOVIE", payload: string };

// InitialState
const initialState: MovieState = {
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

// const reducer = (state: State = initialState, action: Action): State => {
//   switch (action.type) {
//     case 'ADD_MOVIE':
//       return {
//         ...state,
//         movies: [...state.movies, action.payload]
//       }
//     case 'ADD_TO_BASKET':
//       return {
//         ...state,
//           movies: state.movies.map(movie => movie.title === action.payload ? {...movie, inBasket: !movie.inBasket } : movie),
//         basket: state.basket.includes(action.payload) ? state.basket.filter(movie => movie !== action.payload) : [...state.basket, action.payload]
//       }
//     case 'ADD_TO_LIKED_MOVIE':
//       return {
//         ...state,
//         movies: state.movies.map(movie => movie.title === action.payload ? {...movie, liked: !movie.liked} : movie) ,
//         likedMovies: state.likedMovies.includes(action.payload) ? state.likedMovies.filter(movie => movie !== action.payload) :  [...state.likedMovies, action.payload]
//       }
//     default:
//       return state
//   }
// }

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      state.movies.push(action.payload)
    },
    addToBasket: (state, action: PayloadAction<string>) => {
      state.movies = state.movies.map(movie => {
        if(movie.title === action.payload) {
          return { ...movie, inBasket: !movie.inBasket }
        }
        return movie
      })
        if(state.basket.includes(action.payload)) 
    }
  }
})

// (state: State = initialState, action: Action): State => {
//   switch (action.type) {
//     case 'ADD_MOVIE':
//       return {
//         ...state,
//         movies: [...state.movies, action.payload]
//       }
//     case 'ADD_TO_BASKET':
//       return {
//         ...state,
//           movies: state.movies.map(movie => movie.title === action.payload ? {...movie, inBasket: !movie.inBasket } : movie),
//         basket: state.basket.includes(action.payload) ? state.basket.filter(movie => movie !== action.payload) : [...state.basket, action.payload]
//       }
//     case 'ADD_TO_LIKED_MOVIE':
//       return {
//         ...state,
//         movies: state.movies.map(movie => movie.title === action.payload ? {...movie, liked: !movie.liked} : movie) ,
//         likedMovies: state.likedMovies.includes(action.payload) ? state.likedMovies.filter(movie => movie !== action.payload) :  [...state.likedMovies, action.payload]
//       }
//     default:
//       return state
//   }
// }

// Store
// const store = createStore(reducer)
const store = configureStore({reducer})

export default store

// 1. State
// 2. Reducer
// 3. Store