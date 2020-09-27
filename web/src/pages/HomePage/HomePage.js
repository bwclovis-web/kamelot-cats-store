import { Link, routes } from '@redwoodjs/router'
import PageLayout from 'src/layouts/PageLayout'

const HomePage = () => {
  return (
    <PageLayout>
      <h1>HomePage</h1>
      <p>
        Find me in <tt>./web/src/pages/HomePage/HomePage.js</tt>
      </p>
      <p>
        My default route is named <tt>home</tt>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </PageLayout>
  )
}

export default HomePage
