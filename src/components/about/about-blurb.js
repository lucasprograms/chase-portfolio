import * as React from 'react'
import PropTypes from 'prop-types'

const AboutBlurb = ({ title, blurb }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mb-10">
      <h3 className="text-2xl font-serif font-light mb-5">{title}</h3>
      <p className="text-base font-sans font-light">{blurb}</p>
    </div>
  )
}

AboutBlurb.propTypes = {
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
}

export default AboutBlurb
