import PageLayout from 'src/layouts/PageLayout'

import BlogPostsCell from 'src/components/BlogPostsCell'

const BlogPage = () => {
  return (
    <PageLayout>
      <h1>BlogPage</h1>
      <BlogPostsCell />
    </PageLayout>
  )
}

export default BlogPage
