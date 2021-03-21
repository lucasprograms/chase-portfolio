import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Logo from '../images/svg/logo.inline.svg'

const Header = ({ email }) => (
  <header className="flex lg:justify-between justify-start z-50 p-5 pt-2">
    <div className="flex-1 flex z-50">
      <div className="flex-1" style={{ maxWidth: '200px' }}>
        <Logo />
      </div>
      <div className="flex ml-10">
        <Link
          to="/"
          className="font-sans text-lg relative top-2 no-underline border-b-4 border-orange border-opacity-0 hover:border-opacity-100"
        >
          work
        </Link>{' '}
        <Link
          to="/about/"
          className="font-sans text-lg ml-10 relative top-2 no-underline border-b-4 border-opacity-0 hover:border-opacity-100 border-orange"
        >
          about
        </Link>{' '}
      </div>
    </div>
    <a
      href={'mailto:' + email}
      className="font-sans text-lg relative top-2 z-50 hidden lg:block"
    >
      {email}
    </a>
  </header>
)

Header.propTypes = {
  email: PropTypes.string,
}

Header.defaultProps = {
  email: ``,
}

export default Header
