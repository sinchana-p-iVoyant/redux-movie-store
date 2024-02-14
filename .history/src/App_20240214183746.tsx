import { useState } from 'react'
// import './App.css'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const [movieTitle, setMovieTitle] = useState('')
  const dispatch = useDispatch()
  
  const handleAddMovie = () => {
    dispatch({type: 'ADD'})
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
