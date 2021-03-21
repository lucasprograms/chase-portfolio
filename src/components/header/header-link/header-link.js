import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = ({ title, to }) => (
  <Link
    to={to}
    className="font-sans text-lg leading-5 no-underline mr-5 border-b-4 border-opacity-5 lg:border-orange lg:border-opacity-0 hover:border-opacity-100"
    activeClassName="border-opacity-100 lg:border-opacity-100"
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
