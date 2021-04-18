import * as React from 'react'

const ContentSection = ({ children, lgColSpan }) => (
  <div
    className={`lg:col-start-3 ${
      lgColSpan === '9' ? 'lg:col-span-9' : 'lg:col-span-10'
    }`}
  >
    {children}
  </div>
)

ContentSection.defaultProps = {
  lgColSpan: '9',
}

export default ContentSection
