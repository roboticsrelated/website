import React from "react"
import { render } from "react-testing-library"
import NotFoundPage from "../../pages/404"

describe('TopAppBar', () => {

  it('renders the TopAppBar', () => {
    const { queryByText } = render(<NotFoundPage />)
    const title = queryByText('NOT FOUND')
    expect(title.innerHTML).toBe('NOT FOUND')
  })
})
