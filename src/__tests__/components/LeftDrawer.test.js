import React from "react"
import { render } from "react-testing-library"
import LeftDrawer from "../../components/LeftDrawer"

describe('Left Drawer', () => {
  let props = {
    styleClasses : {},
    bodyItems : ['one', 'two', 'three'],
    headerItems : ['Header'],
    footerItems : ['Footer'],
    open : true
  }
  it('renders the LeftDrawer', () => {
    const { queryByText } = render(<LeftDrawer {...props} />)
    const header = queryByText('Header')
    expect(header.innerHTML).toBe('Header')
  })
})
