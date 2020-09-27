import PageLayout from 'src/layouts/PageLayout'

import BlogPostsCell from 'src/components/BlogPostsCell'

const BlogPage = () => {
  return (
    <PageLayout>
      <h1 className="container heading">Latest Articles</h1>
      <section className="container container-flex">
        <BlogPostsCell />
      </section>
    </PageLayout>
  )
}

export default BlogPage
