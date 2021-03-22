import * as React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ title, blurb }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mb-10">
      <div className="text-2xl font-serif font-light mb-5">{title}</div>
      <div className="text-base font-sans font-light">{blurb}</div>
    </div>
  )
}

Layout.propTypes = {}

export default Layout
