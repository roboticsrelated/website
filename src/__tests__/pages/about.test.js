import React from "react"
import { render } from "react-testing-library"
import AboutPage from "../../pages/about"

describe('AboutPage', () => {

  it('renders the AboutPage', () => {
    const { queryByText } = render(<AboutPage />)
    const title = queryByText('About Robotics Related')
    expect(title.innerHTML).toBe('About Robotics Related')
  })
})
