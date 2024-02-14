import { useState } from 'react'
// import './App.css'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const [movieTitle, setMovieTitle] = useState('')
  const dispatch = useDispatch()
  
  // Action Creator
  const handleAddMovie = () => {
    dispatch({ type: 'ADD_MOVIE', payload: movieTitle })
    setMovieTitle('') // Reset back to Empty 
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
      </div>
    </>
  )
}

export default App
