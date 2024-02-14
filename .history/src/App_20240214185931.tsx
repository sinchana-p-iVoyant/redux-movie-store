import { useState } from 'react'
// import './App.css'
import { useSelector, useDispatch, Provider } from 'react-redux'

const App = () => {
  const [movieTitle, setMovieTitle] = useState('')
  const dispatch = useDispatch()
  const movies = useSelector(state => state.movies)
  
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
          onChange={e => setMovieTitle(e.target.value)}
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>
      <div>
        <h2>Mu Movies</h2>
        <ul></ul>
      </div>
    </>
  )
}

export default App
