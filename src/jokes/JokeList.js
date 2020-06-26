import React from 'react'
import { JokeCard } from './JokeCard'
import { Card } from 'semantic-ui-react'

export const JokeList = ({jokes}) => {

  const returnJokes = jokes.map(joke => {
    return <JokeCard key={joke.id} joke={joke} />
  });

  return (
    <Card.Group>
      {returnJokes}
    </Card.Group>
  )
}
