import * as React from 'react'
import PropTypes from 'prop-types'
import HeaderLink from './header-link/header-link'
import Logo from '../../images/svg/logo.inline.svg'
import LogoInverted from '../../images/svg/logo-inverted.inline.svg'
import { Link } from 'gatsby'

const Header = ({ email, backgroundColor, colorInverted }) => (
  <header
    className="flex lg:justify-between justify-start z-50 items-center p-5"
    style={{ backgroundColor }}
  >
    <div className="flex-1 flex z-50 items-center justify-between lg:justify-start">
      <Link
        to="/"
        className="flex-1 relative bottom-2"
        style={{ maxWidth: '200px' }}
      >
        {colorInverted && <LogoInverted />}
        {!colorInverted && <Logo />}
      </Link>
      <div className="flex ml-10">
        <HeaderLink to="/" title="work" colorInverted={colorInverted} />
        <HeaderLink to="/about" title="about" colorInverted={colorInverted} />
      </div>
    </div>
    <a
      href={'mailto:' + email}
      className={`font-sans text-lg leading-5  z-50 hidden lg:block ${
        colorInverted ? 'text-white' : 'text-black'
      }`}
    >
      {email}
    </a>
  </header>
)

Header.defaultProps = {
  colorInverted: false,
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  colorInverted: PropTypes.bool,
}

export default Header
