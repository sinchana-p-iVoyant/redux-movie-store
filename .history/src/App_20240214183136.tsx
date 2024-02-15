import { useState } from 'react'
// import './App.css'


function App() {
  const [movieTitle, setMovieTitle] = useState('')

  log

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
