import { Link, routes } from '@redwoodjs/router'
import './blogPostStyles.scss'
import classNames from 'classnames'

const BlogPost = ({ post, singlePost }) => {
  const postClasses = classNames({
    'kc-post': true,
    'post-grid': !singlePost,
    'single-post': singlePost,
  })

  const contentContainerClasses = classNames({
    'kc-post_content': true,
    container: singlePost,
  })

  const createMarkup = () => {
    return { __html: post.body }
  }

  return (
    <article className={postClasses}>
      <div className="kc-post_content-container">
        <header>
          {singlePost ? (
            <h1 className="heading container">{post.title}</h1>
          ) : (
            <h2 className="heading">{post.title}</h2>
          )}
        </header>
        <div className={contentContainerClasses}>
          {post.youtubeUrl && (
            <div dangerouslySetInnerHTML={{ __html: post.youtubeUrl }} />
          )}
          <div
            className="content-clamp"
            dangerouslySetInnerHTML={createMarkup()}
          />
          {singlePost && <Link to={routes.blog()}>Back to blog page</Link>}
        </div>
        {!singlePost && (
          <Link className="kc-post_link" to={routes.blogPost({ id: post.id })}>
            Read More
            <span className="visually-hidden">about {post.a11yLink}</span>
          </Link>
        )}
      </div>
      {/* <footer className="kc-post_footer">
        {post.createdAt}
        {singlePost && <Link to={routes.blog()}>Back to blog page</Link>}
      </footer> */}
    </article>
  )
}

export default BlogPost
