import React from 'react'
import { Form, Container } from 'semantic-ui-react'

export const SearchBar = ({query, setQuery}) => {
  return (
    <Container>
      <Form>
        <Form.Field>
          <label>
            Joke Search:
            <input
              type="text"
              placeholder="Joke's theme here"
              value={query}
              onChange={setQuery}
            />
          </label>
        </Form.Field>
      </Form>
    </Container>
  )
}
