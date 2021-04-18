import * as React from 'react'

const TextBlock = ({ children, textSize }) => (
  <p className={`text-${textSize} font-sans font-light leading-relaxed mt-10`}>
    {children}
  </p>
)

TextBlock.defaultProps = {
  textSize: 'lg',
}

export default TextBlock
