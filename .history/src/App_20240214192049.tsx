import { useState } from 'react'
// import './App.css'
import { useSelector, useDispatch, Provider } from 'react-redux'

const App = () => {
  const [movieTitle, setMovieTitle] = useState('')
  
  // 🔥 a. To Trigger from UI.
  const dispatch = useDispatch()
  
  // 🔥 b. To update the UI, based on state updates in the store.
  // movies state (array)
  const movies = useSelector(state => state.movies)
  const basket = useSelector(state => state.basket)
  const likedMovies = useSelector(state => state.likedMovies)
  
  // 4. Action Creator
  const handleAddMovie = () => {
    dispatch({ type: 'ADD_MOVIE', payload: movieTitle })
    setMovieTitle('') // Reset back to Empty String
  }

  

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
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>My Basket { basket.length }</h2>
        <ul>
          {basket.map((basket, index) => (
            <li key={index}>{basket}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>My Liked Movies { likedMovies.length }</h2>
        <ul>
          {likedMovies.map((likedMovies, index) => (
            <li key={index}>{likedMovies}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App
