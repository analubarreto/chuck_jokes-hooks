import React, { useState, useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import axios from 'axios'

// Custom components
import { SearchBar } from '../features/SearchBar'
import { JokeList } from '../jokes/JokeList'

const App = () => {
  const [jokes, setJokes] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const onSearchSubmit = async () => {
      const response = await axios(`https://api.chucknorris.io/jokes/search?${query}`)

      setJokes(response.jokes)
    }
    onSearchSubmit()
  }, [query])
  
  return (
    <Grid container className="App">
      <SearchBar query={query} setQuery={e => setQuery(e.target.value)} />
      <JokeList jokes={jokes} />
    </Grid>
  );
}

export default App;
