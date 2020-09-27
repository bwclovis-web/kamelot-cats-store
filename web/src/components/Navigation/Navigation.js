import { Link, routes } from '@redwoodjs/router'
import './navigationStyles.scss'

const Navigation = ({ handleClick }) => {
  return (
    <nav className="navigation-main">
      <div className="container container-flex">
        <div>
          <Link to={routes.home()}>HOME</Link>
        </div>
        <ul className="navigation-main_list">
          <li className="navigation-main_list-item">
            <Link to={routes.about()}> ABOUT US</Link>
          </li>
          <li className="navigation-main_list-item">
            <Link to={routes.blog()}>BLOG</Link>
          </li>
          <li className="navigation-main_list-item">
            <Link to={routes.shop()}>STORE</Link>
          </li>
          <li className="navigation-main_list-item">
            <button className="login-button" onClick={handleClick}>
              LOG IN
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
