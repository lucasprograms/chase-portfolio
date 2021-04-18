import * as React from 'react'

const ContentSection = ({ children, lgColSpan }) => (
  <div className={`lg:col-start-3 lg:col-span-${lgColSpan}`}>{children}</div>
)

ContentSection.defaultProps = {
  lgColSpan: '9',
}

export default ContentSection
