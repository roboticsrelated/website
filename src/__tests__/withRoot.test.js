import React from "react"
import { render } from "react-testing-library"
import withRoot from "../withRoot"

describe('withRoot', () => {

  it('renders withRoot', () => {
    const { queryByText } = render(<withRoot />)
    // add test here
  })
})
