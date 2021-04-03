import * as React from 'react'
import PropTypes from 'prop-types'

const IntroBlurb = ({ title, body }) => {
  return (
    <div className="lg:col-span-3">
      <h3 className="text-2xl font-serif">{title}</h3>
      <p className="text-base font-sans font-light">{body}</p>
    </div>
  )
}

IntroBlurb.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default IntroBlurb
