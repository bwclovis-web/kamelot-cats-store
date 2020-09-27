import { Link, routes } from '@redwoodjs/router'
import './blogPostStyles.scss'

const BlogPost = ({ post, singlePost }) => {
  console.log('%c [post]', 'color:orange; background: purple', post)
  // const renderHeading = () => {
  //   let template

  //   if (singlePost) {
  //     template = <h2>{post.title}</h2>
  //   } else {
  //     template = <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
  //   }
  //   return template
  // }

  return (
    <article>
      <header>
        <h2 className="heading">{post.title}</h2>
      </header>
      <p>{post.body}</p>
      <footer>
        {post.createdAt}
        {singlePost && <Link to={routes.blog()}>Back to blog page</Link>}
      </footer>
    </article>
  )
}

export default BlogPost
