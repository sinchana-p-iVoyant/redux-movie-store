import { useState } from "react";
// import './App.css'
import { useSelector, useDispatch } from "react-redux";
import {Movie} from './store/index'
import {Card, CardComponent, CardActions, Button, Typography, CardContent} from '@mui/material'
import { Favorite, FavoriteBorder, AddShoppingCart, RemoveShoppingCart } from "@mui/icons-material";
import './App.css'

const App = () => {
  const [movieTitle, setMovieTitle] = useState("");

  // 🔥 a. To Trigger from UI.
  const dispatch = useDispatch();

  // 🔥 b. To update the UI, based on state updates in the store.
  
  // movies state (array)
  // const movies = useSelector(state => state.movies)
  // ------> return value: state.movies

  // Note:
  // The function passed to `useSelector` selects a slice of the state that we are interested in.
  // The function parameter specifies the `structure` of the Redux state object.
  // It's `type` annotated in TypeScript to ensure the type safety.
  // specifying the structure of the Redux state object using TypeScript type annotations enhances code quality, readability, and maintainability while providing additional safety checks and tooling support during development.

  const movies = useSelector(
    (state : {
      movies: { title: string; liked: boolean; inBasket: boolean }[];
    }) => state.movies
  );

  // const basket = useSelector((state) => state.basket);
  const basket = useSelector((state: { basket: string[] }) => state.basket);

  // const likedMovies = useSelector((state) => state.likedMovies);
  const likedMovies = useSelector((state: { likedMovies: string[] }) => state.likedMovies);


  // 4. Action Creator
  const handleAddMovie = () => {
    const newMovie = {
      title: movieTitle,
      inBasket: false,
      liked: false
    }
    dispatch({ type: "ADD_MOVIE", payload: newMovie });
    setMovieTitle(""); // Reset back to Empty String
  };

  const handleAddToBasket = (movie: string) => {
    dispatch({ type: "ADD_TO_BASKET", payload: movie });
  };
  const handleAddToLikedMovies = (movie: string) => {
    dispatch({ type: "ADD_TO_LIKED_MOVIE", payload: movie });
  };

  return (
    <div className="container">
      <div>
        <h1>My Movie List</h1>
      </div>
      <div className="add-movie">
        <input
          type="text"
          placeholder="Enter a movie name"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
        <button className="input-btn" onClick={handleAddMovie}>Add Movie</button>
      </div>
      <div>
        <h2>My Movies</h2>
        <ul className="movie-list">
          {movies.map((movie: Movie, index) => (
            <Card key={index} className="movie-card" style={{backgroundColor: "#D2B48C"}}>
              <CardContent>
                <Typography variant="h5" component='h2' style={{ fontWeight: 'bold', fontFamily: 'Poppins, sans-serif', margin }}>
                  {movie.title}
                </Typography>
              </CardContent>
                
              <CardActions className="card-actions">
                <Button 
                  style={{ color: '#844421', fontSize: '15px', fontWeight: 'bold', fontFamily: 'Poppins, sans-serif' }}
                  startIcon={movie.inBasket ? <RemoveShoppingCart /> : <AddShoppingCart />}
                  onClick={() => handleAddToBasket(movie.title)}>
                  {movie.inBasket ? "Remove From Basket" : "Add To Basket"}
                </Button>
                <Button 
                  style={{ color: '#844421', fontSize: '15px', fontWeight: 'bold', fontFamily: 'Poppins, sans-serif' }}
                  startIcon={movie.liked ? <Favorite /> : <FavoriteBorder />}
                  onClick={() => handleAddToLikedMovies(movie.title)}>
                  {movie.liked ? "Dislike" : "Like"}
                </Button>  
              </CardActions>  
              
            </Card>
          ))}
        </ul>
      </div>
      <div className="basket-container">
        <h2>My Basket {basket.length}</h2>
        <ul className="basket-container-list">
          {basket.map((basket, index) => (
            <li key={index}>{basket}</li>
          ))}
        </ul>
      </div>
      <div className="liked-container">
        <h2>My Liked Movies {likedMovies.length}</h2>
        <ul className="liked-container-list">
          {likedMovies.map((likedMovie, index) => (
            <li key={index}>{likedMovie}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

// 1. Save the new movie in the local state.
// 2. Add the new movie in local state to the Store.
// 3. Fetch the movies array, from the store

// 3. a. To display in - My Basket & My Liked Movies
