import * as React from 'react'
import PropTypes from 'prop-types'

import FinalPrototype from '../final-prototype/final-prototype'
import Define from './define'
import Research from './research'

const PgsMain = ({ highlightColor, backgroundColor, loads, finalThoughts }) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 py-10 px-5 2xl:px-0">
        <div className="lg:col-start-3 lg:col-span-9">
          <Define title="Define" />
        </div>
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-12 py-10 px-5 2xl:px-0"
        style={{ backgroundColor }}
      >
        <div className="lg:col-start-3 lg:col-span-9">
          <Research title="Research" />
        </div>
      </div>
      <FinalPrototype
        backgroundColor="#FFFFFF"
        highlightColor="#FFFFFF"
        loads={loads}
        finalThoughts={finalThoughts}
      />
    </div>
  )
}

PgsMain.propTypes = {
  highlightColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  loads: PropTypes.array.isRequired,
  finalThoughts: PropTypes.array.isRequired,
}

export default PgsMain
