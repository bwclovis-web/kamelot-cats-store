import { Link, routes } from '@redwoodjs/router'

const BlogPage = () => {
  return (
    <>
      <h1>BlogPage</h1>
      <p>
        Find me in <tt>./web/src/pages/BlogPage/BlogPage.js</tt>
      </p>
      <p>
        My default route is named <tt>blog</tt>, link to me with `
        <Link to={routes.blog()}>Blog</Link>`
      </p>
    </>
  )
}

export default BlogPage
