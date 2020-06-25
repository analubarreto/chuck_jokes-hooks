import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';

// Custom components
import chuck from '../features/api/apiCall';
import { SearchBar } from '../features/SearchBar';
import { JokeList } from '../jokes/JokeList';

const App = () => {
  const [jokes, setJokes] = useState(null)

  return (
    <Grid container className="App">
      <SearchBar />
    </Grid>
  );
}

export default App;
