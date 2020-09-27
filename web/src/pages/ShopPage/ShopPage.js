import { Link, routes } from '@redwoodjs/router'
import PageLayout from 'src/layouts/PageLayout/PageLayout'

const ShopPage = () => {
  return (
    <PageLayout>
      <h1>ShopPage</h1>
      <p>
        Find me in <tt>./web/src/pages/ShopPage/ShopPage.js</tt>
      </p>
      <p>
        My default route is named <tt>shop</tt>, link to me with `
        <Link to={routes.shop()}>Shop</Link>`
      </p>
    </PageLayout>
  )
}

export default ShopPage
