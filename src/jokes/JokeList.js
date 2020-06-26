import React from 'react'
import { JokeCard } from './JokeCard'
import { Card } from 'semantic-ui-react'

export const JokeList = ({jokes}) => {

  return (
    <Card.Group>
      {jokes.map(joke => (
        <JokeCard key={joke.id} joke={joke} />
      ))}
    </Card.Group>
  )
}
