import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export const JokeCard = ({ joke }) => {
  // const { icon_url, value } = joke

  return (
    <Card>
      <Image src='https://dummyimage.com/600x400/000/fff' wrapped ui={false} />
      <Card.Content>
        <Card.Header>A joke</Card.Header>
        <Card.Description>
          Your joke goes here
        </Card.Description>
      </Card.Content>
    </Card>
  )
}
