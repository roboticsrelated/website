import React from "react"
import { render } from "react-testing-library"
import Layout from "../../components/TopAppBar"

describe('TopAppBar', () => {
  let props = {
    styleClasses : {},
    title : 'Robotics Related',
    toggle : {},
  }

  it('renders the TopAppBar', () => {
    const { queryByText } = render(<TopAppBar {...props}/>)
    const title = queryByText('Robotics Related')
    expect(title.innerHTML).toBe('Robotics Related')
  })
})
