import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export const JokeCard = ({ joke }) => {
  const { icon_url, value } = joke

  return (
    <Card>
      <Image src={icon_url} wrapped ui={false} />
      <Card.Content>
        <Card.Description>
          {value}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}
