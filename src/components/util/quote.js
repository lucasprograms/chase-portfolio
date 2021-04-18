import React from 'react'
import PropTypes from 'prop-types'
import TextBlock from './text-block'

const Quote = ({ name, text }) => {
  return (
    <div style={{ maxWidth: '600px' }} className="text-center inline-block">
      <TextBlock textSize="2xl">{text}</TextBlock>
      <p className="text-lg font-sans mt-5 font-light">
        {' '}
        - {name}, Interviewee
      </p>
    </div>
  )
}

Quote.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Quote
