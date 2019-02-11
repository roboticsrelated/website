import React from "react"
import getPageContext from "../getPageContext"

describe('getPageContext', () => {

  it('returns theme with page context', () => {
    const { theme } = getPageContext()
    expect(theme).toBeDefined()
  })
})
