import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import { jokeRequest } from '../features/api/baseURL'

// Custom components
import { SearchBar } from '../features/SearchBar'
import { JokeList } from '../jokes/JokeList'

const App = () => {
  const [jokes, setJokes] = useState([])
  let query

  const onSearchSubmit = async () => {
    const response = await jokeRequest.get('/jokes/search', {
      params: { query: query }
    })

    setJokes(response.jokes)
  }
  
  return (
    <Grid container className="App">
      {/* <SearchBar query={query} setQuery={e => setQuery(e.target.value)} /> */}
      <SearchBar onSubmit={onSearchSubmit} />
      <JokeList jokes={jokes} />
    </Grid>
  );
}

export default App;
