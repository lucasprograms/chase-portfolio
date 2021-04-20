import * as React from 'react'
import PropTypes from 'prop-types'
import TextBlock from '../../../util/text-block'

const IntroBlurb = ({ title, body }) => {
  return (
    <div className="lg:col-span-3">
      <h3 className="text-3xl font-serif">{title}</h3>
      {body.map((text, index) => (
        <TextBlock
          italic={text === 'This was a conceptual project'}
          marginTop="5"
          key={index}
        >
          {text}
        </TextBlock>
      ))}
    </div>
  )
}

IntroBlurb.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.array.isRequired,
}

export default IntroBlurb
