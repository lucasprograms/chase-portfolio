import * as React from 'react'
import PropTypes from 'prop-types'

import Define from './define'
import Research from './research'
import Design from './design'
import FinalPrototype from '../final-prototype/final-prototype'

const BhukuMain = ({
  highlightColor,
  backgroundColor,
  loads,
  finalThoughts,
}) => {
  return (
    <div>
      <div
        className="grid grid-cols-1 lg:grid-cols-12 py-10 px-5 2xl:px-0"
        style={{ backgroundColor }}
      >
        <div className="lg:col-start-3 lg:col-span-9">
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
      <div className="grid grid-cols-1 lg:grid-cols-12 py-10 pl-5 2xl:pl-0">
        <div className="lg:col-start-3 lg:col-span-10">
          <Design title="Design" />
        </div>
      </div>
      <FinalPrototype
        videoSrc="https://www.loom.com/embed/319e54e4491d4c1f92dedf3f52e32c98"
        videoTitle="bhuku-final-prototype-video"
        prototypeLink="https://www.figma.com/file/401B4AhQZSy0RdMfTGlafp/Portfolio?node-id=737%3A205"
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
