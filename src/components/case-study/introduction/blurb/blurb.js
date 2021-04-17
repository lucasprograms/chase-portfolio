import * as React from 'react'
import PropTypes from 'prop-types'

const IntroBlurb = ({ title, body }) => {
  return (
    <div className="lg:col-span-3">
      <h3 className="text-3xl font-serif">{title}</h3>
      {body.map((text, index) => (
        <p
          className={`text-base font-sans font-light leading-relaxed mt-3 ${
            text === 'This was a conceptual project' ? 'italic' : ''
          }`}
          key={index}
        >
          {text}
        </p>
      ))}
    </div>
  )
}

IntroBlurb.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.array.isRequired,
}

export default IntroBlurb
