import React from "react"
import { render } from "react-testing-library"
import IndexPage from "../../pages/index"

describe('IndexPage', () => {

  it('renders the AboutPage', () => {
    const { queryByText } = render(<IndexPage />)
    const title = queryByText('Robotics Related')
    expect(title.innerHTML).toBe('Robotics Related')
  })
})
