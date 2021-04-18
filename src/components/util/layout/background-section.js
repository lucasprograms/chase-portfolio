import * as React from 'react'

const BackgroundSection = ({ children, backgroundColor }) => (
  <section
    className="grid grid-cols-1 lg:grid-cols-12 py-10 lg:py-20 px-5 2xl:px-0"
    style={{ backgroundColor }}
  >
    {children}
  </section>
)

BackgroundSection.defaultProps = {
  backgroundColor: '#FFFFFF',
}

export default BackgroundSection
