import React from "react"
import { render } from "react-testing-library"
import LeftDrawer from "../../components/ArticleCard"

describe('ArticleCard', () => {
  let props = {
    styleClasses : {},
    title : 'Title',
    author : 'Author',
    date : '1-1-2019',
  }

  it('renders the ArticleCard', () => {
    const { queryByText } = render(<ArticleCard {...props} />)
    const title = queryByText('Title')
    expect(title.innerHTML).toBe('Title')
  })
})
