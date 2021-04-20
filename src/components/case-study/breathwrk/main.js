import * as React from 'react'
import PropTypes from 'prop-types'

import FinalPrototype from '../final-prototype/final-prototype'
import BackgroundSection from '../../util/layout/background-section'
import ContentSection from '../../util/layout/content-section'
import Define from './define'
import Research from './research'
import Design from './design'

const BhukuMain = ({
  highlightColor,
  backgroundColor,
  loads,
  finalThoughts,
  videoSrc,
  prototypeLink,
}) => {
  return (
    <div>
      <BackgroundSection backgroundColor={backgroundColor}>
        <ContentSection>
          <Define title="Define" highlightColor={highlightColor} />
        </ContentSection>
      </BackgroundSection>
      <BackgroundSection>
        <ContentSection>
          <Research title="Research" highlightColor={highlightColor} />
        </ContentSection>
      </BackgroundSection>
      <BackgroundSection backgroundColor={backgroundColor}>
        <ContentSection>
          <Design title="Design" highlightColor={highlightColor} />
        </ContentSection>
      </BackgroundSection>
      <FinalPrototype
        videoTitle="breathwrk-final-prototype-video"
        videoSrc={videoSrc}
        prototypeLink={prototypeLink}
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
  loads: PropTypes.arrayOf(PropTypes.object).isRequired,
  finalThoughts: PropTypes.arrayOf(PropTypes.string).isRequired,
  videoSrc: PropTypes.string.isRequired,
  prototypeLink: PropTypes.string.isRequired,
}

export default BhukuMain
