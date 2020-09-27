import PageLayout from 'src/layouts/PageLayout'
import BlogPostCell from 'src/components/BlogPostCell'

const BlogPostPage = ({ id }) => {
  return (
    <PageLayout>
      <BlogPostCell id={id} />
    </PageLayout>
  )
}

export default BlogPostPage
