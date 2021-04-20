import * as React from 'react'
import PropTypes from 'prop-types'

const TextBlock = ({ children, textSize, marginTop, italic }) => (
  <p
    className={`${
      textSize === '2xl'
        ? 'text-2xl'
        : textSize === 'xl'
        ? 'text-xl'
        : textSize === 'lg'
        ? 'text-lg'
        : 'text-base'
    } font-sans ${textSize === 'lg' && 'font-light'} leading-relaxed ${
      marginTop === '10' ? 'mt-10' : 'mt-5'
    } ${italic ? 'italic' : ''}`}
  >
    {children}
  </p>
)

TextBlock.defaultProps = {
  textSize: 'lg',
  italic: false,
  marginTop: '10',
}

TextBlock.propTypes = {
  textSize: PropTypes.oneOf(['2xl', 'xl', 'lg', 'base']),
  italic: PropTypes.bool,
  marginTop: PropTypes.oneOf(['10', '5']),
}

export default TextBlock
