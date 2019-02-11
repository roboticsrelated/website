import React from "react"
import { render } from "react-testing-library"
import Layout from "../../components/Layout"

describe('Layout', () => {
  let props = {
    topAppBarAttributes : {},
    leftDrawerAttributes : {},
  }

  it('renders the Layout', () => {
    const { queryByText } = render(<Layout {...props}/>)
    const title = queryByText('Robotics Related')
    expect(title.innerHTML).toBe('Robotics Related')
  })
})
