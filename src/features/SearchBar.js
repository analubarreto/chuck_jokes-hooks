import React, { useState } from 'react'
import { Form, Container } from 'semantic-ui-react'

export const SearchBar = ({onSubmit}) => {
  const [query, setQuery] = useState('')

  const onFormSubmit = event => {
    event.preventDefault()

    onSubmit(query)
  }

  return (
    <Container>
      <Form onSubmit={onFormSubmit}>
        <Form.Field>
          <label>
            Joke Search:
            <input
              type="text"
              placeholder="Joke's theme here"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </label>
        </Form.Field>
      </Form>
    </Container>
  )
}
