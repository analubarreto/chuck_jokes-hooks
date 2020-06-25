import React, { useState } from 'react'
import { Form, Container } from 'semantic-ui-react'

export const SearchBar = ({onSubmit}) => {
  const [term, setTerm] = useState()

  const onFormSubmit = e => {
    e.preventDefault();

    onSubmit(term)
  }

  return (
    <Container>
      <Form onSubmit={onFormSubmit}>
        <Form.Field>
          <label>
            Joke Search:
            <input
              type="text"
              placeholder="Joke's theme"
            />
          </label>
        </Form.Field>
      </Form>
    </Container>
  )
}
