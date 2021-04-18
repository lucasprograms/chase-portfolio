import * as React from 'react'

const TextBlock = ({ children, textSize }) => (
  <p
    className={`${
      textSize === '2xl'
        ? 'text-2xl'
        : textSize === 'xl'
        ? 'text-xl'
        : textSize === 'lg'
        ? 'text-lg'
        : 'text-base'
    } font-sans ${textSize === 'lg' && 'font-light'} leading-relaxed mt-10`}
  >
    {children}
  </p>
)

TextBlock.defaultProps = {
  textSize: 'lg',
}

export default TextBlock
