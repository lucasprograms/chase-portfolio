import * as React from 'react'
import PropTypes from 'prop-types'

import Define from './define'
import Research from './research'

const BhukuMain = ({ highlightColor, backgroundColor }) => {
  return (
    <div>
      <div
        className="grid grid-cols-1 lg:grid-cols-12 py-10 px-5 2xl:px-0"
        style={{ backgroundColor }}
      >
        <div className="lg:col-start-4 lg:col-span-8">
          <Define
            title="Define"
            highlightColor={highlightColor}
            backgroundColor={backgroundColor}
          />
          <Research
            title="Research"
            highlightColor={highlightColor}
            backgroundColor={backgroundColor}
          />
        </div>
      </div>
    </div>
  )
}

BhukuMain.propTypes = {
  highlightColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
}

export default BhukuMain
