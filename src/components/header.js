import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Logo from '../images/svg/logo.inline.svg'

const Header = ({ siteTitle }) => (
  <header className="flex lg:justify-between justify-start z-50">
    <div class="flex-1 flex z-50">
      <Logo />
      <div className="flex ml-10">
        <Link
          to="/"
          className="font-sans text-lg relative top-2 no-underline border-b-4 border-transparent hover:border-yellow-500"
        >
          work
        </Link>{' '}
        <Link
          to="/about/"
          className="font-sans text-lg ml-10 relative top-2 no-underline border-b-4 border-transparent hover:border-yellow-500"
        >
          about
        </Link>{' '}
      </div>
    </div>
    <div class="font-sans text-lg relative top-2 z-50 hidden lg:block">
      chase.mccain3@gmail.com
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
