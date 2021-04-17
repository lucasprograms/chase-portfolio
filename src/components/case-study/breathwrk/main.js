import * as React from 'react'
import PropTypes from 'prop-types'

import FinalPrototype from '../final-prototype/final-prototype'

const BhukuMain = ({
  highlightColor,
  backgroundColor,
  loads,
  finalThoughts,
}) => {
  return (
    <div>
      <FinalPrototype
        videoSrc="https://www.loom.com/embed/88d62074e7124de0a56e2839a4c4d87c"
        videoTitle="breathwrk-final-prototype-video"
        prototypeLink="https://www.figma.com/proto/cfyYmc4DeI59tdMpjBXGa0/Breathwrk?node-id=76%3A1032&scaling=scale-down"
        backgroundColor={backgroundColor}
        highlightColor={highlightColor}
        loads={loads}
        finalThoughts={finalThoughts}
      />
    </div>
  )
}

BhukuMain.propTypes = {
  highlightColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  loads: PropTypes.array.isRequired,
  finalThoughts: PropTypes.array.isRequired,
}

export default BhukuMain
