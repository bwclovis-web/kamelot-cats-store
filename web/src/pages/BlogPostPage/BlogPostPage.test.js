import { render } from '@redwoodjs/testing'

import BlogPostPagePage from './BlogPostPagePage'

describe('BlogPostPagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogPostPagePage />)
    }).not.toThrow()
  })
})
