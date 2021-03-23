import * as React from 'react'
import PropTypes from 'prop-types'
import HeaderLink from './header-link/header-link'
import Logo from '../../images/svg/logo.inline.svg'
import { Link } from 'gatsby'

const Header = ({ email }) => (
  <header className="flex lg:justify-between justify-start z-50 items-center">
    <div className="flex-1 flex z-50 items-center justify-between lg:justify-start">
      <Link
        to="/"
        className="flex-1 relative bottom-2"
        style={{ maxWidth: '200px' }}
      >
        <Logo />
      </Link>
      <div className="flex ml-10">
        <HeaderLink to="/" title="work" />
        <HeaderLink to="/about" title="about" />
      </div>
    </div>
    <a
      href={'mailto:' + email}
      className="font-sans text-lg leading-5  z-50 hidden lg:block"
    >
      {email}
    </a>
  </header>
)

Header.propTypes = {
  email: PropTypes.string.isRequired,
}

export default Header
