import { useState } from "react";
// import './App.css'
import { useSelector, useDispatch, Provider } from "react-redux";

const App = () => {
  const [movieTitle, setMovieTitle] = useState("");

  // 🔥 a. To Trigger from UI.
  const dispatch = useDispatch();

  // 🔥 b. To update the UI, based on state updates in the store.
  
  // movies state (array)
  // const movies = useSelector(state => state.movies)
  // ---> return value: state.movies

  // Note:
  // The function passed to `useSelector` selects a slice of the state that we are interested in.
  // The function parameter specifies the `structure` of the Redux state object.
  // It's `type` annotated in TypeScript to ensure the type safety.
  // specifying the structure of the Redux state object using TypeScript type annotations enhances code quality, readability, and maintainability while providing additional safety checks and tooling support during development.

  const movies = useSelector(
    (state: {
      movies: { title: string; liked: boolean; isBasket: boolean }[];
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

  const handleAddToBasket = (movie) => {
    dispatch({ type: "ADD_TO_BASKET", payload: movie.title });
  };
  const handleAddToLikedMovies = (movie) => {
    dispatch({ type: "ADD_TO_LIKED_MOVIE", payload: movie.title });
  };

  return (
    <>
      <div>
        <h1>My Movie List</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter a movie name"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>
      <div>
        <h2>My Movies</h2>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              {movie.title}
              <button onClick={() => handleAddToBasket(movie)}>
                { movie.isBasket ? 'Remove From Basket' : 'Add To Basket' }
              </button>
              <button onClick={() => handleAddToLikedMovies(movie)}>
                {movie.liked ? "Dislike" : "Like"}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>My Basket {basket.length}</h2>
        <ul>
          {basket.map((basket, index) => (
            <li key={index}>{basket}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>My Liked Movies {likedMovies.length}</h2>
        <ul>
          {likedMovies.map((likedMovie, index) => (
            <li key={index}>{likedMovie}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;

// 1. Save the new movie in the local state.
// 2. Add the new movie in local state to the Store.
// 3. Fetch the movies array, from the store

// 3. a. To display in - My Basket & My Liked Movies
