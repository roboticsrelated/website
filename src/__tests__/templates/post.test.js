import React from "react"
import { render } from "react-testing-library"
import PostTemplate from "../../templates/post"

describe('PostTemplate', () => {

  it('renders the PostTemplate', () => {
    const { queryByText } = render(<PostTemplate />)
    const title = queryByText('Go Back')
    expect(title.innerHTML).toBe('Go Back')
  })
})
