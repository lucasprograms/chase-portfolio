import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = ({ title, to }) => (
  <Link
    to={to}
    className="border-transparent mr-5 font-sans text-lg leading-5 border-b-4 hover:border-orange"
    activeClassName="border-black lg:border-orange"
  >
    {title}
  </Link>
)

Header.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
  to: ``,
}

export default Header
