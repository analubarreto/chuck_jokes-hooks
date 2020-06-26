import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import { jokeRequest } from '../features/api/baseURL'

// Custom components
import { SearchBar } from '../features/SearchBar'
import { JokeList } from '../jokes/JokeList'

const App = () => {
  const [jokes, setJokes] = useState([])

  const onSearchSubmit = async query => {
    const response = await jokeRequest.get('/jokes/search', {
      params: { query: query }
    })

    console.log(response)

    setJokes(response.data.result)
  }
  
  return (
    <Grid container className="App">
      <SearchBar onSubmit={onSearchSubmit} />
      <JokeList jokes={jokes} />
    </Grid>
  );
}

export default App;
