import { useState } from 'react'
// import './App.css'
import { useSelector, useDispatch, Provider } from 'react-redux'
import {store} from './store/index';

const App = () => {
  const [movieTitle, setMovieTitle] = useState('')
  const dispatch = useDispatch()
  
  // Action Creator
  const handleAddMovie = () => {
    dispatch({ type: 'ADD_MOVIE', payload: movieTitle })
    setMovieTitle('') // Reset back to Empty String
  }

  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
